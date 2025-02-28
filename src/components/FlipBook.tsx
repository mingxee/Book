import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Book } from '../types';

interface FlipBookProps {
  book: Book;
}

const FlipBook: React.FC<FlipBookProps> = ({ book }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(book.pages);
  const [jumpToPage, setJumpToPage] = useState('');
  const [showJumpToPage, setShowJumpToPage] = useState(false);
  const flipBookRef = useRef<any>(null);

  // Mock pages for demonstration
  const pages = Array.from({ length: book.pages }, (_, i) => i + 1);

  const handlePageChange = (e: any) => {
    setCurrentPage(e.data);
  };

  const handleJumpToPage = () => {
    const pageNum = parseInt(jumpToPage);
    if (!isNaN(pageNum) && pageNum > 0 && pageNum <= totalPages) {
      flipBookRef.current.pageFlip().flip(pageNum - 1);
      setJumpToPage('');
      setShowJumpToPage(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleJumpToPage();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl">
        <HTMLFlipBook
          width={550}
          height={733}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handlePageChange}
          className="book-flip"
          ref={flipBookRef}
        >
          {/* Cover */}
          <div className="relative bg-gray-200 dark:bg-gray-800 shadow-md">
            <img 
              src={book.coverUrl} 
              alt={book.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pages */}
          {pages.map((page) => (
            <div 
              key={page} 
              className="bg-white dark:bg-gray-700 p-8 flex items-center justify-center shadow-md"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Page {page}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This is a sample page for {book.title} by {book.author}.
                </p>
                <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                  In a real implementation, this would display the actual PDF content.
                </div>
              </div>
            </div>
          ))}
        </HTMLFlipBook>

        {/* Navigation controls */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-600 dark:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
            onClick={() => flipBookRef.current.pageFlip().flipPrev()}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-600 dark:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
            onClick={() => flipBookRef.current.pageFlip().flipNext()}
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* Page navigation */}
      <div className="mt-8 flex items-center justify-center space-x-4">
        <div className="text-gray-700 dark:text-gray-300">
          Page {currentPage + 1} of {totalPages}
        </div>
        
        {showJumpToPage ? (
          <div className="flex items-center">
            <input
              type="text"
              value={jumpToPage}
              onChange={(e) => setJumpToPage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-l bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Page"
            />
            <button
              onClick={handleJumpToPage}
              className="px-3 py-1 bg-indigo-600 dark:bg-indigo-700 text-white rounded-r"
            >
              Go
            </button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowJumpToPage(true)}
            className="flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
          >
            <Search className="h-4 w-4 mr-1" />
            Jump to page
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default FlipBook;