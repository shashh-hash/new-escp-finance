import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

    const handleMobileMenuClick = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 left-0 w-full z-50 font-sans">
            <StockTicker />

            {/* Top Bar with Search */}
            <div className="text-gray-300 text-[11px] py-2 border-b border-gray-700" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
                    <div className="hidden md:flex gap-6 tracking-wider font-medium">
                        <span className="text-gray-400">Turin Campus</span>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 hover:text-white transition-colors touch-manipulation py-2 px-2"
                            aria-label="Open search">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-[70px] sm:h-[80px] flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-4 group z-50" onClick={handleMobileLinkClick}>
                        <img src={logo} alt="ESCP Students for Finance" className="h-12 sm:h-16 w-auto" />
                        <div className="flex flex-col justify-center">
                            <span className="text-sm sm:text-lg tracking-[0.15em] text-white leading-none font-semibold">ESCP STUDENTS</span>
                            <span className="text-sm sm:text-lg tracking-[0.15em] text-white leading-none font-semibold">FOR FINANCE</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
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
                                                backgroundColor: '#E5E7EB', // Light gray
                                                width: isActive(item.path) ? '100%' : '0'
                                            }}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={handleMobileMenuClick}
                        className="xl:hidden z-50 p-2 touch-manipulation"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}>
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span
                                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span
                                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`xl:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                style={{ top: '140px' }}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}></div>

                {/* Menu Content */}
                <div
                    className={`relative bg-[#0D2137] border-t border-white/10 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <nav className="container mx-auto px-4 py-6">
                        <ul className="space-y-1">
                            {mainNavItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={handleMobileLinkClick}
                                        className={`block py-4 px-4 text-base font-medium uppercase tracking-wider transition-all touch-manipulation ${isActive(item.path)
                                            ? 'bg-white/10 text-white border-l-4 border-white'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                                            }`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}
