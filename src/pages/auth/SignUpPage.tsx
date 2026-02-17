import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';
import logoImg from '../../assets/images/Logo.png';

const SignUpPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sign Up:', formData);
    };

    return (
        <AuthLayout
            title="Start Your Learning Journey"
            subtitle="Join CourseCity today and get access to thousands of premium courses."
            imageAlt="Students studying"
        >
            <div className="space-y-8 animate-fade-in relative z-10">
                <div className="flex flex-col gap-6">
                    <img src={logoImg} alt="CourseCity" className="h-12 w-auto object-contain self-start" />
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-500">Create an account</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">
                            Already have an account? <Link to="/login" className="text-primary hover:underline font-bold">Log in</Link>
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-1.5 focus-within:text-primary transition-colors">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">First name</label>
                            <input
                                type="text"
                                placeholder="Fletcher"
                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div className="flex-1 space-y-1.5 focus-within:text-primary transition-colors">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Last name</label>
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">Password</label>
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

                    <div className="flex items-center gap-3 py-2 cursor-pointer group" onClick={() => setFormData({ ...formData, agree: !formData.agree })}>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${formData.agree ? 'bg-primary border-primary' : 'border-slate-300 dark:border-slate-700 group-hover:border-primary'}`}>
                            {formData.agree && <svg width="12" height="12" className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium transition-colors duration-500">
                            I agree to the <Link to="/terms" className="text-slate-900 dark:text-slate-200 border-b border-slate-900 dark:border-slate-200 hover:text-primary hover:border-primary transition-all">Terms & Conditions</Link>
                        </span>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 shadow-lg shadow-primary/20">
                        Create account
                    </button>
                </form>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm uppercase">
                        <span className="bg-white dark:bg-slate-950 px-4 text-slate-400 dark:text-slate-500 font-bold tracking-widest transition-colors duration-500">Or register with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 px-6 py-3.5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        <span className="font-bold text-slate-700 dark:text-slate-200">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-6 py-3.5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95">
                        <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
                        <span className="font-bold text-slate-700 dark:text-slate-200">Facebook</span>
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignUpPage;
