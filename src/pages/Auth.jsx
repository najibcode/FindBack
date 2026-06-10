import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

const Auth = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'signin';
    const [mode, setMode] = useState(initialMode);
    const isSignUp = mode === 'signup';

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const inputClass = "w-full bg-surface border border-divider rounded-full py-3.5 pl-12 pr-4 text-text-primary placeholder-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm";

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left Panel */}
            <div className="hidden lg:flex w-1/2 bg-surface border-r border-divider flex-col items-start justify-end p-14">
                <img src="/logo.svg" alt="FindBack Logo" className="h-20 w-auto mb-12 opacity-90" />
                <h2 className="text-4xl font-black text-text-primary mb-3 leading-tight">
                    Find what<br />matters.
                </h2>
                <p className="text-text-muted text-sm">Join the community of finders and keepers.</p>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-text-primary mb-1">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="text-text-muted text-sm">
                            {isSignUp ? 'Start reporting lost items today.' : 'Sign in to manage your reports.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {isSignUp && (
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                    <input type="text" placeholder="Full Name" className={inputClass} />
                                </div>
                            )}
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input type="email" placeholder="Email Address" className={inputClass} required />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input type="password" placeholder="Password" className={inputClass} required />
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                            <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px bg-divider flex-1" />
                        <span className="text-text-muted text-xs uppercase tracking-wider">or continue with</span>
                        <div className="h-px bg-divider flex-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-3 rounded-full bg-surface border border-divider hover:border-primary text-text-muted hover:text-text-primary transition-all active:scale-95 text-sm shadow-sm">
                            <Github size={18} /> GitHub
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 rounded-full bg-surface border border-divider hover:border-primary text-text-muted hover:text-text-primary transition-all active:scale-95 text-sm shadow-sm">
                            <Chrome size={18} /> Google
                        </button>
                    </div>

                    <p className="text-center mt-8 text-text-muted text-sm">
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => setMode(isSignUp ? 'signin' : 'signup')}
                            className="ml-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
