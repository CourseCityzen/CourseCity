import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', formData);
    };

    return (
        <AuthLayout
            title="Welcome Back to CourseCity"
            subtitle="Continue your learning journey and explore new horizons today."
            imageAlt="Studying on laptop"
        >
            <div className="space-y-8 animate-fade-in relative z-10">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">Welcome back</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">
                        Don't have an account? <Link to="/signup" className="text-primary hover:underline font-bold">Sign up</Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-200">Password</label>
                            <Link to="/forgot-password" className="text-xs text-primary font-bold hover:underline">Forgot password?</Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 shadow-lg shadow-primary/20">
                        Log in
                    </button>
                </form>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm uppercase">
                        <span className="bg-white dark:bg-slate-950 px-4 text-slate-400 dark:text-slate-500 font-bold tracking-widest transition-colors duration-500">Or log in with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 px-6 py-3.5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        <span className="font-bold text-slate-700 dark:text-slate-200">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-6 py-3.5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95">
                        <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" alt="Apple" className="w-5 h-5 dark:invert" />
                        <span className="font-bold text-slate-700 dark:text-slate-200">Apple</span>
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
