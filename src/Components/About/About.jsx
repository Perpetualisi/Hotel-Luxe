import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About <span>Hotel Luxe</span></h2>
          <p>
            Experience the pinnacle of luxury and comfort at Hotel Luxe. Nestled in the heart of the city, our hotel offers world-class services, elegant suites, and breathtaking views. Whether you’re here for business or leisure, we ensure an unforgettable stay.
          </p>
          <p>
            Indulge in our exquisite dining, relax at our spa, and enjoy top-tier hospitality like never before.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src="/images/about-min.jpg" alt="Hotel Lobby" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default About;
