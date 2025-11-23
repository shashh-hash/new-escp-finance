import React from 'react';
import { HashRouter as Router, Routes, Route } from './utils/router';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import MissionPage from './pages/MissionPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
