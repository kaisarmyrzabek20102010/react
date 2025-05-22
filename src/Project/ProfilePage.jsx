import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>CONTACT US</h1>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Pizza Street, Food City, FC 12345</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@pizzarestaurant.com</p>
          </div>
          <div className="info-item">
            <h3>Opening Hours</h3>
            <p>Monday-Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday-Sunday: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <iframe 
          title="restaurant-location"
          src="https://maps.google.com/maps?q=pizza%20restaurant&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
