import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookGrid from '../components/BookGrid';
import SearchBar from '../components/SearchBar';
import { books } from '../data/books';
import { Book } from '../types';

const CatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(books.map(book => book.category)));
    setCategories(['All', ...uniqueCategories]);
  }, []);

  useEffect(() => {
    let result = books;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        book => 
          book.title.toLowerCase().includes(query) || 
          book.author.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(book => book.category === selectedCategory);
    }
    
    setFilteredBooks(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Book Catalog</h1>
          
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {filteredBooks.length > 0 ? (
            <BookGrid books={filteredBooks} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No books found matching your criteria. Try a different search or category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogPage;