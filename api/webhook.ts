import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
    process.env.VITE_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '' // Use service role for backend updates
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Verify Paystack Signature
    const hash = crypto
        .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY || '')
        .update(JSON.stringify(req.body))
        .digest('hex');

    if (hash !== req.headers['x-paystack-signature']) {
        return res.status(401).json({ message: 'Invalid signature' });
    }

    const event = req.body;

    if (event.event === 'charge.success') {
        const { reference, metadata, amount, customer } = event.data;
        const { user_id, course_id } = metadata;

        try {
            // 1. Log transaction
            await supabase.from('transactions').insert({
                user_id,
                course_id,
                amount: amount / 100,
                reference,
                status: 'success'
            });

            // 2. Enroll user in course
            await supabase.from('enrollments').insert({
                user_id,
                course_id
            });

            return res.status(200).json({ message: 'Success' });
        } catch (error: any) {
            console.error('Supabase Update Error:', error.message);
            return res.status(500).json({ message: 'Database update failed' });
        }
    }

    return res.status(200).json({ message: 'Event ignored' });
}
