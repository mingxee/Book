import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/64317/64317-pdf.pdf',
    description: 'A classic novel about the American Dream set in the Roaring Twenties.',
    pages: 180,
    category: 'Fiction',
    publishedDate: '1925-04-10'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/64317/64317-pdf.pdf',
    description: 'A powerful story of racial injustice and moral growth in the American South.',
    pages: 281,
    category: 'Fiction',
    publishedDate: '1960-07-11'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/1342/1342-pdf.pdf',
    description: 'A romantic novel of manners that satirizes issues of marriage and social class.',
    pages: 432,
    category: 'Romance',
    publishedDate: '1813-01-28'
  },
  {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/64317/64317-pdf.pdf',
    description: 'A dystopian novel about totalitarianism, surveillance, and thought control.',
    pages: 328,
    category: 'Science Fiction',
    publishedDate: '1949-06-08'
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverUrl: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/64317/64317-pdf.pdf',
    description: 'A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.',
    pages: 310,
    category: 'Fantasy',
    publishedDate: '1937-09-21'
  },
  {
    id: '6',
    title: 'Moby Dick',
    author: 'Herman Melville',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://www.gutenberg.org/files/2701/2701-pdf.pdf',
    description: 'An epic tale of obsession, revenge, and the sea.',
    pages: 585,
    category: 'Adventure',
    publishedDate: '1851-10-18'
  }
];