import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, BookOpen, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Xee Book</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/catalog" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Catalog
            </Link>
            <Link to="/search" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Search className="h-5 w-5" />
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;