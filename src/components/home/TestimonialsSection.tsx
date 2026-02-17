import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950/50 overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-primary dark:from-white dark:to-primary inline-block">
                        What Our Students Say
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4">Real results from real learners around the world.</p>
                </div>

                <div className="relative">
                    {/* Main Testimonial Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-xl border border-slate-100 dark:border-slate-800 text-center relative transition-colors duration-500"
                    >
                        <div className="absolute top-10 left-10 md:top-20 md:left-20 opacity-10">
                            <Quote className="w-20 h-20 text-primary" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 italic leading-relaxed font-medium transition-colors duration-500">
                                "As a working professional, I needed flexibility. CourseCity's mobile-first approach allowed me to learn on the go. The quality of instructors is top-notch!"
                            </p>

                            <div className="flex flex-col items-center">
                                <img
                                    src="https://i.pravatar.cc/150?u=pelumi"
                                    alt="Student"
                                    className="w-20 h-20 rounded-full border-4 border-primary/20 mb-4 shadow-lg"
                                />
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-500">Pd Pelumi</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Student @ CourseCity</p>
                                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-200 dark:bg-primary/20 rounded-full blur-2xl" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
