import React from 'react';

export default function StockTicker() {
    const stocks = [
        { symbol: "S&P 500", price: "4,567.80", change: "+0.45%" },
        { symbol: "NASDAQ", price: "14,220.50", change: "+0.80%" },
        { symbol: "FTSE 100", price: "7,450.20", change: "-0.12%" },
        { symbol: "CAC 40", price: "7,230.10", change: "+0.25%" },
        { symbol: "DAX", price: "16,100.40", change: "+0.35%" },
        { symbol: "EUR/USD", price: "1.0950", change: "+0.10%" },
        { symbol: "GOLD", price: "2,040.50", change: "+0.50%" },
        { symbol: "BTC/USD", price: "37,500.00", change: "+1.20%" },
    ];

    return (
        <div className="bg-black text-white text-xs py-2 overflow-hidden border-b border-gray-800 relative z-[60]">
            <div className="flex whitespace-nowrap animate-marquee">
                {/* Duplicate list for seamless loop */}
                {[...stocks, ...stocks, ...stocks].map((stock, index) => (
                    <div key={index} className="flex items-center mx-6">
                        <span className="font-bold text-gray-400 mr-2">{stock.symbol}</span>
                        <span className="mr-2">{stock.price}</span>
                        <span className={stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                            {stock.change}
                        </span>
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
}
