import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome User!</h1>
      <nav>
        <Link to="/gallery">Book Gallery</Link>
      </nav>
    </div>
  );
};

export default Home;
