import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Sparkles, MapPin, User, Star, ArrowRight, Search } from 'lucide-react';

const CATEGORIES = [
    'Electronics', 'Wallet / Bag', 'Documents', 'Keys',
    'Jewellery', 'Clothing', 'Sports / Outdoor', 'Toys / Kids', 'Other'
];

const Home = () => {
    const [stats, setStats] = useState({ reported: 0, recovered: 0, cities: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                reported: Math.min(prev.reported + 123, 15420),
                recovered: Math.min(prev.recovered + 89, 12650),
                cities: Math.min(prev.cities + 1, 42)
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        { id: 1, name: 'Sarah J.', role: 'Finder', text: "I found a lost phone and returned it within hours. The process was so smooth!", rating: 5 },
        { id: 2, name: 'Mike T.', role: 'Owner', text: "I thought my wallet was gone forever. FindBack's AI match is a lifesaver.", rating: 5 },
        { id: 3, name: 'Elena R.', role: 'Finder', text: "The matching system is incredible. It actually makes helping people easy.", rating: 4 },
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center pt-20 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="px-4 py-1.5 rounded-full bg-surface border border-divider text-primary text-xs font-bold uppercase tracking-widest mb-8 inline-block">
                            AI-Powered Lost &amp; Found
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight text-text-primary">
                            Find What You <span className="text-primary">Lost</span>,<br />
                            Return What You <span className="text-primary">Found</span>
                        </h1>
                        <p className="text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
                            The world's most advanced matching platform for lost belongings.
                            Smart AI to reunite people with their items faster than ever.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link to="/report-lost" className="group px-8 py-4 rounded-full bg-primary text-white font-bold text-base hover:bg-primary-hover shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-3">
                                <Search size={20} />
                                Report Lost Item
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/report-found" className="group px-8 py-4 rounded-full bg-surface border border-divider hover:border-primary text-text-primary font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-3">
                                <Shield size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                I Found Something
                            </Link>
                        </div>

                        {/* Quick Search */}
                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search by Item ID, Tag, or Keywords..."
                                    className="w-full bg-surface border border-divider rounded-full py-4 pl-12 pr-36 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm shadow-sm"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 shadow-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-divider bg-surface">
                <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
                    <div className="flex-1 text-center border-r border-divider last:border-0">
                        <h3 className="text-4xl font-bold text-primary">{stats.reported.toLocaleString()}+</h3>
                        <p className="text-text-muted uppercase tracking-wider text-xs mt-1">Items Reported</p>
                    </div>
                    <div className="flex-1 text-center border-r border-divider last:border-0">
                        <h3 className="text-4xl font-bold text-primary">{stats.recovered.toLocaleString()}+</h3>
                        <p className="text-text-muted uppercase tracking-wider text-xs mt-1">Items Recovered</p>
                    </div>
                    <div className="flex-1 text-center">
                        <h3 className="text-4xl font-bold text-text-primary">{stats.cities}</h3>
                        <p className="text-text-muted uppercase tracking-wider text-xs mt-1">Cities Active</p>
                    </div>
                </div>
            </section>

            {/* Browse by Category */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-3 text-text-primary">Browse by Category</h2>
                        <p className="text-text-muted text-sm">Search across all reported items by type</p>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
                        {CATEGORIES.map((cat) => (
                            <button key={cat} className="py-3 px-2 rounded-full bg-surface border border-divider hover:border-primary hover:text-primary text-text-muted text-xs font-semibold transition-all active:scale-95 hover:bg-primary/5 text-center">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Teaser */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold mb-3 text-text-primary">How FindBack Works</h2>
                        <p className="text-text-muted text-sm max-w-xl mx-auto">We use advanced matching algorithms and community power to reunite you with your belongings.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Report', icon: Sparkles, text: 'Report a lost or found item in seconds with a simple form.', num: '01' },
                            { title: 'AI Match', icon: Search, text: 'Our system automatically scans for matches across reports.', num: '02' },
                            { title: 'Reunite', icon: Shield, text: 'Securely connect and get your item back safely.', num: '03' },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="glass p-8 hover:border-primary transition-colors"
                            >
                                <span className="text-xs font-bold text-text-muted tracking-widest mb-4 block">{step.num}</span>
                                <step.icon size={28} className="text-primary mb-4" />
                                <h3 className="text-lg font-bold mb-2 text-text-primary">{step.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/how-it-works" className="group text-primary hover:text-primary-hover text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                            Learn more about the process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-14 text-text-primary">Community Stories</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.id} className="glass p-8">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="text-primary fill-primary" />)}
                                </div>
                                <p className="text-text-muted text-sm italic mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                                        <User size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-text-primary">{t.name}</p>
                                        <p className="text-xs text-text-muted">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 bg-surface">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-text-primary">Lost something? We'll help you find it.</h2>
                    <p className="text-text-muted mb-10 max-w-xl mx-auto text-sm">Join thousands of users who have successfully recovered their belongings through FindBack.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/report-lost" className="px-8 py-4 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-hover shadow-md hover:shadow-lg transition-all active:scale-95">
                            Report Lost Item
                        </Link>
                        <Link to="/report-found" className="px-8 py-4 rounded-full bg-background border border-divider hover:border-primary text-text-primary font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95">
                            I Found Something
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
