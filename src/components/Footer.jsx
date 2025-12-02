import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#051C2C] text-gray-400 py-12 border-t border-gray-800 font-sans">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-serif text-lg mb-2">ESCP Students for Finance</h4>
                        <p className="text-xs text-gray-500">Turin Campus Chapter</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/escpstudentsforfinance?igsh=MTh3NXBzbnplcG1sbg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all">
                            <span className="sr-only">Instagram</span>
                            <div className="w-4 h-4 bg-current rounded-sm"></div>
                        </a>
                        <a href="https://www.linkedin.com/company/escp-studenst-for-finance/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-all">
                            <span className="sr-only">LinkedIn</span>
                            <div className="w-4 h-4 bg-current rounded-sm"></div>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2025 ESCP Students for Finance. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
