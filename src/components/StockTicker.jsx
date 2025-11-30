import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '5,980.00', change: '+0.45%', positive: true, type: 'index' },
        { symbol: 'NASDAQ', value: '19,000.00', change: '+0.82%', positive: true, type: 'index' },
        { symbol: 'DOW', value: '44,700.00', change: '+0.15%', positive: true, type: 'index' },
        { symbol: 'EUR/USD', value: '1.0480', change: '-0.12%', positive: false, type: 'forex', forexKey: 'EUR' },
        { symbol: 'GBP/USD', value: '1.2580', change: '+0.05%', positive: true, type: 'forex', forexKey: 'GBP' },
        { symbol: 'USD/JPY', value: '154.20', change: '-0.25%', positive: false, type: 'forex', forexKey: 'JPY' },
        { symbol: 'GOLD', value: '$2,650.00', change: '+1.10%', positive: true, type: 'metal' },
        { symbol: 'SILVER', value: '$31.50', change: '+0.80%', positive: true, type: 'metal' },
        { symbol: 'OIL', value: '$69.00', change: '-0.50%', positive: false, type: 'commodity' },
        { symbol: 'BTC', value: '$98,000', change: '+2.80%', positive: true, type: 'crypto' }
    ]);

    // Fetch Forex rates from Exchange Rate API
    useEffect(() => {
        const fetchForex = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();

                if (data.rates) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'forex' && stock.forexKey) {
                            const rate = stock.forexKey === 'JPY'
                                ? data.rates[stock.forexKey]
                                : 1 / data.rates[stock.forexKey];

                            return {
                                ...stock,
                                value: rate.toFixed(4)
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Forex API failed:", err);
            }
        };

        fetchForex();
        const interval = setInterval(fetchForex, 300000);
        return () => clearInterval(interval);
    }, []);

    // Fetch Crypto from CoinGecko API
    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
                const data = await response.json();

                if (data.bitcoin) {
                    const price = data.bitcoin.usd;
                    const change = data.bitcoin.usd_24h_change;

                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'crypto') {
                            return {
                                ...stock,
                                value: '$' + Math.round(price).toLocaleString(),
                                change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
                                positive: change >= 0
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Crypto API failed:", err);
            }
        };

        fetchCrypto();
        const interval = setInterval(fetchCrypto, 60000);
        return () => clearInterval(interval);
    }, []);

    // Fetch Metals from Metals.live API (free, no key needed)
    useEffect(() => {
        const fetchMetals = async () => {
            try {
                // Using metals-api.com free tier
                const response = await fetch('https://api.metals.live/v1/spot');
                const data = await response.json();

                if (data && data.gold && data.silver) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.symbol === 'GOLD') {
                            return {
                                ...stock,
                                value: '$' + data.gold.toFixed(2)
                            };
                        }
                        if (stock.symbol === 'SILVER') {
                            return {
                                ...stock,
                                value: '$' + data.silver.toFixed(2)
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Metals API failed:", err);
            }
        };

        fetchMetals();
        const interval = setInterval(fetchMetals, 300000);
        return () => clearInterval(interval);
    }, []);

    // Fetch Indices from Finnhub API (free tier)
    useEffect(() => {
        const fetchIndices = async () => {
            const indices = [
                { symbol: '^GSPC', name: 'S&P 500' },
                { symbol: '^IXIC', name: 'NASDAQ' },
                { symbol: '^DJI', name: 'DOW' }
            ];

            for (const index of indices) {
                try {
                    // Using Finnhub free API
                    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${index.symbol}&token=ct7ub6hr01qr6pqnvlp0ct7ub6hr01qr6pqnvlpg`);
                    const data = await response.json();

                    if (data.c) { // current price
                        const price = data.c;
                        const change = data.dp; // percent change

                        setStocks(prev => prev.map(stock => {
                            if (stock.symbol === index.name) {
                                return {
                                    ...stock,
                                    value: price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                                    change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
                                    positive: change >= 0
                                };
                            }
                            return stock;
                        }));
                    }

                    // Small delay between requests
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (err) {
                    console.log(`Finnhub API failed for ${index.name}:`, err);
                }
            }
        };

        fetchIndices();
        const interval = setInterval(fetchIndices, 300000);
        return () => clearInterval(interval);
    }, []);

    // Fetch Oil from commodities-api.com
    useEffect(() => {
        const fetchOil = async () => {
            try {
                const response = await fetch('https://api.oilpriceapi.com/v1/prices/latest');
                const data = await response.json();

                if (data && data.data && data.data.price) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'commodity' && stock.symbol === 'OIL') {
                            return {
                                ...stock,
                                value: '$' + data.data.price.toFixed(2)
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Oil API failed:", err);
            }
        };

        fetchOil();
        const interval = setInterval(fetchOil, 300000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0A1929] border-b border-white/10 overflow-hidden h-12 flex items-center relative z-20">
            <div className="ticker-wrap w-full">
                <div className="ticker">
                    {[...stocks, ...stocks].map((stock, index) => (
                        <div key={index} className="ticker-item inline-flex items-center px-6 border-r border-white/5">
                            <span className="text-gray-400 font-medium text-sm mr-3">{stock.symbol}</span>
                            <span className="text-white font-bold text-sm mr-3">{stock.value}</span>
                            <span className={`text-xs font-medium ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .ticker-wrap {
                    overflow: hidden;
                    white-space: nowrap;
                }
                .ticker {
                    display: inline-block;
                    animation: ticker 40s linear infinite;
                }
                .ticker-item {
                    display: inline-block;
                }
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
