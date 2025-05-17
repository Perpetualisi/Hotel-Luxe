import React from 'react';
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
  return (
    <section id='testimonials' className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} />
            <p>"{t.review}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
