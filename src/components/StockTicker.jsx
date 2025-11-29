import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '5,980.00', change: '+0.45%', positive: true, type: 'index' },
        { symbol: 'NASDAQ', value: '19,000.00', change: '+0.82%', positive: true, type: 'index' },
        { symbol: 'DOW', value: '44,700.00', change: '+0.15%', positive: true, type: 'index' },
        { symbol: 'EUR/USD', value: '1.0480', change: '-0.12%', positive: false, type: 'forex', forexKey: 'EUR' },
        { symbol: 'GBP/USD', value: '1.2580', change: '+0.05%', positive: true, type: 'forex', forexKey: 'GBP' },
        { symbol: 'USD/JPY', value: '154.20', change: '-0.25%', positive: false, type: 'forex', forexKey: 'JPY' },
        { symbol: 'GOLD', value: '$2,650.00', change: '+1.10%', positive: true, type: 'commodity', metalKey: 'gold' },
        { symbol: 'SILVER', value: '$31.50', change: '+0.80%', positive: true, type: 'commodity', metalKey: 'silver' },
        { symbol: 'OIL', value: '$69.00', change: '-0.50%', positive: false, type: 'commodity' },
        { symbol: 'BTC', value: '$98,000', change: '+2.80%', positive: true, type: 'crypto', id: 'bitcoin' }
    ]);
    const [prevForexRates, setPrevForexRates] = useState({});
    const [prevMetalPrices, setPrevMetalPrices] = useState({});

    // Helper to get correct URL based on environment
    const getApiUrl = (type) => {
        const isDev = import.meta.env.DEV;
        switch (type) {
            case 'crypto':
                return isDev
                    ? '/api/crypto/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
                    : 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true';
            case 'forex':
                return isDev
                    ? '/api/forex/v4/latest/USD'
                    : 'https://api.exchangerate-api.com/v4/latest/USD';
            case 'metals':
                return isDev
                    ? '/api/metals/v1/latest?api_key=7TZ027KOPOCLBFSWXOSP288SWXOSP&currency=USD&unit=toz'
                    : 'https://api.metals.dev/v1/latest?api_key=7TZ027KOPOCLBFSWXOSP288SWXOSP&currency=USD&unit=toz';
            default:
                return '';
        }
    };

    // Fetch real crypto prices
    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const response = await fetch(getApiUrl('crypto'));
                const data = await response.json();

                if (data.bitcoin) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.id === 'bitcoin') {
                            const price = data.bitcoin.usd;
                            const change = data.bitcoin.usd_24h_change;
                            return {
                                ...stock,
                                value: '$' + Math.round(price).toLocaleString(),
                                change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
                                positive: change >= 0,
                                type: 'crypto',
                                id: 'bitcoin'
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Crypto fetch failed, using simulation");
            }
        };

        fetchCrypto();
        const cryptoInterval = setInterval(fetchCrypto, 60000); // Fetch every minute

        return () => clearInterval(cryptoInterval);
    }, []);

    // Fetch real forex rates
    useEffect(() => {
        const fetchForex = async () => {
            try {
                const response = await fetch(getApiUrl('forex'));
                const data = await response.json();

                if (data.rates) {
                    setPrevForexRates(prevRates => {
                        const newStocks = [];
                        setStocks(prev => prev.map(stock => {
                            if (stock.type === 'forex' && stock.forexKey) {
                                const rate = stock.forexKey === 'JPY'
                                    ? data.rates[stock.forexKey]
                                    : 1 / data.rates[stock.forexKey];

                                // Calculate change from previous rate
                                const prevRate = prevRates[stock.forexKey];
                                let changePercent = 0;
                                if (prevRate) {
                                    changePercent = ((rate - prevRate) / prevRate) * 100;
                                }

                                return {
                                    ...stock,
                                    value: rate.toFixed(4),
                                    change: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
                                    positive: changePercent >= 0
                                };
                            }
                            return stock;
                        }));

                        // Update previous rates for next comparison
                        const newRates = { ...prevRates };
                        Object.keys(data.rates).forEach(key => {
                            if (['EUR', 'GBP', 'JPY'].includes(key)) {
                                newRates[key] = key === 'JPY' ? data.rates[key] : 1 / data.rates[key];
                            }
                        });
                        return newRates;
                    });
                }
            } catch (err) {
                console.log("Forex fetch failed:", err);
                console.log("Using fallback for forex rates");
            }
        };

        fetchForex();
        const forexInterval = setInterval(fetchForex, 300000); // Fetch every 5 minutes

        return () => clearInterval(forexInterval);
    }, []);

    // Fetch real metal prices from Metals.dev
    useEffect(() => {
        const fetchMetals = async () => {
            try {
                const response = await fetch(getApiUrl('metals'));
                const data = await response.json();

                if (data.status === 'success' && data.metals) {
                    setPrevMetalPrices(prevPrices => {
                        setStocks(prev => prev.map(stock => {
                            if (stock.type === 'commodity' && stock.metalKey) {
                                const price = data.metals[stock.metalKey];

                                // Calculate change from previous price
                                const prevPrice = prevPrices[stock.metalKey];
                                let changePercent = 0;
                                if (prevPrice) {
                                    changePercent = ((price - prevPrice) / prevPrice) * 100;
                                }

                                return {
                                    ...stock,
                                    value: '$' + price.toFixed(2),
                                    change: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
                                    positive: changePercent >= 0
                                };
                            }
                            return stock;
                        }));

                        // Update previous prices for next comparison
                        const newPrices = { ...prevPrices };
                        if (data.metals.gold) newPrices.gold = data.metals.gold;
                        if (data.metals.silver) newPrices.silver = data.metals.silver;
                        return newPrices;
                    });
                }
            } catch (err) {
                console.log("Metals fetch failed:", err);
                console.log("Using fallback for metal prices");
            }
        };

        fetchMetals();
        const metalsInterval = setInterval(fetchMetals, 300000); // Fetch every 5 minutes

        return () => clearInterval(metalsInterval);
    }, []);

    // Simulate real-time updates for non-fetched assets
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // Skip crypto, forex, and metals fetched from APIs
                    if (stock.type === 'crypto' || stock.type === 'forex' || stock.metalKey) return stock;

                    // Realistic random walk for indices and oil
                    const volatility = 0.0002;
                    const randomMove = (Math.random() - 0.5) * volatility;

                    let currentValue = parseFloat(stock.value.replace(/[$,]/g, ''));
                    const newValue = currentValue * (1 + randomMove);

                    // Update change percentage slightly
                    const currentChange = parseFloat(stock.change.replace('%', ''));
                    const newChange = (currentChange + (randomMove * 100)).toFixed(2);
                    const isPositive = newChange >= 0;

                    // Format value based on symbol
                    let formattedValue;
                    if (stock.type === 'forex') {
                        formattedValue = newValue.toFixed(4);
                    } else if (stock.type === 'commodity') {
                        formattedValue = '$' + newValue.toFixed(2);
                    } else if (stock.type === 'index') {
                        formattedValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    } else {
                        formattedValue = newValue.toLocaleString('en-US');
                    }

                    return {
                        ...stock,
                        value: formattedValue,
                        change: `${isPositive ? '+' : ''}${newChange}%`,
                        positive: isPositive
                    };
                })
            );
        }, 3000);

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
