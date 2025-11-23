import React, { useState } from 'react';

export default function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState('');

    const searchData = [
        { type: 'Article', title: 'The Rise of Private Credit in Europe', category: 'Markets', date: '20.11.2025' },
        { type: 'Article', title: 'Fintech Valuation Trends: A 2025 Outlook', category: 'Tech', date: '15.11.2025' },
        { type: 'News', title: 'Applications for Spring 2026 Analyst Class', category: 'Announcement', date: '18.11.2025' },
        { type: 'News', title: 'Turin Finance Summit Recap', category: 'Event', date: '10.11.2025' },
        { type: 'Page', title: 'Our Mission', category: 'About' },
        { type: 'Page', title: 'Contact Us', category: 'Contact' },
    ];

    const filteredResults = query.trim()
        ? searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-start justify-center pt-20 px-4"
            onClick={onClose}>
            <div className="w-full max-w-3xl" onClick={e => e.stopPropagation()}>
                {/* Search Input */}
                <div className="bg-white dark:bg-[#042440] rounded-lg shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-4 p-6 border-b border-gray-200 dark:border-gray-700">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search articles, news, and pages..."
                            className="flex-1 bg-transparent text-xl outline-none text-gray-900 dark:text-white placeholder-gray-400"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm uppercase tracking-wider">
                            ESC
                        </button>
                    </div>

                    {/* Results */}
                    {query.trim() && (
                        <div className="max-h-[60vh] overflow-y-auto">
                            {filteredResults.length > 0 ? (
                                <div className="p-4">
                                    {filteredResults.map((result, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 hover:bg-gray-50 dark:hover:bg-[#051C2C] rounded cursor-pointer transition-colors group">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-xs uppercase tracking-widest text-[#C5A059]">
                                                    {result.type}
                                                </span>
                                                <span className="text-xs text-gray-400">{result.category}</span>
                                                {result.date && <span className="text-xs text-gray-400">{result.date}</span>}
                                            </div>
                                            <h3 className="text-lg font-serif group-hover:text-[#C5A059] transition-colors dark:text-white">
                                                {result.title}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center text-gray-400">
                                    No results found for "{query}"
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Hint */}
                <div className="text-center mt-4 text-gray-400 text-sm">
                    Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd> to close
                </div>
            </div>
        </div>
    );
}
