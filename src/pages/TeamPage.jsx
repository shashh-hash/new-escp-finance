import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(0);

    const sections = [
        {
            name: "Leadership",
            members: [
                { name: "Lorenzo Sargiani", role: "Founder & President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
                { name: "Ines Desmaretz", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=300" },
                { name: "Daria Iannuzzi", role: "Vice President", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60&w=300" },
                { name: "Martina Proietti Silvestri", role: "Board Member", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=300" },
                { name: "Christos Gerontopoulos", role: "Board Member", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
                { name: "Lucas Thai", role: "Board Member", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
                { name: "Alex Toumasson", role: "Board Member", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "HR",
            members: [
                { name: "Edoardo Cerrano", role: "Head of HR", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" },
                { name: "Alessandra Boarolo", role: "HR Associate", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=300" },
                { name: "Tommaso Donati", role: "HR Associate", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&w=300" },
                { name: "Rodolfo Barberis", role: "HR Associate", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
                { name: "Emanuele Ferrara", role: "HR Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Strategy",
            members: [
                { name: "Flavio Antonuzzo", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
                { name: "Tommaso Girani", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" },
                { name: "Carlo Giulio Rizzuto", role: "Strategy Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Articles",
            members: [
                { name: "Luca Citton", role: "Head of Articles", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&w=300" },
                { name: "Francesco Kaitsas", role: "Head of Articles", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
                { name: "Francesco Baci Paci", role: "Articles Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
                { name: "Federico Furioso", role: "Articles Associate", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
                { name: "Giovanni Ciccarello", role: "Articles Associate", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" },
                { name: "Giorgio Gheorghis Tsingros", role: "Articles Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Research",
            members: [
                { name: "Adriano Cogorno", role: "Head of Research", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=300" },
                { name: "Giuseppe Mansueto", role: "Head of Research", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&w=300" },
                { name: "Giorgio D'Innocenzo", role: "Research Associate", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
                { name: "Davide Biselli", role: "Research Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
                { name: "Frederic Wessling Melonari", role: "Research Associate", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
                { name: "Federico Tempestini", role: "Research Associate", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Events",
            members: [
                { name: "Daria Iannuzzi", role: "Head of Events", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60&w=300" },
                { name: "Martina Proietti Silvestri", role: "Head of Events", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=300" },
                { name: "Armand Vahé Francesco Gaidc", role: "Events Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Marketing",
            members: [
                { name: "Valentina Petrini", role: "Head of Marketing", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=300" },
                { name: "Alessio Penzo", role: "Marketing Associate", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Instagram",
            members: [
                { name: "Beatrice Pellini", role: "Head of Instagram", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=300" },
                { name: "Camilla Barra", role: "Instagram Associate", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=300" },
                { name: "Federico Valente", role: "Instagram Associate", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "LinkedIn",
            members: [
                { name: "Marina Meucci", role: "Head of LinkedIn", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60&w=300" },
                { name: "Giulio Bonifacio", role: "LinkedIn Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
                { name: "Francesco Maria Liaci", role: "LinkedIn Associate", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" }
            ]
        },
        {
            name: "Tech",
            members: [
                { name: "Shashank Tripathi", role: "Head of Tech", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" },
                { name: "Augustin Mons", role: "Tech Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" },
                { name: "Jingyi Wang", role: "Tech Associate", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=300" }
            ]
        }
    ];

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
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all touch-manipulation ${activeTab === index
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
                                        onClick={() => setActiveTab(index)}
                                        className={`w-full text-left px-4 py-3 text-sm transition-all ${activeTab === index
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
                                {sections[activeTab].members.map((member, index) => (
                                    <div
                                        key={index}
                                        className="group"
                                        style={{
                                            animation: `fadeIn 0.4s ease-out ${index * 0.04}s both`
                                        }}>
                                        <div className="aspect-square mb-3 sm:mb-4 overflow-hidden bg-[#042440] rounded-lg">
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
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
