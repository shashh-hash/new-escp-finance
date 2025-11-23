import React from 'react';

export default function Sections() {
    return (
        <>
            {/* Mission Section */}
            <section className="text-white py-16" style={{ backgroundColor: 'var(--color-accent)' }}>
                <div className="container mx-auto px-8 text-center">
                    <h2 className="font-serif text-3xl mb-6">Our Mission</h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        "To bridge the gap between academic theory and professional practice, empowering the next generation of finance leaders through education, networking, and real-world experience."
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-serif text-3xl mb-6" style={{ color: 'var(--color-accent)' }}>About the Society</h2>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        Founded in 2025 at the ESCP Turin Campus, we are a student-led organization dedicated to fostering a deep understanding of the financial industry. We provide a platform for students to engage with industry professionals, participate in workshops, and publish cutting-edge research.
                    </p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-3xl font-serif" style={{ color: 'var(--color-text)' }}>50+</span>
                            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Members</span>
                        </div>
                        <div className="w-px" style={{ backgroundColor: 'var(--color-text-secondary)', opacity: 0.3 }}></div>
                        <div className="text-center">
                            <span className="block text-3xl font-serif" style={{ color: 'var(--color-text)' }}>10+</span>
                            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Events</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Team working" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
            </section>

            {/* Latest Articles */}
            <section className="container mx-auto px-8 py-16 border-t border-gray-200">
                <div className="flex justify-between items-baseline mb-8">
                    <h2 className="font-serif text-3xl">Latest Articles</h2>
                    <a href="#" className="text-sm text-gray-500 transition-colors" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>View all</a>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group cursor-pointer">
                        <div className="h-64 bg-gray-200 mb-4 overflow-hidden relative">
                            <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-xs px-3 py-1 uppercase tracking-widest">Markets</div>
                            <img src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80" alt="Markets" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <span className="text-gray-400 text-xs block mb-2">20.11.2025</span>
                        <h3 className="font-serif text-xl group-hover:text-[#C5A059] transition-colors leading-tight">
                            The Rise of Private Credit in Europe: Opportunities & Risks
                        </h3>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="h-64 bg-gray-200 mb-4 overflow-hidden relative">
                            <div className="absolute top-4 left-4 bg-[#051C2C] text-white text-xs px-3 py-1 uppercase tracking-widest">Tech</div>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Fintech" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <span className="text-gray-400 text-xs block mb-2">15.11.2025</span>
                        <h3 className="font-serif text-xl group-hover:text-[#C5A059] transition-colors leading-tight">
                            Fintech Valuation Trends: A 2025 Outlook
                        </h3>
                    </div>
                </div>
            </section>

            {/* The Team (Founding Board) */}
            <section className="py-16">
                <div className="container mx-auto px-8">
                    <h2 className="font-serif text-3xl mb-12 text-center">The Founding Board</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { name: "Alessandro Rossi", role: "President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" },
                            { name: "Sofia Bianchi", role: "Head of Research", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
                            { name: "Marco Verdi", role: "Head of Events", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" }
                        ].map((member, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-2 border-transparent group-hover:border-[#C5A059] transition-all duration-300">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#2C2C2C] text-white py-16">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="font-serif text-3xl mb-4">Get in Touch</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Interested in partnering with us or joining the team? Send us an email or follow us on social media.
                    </p>
                    <a href="mailto:finance.turin@escp.eu" className="inline-block bg-[#C5A059] hover:bg-[#b08d4d] text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold transition-colors">
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
