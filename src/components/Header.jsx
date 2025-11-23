import React, { useState } from 'react';
import { Link, useLocation } from '../utils/router';
import StockTicker from './StockTicker';
import SearchOverlay from './SearchOverlay';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    const mainNavItems = [
        { name: 'Articles', path: '/articles' },
        { name: 'Mission', path: '/mission' },
        { name: 'About Us', path: '/about' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 left-0 w-full z-50 font-sans">
            <StockTicker />

            {/* Top Bar with Theme and Search */}
            <div className="text-gray-300 text-[11px] py-2 border-b border-gray-700" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="hidden md:flex gap-6 tracking-wider font-medium">
                        <span className="text-gray-400">Turin Campus</span>
                    </div>

                    <div className="flex items-center gap-6 ml-auto">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 hover:text-white transition-colors"
                            aria-label="Open search">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="container mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">
                    {/* Logo with Text */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logo} alt="ESCP Students for Finance" className="h-16 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl tracking-[0.15em] font-serif transition-colors leading-none" style={{ color: 'var(--color-text)' }}>ESCP STUDENTS</span>
                            <span className="text-xs tracking-[0.4em] font-sans transition-colors leading-none mt-1" style={{ color: 'var(--color-accent)' }}>FOR FINANCE</span>
                        </div>
                    </Link>

                    {/* Desktop Nav - Shifted right with ml-auto */}
                    <nav className="hidden xl:flex h-full items-center ml-auto">
                        <ul className="flex gap-8 h-full items-center">
                            {mainNavItems.map((item) => (
                                <li key={item.name} className="h-full flex items-center">
                                    <Link
                                        to={item.path}
                                        className="text-[13px] font-bold uppercase tracking-wider transition-colors relative py-2"
                                        style={{
                                            color: isActive(item.path) ? 'var(--color-text)' : 'var(--color-text-secondary)',
                                            opacity: isActive(item.path) ? 1 : 0.8
                                        }}
                                        onMouseEnter={(e) => e.target.style.opacity = 1}
                                        onMouseLeave={(e) => e.target.style.opacity = isActive(item.path) ? 1 : 0.8}>
                                        {item.name}
                                        <span
                                            className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                                            style={{
                                                backgroundColor: 'var(--color-accent)',
                                                width: isActive(item.path) ? '100%' : '0'
                                            }}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu">
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#051C2C] dark:bg-[#000000] z-40 pt-32 px-8 transition-transform duration-300 xl:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="h-full overflow-y-auto">
                    <ul className="flex flex-col gap-6">
                        {mainNavItems.map((item) => (
                            <li key={item.name} className="border-b border-gray-700 pb-4">
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium block ${isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'
                                        }`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}
