import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail-container">
      <h2>{book.title}</h2>
      <img src={book.imageUrl} alt={book.title} />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetail;
