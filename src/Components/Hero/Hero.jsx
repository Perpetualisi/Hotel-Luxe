import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>Hotel Luxe</span>
        </h1>
        <p className="hero-subtitle">
          Where timeless luxury meets modern convenience.<br />Your perfect getaway awaits.
        </p>
        <a href="#booking" className="btn">
          Book Your Stay
        </a>
      </div>
    </section>
  );
};

export default Hero;
