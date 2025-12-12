import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { teamSections } from '../data/siteData';

export default function AboutPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sections = teamSections;

    // Get active tab from URL or default to 0 (Leadership)
    const activeSectionName = searchParams.get('section');
    const activeTab = sections.findIndex(s => s.name === activeSectionName);
    const validActiveTab = activeTab !== -1 ? activeTab : 0;

    const handleTabChange = (index) => {
        setSearchParams({ section: sections[index].name });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-20 sm:pt-24 pb-12 sm:pb-16">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">Team</h1>
                    <p className="text-gray-400 text-base sm:text-lg">The people driving our vision forward</p>
                </div>
            </section>

            {/* Mobile Tabs (Horizontal Scroll) */}
            <section className="lg:hidden border-b border-white/10 sticky top-[140px] bg-[#0A1929] z-30">
                <div className="container mx-auto px-4">
                    <nav className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabChange(index)}
                                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all touch-manipulation ${validActiveTab === index
                                    ? 'bg-[#D4AF37] text-white'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}>
                                {section.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Desktop + Content */}
            <section className="flex-1 py-8">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex gap-8 lg:gap-12">
                        {/* Desktop Sidebar */}
                        <aside className="hidden lg:block w-48 flex-shrink-0 sticky top-24 self-start">
                            <nav className="space-y-1">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTabChange(index)}
                                        className={`w-full text-left px-4 py-3 text-sm transition-all ${validActiveTab === index
                                            ? 'text-white bg-white/5 border-l-2 border-white'
                                            : 'text-gray-500 hover:text-gray-300 border-l-2 border-transparent hover:border-gray-700'
                                            }`}>
                                        {section.name}
                                    </button>
                                ))}
                            </nav>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 pb-12">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                {sections[validActiveTab].members.map((member, index) => (
                                    <div
                                        key={index}
                                        className="group"
                                        style={{
                                            animation: `fadeIn 0.4s ease-out ${index * 0.04}s both`
                                        }}>
                                        <div className={`aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg ${['Marina Meucci', 'Lucas Thai', 'Alex Toumasson'].includes(member.name) ? 'bg-white' : 'bg-[#042440]'
                                            }`}>
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className={`w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ${['Ines Desmaretz', 'Edoardo Cerrano', 'Emanuele Ferrara', 'Tommaso Girani', 'Adriano Cogorno', "Giorgio D'Innocenzo"].some(n => member.name.includes(n))
                                                    ? 'object-[center_35%]'
                                                    : ''
                                                    } ${member.name === 'Shashank Tripathi' ? 'scale-125 object-[center_90%]' : ''} ${member.name === 'Marina Meucci' ? 'scale-150 object-[center_98%]' : ''} ${member.name === 'Beatrice Pelini' ? 'scale-125 object-[center_90%]' : ''} ${member.name === 'Daria Iannuzzi' ? 'scale-125 object-[center_90%]' : ''} ${member.name === 'Alessandra Boarolo' ? 'scale-125 object-[center_98%]' : ''}`}
                                                loading="lazy"
                                            />
                                        </div>
                                        <h4 className="text-xs sm:text-sm font-medium text-white mb-1">{member.name}</h4>
                                        <p className="text-[10px] sm:text-xs text-gray-500">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
