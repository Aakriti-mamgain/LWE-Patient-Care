import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaYoutube } from "react-icons/fa";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/Screenshot-2024-04-10-181204.png.webp";

const Hero = () => {
  const typedRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Animation will run every time it comes into view
      mirror: true, // Allows animation when scrolling back up
    });

    // Initialize Typed.js for dynamic text
    const typed = new Typed(typedRef.current, {
      strings: [
        "Information and Consultation",
        "Hospital/Clinic Selection",
        "Doctor Selection",
        "Price Negotiation",
        "Treatment Planning",
        "Language Assistance",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      startDelay: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []); // Run only once after component mounts

  return (
    <div className="bg-[#0d0d26] text-white py-16 px-4 md:px-20 mt-20">
      {/* Hero Section */}
      <div className="text-center">
        <h2
          className="text-orange-500 text-3xl md:text-4xl font-bold"
          data-aos="fade-up"
        >
          Your Health, Our Priority – Hassle-Free Medical Travel Assistance!
        </h2>
        <p
          className="text-white text-4xl md:text-2xl  mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We connect you with top international hospitals, expert doctors, and hassle-free medical travel solutions. Your health journey starts here!
        </p>
        <p
          className="text-gray-300 text-lg md:text-xl mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          ⭐⭐⭐⭐⭐ (4.9 out of 5 Ratings){" "}
          <span className="text-blue-400">Trusted by Patients Worldwide</span>
        </p>

        {/* Animated Typing Text */}
        <h3
          className="text-red-500 text-2xl md:text-3xl font-bold mt-4"
          data-aos="zoom-in"
        >
          <span ref={typedRef}></span>
        </h3>

        {/* Feature List */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {[
            "Information and Consultation",
            "Hospital/Clinic Selection",
            "Doctor Selection",
            "Price Negotiation",
            "Treatment Planning",
            "Travel Arrangements",
            "Visa Assistance",
            "Language Assistance",
            "Insurance Assistance",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-[#1a1a3d] text-white px-4 py-2 rounded-full text-sm"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay each item for a cascade effect
            >
              <FaCheckCircle className="text-green-400 mr-2" /> {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div
        className="flex justify-center py-10"
         data-aos="zoom-in-up"
        data-aos-delay="800"
      >
        <div className="relative w-[90%] md:w-[70%] rounded-xl p-5 flex flex-col items-center">
          {!showVideo ? (
            // Thumbnail with Play Button
            <div className="relative w-full h-[300px] md:h-[400px] flex justify-center items-center rounded-xl overflow-hidden">
              <img
                src={logo}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-[#0d0d26] opacity-50"></div>

              {/* Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="absolute flex justify-center items-center w-16 h-16 bg-red-500 text-white rounded-full opacity-90 hover:opacity-100 transition"
              >
                <FaYoutube className="text-3xl" />
              </button>
            </div>
          ) : (
            // Embedded YouTube Video
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
