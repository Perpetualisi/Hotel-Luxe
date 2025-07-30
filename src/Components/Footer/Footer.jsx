import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hotel Luxe</h3>
          <p>Experience luxury and comfort with us.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@hotel.com</p>
          <p>Phone: +234-123-456-7890</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Hotel Luxe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
