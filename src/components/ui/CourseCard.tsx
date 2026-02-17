import React from 'react';
import { Star, Clock, Users, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { cn } from '../../lib/utils';
import { usePaystack } from '../../hooks/usePaystack';

interface CourseCardProps {
    id: string | number;
    title: string;
    category: string;
    instructor: string;
    rating: number;
    reviews: number;
    students: number;
    duration: string;
    price: number;
    oldPrice?: number;
    image: string;
    instructorImage: string;
}

const CourseCard: React.FC<CourseCardProps> = (props) => {
    const { initializePayment, loading } = usePaystack();

    const handleBuyNow = () => {
        // In a real app, we'd get user info from auth state
        const demoUser = { email: 'user@example.com', id: 'user_123' };
        initializePayment(demoUser.email, props.price, props.id.toString(), demoUser.id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group card-premium h-full flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-colors duration-500"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>
                <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                        {props.category}
                    </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white dark:bg-slate-900 text-primary font-bold px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl border dark:border-slate-700">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                {/* Instructor */}
                <div className="flex items-center gap-2 mb-4">
                    <img src={props.instructorImage} alt={props.instructor} className="w-8 h-8 rounded-full border border-slate-100 dark:border-slate-800" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors duration-500">{props.instructor}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 duration-500">
                    {props.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 transition-colors duration-500">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {props.duration}
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        {props.students} students
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between transition-colors duration-500">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={cn("w-3.5 h-3.5", i < Math.floor(props.rating) ? "fill-current" : "")} />
                            ))}
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-500">{props.rating}</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 transition-colors duration-500">({props.reviews})</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2">
                            {props.oldPrice && (
                                <span className="text-sm text-slate-400 dark:text-slate-500 line-through transition-colors duration-500">${props.oldPrice}</span>
                            )}
                            <span className="text-xl font-bold text-primary">${props.price}</span>
                        </div>
                    </div>
                </div>

                {/* Add to Cart button visible on hover */}
                <div className="mt-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                        onClick={() => toast.error(`You are not logged in! Item ${props.id} saved locally.`)}
                        className="btn-primary w-full py-3"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add To Cart
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="btn-outline w-full py-3 bg-white dark:bg-slate-900 dark:hover:bg-primary/10 transition-colors"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
