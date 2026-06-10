import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, MapPin, Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
    const mockReports = [
        { id: 1, type: 'lost', item: 'iPhone 14 Pro', location: 'Central Park', date: '2 hours ago', status: 'Searching', matches: 2 },
        { id: 2, type: 'found', item: 'Blue Wallet', location: 'Subway Station', date: '1 day ago', status: 'Resolved', matches: 0 },
    ];

    return (
        <div className="min-h-screen pt-28 px-6 pb-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="glass p-6 sticky top-28">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white">
                                JD
                            </div>
                            <div>
                                <h3 className="font-bold text-text-primary text-sm">John Doe</h3>
                                <p className="text-xs text-text-muted">Member since 2023</p>
                            </div>
                        </div>
                        <nav className="space-y-1">
                            {['Overview', 'My Reports', 'Messages', 'Settings'].map((item, i) => (
                                <button
                                    key={item}
                                    className={`w-full text-left px-4 py-2.5 rounded-full text-sm transition-all ${i === 0 ? 'bg-primary/10 text-primary font-semibold' : 'text-text-muted hover:bg-surface hover:text-text-primary'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass p-6">
                            <h4 className="text-text-muted text-xs uppercase tracking-wider mb-2">Active Reports</h4>
                            <p className="text-3xl font-bold text-primary">2</p>
                        </div>
                        <div className="glass p-6">
                            <h4 className="text-text-muted text-xs uppercase tracking-wider mb-2">Items Recovered</h4>
                            <p className="text-3xl font-bold text-primary">14</p>
                        </div>
                        <div className="glass p-6">
                            <h4 className="text-text-muted text-xs uppercase tracking-wider mb-2">Messages</h4>
                            <p className="text-3xl font-bold text-text-primary">5</p>
                        </div>
                    </div>

                    {/* Match Notification */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass p-6 border-l-2 border-l-primary"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-base font-bold mb-1 flex items-center gap-2.5 text-text-primary">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Potential Match Found!
                                </h3>
                                <p className="text-text-muted text-sm max-w-lg mb-4">
                                    Our AI detected a found item matching your <strong className="text-text-primary">iPhone 14 Pro</strong>.
                                    Found near <strong className="text-text-primary">Central Park</strong> approx 30 mins ago.
                                </p>
                                <button className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium text-sm transition-colors">
                                    View Match Details
                                </button>
                            </div>
                            <div className="hidden md:block ml-6">
                                <div className="w-20 h-20 rounded-full border-2 border-divider flex items-center justify-center relative">
                                    <span className="text-xl font-bold text-primary">87%</span>
                                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                                        <circle cx="40" cy="40" r="36" stroke="#7B2FBE" strokeWidth="3" className="opacity-20" fill="transparent" />
                                        <circle cx="40" cy="40" r="36" stroke="#7B2FBE" strokeWidth="3" fill="transparent" strokeDasharray="226" strokeDashoffset={226 - (226 * 87) / 100} strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reports List */}
                    <div>
                        <h3 className="text-base font-bold mb-4 text-text-primary">Your Reports</h3>
                        <div className="space-y-3">
                            {mockReports.map(report => (
                                <div key={report.id} className="glass p-5 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-divider hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${report.type === 'lost' ? 'bg-primary/10 text-primary' : 'bg-emerald-50 text-emerald-700'}`}>
                                            {report.type === 'lost' ? <Search size={20} /> : <ShieldCheck size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-text-primary">{report.item}</h4>
                                            <div className="flex items-center gap-3 text-xs text-text-muted mt-0.5">
                                                <span className="flex items-center gap-1"><MapPin size={12} /> {report.location}</span>
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {report.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${report.status === 'Searching' ? 'bg-primary/10 text-primary' : 'bg-emerald-50 text-emerald-700'
                                            }`}>
                                            {report.status}
                                        </span>
                                        <button className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary text-text-muted transition-colors">
                                            <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
