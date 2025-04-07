import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  return (
    <motion.div
      id="contact"
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Send us a message below or reach out on social media.</p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <div className="contact-details">
        <p><strong>Email:</strong> hotelluxe@gmail.com</p>
        <p><strong>Phone:</strong> +234-344-909-4567</p>
        <p><strong>Location:</strong> Lagos, Nigeria</p>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
