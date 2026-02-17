import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, amount, metadata } = req.body;

    if (!email || !amount) {
        return res.status(400).json({ message: 'Email and amount are required' });
    }

    try {
        const paystackResponse = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: Math.round(amount * 100), // Paystack expects amount in sub-units (kobo/pesewas)
                metadata,
                callback_url: `${process.env.VERCEL_URL || 'http://localhost:5173'}/payment/verify`,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return res.status(200).json(paystackResponse.data);
    } catch (error: any) {
        console.error('Paystack Initialization Error:', error.response?.data || error.message);
        return res.status(500).json({
            message: 'Failed to initialize payment',
            error: error.response?.data || error.message
        });
    }
}
