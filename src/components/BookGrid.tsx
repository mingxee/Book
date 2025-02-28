import React from 'react';
import BookCard from './BookCard';
import { Book } from '../types';
import { motion } from 'framer-motion';

interface BookGridProps {
  books: Book[];
  title?: string;
}

const BookGrid: React.FC<BookGridProps> = ({ books, title }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
      )}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {books.map((book) => (
          <motion.div key={book.id} variants={item}>
            <BookCard book={book} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookGrid;