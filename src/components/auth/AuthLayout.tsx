import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Star, Users, GraduationCap } from 'lucide-react';
import logoImg from '../../assets/images/Logo.png';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    imageAlt: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, imageAlt }) => {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Left Side: Illustrative Content */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-primary/5 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
                {/* Background Art */}
                <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200 dark:bg-primary/20 rounded-full blur-[120px]" />
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 relative z-10 w-fit">
                    <img
                        src={logoImg}
                        alt="CourseCity Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <span className="text-2xl font-bold dark:text-white transition-colors duration-500">
                        CourseCity
                    </span>
                </Link>

                {/* Center Content */}
                <div className="relative z-10 max-w-lg space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] transition-colors duration-500">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium transition-colors duration-500">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: Users, label: '15K+ Active Students', color: 'bg-blue-500' },
                            { icon: GraduationCap, label: '500+ Expert Tutors', color: 'bg-green-500' },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-white dark:border-slate-700 transition-colors duration-500"
                            >
                                <div className={`w-10 h-10 ${feature.color} text-white rounded-xl flex items-center justify-center shrink-0`}>
                                    <feature.icon size={20} />
                                </div>
                                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{feature.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <p className="relative z-10 text-slate-400 text-sm font-medium">
                    © 2026 CourseCity. All rights reserved. Built with passion for better education.
                </p>
            </div>

            {/* Right Side: Form Content */}
            <div className="flex items-center justify-center p-8 md:p-12 lg:p-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
                {/* Mobile Logo Only */}
                <div className="absolute top-8 left-8 lg:hidden">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src={logoImg}
                            alt="CourseCity Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
