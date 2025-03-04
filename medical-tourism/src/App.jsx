import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSections";
import Footer from "./components/Footer";
import TestimonialSection from "./components/TestimonialSection";
import Review from "./components/Review";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TestimonialSection/>
      
      <Review/>
      <VideoSection/>
      <Footer/>
    </div>
  );
}

export default App;
