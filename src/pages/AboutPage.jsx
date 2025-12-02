import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    const sections = [
        {
            title: "Our Mission",
            subtitle: "Building a network of finance-focused students and young professionals",
            content: "ESCP Students for Finance is an association born with the purpose of creating a network of students and young professionals interested in the different branches of finance. The association will serve the scope of preparing students with a deeper understanding of financial concepts, including investing, personal finance, and current economics events."
        },
        {
            title: "Our Values",
            subtitle: "The principles that guide our community",
            values: [
                "Integrity and respect in every interaction",
                "Ownership mindset and high-quality effort",
                "Critical questioning and openness to new angles",
                "Authentic inclusion and mutual support"
            ]
        },
        {
            title: "What We Do",
            subtitle: "Empowering students through content, events, and community",
            content: "Through our weekly Market Momentum reports, equity spotlights such as Stocks in Focus, and a range of thematic series across our social platforms, we equip students with clear, structured insight into key market developments. Alongside our content, we organize events and networking opportunities with industry professionals, creating an environment where members can deepen their financial knowledge, sharpen analytical skills, and actively engage with the broader finance community."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">About Us</h1>
                    <p className="text-gray-400 text-lg">Who we are and what we stand for</p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-8 max-w-4xl space-y-20">
                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            {/* Section Header */}
                            <div className="border-b border-white/10 pb-6">
                                <h2 className="text-4xl font-light tracking-tight text-white mb-3">
                                    {section.title}
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    {section.subtitle}
                                </p>
                            </div>

                            {/* Section Content */}
                            {section.content && (
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            )}

                            {/* Values List */}
                            {section.values && (
                                <ul className="space-y-4">
                                    {section.values.map((value, valueIdx) => (
                                        <li key={valueIdx} className="flex items-start gap-3">
                                            <span className="text-[#C5A059] mt-1.5">•</span>
                                            <span className="text-gray-300 text-lg leading-relaxed">
                                                {value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
