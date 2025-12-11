import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { articles, teamSections } from '../data/siteData';

export default function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ site: [], global: [] });
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAIResponse] = useState('');
    const inputRef = useRef(null);

    // Dynamic placeholder text
    const placeholders = [
        "Search articles, team, or ask anything...",
        "Try 'ESG investing' or 'blockchain'...",
        "Ask about finance trends...",
        "Search for team members..."
    ];
    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            // Rotate placeholder every 3 seconds with animation
            let index = 0;
            const interval = setInterval(() => {
                index = (index + 1) % placeholders.length;
                setPlaceholder(placeholders[index]);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isOpen]);

    // Flatten team members from all sections
    const allTeamMembers = teamSections.flatMap(section =>
        section.members.map(member => ({
            ...member,
            title: member.name, // Map name to title for consistency
            url: '/team'
        }))
    );

    // Site content database
    const siteContent = {
        articles: articles.map(article => ({
            ...article,
            url: `/articles/${article.slug}`,
            keywords: [article.category, ...(article.keywords || [])]
        })),
        pages: [
            { title: "About Us", url: "/about", keywords: ["about", "mission"] },
            { title: "Our Team", url: "/team", keywords: ["team", "members"] },
            { title: "Our Mission", url: "/mission", keywords: ["mission", "vision"] },
            { title: "Financial News", url: "/news", keywords: ["news", "updates"] },
            { title: "Contact", url: "/contact", keywords: ["contact", "email"] }
        ],
        team: allTeamMembers
    };

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const getSimulatedResponse = (searchQuery) => {
        const lowerQuery = searchQuery.toLowerCase();
        const responses = {
            'esg': "ESG (Environmental, Social, and Governance) investing focuses on companies that meet certain sustainability criteria. Key trends in 2024 include stricter regulations, anti-greenwashing measures, and increased focus on impact measurement.",
            'blockchain': "Blockchain is revolutionizing banking through tokenization of real-world assets, DeFi integration, and faster cross-border payments. By 2030, $16 trillion in assets could be tokenized.",
            'private equity': "Private equity in 2024 is characterized by AI adoption, operational value creation, and ESG integration. Deal activity is rebounding with focus on technology, healthcare, and infrastructure sectors.",
            'pfizer': "Pfizer recently acquired Metsera for nearly $10 billion, entering the anti-obesity drug market. This strategic move positions Pfizer to compete with industry leaders like Novo Nordisk and Eli Lilly in the growing obesity treatment market."
        };

        for (const [key, response] of Object.entries(responses)) {
            if (lowerQuery.includes(key)) return response;
        }
        return null;
    };

    const getGeminiResponse = async (query) => {
        if (!apiKey) return null;
        try {
            const { GoogleGenerativeAI } = await import("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const prompt = `You are an expert financial analyst. Provide a concise, insightful answer to: "${query}". Keep it under 100 words, sophisticated yet accessible.`;

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), 8000)
            );

            const result = await Promise.race([model.generateContent(prompt), timeoutPromise]);
            const response = await result.response;
            return response.text();
        } catch (error) {
            return null;
        }
    };

    const searchSite = (searchQuery) => {
        const lowerQuery = searchQuery.toLowerCase();
        const results = [];

        siteContent.articles.forEach(article => {
            if (article.title.toLowerCase().includes(lowerQuery) ||
                article.excerpt.toLowerCase().includes(lowerQuery) ||
                (article.keywords && article.keywords.some(k => k.toLowerCase().includes(lowerQuery)))) {
                results.push({ ...article, type: 'site' });
            }
        });

        siteContent.pages.forEach(page => {
            if (page.title.toLowerCase().includes(lowerQuery) ||
                page.keywords.some(k => k.toLowerCase().includes(lowerQuery))) {
                results.push({ ...page, type: 'site', excerpt: `Visit our ${page.title} page` });
            }
        });

        siteContent.team.forEach(member => {
            if (member.title.toLowerCase().includes(lowerQuery) ||
                member.role.toLowerCase().includes(lowerQuery)) {
                results.push({ ...member, type: 'site', excerpt: member.role });
            }
        });

        return results;
    };

    const performSearch = async () => {
        if (!query.trim()) {
            setResults({ site: [], global: [] });
            setAIResponse('');
            return;
        }

        setLoading(true);
        const siteResults = searchSite(query);
        setResults({ site: siteResults, global: [] });

        // Get AI response
        let aiResp = await getGeminiResponse(query);
        if (!aiResp) {
            aiResp = getSimulatedResponse(query);
            if (!aiResp && siteResults.length === 0) {
                // Only show generic AI response if no site results found either
                aiResp = `I can help you explore "${query}" in the context of finance. Check the results below for relevant articles and resources.`;
            }
        }
        setAIResponse(aiResp);
        setLoading(false);
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query) performSearch();
        }, 500);
        return () => clearTimeout(debounce);
    }, [query]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl">
                {/* Search Input */}
                <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-6 py-5 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg transition-opacity duration-500"
                        />
                        {loading && (
                            <div className="absolute right-6 top-1/2 -translate-y-1/2">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                            </div>
                        )}
                    </div>

                    {/* Results */}
                    {query && (
                        <div className="border-t border-white/10 max-h-[60vh] overflow-y-auto">
                            {/* AI Response */}
                            {aiResponse && (
                                <div className="p-4 bg-white/5 border-b border-white/10">
                                    <div className="text-sm text-gray-300 leading-relaxed">
                                        <ReactMarkdown>{aiResponse}</ReactMarkdown>
                                    </div>
                                </div>
                            )}

                            {/* Site Results */}
                            {results.site.length > 0 ? (
                                <div className="py-2">
                                    {results.site.map((result, idx) => (
                                        <Link
                                            key={idx}
                                            to={result.url}
                                            onClick={onClose}
                                            className="block px-6 py-3 hover:bg-white/5 transition-colors"
                                        >
                                            <h3 className="text-white font-medium mb-1">{result.title}</h3>
                                            {result.excerpt && (
                                                <p className="text-sm text-gray-400">{result.excerpt}</p>
                                            )}
                                            {result.category && (
                                                <span className="text-xs text-gray-500 mt-1 inline-block">{result.category}</span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                !loading && !aiResponse && (
                                    <div className="p-8 text-center text-gray-500">
                                        No results found
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span>Powered by</span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-blue-500/30">
                        <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Gemini
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
