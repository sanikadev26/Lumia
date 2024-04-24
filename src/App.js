import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Content from "./content";
import Content2 from "./content2";
import Services from "./services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Team from "./Team";
import Contact from "./Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Content />
      <About />
      <Content2 />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop smooth color="white" height="25" width="25" style={{backgroundColor: "#3498db"}}
      />
    </div>
  );
}
export default App;
