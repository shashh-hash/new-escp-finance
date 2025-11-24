import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ site: [], global: [], suggestions: [] });
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [showAIResponse, setShowAIResponse] = useState(false);
    const [aiResponse, setAIResponse] = useState('');
    const inputRef = useRef(null);

    // Site content database
    const siteContent = {
        articles: [
            {
                title: "The Future of Sustainable Finance: ESG in 2024",
                excerpt: "Exploring how ESG criteria are reshaping investment strategies and corporate governance in the modern financial landscape.",
                category: "Articles",
                url: "/articles/sustainable-finance-esg-2024",
                keywords: ["ESG", "sustainable", "finance", "investing", "climate", "environment", "green", "impact"]
            },
            {
                title: "Blockchain in Banking: Beyond the Hype",
                excerpt: "A deep dive into real-world applications of blockchain technology in traditional banking systems.",
                category: "Articles",
                url: "/articles/blockchain-banking-revolution",
                keywords: ["blockchain", "banking", "technology", "crypto", "DeFi", "tokenization", "digital", "fintech"]
            },
            {
                title: "Private Equity Trends in 2025: AI and Value Creation",
                excerpt: "Analysis of emerging patterns in PE investments and what they mean for the future of capital markets.",
                category: "Articles",
                url: "/articles/private-equity-trends-2024",
                keywords: ["private equity", "PE", "AI", "investment", "value creation", "venture capital"]
            }
        ],
        pages: [
            { title: "About Us", url: "/about", keywords: ["team", "members", "club", "society", "people", "leadership"] },
            { title: "Our Mission", url: "/mission", keywords: ["mission", "vision", "goals", "purpose", "values"] },
            { title: "Financial News", url: "/news", keywords: ["news", "updates", "markets", "latest", "headlines"] },
            { title: "Contact", url: "/contact", keywords: ["contact", "email", "reach", "connect", "get in touch"] }
        ]
    };

    // Rate limiting configuration
    const RATE_LIMITS = {
        DAILY_MAX: 50, // Max requests per user per day
        MIN_INTERVAL: 3000, // Min time between requests (ms)
        DEBOUNCE_TIME: 800 // Wait time after typing (ms)
    };

    // Initialize Gemini API
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Helper to check rate limits
    const checkRateLimit = () => {
        const now = Date.now();
        const usageData = JSON.parse(localStorage.getItem('escp_ai_usage') || '{"count": 0, "lastRequest": 0, "date": 0}');

        // Reset daily count if it's a new day
        const today = new Date().setHours(0, 0, 0, 0);
        if (usageData.date !== today) {
            usageData.count = 0;
            usageData.date = today;
        }

        // Check limits
        if (usageData.count >= RATE_LIMITS.DAILY_MAX) {
            return { allowed: false, reason: "Daily limit reached. Please try again tomorrow." };
        }

        if (now - usageData.lastRequest < RATE_LIMITS.MIN_INTERVAL) {
            return { allowed: false, reason: "Please wait a moment before searching again." };
        }

        // Update usage
        usageData.count++;
        usageData.lastRequest = now;
        localStorage.setItem('escp_ai_usage', JSON.stringify(usageData));

        return { allowed: true };
    };

    // AI Finance Assistant responses (Fallback/Simulated)
    const getSimulatedResponse = (searchQuery) => {
        const lowerQuery = searchQuery.toLowerCase();
        const responses = {
            'esg': "ESG (Environmental, Social, and Governance) investing focuses on companies that meet certain sustainability criteria. Key trends in 2024 include stricter regulations (EU CSRD), anti-greenwashing measures, and increased focus on impact measurement.",
            'blockchain': "Blockchain is revolutionizing banking through tokenization of real-world assets, DeFi integration, and faster cross-border payments. By 2030, $16 trillion in assets could be tokenized.",
            'private equity': "Private equity in 2024 is characterized by AI adoption, operational value creation, and ESG integration. Deal activity is rebounding with focus on technology, healthcare, and infrastructure sectors.",
            'ai': "AI is transforming finance through predictive analytics, risk management, automated trading, and portfolio optimization. In private equity, AI helps with deal sourcing and due diligence.",
            'investing': "Smart investing in 2024 requires understanding ESG factors, technology trends, and global macro conditions. Diversification and long-term thinking are key.",
            'career': "Finance careers span investment banking, private equity, asset management, and fintech. Key skills include financial modeling, data analysis, and market understanding.",
            'interview': "To crack a finance interview: 1) Master technicals (accounting, valuation, DCF), 2) Know your 'Why Finance' story, 3) Follow market trends (inflation, rates), 4) Prepare stock pitches, and 5) Practice behavioral questions using STAR method."
        };

        for (const [key, response] of Object.entries(responses)) {
            if (lowerQuery.includes(key)) return response;
        }
        return null;
    };

    // Call Gemini API
    const getGeminiResponse = async (query) => {
        if (!apiKey) return null;

        try {
            // Dynamic import to avoid issues if package isn't installed yet
            const { GoogleGenerativeAI } = await import("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(apiKey);
            // Use gemini-1.5-flash which is faster and has better free tier availability
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `You are a helpful finance assistant for a university finance society website. 
            Answer this query concisely (max 2-3 sentences) specifically about finance/investing/economics: "${query}". 
            If the query is not related to finance, politely redirect to finance topics. 
            Keep the tone professional but accessible to students.`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error("Gemini API Error:", error);
            return null;
        }
    };

    // Smart suggestions based on query
    const getSmartSuggestions = (searchQuery) => {
        const lowerQuery = searchQuery.toLowerCase();
        const suggestionMap = {
            'esg': ['ESG regulations 2024', 'Sustainable investing strategies', 'Green bonds explained', 'Impact measurement'],
            'blockchain': ['DeFi vs traditional banking', 'Asset tokenization', 'Crypto regulations', 'Smart contracts'],
            'private': ['PE deal structures', 'Value creation strategies', 'Due diligence process', 'Exit strategies'],
            'ai': ['AI in trading', 'Machine learning finance', 'Algorithmic investing', 'AI risk management'],
            'market': ['Market analysis 2024', 'Stock valuation', 'Economic indicators', 'Investment opportunities'],
            'invest': ['Portfolio diversification', 'Risk management', 'Asset allocation', 'Investment strategies'],
            'interview': ['Technical interview questions', 'Valuation methods', 'Market trends 2024', 'Stock pitch tips']
        };

        for (const [key, sug] of Object.entries(suggestionMap)) {
            if (lowerQuery.includes(key)) return sug;
        }

        return ['ESG investing trends', 'Blockchain in finance', 'Private equity strategies', 'Market analysis'];
    };

    // ... existing useEffects ...

    const performSearch = async () => {
        if (!query.trim()) {
            setResults({ site: [], global: [], suggestions: [] });
            setShowAIResponse(false);
            return;
        }

        setLoading(true);
        setShowAIResponse(true);

        // 1. Get local results immediately
        const siteResults = searchSite(query);
        const suggestions = getSmartSuggestions(query);

        // 2. Try to get AI response
        let aiResp = null;

        // Only try Gemini if we have a key
        if (apiKey) {
            const limitCheck = checkRateLimit();
            if (limitCheck.allowed) {
                try {
                    aiResp = await getGeminiResponse(query);
                } catch (err) {
                    console.error("Gemini API failed, falling back to simulation:", err);
                }
            } else {
                console.warn("Rate limit reached:", limitCheck.reason);
            }
        }

        // 3. Fallback to simulated response if no key, API failed, or rate limited
        if (!aiResp) {
            console.log("Using simulated response fallback");
            aiResp = getSimulatedResponse(query);

            // If still no response (query not in simulated DB), give a generic helpful response
            if (!aiResp) {
                aiResp = `I can help you explore "${query}" in the context of finance. I've found relevant articles and resources below. Our site covers ESG investing, blockchain technology, private equity trends, and more.`;
            }
        }

        // 4. Get global results
        const globalResults = await searchGlobal(query);

        setResults({
            site: siteResults,
            global: globalResults,
            suggestions: suggestions
        });
        setAIResponse(aiResp);
        setLoading(false);
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query) performSearch();
        }, RATE_LIMITS.DEBOUNCE_TIME); // Increased debounce time

        return () => clearTimeout(debounce);
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        performSearch();
    };

    const quickSearches = [
        { q: 'ESG investing', icon: '🌱' },
        { q: 'Blockchain finance', icon: '⛓️' },
        { q: 'Private equity', icon: '💼' },
        { q: 'Market trends', icon: '📈' },
        { q: 'AI in finance', icon: '🤖' },
        { q: 'Our team', icon: '👥' }
    ];

    const filteredResults = () => {
        if (activeTab === 'site') return results.site;
        if (activeTab === 'global') return results.global;
        return [...results.site, ...results.global];
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-12 px-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl bg-[#042440] border border-white/10 shadow-2xl max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="border-b border-white/10 p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#C5A059] to-[#b08d4d] rounded-full flex items-center justify-center">
                            <span className="text-2xl">🤖</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-light text-white">Finance AI Assistant</h2>
                            <p className="text-xs text-gray-400">Your personal finance research companion</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask me anything about finance..."
                            className="w-full px-6 py-4 bg-[#051C2C] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors text-lg rounded-lg"
                        />
                        {loading && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#C5A059] border-t-transparent"></div>
                            </div>
                        )}
                    </form>

                    {query && (
                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 text-sm rounded-full transition-colors ${activeTab === 'all'
                                    ? 'bg-[#C5A059] text-white font-medium'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                    }`}
                            >
                                All ({results.site.length + results.global.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('site')}
                                className={`px-4 py-2 text-sm rounded-full transition-colors ${activeTab === 'site'
                                    ? 'bg-[#C5A059] text-white font-medium'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                    }`}
                            >
                                Our Site ({results.site.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('global')}
                                className={`px-4 py-2 text-sm rounded-full transition-colors ${activeTab === 'global'
                                    ? 'bg-[#C5A059] text-white font-medium'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                    }`}
                            >
                                Global ({results.global.length})
                            </button>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {!query ? (
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                                <span>✨</span> QUICK SEARCHES
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {quickSearches.map((search, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setQuery(search.q)}
                                        className="px-4 py-3 bg-[#051C2C] text-gray-300 text-sm hover:bg-white/10 transition-colors border border-white/10 rounded-lg text-left flex items-center gap-3"
                                    >
                                        <span className="text-2xl">{search.icon}</span>
                                        <span>{search.q}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 rounded-lg">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    <strong className="text-[#C5A059]">💡 Tip:</strong> Ask me about ESG investing, blockchain technology, private equity trends, market analysis, or anything finance-related. I'll provide intelligent insights and relevant resources!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* AI Response */}
                            {showAIResponse && aiResponse && (
                                <div className="p-5 bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/30 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#C5A059] rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg">🤖</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-[#C5A059] mb-2">AI Insight</h4>
                                            <p className="text-sm text-gray-200 leading-relaxed">{aiResponse}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Smart Suggestions */}
                            {results.suggestions.length > 0 && (
                                <div>
                                    <h4 className="text-xs font-medium text-gray-400 mb-3">RELATED TOPICS</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {results.suggestions.map((sug, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setQuery(sug)}
                                                className="px-3 py-1 bg-[#051C2C] text-gray-300 text-xs hover:bg-[#C5A059] hover:text-white transition-colors border border-white/10 rounded-full"
                                            >
                                                {sug}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Results */}
                            {filteredResults().length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-400">No results found for "{query}"</p>
                                    <p className="text-sm text-gray-500 mt-2">Try different keywords or explore our quick searches</p>
                                </div>
                            ) : (
                                <div>
                                    <h4 className="text-xs font-medium text-gray-400 mb-3">SEARCH RESULTS</h4>
                                    <div className="space-y-3">
                                        {filteredResults().map((result, idx) => (
                                            result.type === 'global' ? (
                                                <a
                                                    key={idx}
                                                    href={result.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block p-4 bg-[#051C2C] hover:bg-white/5 transition-colors border border-white/10 rounded-lg group"
                                                >
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h3 className="text-base font-medium text-white group-hover:text-[#C5A059] transition-colors flex-1">
                                                            {result.title}
                                                        </h3>
                                                        <svg className="w-4 h-4 text-gray-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-sm text-gray-400 mb-2">{result.excerpt}</p>
                                                    <span className="text-xs text-[#C5A059]">{result.source}</span>
                                                </a>
                                            ) : (
                                                <Link
                                                    key={idx}
                                                    to={result.url}
                                                    onClick={onClose}
                                                    className="block p-4 bg-[#051C2C] hover:bg-white/5 transition-colors border border-white/10 rounded-lg group"
                                                >
                                                    <h3 className="text-base font-medium text-white group-hover:text-[#C5A059] transition-colors mb-2">
                                                        {result.title}
                                                    </h3>
                                                    {result.excerpt && (
                                                        <p className="text-sm text-gray-400 mb-2">{result.excerpt}</p>
                                                    )}
                                                    <span className="text-xs text-[#C5A059]">{result.category}</span>
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 p-4 bg-[#051C2C] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Powered by</span>
                        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded border border-blue-500/30">
                            <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Gemini AI
                            </span>
                        </div>
                        {/* Debug Indicator: Green = Key Present, Red = Key Missing */}
                        <div
                            className={`w-1.5 h-1.5 rounded-full ${apiKey ? 'bg-green-500' : 'bg-red-500'}`}
                            title={apiKey ? "AI Active" : "AI Inactive (No Key)"}
                        />
                    </div>
                    <p className="text-xs text-gray-500">
                        Press <kbd className="px-2 py-1 bg-white/10 rounded ml-1">ESC</kbd> to close
                    </p>
                </div>
            </div>
        </div>
    );
}
