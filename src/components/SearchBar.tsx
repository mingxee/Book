import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <motion.div 
      className={`relative max-w-2xl mx-auto ${isFocused ? 'scale-105' : 'scale-100'}`}
      animate={{ scale: isFocused ? 1.02 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
            placeholder="Search for books by title, author, or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                className="absolute inset-y-0 right-12 flex items-center pr-3"
                onClick={clearSearch}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
              </motion.button>
            )}
          </AnimatePresence>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="submit"
              className="p-1 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;