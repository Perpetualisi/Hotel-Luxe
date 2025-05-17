import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to Hotel  <span>Hotel Luxe</span>
        </h1>
        <p className="hero-subtitle">
          Where timeless luxury meets modern convenience. Your perfect getaway awaits.
        </p>
        <a href="#booking" className="btn">
          Book Your Stay
        </a>
      </div>
    </section>
  );
};

export default Hero;
