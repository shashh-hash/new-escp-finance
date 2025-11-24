import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '4,804.08', change: '+0.86%', positive: true },
        { symbol: 'NASDAQ', value: '15,481.92', change: '+1.24%', positive: true },
        { symbol: 'DOW', value: '37,305.16', change: '+0.58%', positive: true },
        { symbol: 'EUR/USD', value: '1.0875', change: '-0.32%', positive: false },
        { symbol: 'GBP/USD', value: '1.2654', change: '+0.15%', positive: true },
        { symbol: 'USD/JPY', value: '149.82', change: '+0.42%', positive: true },
        { symbol: 'GOLD', value: '$2,450.00', change: '+2.15%', positive: true },
        { symbol: 'OIL', value: '$78.45', change: '-1.23%', positive: false },
        { symbol: 'BTC', value: '$95,234', change: '+3.45%', positive: true }
    ]);

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // Generate random price change between -0.5% and +0.5%
                    const randomChange = (Math.random() - 0.5) * 1;
                    const currentChange = parseFloat(stock.change.replace('%', ''));
                    const newChange = (currentChange + randomChange).toFixed(2);
                    const isPositive = newChange >= 0;

                    // Update value based on change
                    let currentValue = parseFloat(stock.value.replace(/[$,]/g, ''));
                    const changePercent = randomChange / 100;
                    const newValue = currentValue * (1 + changePercent);

                    // Format value based on symbol
                    let formattedValue;
                    if (stock.symbol.includes('USD') || stock.symbol.includes('EUR') || stock.symbol.includes('GBP') || stock.symbol.includes('JPY')) {
                        formattedValue = newValue.toFixed(4);
                    } else if (stock.symbol === 'GOLD') {
                        formattedValue = '$' + newValue.toFixed(2);
                    } else if (stock.symbol === 'OIL') {
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
        }, 3000); // Update every 3 seconds

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
