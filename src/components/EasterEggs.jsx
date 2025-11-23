import React, { useEffect, useState, useCallback } from 'react';

export default function EasterEggs() {
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [logoClicks, setLogoClicks] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);
    const [matrixMode, setMatrixMode] = useState(false);
    const [stockCrash, setStockCrash] = useState(false);
    const [stonksMode, setStonksMode] = useState(false);
    const [moneyRain, setMoneyRain] = useState(false);
    const [typedString, setTypedString] = useState('');

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    // Konami Code Handler
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toLowerCase();

            // Check konami code
            if (e.key === konamiCode[konamiIndex] || key === konamiCode[konamiIndex]) {
                const newIndex = konamiIndex + 1;
                setKonamiIndex(newIndex);
                if (newIndex === konamiCode.length) {
                    triggerKonamiEffect();
                    setKonamiIndex(0);
                }
            } else if (konamiCode.includes(e.key) || konamiCode.includes(key)) {
                setKonamiIndex(e.key === konamiCode[0] || key === konamiCode[0] ? 1 : 0);
            } else {
                setKonamiIndex(0);
            }

            // Matrix Mode - press M
            if (key === 'm') {
                setMatrixMode(prev => !prev);
            }

            // Build typed string for "stonks"
            if (key.length === 1 && /[a-z]/.test(key)) {
                setTypedString(prev => (prev + key).slice(-6));
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [konamiIndex]);

    // Check for "stonks" typing
    useEffect(() => {
        if (typedString === 'stonks') {
            setStonksMode(true);
            setTimeout(() => setStonksMode(false), 5000);
            setTypedString('');
        }
    }, [typedString]);

    // Logo click handlers
    useEffect(() => {
        const handleLogoClick = (e) => {
            const now = Date.now();

            // Single click - count for money rain
            setLogoClicks(prev => {
                const newCount = prev + 1;
                if (newCount === 5) {
                    setMoneyRain(true);
                    setTimeout(() => setMoneyRain(false), 5000);
                    return 0;
                }
                // Reset counter after 2 seconds of no clicks
                setTimeout(() => setLogoClicks(0), 2000);
                return newCount;
            });
        };

        const handleLogoDoubleClick = (e) => {
            e.preventDefault();
            setStockCrash(true);
            setTimeout(() => setStockCrash(false), 3000);
            setLogoClicks(0); // Reset single click counter
        };

        // Wait for DOM to be ready
        const attachListeners = () => {
            const logo = document.querySelector('img[alt="ESCP Students for Finance"]');
            if (logo) {
                logo.addEventListener('click', handleLogoClick);
                logo.addEventListener('dblclick', handleLogoDoubleClick);
                logo.style.cursor = 'pointer';
                return () => {
                    logo.removeEventListener('click', handleLogoClick);
                    logo.removeEventListener('dblclick', handleLogoDoubleClick);
                };
            }
        };

        // Try immediately and also after a delay
        const cleanup1 = attachListeners();
        const timeout = setTimeout(() => {
            attachListeners();
        }, 1000);

        return () => {
            if (cleanup1) cleanup1();
            clearTimeout(timeout);
        };
    }, []);

    const triggerKonamiEffect = () => {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease-in-out';
        setTimeout(() => {
            document.body.style.transform = '';
            document.body.style.transition = '';
        }, 2000);
    };

    return (
        <>
            {/* Money Rain */}
            {moneyRain && (
                <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-4xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-50px',
                                animation: `fall ${3 + Math.random() * 2}s linear ${Math.random() * 2}s forwards`
                            }}>
                            💰
                        </div>
                    ))}
                    <style>{`
                        @keyframes fall {
                            to {
                                transform: translateY(calc(100vh + 100px)) rotate(360deg);
                            }
                        }
                    `}</style>
                </div>
            )}

            {/* Matrix Mode */}
            {matrixMode && (
                <div className="fixed inset-0 pointer-events-none z-[9998] bg-black/80">
                    <div className="matrix-rain text-green-500 font-mono text-xs overflow-hidden h-full w-full">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute whitespace-pre"
                                style={{
                                    left: `${i * 2}%`,
                                    top: '-100px',
                                    animation: `matrixFall ${5 + Math.random() * 5}s linear ${Math.random() * 5}s infinite`
                                }}>
                                {Array.from({ length: 30 }, () =>
                                    String.fromCharCode(33 + Math.random() * 94)
                                ).join('\n')}
                            </div>
                        ))}
                        <style>{`
                            @keyframes matrixFall {
                                to {
                                    transform: translateY(calc(100vh + 200px));
                                }
                            }
                        `}</style>
                    </div>
                </div>
            )}

            {/* Stock Crash */}
            {stockCrash && (
                <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center bg-black/50">
                    <div className="text-6xl md:text-9xl font-bold text-red-600 animate-bounce">
                        📉 CRASH! 📉
                    </div>
                </div>
            )}

            {/* Stonks Mode */}
            {stonksMode && (
                <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center bg-blue-600/20">
                    <div className="text-6xl md:text-9xl font-bold text-green-500 animate-pulse">
                        📈 STONKS 📈
                    </div>
                </div>
            )}
        </>
    );
}
