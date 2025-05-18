import Navbar from "../sections/Navbar";
import Banner from "../sections/Banner";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Contact/>
    </>
  );
};

export default Home;
