import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const usePaystack = () => {
    const [loading, setLoading] = useState(false);

    const initializePayment = async (email: string, amount: number, courseId: string, userId: string) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/initialize-payment', {
                email,
                amount,
                metadata: {
                    course_id: courseId,
                    user_id: userId
                }
            });

            if (response.data.status && response.data.data.authorization_url) {
                window.location.href = response.data.data.authorization_url;
            } else {
                throw new Error('Could not get authorization URL');
            }
        } catch (error: any) {
            console.error('Payment Error:', error);
            toast.error(error.response?.data?.message || 'Failed to initialize payment');
        } finally {
            setLoading(false);
        }
    };

    return { initializePayment, loading };
};
