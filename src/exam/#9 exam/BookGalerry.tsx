import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

const BookGallery = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="gallery-container">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;
