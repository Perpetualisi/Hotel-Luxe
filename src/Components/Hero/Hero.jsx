import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Hotel Luxe</h1>
        <p>Experience luxury and comfort at its finest</p>
        <a href="#contact" className="btn">Book Now</a>
      </div>
    </section>
  );
};

export default Hero;
