import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '5,980.00', change: '+0.45%', positive: true, type: 'index' },
        { symbol: 'NASDAQ', value: '19,000.00', change: '+0.82%', positive: true, type: 'index' },
        { symbol: 'DOW', value: '44,700.00', change: '+0.15%', positive: true, type: 'index' },
        { symbol: 'EUR/USD', value: '1.0480', change: '-0.12%', positive: false, type: 'forex', forexKey: 'EUR' },
        { symbol: 'GBP/USD', value: '1.2580', change: '+0.05%', positive: true, type: 'forex', forexKey: 'GBP' },
        { symbol: 'USD/JPY', value: '154.20', change: '-0.25%', positive: false, type: 'forex', forexKey: 'JPY' },
        { symbol: 'GOLD', value: '$2,650.00', change: '+1.10%', positive: true, type: 'commodity' },
        { symbol: 'OIL', value: '$69.00', change: '-0.50%', positive: false, type: 'commodity' },
        { symbol: 'BTC', value: '$98,000', change: '+2.80%', positive: true, type: 'crypto', id: 'bitcoin' }
    ]);
    const [prevForexRates, setPrevForexRates] = useState({});

    // Fetch real crypto prices
    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
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
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();

                if (data.rates) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'forex' && stock.forexKey) {
                            const rate = stock.forexKey === 'JPY'
                                ? data.rates[stock.forexKey]
                                : 1 / data.rates[stock.forexKey];

                            // Calculate change from previous rate
                            const prevRate = prevForexRates[stock.forexKey];
                            let changePercent = 0;
                            if (prevRate) {
                                changePercent = ((rate - prevRate) / prevRate) * 100;
                            }

                            // Update previous rates
                            setPrevForexRates(p => ({ ...p, [stock.forexKey]: rate }));

                            return {
                                ...stock,
                                value: rate.toFixed(4),
                                change: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
                                positive: changePercent >= 0
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Forex fetch failed, using simulation");
            }
        };

        fetchForex();
        const forexInterval = setInterval(fetchForex, 300000); // Fetch every 5 minutes

        return () => clearInterval(forexInterval);
    }, [prevForexRates]);

    // Simulate real-time updates for non-fetched assets
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // Skip crypto and forex as we're fetching them
                    if (stock.type === 'crypto' || stock.type === 'forex') return stock;

                    // Realistic random walk
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
