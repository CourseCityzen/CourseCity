import React from 'react';
import { Play, ArrowRight, Star, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    // Chaos shapes with high visibility and donut-ready types
    const chaosShapes = [
        { type: 'circle', size: 140, x: '8%', y: '15%', duration: 25, delay: 0 },
        { type: 'square', size: 80, x: '82%', y: '12%', duration: 18, delay: 2, rotate: 35 },
        { type: 'triangle', size: 100, x: '78%', y: '75%', duration: 28, delay: 4, rotate: -20 },
        { type: 'rectangle', size: 50, x: '12%', y: '80%', duration: 22, delay: 1, rotate: 15, width: 120 },
        { type: 'circle', size: 60, x: '42%', y: '8%', duration: 15, delay: 7 },
        { type: 'square', size: 40, x: '65%', y: '45%', duration: 12, delay: 3 },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#fafafa] dark:bg-slate-950 transition-colors duration-500">
            {/* --- BACKGROUND DECORATIVE LAYERS --- */}

            {/* 1. Base Vibrant Gradient - Stronger Colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-100/30 to-primary/10 dark:from-slate-950 dark:via-slate-900/50 dark:to-primary/5 z-0" />

            {/* 2. Organized Patterns - Increased Contrast */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Tessellated Squares/Grid - Visible Grid Lines */}
                <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.05]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0zM30 30h30v30H30z' fill='%23FF6B00' fill-opacity='0.15'/%3E%3C/svg%3E")` }}
                />

                {/* Repeated Dots Cluster */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-30 dark:opacity-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23FF6B00'/%3E%3C/svg%3E")` }}
                />

                {/* Repeated Outlined Triangles Grid */}
                <div className="absolute bottom-10 right-10 w-80 h-80 opacity-40 dark:opacity-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5l15 30H5L20 5z' fill='none' stroke='%23FF6B00' stroke-width='1.5'/%3E%3C/svg%3E")` }}
                />
            </div>

            {/* 3. Chaos: Animated Geometric Shapes - Now with Donut/Inner shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {chaosShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 30, 0],
                            rotate: shape.rotate ? [shape.rotate, shape.rotate + 360] : 360
                        }}
                        transition={{
                            duration: shape.duration,
                            repeat: Infinity,
                            delay: shape.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute flex items-center justify-center"
                        style={{
                            width: shape.width || shape.size,
                            height: shape.size,
                            left: shape.x,
                            top: shape.y,
                            border: '2px solid rgba(255, 107, 0, 0.4)',
                            borderRadius: shape.type === 'circle' ? '9999px' : (shape.type === 'triangle' ? '0' : '12px'),
                            background: (shape.type === 'circle' || shape.type === 'square') ? 'rgba(255, 107, 0, 0.08)' : 'var(--hero-misc-bg)',
                            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        {/* Nested shape for Donut effect (All types) */}
                        <div className="w-[40%] h-[40%] border-2 border-primary/40"
                            style={{
                                borderRadius: shape.type === 'circle' ? '9999px' : (shape.type === 'triangle' ? '0' : '6px'),
                                clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* 4. Large Abstract Waves */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg className="absolute w-full h-[120%] -bottom-20 left-0 opacity-[0.4] dark:opacity-[0.2]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <motion.path
                        animate={{
                            d: [
                                "M0 400C300 350 600 450 900 400C1200 350 1440 450 1440 400V800H0V400Z",
                                "M0 450C250 400 550 500 850 450C1150 400 1440 500 1440 450V800H0V450Z",
                                "M0 400C300 350 600 450 900 400C1200 350 1440 450 1440 400V800H0V400Z"
                            ]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        fill="url(#vibrant_wave_dark)"
                    />
                    <defs>
                        <linearGradient id="vibrant_wave_dark" x1="720" y1="400" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6B00" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#FF6B00" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 5. Focal Glows */}
            <div className="absolute -bottom-60 -left-20 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[160px] z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[140px] z-0 pointer-events-none animate-pulse" />

            {/* --- MAIN CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm shadow-sm border border-primary/20 backdrop-blur-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Premium Learning Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 dark:text-white drop-shadow-sm transition-colors duration-500">
                        Now learning from <br />
                        <span className="text-primary italic">anywhere</span>, and build <br />
                        your <span className="relative inline-block">
                            bright career.
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9C105 2 213.5 2 315 9" stroke="#FF6B00" strokeWidth="8" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium transition-colors duration-500">
                        It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="btn-primary px-8 py-4 text-lg shadow-xl shadow-primary/30">
                            Start A Course
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-4 group">
                            <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 border dark:border-slate-800 transition-all duration-300">
                                <Play className="w-5 h-5 text-primary fill-current" />
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-500">How It Works</span>
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative">
                        {/* Main Image Plate */}
                        <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(255,107,0,0.2)] border-8 border-white dark:border-slate-900 transition-colors duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                                alt="Student learning"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>

                        {/* Floating Stats Cards */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 z-30 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">1,235+</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Active Students</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-10 z-30 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-500">500+</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Free Courses</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
