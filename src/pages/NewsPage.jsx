import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsItems } from '../data/siteData';

export default function NewsPage() {

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
