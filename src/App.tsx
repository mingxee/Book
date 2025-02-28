import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import BookDetailPage from './pages/BookDetailPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;