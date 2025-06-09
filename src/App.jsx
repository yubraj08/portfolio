import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='min-w-screen font-["Rubik"] min-h-screen bg-black  cursor-default flex flex-col text-[#f1f5f9] py-4 px-4 lg:px-16  gap-4 md:gap-8  lg:gap-16 '>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
