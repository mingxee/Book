import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Calendar, Bookmark } from 'lucide-react';
import FlipBook from '../components/FlipBook';
import { books } from '../data/books';
import { Book } from '../types';

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFlipbook, setShowFlipbook] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      const foundBook = books.find(b => b.id === id) || null;
      setBook(foundBook);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Book not found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The book you're looking for doesn't exist or has been removed.</p>
          <Link to="/catalog" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/catalog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Catalog
          </Link>
        </div>

        <AnimatePresence mode="wait">
          {!showFlipbook ? (
            <motion.div 
              key="details"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:col-span-1">
                <motion.div 
                  className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="md:col-span-2">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{book.title}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{book.author}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <BookOpen className="h-5 w-5 mr-1" />
                      <span>{book.pages} pages</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Bookmark className="h-5 w-5 mr-1" />
                      <span>{book.category}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-5 w-5 mr-1" />
                      <span>Published: {new Date(book.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
                    <p className="text-gray-600 dark:text-gray-300">{book.description}</p>
                  </div>
                  
                  <motion.button
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                    onClick={() => setShowFlipbook(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="flipbook"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="py-8"
            >
              <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{book.title}</h1>
                <button 
                  onClick={() => setShowFlipbook(false)}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Details
                </button>
              </div>
              
              <FlipBook book={book} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookDetailPage;