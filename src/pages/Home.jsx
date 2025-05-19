import Navbar from "../sections/Navbar";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
