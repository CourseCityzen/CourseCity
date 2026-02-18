import React, { useState } from 'react';
import CourseCard from '../ui/CourseCard';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const CoursesSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'UX/UI Design', 'Development', 'Data Science', 'Business', 'Finance', 'Marketing'];

    const courses = [
        {
            id: 1,
            title: "Data Science and Machine Learning with Python - Hands On!",
            category: "Data Science",
            instructor: "Jason Williams",
            rating: 4.8,
            reviews: 450,
            students: 1230,
            duration: "20h 15m",
            price: 285.00,
            oldPrice: 400.00,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=jason"
        },
        {
            id: 2,
            title: "Create Amazing Color Schemes for Your UX Design Projects",
            category: "UX/UI Design",
            instructor: "Tamara Foster",
            rating: 4.9,
            reviews: 120,
            students: 850,
            duration: "5h 10m",
            price: 420.00,
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=tamara"
        },
        {
            id: 3,
            title: "Culture & Leadership: Strategies for a Successful Business",
            category: "Business",
            instructor: "Brian Kennedy",
            rating: 4.7,
            reviews: 85,
            students: 540,
            duration: "12h 30m",
            price: 235.00,
            oldPrice: 350.00,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=brian"
        },
        {
            id: 4,
            title: "Finance Series: Learn to Budget and Calculate your Net Worth",
            category: "Finance",
            instructor: "Jason Williams",
            rating: 4.5,
            reviews: 210,
            students: 1100,
            duration: "8h 45m",
            price: 0,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=jason"
        },
        {
            id: 5,
            title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
            category: "Marketing",
            instructor: "Sarah Jenkins",
            rating: 4.6,
            reviews: 180,
            students: 920,
            duration: "15h 20m",
            price: 125.00,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            id: 6,
            title: "Graphic Design: Master the Basics and Icons with Geometric Shapes",
            category: "UX/UI Design",
            instructor: "Jason Williams",
            rating: 4.8,
            reviews: 320,
            students: 1540,
            duration: "10h 30m",
            price: 217.00,
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2070&auto=format&fit=crop",
            instructorImage: "https://i.pravatar.cc/150?u=jason"
        },
    ];

    const filteredCourses = activeCategory === 'All'
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 bg-[#FDFCFB] dark:bg-slate-950 navy:bg-[#020D1A] transition-colors duration-500">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white navy:text-indigo-50">
                    All <span className="text-primary italic">Courses</span> of CourseCity
                </h2>
                <p className="text-slate-500 dark:text-slate-400 navy:text-indigo-300/70 max-w-2xl mx-auto">
                    Choose from over 100,000 online video courses with new additions published every month.
                </p>

                {/* Search in Courses */}
                <div className="max-w-xl mx-auto mt-8 relative">
                    <input
                        type="text"
                        placeholder="Search your favorite course..."
                        className="w-full bg-slate-50 dark:bg-slate-900 navy:bg-[#051933] border border-slate-200 dark:border-slate-800 navy:border-indigo-900/50 rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm text-slate-900 dark:text-white navy:text-indigo-50 placeholder:navy:text-indigo-300/40"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border-2",
                            activeCategory === cat
                                ? "bg-primary border-primary text-white shadow-lg"
                                : "bg-white dark:bg-slate-900 navy:bg-[#051933] border-slate-100 dark:border-slate-800 navy:border-indigo-900/30 text-slate-600 dark:text-slate-400 navy:text-indigo-300/70 hover:border-primary hover:text-primary"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CourseCard {...course} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-16 text-center">
                <button className="btn-outline px-10 py-3.5 text-lg font-bold">
                    Other Courses
                </button>
            </div>
        </section>
    );
};

export default CoursesSection;
