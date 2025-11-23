import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sections from '../components/Sections';
import Footer from '../components/Footer';
import EasterEggs from '../components/EasterEggs';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>
            <EasterEggs />
            <Header />
            <main className="flex-grow">
                <Hero />
                <Sections />
            </main>
            <Footer />
        </div>
    );
}
