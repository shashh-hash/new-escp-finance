/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode with class strategy
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C5A059', // Keeping gold as accent for now, or should I change to blue? User said "theme not as black but as dark blue". I'll keep gold accent for elegance.
                secondary: '#1F1F1F',
                accent: '#E5C07B',
                'theme-dark': '#051C2C', // McKinsey Deep Navy
                'theme-blue': '#042440', // Slightly lighter navy
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                body: ['Roboto', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1200px',
                },
            },
        },
    },
    plugins: [],
}
