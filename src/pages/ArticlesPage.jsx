import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticlesPage() {
    const articles = [
        {
            title: "Bending Spoons Acquires Eventbrite in a Landmark $500 Million Transaction",
            excerpt:
                "The Milan-based tech company makes a bold $500M move to acquire Eventbrite, signaling a new era of European tech consolidation.",
            category: "Tech & M&A",
            series: "Market Momentum | Week 3",
            author: "Luca Citton & Federico Furioso",
            date: "Dec 12, 2025",
            image: "/Bending-Spoons-Eventbrite.png",
            slug: "bending-spoons-eventbrite-2025"
        },
        {
            title: "S&P Downgrades Tether’s Assets to Lowest Level",
            excerpt:
                "S&P lowers its assessment of USDT’s reserves amid rising exposure to volatile assets and ongoing transparency concerns.",
            category: "Crypto & Stablecoins",
            series: "Market Momentum | Week 2",
            author: "Francesco Baci Paci & Giovanni Ciccarello",
            date: "Dec 5, 2025",
            image: "/Article-Cover-Website-SP500.webp",
            slug: "tether-sp-downgrade-2025"
        },
        {
            title: "A $10 Billion Bet: Pfizer Enters the Anti-Obesity Drug Market",
            excerpt: "Pfizer acquires Metsera for nearly $10 billion, entering the booming anti-obesity drug market and challenging industry leaders.",
            category: "Healthcare",
            series: "Market Momentum | Week 1",
            author: "Francesco Kaitsas",
            date: "Nov 28, 2025",
            image: "/pfizer-article.png",
            slug: "sustainable-finance-esg-2024"
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
                            <Link key={idx} to={`/articles/${article.slug}`} className="group">
                                <article>
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
                                    {article.series && (
                                        <div className="mb-2">
                                            <span className="text-sm font-light text-gray-400">{article.series}</span>
                                        </div>
                                    )}
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
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
