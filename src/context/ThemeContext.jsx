import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Fixed dark theme - no switching
export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ isDark: true }}>
            {children}
        </ThemeContext.Provider>
    );
};
