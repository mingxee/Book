import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Search, BookMarked, Sun } from 'lucide-react';
import BookGrid from '../components/BookGrid';
import { books } from '../data/books';

const HomePage: React.FC = () => {
  const featuredBooks = books.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Xee Book
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-100 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              An immersive digital reading experience by Ming Xee
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/catalog">
                <motion.button 
                  className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Catalog
                </motion.button>
              </Link>
              <Link to="/search">
                <motion.button 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Books
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Books */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Books</h2>
            <Link to="/catalog" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center">
              View all <BookMarked className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div 
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <Link to={`/book/${book.id}`} className="block group">
                  <div className="relative h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
                    <motion.img 
                      src={book.coverUrl} 
                      alt={book.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white">{book.title}</h3>
                        <p className="text-indigo-200">{book.author}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{book.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{book.author}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Interactive Reading Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smooth Page Flipping</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience realistic page turning animations that mimic the feel of a physical book.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jump to Page</h3>
              <p className="text-gray-600 dark:text-gray-300">Navigate directly to any page with our intuitive page jumping feature for quick access.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-300">Switch between light and dark themes for comfortable reading in any environment.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Ming Xee</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ming Xee is a passionate developer and digital reading enthusiast dedicated to creating immersive reading experiences.
              With Xee Book, Ming aims to bring the joy of reading to the digital world with interactive features and beautiful design.
            </p>
            <a 
              href="https://mingxee.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Visit Ming's Website
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Xee Book</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ming Xee. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;