import React, { useState, useEffect } from 'react';

export default function StockTicker() {
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: '5,980.00', change: '+0.45%', positive: true, type: 'index', apiSymbol: 'SPY' },
        { symbol: 'NASDAQ', value: '19,000.00', change: '+0.82%', positive: true, type: 'index', apiSymbol: 'QQQ' },
        { symbol: 'DOW', value: '44,700.00', change: '+0.15%', positive: true, type: 'index', apiSymbol: 'DIA' },
        { symbol: 'EUR/USD', value: '1.0480', change: '-0.12%', positive: false, type: 'forex', forexKey: 'EUR' },
        { symbol: 'GBP/USD', value: '1.2580', change: '+0.05%', positive: true, type: 'forex', forexKey: 'GBP' },
        { symbol: 'USD/JPY', value: '154.20', change: '-0.25%', positive: false, type: 'forex', forexKey: 'JPY' },
        { symbol: 'GOLD', value: '$2,650.00', change: '+1.10%', positive: true, type: 'commodity', apiSymbol: 'GLD' },
        { symbol: 'SILVER', value: '$31.50', change: '+0.80%', positive: true, type: 'commodity', apiSymbol: 'SLV' },
        { symbol: 'OIL', value: '$69.00', change: '-0.50%', positive: false, type: 'commodity', apiSymbol: 'USO' },
        { symbol: 'BTC', value: '$98,000', change: '+2.80%', positive: true, type: 'crypto', apiSymbol: 'BTCUSD' }
    ]);

    const ALPHA_VANTAGE_KEY = 'NOX2Z63WS5P8KKHH';

    // Fetch all data from Alpha Vantage
    useEffect(() => {
        const fetchAllData = async () => {
            const symbols = stocks.filter(s => s.apiSymbol).map(s => s.apiSymbol);

            for (let i = 0; i < symbols.length; i++) {
                const symbol = symbols[i];

                // Wait 12 seconds between requests to respect rate limits
                if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, 12000));
                }

                try {
                    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`;
                    const response = await fetch(url);
                    const data = await response.json();

                    if (data['Global Quote'] && data['Global Quote']['05. price']) {
                        const quote = data['Global Quote'];
                        const price = parseFloat(quote['05. price']);
                        const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));

                        setStocks(prev => prev.map(stock => {
                            if (stock.apiSymbol === symbol) {
                                let displayValue = price;

                                // Scale ETF prices to approximate index/commodity values
                                if (stock.symbol === 'S&P 500') displayValue = price * 10;
                                else if (stock.symbol === 'NASDAQ') displayValue = price * 40;
                                else if (stock.symbol === 'DOW') displayValue = price * 100;
                                else if (stock.symbol === 'GOLD') displayValue = price * 10;
                                // SILVER (SLV), OIL (USO), BTC use direct price

                                const formattedValue = stock.type === 'commodity' || stock.type === 'crypto'
                                    ? '$' + (stock.type === 'crypto' ? Math.round(displayValue).toLocaleString() : displayValue.toFixed(2))
                                    : displayValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                                return {
                                    ...stock,
                                    value: formattedValue,
                                    change: `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
                                    positive: changePercent >= 0
                                };
                            }
                            return stock;
                        }));
                    }
                } catch (err) {
                    console.log(`Alpha Vantage fetch failed for ${symbol}:`, err);
                }
            }
        };

        // Fetch forex data separately (still works well)
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
                                value: rate.toFixed(4),
                                change: stock.change, // Keep existing change for now
                                positive: stock.positive
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Forex fetch failed:", err);
            }
        };

        // Initial fetch
        fetchAllData();
        fetchForex();

        // Set up intervals
        const alphaInterval = setInterval(fetchAllData, 300000); // Every 5 minutes
        const forexInterval = setInterval(fetchForex, 300000); // Every 5 minutes

        return () => {
            clearInterval(alphaInterval);
            clearInterval(forexInterval);
        };
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
