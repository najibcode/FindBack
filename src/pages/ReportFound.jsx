import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Camera, Tag, ArrowRight, Check } from 'lucide-react';

const steps = [
    { id: 1, title: 'Item Details', icon: Tag },
    { id: 2, title: 'Location Found', icon: MapPin },
];

const CATEGORIES = [
    'Electronics', 'Wallet / Bag', 'Documents', 'Keys',
    'Jewellery', 'Clothing', 'Sports / Outdoor', 'Toys / Kids', 'Other'
];

const inputClass = "w-full bg-background border border-divider rounded-2xl p-3.5 text-text-primary placeholder-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm shadow-sm";

const ReportFound = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        description: '',
        location: '',
        date: '',
    });

    const handleNext = () => { if (currentStep < 2) setCurrentStep(prev => prev + 1); };
    const handleBack = () => { if (currentStep > 1) setCurrentStep(prev => prev - 1); };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Category</label>
                            <div className="grid grid-cols-3 gap-2">
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat}
                                        className={`py-2.5 px-2 rounded-full border text-xs transition-all ${formData.category === cat ? 'border-primary bg-primary/10 text-primary font-semibold' : 'border-divider bg-background text-text-muted hover:border-primary/50 hover:text-text-primary hover:bg-surface'}`}
                                        onClick={() => setFormData({ ...formData, category: cat })}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">What did you find?</label>
                            <input type="text" className={inputClass} placeholder="e.g. Blue Nike Backpack" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Description</label>
                            <textarea className={`${inputClass} h-28 resize-none`} placeholder="Describe specific features..." value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                        <div className="h-44 bg-background rounded-lg border border-divider flex items-center justify-center mb-2">
                            <div className="flex items-center gap-2 text-text-muted text-sm">
                                <MapPin size={18} className="text-primary" />
                                <span>Select location on map</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Location Name</label>
                            <input type="text" className={inputClass} placeholder="e.g. Bus Stop near Main St." value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Date Found</label>
                            <input type="date" className={inputClass} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                        </div>
                        <div className="border border-dashed border-divider rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer">
                            <Camera className="w-8 h-8 text-text-muted mb-3" />
                            <p className="text-sm font-medium text-text-primary">Upload Photo</p>
                            <p className="text-xs text-text-muted mt-1">Drag & drop or click to browse</p>
                        </div>
                    </motion.div>
                );
            default: return null;
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-xl mx-auto">
            <div className="mb-10">
                <h1 className="text-2xl font-bold text-text-primary mb-1">Report a Found Item</h1>
                <p className="text-text-muted text-sm">Thanks for helping out — fill in the details below.</p>
            </div>

            {/* Steps */}
            <div className="flex items-center gap-4 mb-10">
                {steps.map((step, i) => (
                    <React.Fragment key={step.id}>
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-xs font-bold transition-all ${currentStep >= step.id ? 'bg-primary border-primary text-white' : 'bg-background border-divider text-text-muted'}`}>
                                {currentStep > step.id ? <Check size={14} /> : step.id}
                            </div>
                            <span className={`text-xs font-medium hidden sm:block ${currentStep >= step.id ? 'text-text-primary' : 'text-text-muted'}`}>{step.title}</span>
                        </div>
                        {i < steps.length - 1 && <div className={`flex-1 h-px transition-colors ${currentStep > step.id ? 'bg-primary' : 'bg-divider'}`} />}
                    </React.Fragment>
                ))}
            </div>

            {/* Form */}
            <div className="glass p-8">
                <AnimatePresence mode="wait">
                    {renderStep()}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-divider">
                    <button
                        onClick={handleBack}
                        className={`px-5 py-2 rounded-full text-sm text-text-muted hover:text-primary hover:bg-primary/5 transition-all ${currentStep === 1 ? 'invisible' : ''}`}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-sm"
                    >
                        {currentStep === 2 ? 'Submit Report' : 'Next Step'}
                        {currentStep !== 2 && <ArrowRight size={16} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportFound;
