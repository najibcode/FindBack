import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Report Lost', path: '/report-lost' },
        { name: 'Report Found', path: '/report-found' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'How It Works', path: '/how-it-works' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background border-b border-divider h-16' : 'bg-transparent h-24'}`}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src="/logo.svg" alt="FindBack Logo" className="h-12 w-auto hover:opacity-90 transition-opacity" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-primary rounded-full p-1.5 shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-xs font-bold transition-all px-4 py-2 rounded-full ${location.pathname === link.path
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-white/95 hover:bg-white hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/auth?mode=signin" className="text-sm font-semibold text-text-muted hover:text-primary transition-colors">
                        Sign In
                    </Link>
                    <Link
                        to="/auth?mode=signup"
                        className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm transition-all active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-text-primary hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-t border-divider absolute top-full left-0 right-0 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-6 gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all text-center ${location.pathname === link.path
                                            ? 'bg-primary text-white shadow-sm'
                                            : 'text-text-muted hover:bg-primary/5 hover:text-primary'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-divider my-2" />
                            <Link to="/auth?mode=signin" className="text-center py-2 text-sm text-text-muted hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                            <Link
                                to="/auth?mode=signup"
                                className="text-center py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover shadow-sm transition-all active:scale-95"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
