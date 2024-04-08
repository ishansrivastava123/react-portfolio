import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import { Toaster } from "react-hot-toast";
import HeaderPhone from "./components/HeaderPhone";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth/window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth/window.innerHeight);
    }

    window.addEventListener("resize", resizeRatio);
  
    return () => {
      window.removeEventListener("resize", resizeRatio);
    }
  }, [ratio])
  

  return (ratio < 2.5) ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Toaster />
      <Footer />
    </>
  ) : <em id="customMessage">Please change the window ratio to view my Portfolio!</em>
}

export default App;
