import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Rooms from "./Components/Rooms/Rooms";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Rooms/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;
