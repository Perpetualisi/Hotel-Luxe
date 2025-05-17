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
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@hotel.com</p>
          <p>Phone: +234-810-355-8837</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Hotel Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
