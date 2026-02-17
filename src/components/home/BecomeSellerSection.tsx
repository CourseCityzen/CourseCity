import React from 'react';
import { ArrowRight, DollarSign, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const BecomeSellerSection: React.FC = () => {
    const benefits = [
        { icon: Users, label: '500+', desc: 'Inland and global Tutors', color: 'bg-primary' },
        { icon: DollarSign, label: 'GH₵24M+', desc: 'Earned by Sellers', color: 'bg-green-500' },
        { icon: Award, label: '95%', desc: 'Satisfaction rate', color: 'bg-blue-500' },
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-1 space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-500">
                        Become A <span className="text-primary italic">Seller</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">
                        You can join with CourseCity as a <span className="text-primary font-bold">Seller</span>! <br />
                        Share your knowledge with millions around the globe. Our platform provides the tools and audience you need to grow your teaching business.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="btn-primary px-8">
                            Become A Seller
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="text-slate-600 dark:text-slate-200 font-bold hover:text-primary transition-colors">
                            How to Start →
                        </button>
                    </div>
                </motion.div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-6 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:shadow-slate-950/50 transition-all duration-300"
                        >
                            <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg", benefit.color)}>
                                <benefit.icon className="w-10 h-10" />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-500">{benefit.label}</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BecomeSellerSection;
