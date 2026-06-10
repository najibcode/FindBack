import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-text-primary flex flex-col relative">
            <Navbar />
            <main className="flex-grow relative">
                {children}
            </main>
            <footer className="py-6 text-center text-text-muted text-xs border-t border-divider bg-surface">
                <p>© {new Date().getFullYear()} FindBack. Reconnecting people with their belongings.</p>
            </footer>
        </div>
    );
};

export default Layout;
