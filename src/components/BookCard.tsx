import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';
import { motion } from 'framer-motion';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/book/${book.id}`}>
        <div className="relative pb-[140%]">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="font-bold">{book.title}</p>
              <p className="text-sm">{book.author}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{book.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">{book.pages} pages</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{book.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;