import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, BookMarked } from 'lucide-react';

const StatsSection: React.FC = () => {
    const stats = [
        { label: 'Active Students', value: '15K+', icon: Users, color: 'bg-primary' },
        { label: 'Expert Tutors', value: '500+', icon: GraduationCap, color: 'bg-green-500' },
        { label: 'Success Rate', value: '88%', icon: Trophy, color: 'bg-yellow-500' },
        { label: 'Total Courses', value: '1.2K+', icon: BookMarked, color: 'bg-purple-500' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl dark:shadow-slate-950/50 transition-all duration-500 text-center"
                    >
                        <div className={`w-16 h-16 ${stat.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">{stat.value}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
