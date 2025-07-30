import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Jane Doe',
    review: 'Absolutely loved my stay! Clean rooms and excellent service.',
    image: '/images/jane.jpg',
  },
  {
    name: 'John Smith',
    review: 'A peaceful getaway with amazing food and ambiance.',
    image: '/images/JohnSmith.jpg',
  },
  {
    name: 'Maria Gonzalez',
    review: 'Staff were kind and very helpful. Highly recommended!',
    image: '/images/maria.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
        <div className="testimonial-slide">
          <img src={testimonials[current].image} alt={testimonials[current].name} />
          <p>"{testimonials[current].review}"</p>
          <h4>- {testimonials[current].name}</h4>
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Testimonials;
