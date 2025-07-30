import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Rooms from "./Components/Rooms/Rooms";
import Testimonials from "./Components/Testimonials/Testimonials";
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Rooms/>
      <Booking/>
      <Testimonials/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;
