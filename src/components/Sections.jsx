import React from 'react';
import { Link } from 'react-router-dom';
import { articles, newsItems, leadershipTeam } from '../data/siteData';

export default function Sections() {
    return (
        <>
            {/* Mission Section */}
            <section className="text-white py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container mx-auto px-8 text-center">
                    <h2 className="font-serif text-3xl mb-6">Our Mission</h2>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed font-light">
                        "ESCP Students for Finance is an association born with the purpose of creating a network of students and young professionals interested in the different branches of finance. The association will serve the scope of preparing students with a deeper understanding of financial concepts, including investing, personal finance, and current economics events."
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-serif text-3xl mb-6 text-white">About the Society</h2>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        Founded in 2025 at the ESCP Turin Campus, we are a student-led organization dedicated to fostering a deep understanding of the financial industry. We provide a platform for students to engage with industry professionals, participate in workshops, and publish cutting-edge research.
                    </p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-3xl font-serif" style={{ color: 'var(--color-text)' }}>40+</span>
                            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Members</span>
                        </div>
                        <div className="w-px" style={{ backgroundColor: 'var(--color-text-secondary)', opacity: 0.3 }}></div>
                        <div className="text-center">
                            <span className="block text-3xl font-serif" style={{ color: 'var(--color-text)' }}>7+</span>
                            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Divisions</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Team working" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
            </section>

            {/* Latest Articles */}
            <section className="container mx-auto px-8 py-16 border-t border-gray-200">
                <div className="flex justify-between items-baseline mb-2">
                    <h2 className="font-serif text-3xl">Latest Articles</h2>
                    <Link
                        to="/articles"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                        View all →
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {articles.slice(0, 2).map((article, idx) => (
                        <Link
                            key={idx}
                            to={`/articles/${article.slug}`}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-gray-200 mb-4 overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 uppercase tracking-widest border border-white/20">
                                    {article.category}
                                </div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <span className="text-gray-400 text-xs block mb-2">{article.date}</span>
                            {article.series && (
                                <span className="text-gray-400 text-sm block mb-2">{article.series}</span>
                            )}
                            <h3 className="font-serif text-xl group-hover:text-white transition-colors leading-tight">
                                {article.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Latest News */}
            <section className="container mx-auto px-8 py-16 border-t border-gray-200">
                <div className="flex justify-between items-baseline mb-8">
                    <h2 className="font-serif text-3xl">Latest News</h2>
                    <Link
                        to="/news"
                        className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                        View all →
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {newsItems.slice(0, 3).map((news, idx) => (
                        <a
                            key={idx}
                            href={news.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer"
                        >
                            <div className="h-48 bg-gray-200 mb-4 overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-[#051C2C] text-white text-xs px-3 py-1 uppercase tracking-widest">
                                    {news.category}
                                </div>
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <span className="text-gray-400 text-xs block mb-2">{news.source} • {news.date}</span>
                            <h3 className="font-serif text-lg group-hover:text-white transition-colors leading-tight">
                                {news.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </section>



            {/* Contact Section */}
            <section className="bg-[#2C2C2C] text-white py-16">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="font-serif text-3xl mb-4">Get in Touch</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Interested in partnering with us or joining the team? Send us an email or follow us on social media.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold transition-colors border border-white/30 hover:border-white/50"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
