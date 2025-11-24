import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NewsPage() {
    const newsItems = [
        {
            title: "ECB Raises Interest Rates to Combat Inflation",
            source: "Financial Times",
            date: "Nov 22, 2025",
            category: "Central Banking",
            excerpt: "The European Central Bank announced a 25 basis point rate hike, bringing the key interest rate to 4.75%.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=600",
            url: "https://www.ft.com"
        },
        {
            title: "Tech Stocks Rally on AI Optimism",
            source: "Bloomberg",
            date: "Nov 21, 2025",
            category: "Markets",
            excerpt: "Major technology indices surged as investors bet on continued AI-driven growth in the sector.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=600",
            url: "https://www.bloomberg.com"
        },
        {
            title: "Private Equity Firms Eye European Opportunities",
            source: "Reuters",
            date: "Nov 20, 2025",
            category: "Private Equity",
            excerpt: "Major PE firms are increasing their focus on European mid-market companies amid favorable valuations.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600",
            url: "https://www.reuters.com"
        },
        {
            title: "ESG Regulations Tighten Across EU",
            source: "Wall Street Journal",
            date: "Nov 19, 2025",
            category: "Regulation",
            excerpt: "New sustainability reporting requirements will affect thousands of companies operating in the European Union.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=600",
            url: "https://www.wsj.com"
        },
        {
            title: "Cryptocurrency Market Sees Renewed Volatility",
            source: "CNBC",
            date: "Nov 18, 2025",
            category: "Crypto",
            excerpt: "Bitcoin and major altcoins experienced significant price swings amid regulatory uncertainty.",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=60&w=600",
            url: "https://www.cnbc.com"
        },
        {
            title: "M&A Activity Picks Up in Financial Services",
            source: "Financial Times",
            date: "Nov 17, 2025",
            category: "M&A",
            excerpt: "Cross-border mergers and acquisitions in the banking sector reached a five-year high.",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=60&w=600",
            url: "https://www.ft.com"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">Financial News</h1>
                    <p className="text-gray-400 text-lg">Latest updates from global markets</p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="space-y-8">
                        {newsItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <article className="grid md:grid-cols-4 gap-6 pb-8 border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-colors p-4 -m-4">
                                    <div className="md:col-span-1">
                                        <div className="aspect-video overflow-hidden bg-[#042440]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-3">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-xs uppercase tracking-wider text-gray-500">{item.category}</span>
                                            <span className="text-xs text-gray-600">•</span>
                                            <span className="text-xs text-gray-500">{item.source}</span>
                                            <span className="text-xs text-gray-600">•</span>
                                            <span className="text-xs text-gray-500">{item.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-gray-300 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.excerpt}
                                        </p>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
