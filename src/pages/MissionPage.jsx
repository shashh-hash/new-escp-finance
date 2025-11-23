import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MissionPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">Our Mission</h1>
                    <p className="text-gray-400 text-lg">Empowering the next generation of finance leaders</p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20">
                <div className="container mx-auto px-8 max-w-4xl">
                    <p className="text-2xl font-light text-white leading-relaxed text-center">
                        To bridge the gap between academic theory and professional practice, empowering the next generation of finance leaders through education, networking, and real-world experience.
                    </p>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="py-16 border-t border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h2 className="text-3xl font-light text-white mb-12 text-center">Our Pillars</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4">Education</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Providing cutting-edge insights into financial markets, investment strategies, and industry trends through workshops, seminars, and research publications.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4">Networking</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Connecting students with industry professionals, alumni, and peers to build lasting relationships and open doors to career opportunities.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4">Experience</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Offering hands-on opportunities through case competitions, consulting projects, and collaborations with financial institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 border-t border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h2 className="text-3xl font-light text-white mb-12 text-center">Core Values</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-6 bg-[#042440]">
                            <h3 className="text-lg font-medium text-white mb-2">Excellence</h3>
                            <p className="text-sm text-gray-400">Striving for the highest standards in everything we do</p>
                        </div>
                        <div className="p-6 bg-[#042440]">
                            <h3 className="text-lg font-medium text-white mb-2">Integrity</h3>
                            <p className="text-sm text-gray-400">Upholding ethical principles and transparency</p>
                        </div>
                        <div className="p-6 bg-[#042440]">
                            <h3 className="text-lg font-medium text-white mb-2">Collaboration</h3>
                            <p className="text-sm text-gray-400">Working together to achieve common goals</p>
                        </div>
                        <div className="p-6 bg-[#042440]">
                            <h3 className="text-lg font-medium text-white mb-2">Innovation</h3>
                            <p className="text-sm text-gray-400">Embracing new ideas and challenging the status quo</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
