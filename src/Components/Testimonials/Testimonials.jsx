import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Jane Doe',
    review: 'Absolutely loved my stay! Clean rooms and excellent service.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'John Smith',
    review: 'A peaceful getaway with amazing food and ambiance.',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Maria Gonzalez',
    review: 'Staff were kind and very helpful. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=3',
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
