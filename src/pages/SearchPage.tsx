import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import { books } from '../data/books';
import { Book } from '../types';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      
      // Simulate search delay
      const timer = setTimeout(() => {
        const query = searchQuery.toLowerCase();
        const results = books.filter(
          book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query) ||
            book.description.toLowerCase().includes(query)
        );
        
        setSearchResults(results);
        setIsSearching(false);
        setHasSearched(true);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Search Books</h1>
          
          <div className="mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div 
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-12"
              >
                <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </motion.div>
            ) : (
              <>
                {hasSearched && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {searchResults.length > 0 ? (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                          </h2>
                        </div>
                        <BookGrid books={searchResults} />
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                          No books found matching "{searchQuery}"
                        </p>
                        <p className="text-gray-500 dark:text-gray-500">
                          Try different keywords or browse our catalog
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
                
                {!hasSearched && (
                  <motion.div
                    key="initial"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Enter a search term to find books by title, author, or category
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;