import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import BookGallery from './BookGallery';
import BookDetail from './BookDetail';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<ProtectedRoute element={<BookGallery />} />} />
        <Route path="/book/:id" element={<ProtectedRoute element={<BookDetail />} />} />
      </Routes>
    </Router>
  );
};

export default App;
