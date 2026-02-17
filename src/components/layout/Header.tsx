import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Mail, Sun, Moon, LogIn, UserPlus, Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import logoImg from '../../assets/images/Logo.png';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDarkMode]);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'All Courses', href: '#' },
        { name: 'Explore', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-3 shadow-md border-b border-slate-200/50 dark:border-slate-800/50"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <img
                        src={logoImg}
                        alt="CourseCity Logo"
                        className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-primary dark:from-white dark:to-primary hidden sm:block">
                        CourseCity
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="nav-link group overflow-hidden"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Action Icons & Auth */}
                <div className="flex items-center gap-2 md:gap-5">
                    <div className="flex items-center gap-1 md:gap-3">
                        <button className="p-2.5 text-primary hover:text-primary-dark bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 relative group">
                            <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                0
                            </span>
                        </button>
                        <button className="p-2.5 text-primary hover:text-primary-dark bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 relative group">
                            <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
                            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white ring-red-200 ring-2 pulse shadow-sm" />
                        </button>
                        <button className="p-2.5 text-primary hover:text-primary-dark bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 group">
                            <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                        </button>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2.5 text-primary hover:text-primary-dark bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 group"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5 transition-transform group-hover:rotate-45" /> : <Moon className="w-5 h-5 transition-transform group-hover:-rotate-12" />}
                        </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                        <Link to="/login" className="text-slate-600 dark:text-slate-400 hover:text-primary font-medium flex items-center gap-2 transition-colors">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Link>
                        <Link to="/signup" className="btn-primary">
                            <UserPlus className="w-4 h-4" />
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-900 dark:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-3 py-6 px-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary py-2 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/login"
                                    className="flex items-center justify-center gap-2 p-3 text-slate-700 dark:text-slate-200 font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <LogIn className="w-5 h-5" />
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="btn-primary py-3"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <UserPlus className="w-5 h-5" />
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
