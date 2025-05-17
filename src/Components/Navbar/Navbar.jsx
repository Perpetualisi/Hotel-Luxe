import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Luxe🏰</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#rooms" onClick={handleLinkClick}>Rooms</a></li>
        <li><a href="#booking" onClick={handleLinkClick}>Booking</a></li>
        <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
