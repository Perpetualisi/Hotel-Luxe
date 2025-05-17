import React, { useState } from 'react';
import './Booking.css';

// ✨ Import motion for animation
import { motion } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: 1,
  });

  // 📬 State to store submitted bookings
  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 📬 Save booking data
    const newBooking = { ...formData };
    setBookings((prev) => [...prev, newBooking]);
    alert(`Booking Info:\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nRoom: ${formData.roomType}\nGuests: ${formData.guests}`);
    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      roomType: '',
      guests: 1,
    });
  };

  return (
    // ✨ Animate the booking section
    <motion.section
      id='booking'
      className="booking"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
        
        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
          <option value="">Select Room Type</option>
          <option value="Classic Room">Classic Room</option>
          <option value="Super Classic Room">Super Classic Room</option>
          <option value="Standard Deluxe">Standard Deluxe</option>
          <option value="Executive Deluxe">Executive Deluxe</option>
          <option value="Business Suite">Business Suite</option>
        </select>

        <input type="number" name="guests" value={formData.guests} min="1" onChange={handleChange} required />

        <button type="submit">Book Now</button>
      </form>

      {/* 📬 Display submitted bookings */}
      {bookings.length > 0 && (
        <div className="booking-list">
          <h3>Submitted Bookings</h3>
          <ul>
            {bookings.map((b, index) => (
              <li key={index}>
                {b.checkIn} to {b.checkOut} — {b.roomType}, {b.guests} Guest(s)
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.section>
  );
};

export default Booking;
