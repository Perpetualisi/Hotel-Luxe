import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav  className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Hotel Luxe 🏰</div>

      <div className="hamburger" onClick={() => {
  setMenuOpen(!menuOpen);
  console.log("Hamburger clicked!"); 
}}>
  ☰
</div>


      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
