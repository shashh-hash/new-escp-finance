import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlesPage() {
    const articles = [
        {
            title: "The Future of Sustainable Finance",
            excerpt: "Exploring how ESG criteria are reshaping investment strategies and corporate governance in the modern financial landscape.",
            category: "Sustainability",
            author: "Luca Citton",
            date: "Nov 20, 2025",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600"
        },
        {
            title: "Blockchain in Banking: Beyond the Hype",
            excerpt: "A deep dive into real-world applications of blockchain technology in traditional banking systems.",
            category: "Technology",
            author: "Francesco Kaitsas",
            date: "Nov 18, 2025",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=60&w=600"
        },
        {
            title: "Private Equity Trends in 2025",
            excerpt: "Analysis of emerging patterns in PE investments and what they mean for the future of capital markets.",
            category: "Markets",
            author: "Francesco Baci Paci",
            date: "Nov 15, 2025",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=600"
        },
        {
            title: "Central Bank Digital Currencies: A New Era",
            excerpt: "Understanding the implications of CBDCs on monetary policy and the global financial system.",
            category: "Policy",
            author: "Federico Furioso",
            date: "Nov 12, 2025",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=60&w=600"
        },
        {
            title: "Risk Management in Volatile Markets",
            excerpt: "Strategies for navigating uncertainty and protecting portfolios during economic turbulence.",
            category: "Risk",
            author: "Giovanni Ciccarello",
            date: "Nov 10, 2025",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=60&w=600"
        },
        {
            title: "The Rise of Fintech in Europe",
            excerpt: "How European fintech startups are challenging traditional banking and reshaping financial services.",
            category: "Fintech",
            author: "Giorgio Gheorghis Tsingros",
            date: "Nov 8, 2025",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=60&w=600"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">Articles</h1>
                    <p className="text-gray-400 text-lg">Insights and analysis from our team</p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, idx) => (
                            <article key={idx} className="group cursor-pointer">
                                <div className="aspect-video mb-4 overflow-hidden bg-[#042440]">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="mb-3">
                                    <span className="text-xs uppercase tracking-wider text-gray-500">{article.category}</span>
                                </div>
                                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gray-300 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{article.author}</span>
                                    <span>{article.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
