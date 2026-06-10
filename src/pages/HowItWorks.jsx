import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, MessageSquare, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        { id: 1, num: '01', title: 'Report it Lost', description: 'Fill out a quick form with details about your item. Adding a photo increases match chances by 40%.', icon: Search },
        { id: 2, num: '02', title: 'Smart Matching', description: 'Our AI scans thousands of found item reports instantly. You get notified when a match is found.', icon: MapPin },
        { id: 3, num: '03', title: 'Verify & Connect', description: 'Chat securely with the finder. Answer a security question to prove ownership.', icon: MessageSquare },
        { id: 4, num: '04', title: 'Reunion', description: 'Meet at a safe public location or arrange for shipping. Item recovered!', icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        How FindBack Works
                    </h1>
                    <p className="text-text-muted text-base leading-relaxed">
                        We've simplified lost & found using smart technology and the power of community.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                    <div className="hidden lg:block absolute top-[52px] left-0 w-full h-px bg-divider -z-10" />
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="glass p-8 hover:border-primary transition-colors relative"
                        >
                            <span className="text-xs font-bold text-text-muted tracking-widest mb-5 block">{step.num}</span>
                            <step.icon size={26} className="text-primary mb-5" />
                            <h3 className="text-base font-bold mb-2 text-text-primary">{step.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Safety Section */}
                <div className="mt-20 glass p-10">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">Safe &amp; Secure Reunions</h2>
                            <p className="text-text-muted text-sm mb-6 leading-relaxed">
                                We prioritize your safety. All meetups are at public spaces, and we verify finder identities.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Identity Verification for Finders',
                                    'Secure In-app Messaging',
                                    'Public Meetup Recommendations',
                                    'Optional Reward Management'
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-sm text-text-muted">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-video bg-surface border border-divider rounded-xl flex items-center justify-center">
                                <ShieldCheck size={60} className="text-primary opacity-30" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <h2 className="text-xl font-bold mb-6 text-text-primary">Ready to find what you're looking for?</h2>
                    <div className="flex items-center justify-center gap-4">
                        <Link to="/report-found" className="px-8 py-3 rounded-lg border border-divider hover:border-primary text-text-muted hover:text-text-primary text-sm transition-colors">
                            Report Found Item
                        </Link>
                        <Link to="/report-lost" className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-colors flex items-center gap-2">
                            Get Started <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
