import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '6,124.50', change: '+0.45%', positive: true },
        { symbol: 'NASDAQ', value: '19,845.20', change: '+0.82%', positive: true },
        { symbol: 'DOW', value: '44,205.10', change: '+0.15%', positive: true },
        { symbol: 'EUR/USD', value: '1.1240', change: '-0.12%', positive: false },
        { symbol: 'GBP/USD', value: '1.3150', change: '+0.05%', positive: true },
        { symbol: 'USD/JPY', value: '142.50', change: '-0.25%', positive: false },
        { symbol: 'GOLD', value: '$2,850.00', change: '+1.10%', positive: true },
        { symbol: 'OIL', value: '$72.30', change: '-0.50%', positive: false },
        { symbol: 'BTC', value: '$105,420', change: '+2.80%', positive: true }
    ]);

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // More realistic random walk
                    const volatility = stock.symbol === 'BTC' ? 0.002 : 0.0005; // BTC is more volatile
                    const randomMove = (Math.random() - 0.5) * volatility;

                    let currentValue = parseFloat(stock.value.replace(/[$,]/g, ''));
                    const newValue = currentValue * (1 + randomMove);

                    // Update change percentage
                    const currentChange = parseFloat(stock.change.replace('%', ''));
                    const newChange = (currentChange + (randomMove * 100)).toFixed(2);
                    const isPositive = newChange >= 0;

                    // Format value based on symbol
                    let formattedValue;
                    if (stock.symbol.includes('USD') || stock.symbol.includes('EUR') || stock.symbol.includes('GBP') || stock.symbol.includes('JPY')) {
                        formattedValue = newValue.toFixed(4);
                    } else if (stock.symbol === 'GOLD' || stock.symbol === 'OIL') {
                        formattedValue = '$' + newValue.toFixed(2);
                    } else if (stock.symbol === 'BTC') {
                        formattedValue = '$' + Math.round(newValue).toLocaleString();
                    } else {
                        formattedValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }

                    return {
                        ...stock,
                        value: formattedValue,
                        change: `${isPositive ? '+' : ''}${newChange}%`,
                        positive: isPositive
                    };
                })
            );
        }, 2000); // Update every 2 seconds for livelier feel

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black border-y border-gray-800 py-2 overflow-hidden">
            <div className="ticker-wrapper">
                <div className="ticker-content">
                    {/* Duplicate the stocks array to create seamless loop */}
                    {[...stocks, ...stocks].map((stock, idx) => (
                        <div key={idx} className="ticker-item inline-flex items-center px-6 whitespace-nowrap">
                            <span className="text-gray-400 text-sm font-medium mr-2">{stock.symbol}</span>
                            <span className="text-white text-sm font-bold mr-2">{stock.value}</span>
                            <span className={`text-sm font-medium ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.positive ? '↑' : '↓'} {stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .ticker-wrapper {
                    overflow: hidden;
                }
                .ticker-content {
                    display: inline-flex;
                    animation: scroll 60s linear infinite;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .ticker-content:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
