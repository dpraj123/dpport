import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer/>
    </>
  );
};

export default index;
