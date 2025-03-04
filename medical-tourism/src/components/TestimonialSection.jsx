import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaYoutube } from "react-icons/fa";
import logo1 from "../assets/images/sddefault.jpg";
import logo2 from "../assets/images/sddefault (1).jpg";
import logo3 from "../assets/images/sddefault (2).jpg";

const testimonials = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/j-n4PH9db0g?autoplay=1",
    image: logo1,
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/5-vBbCvI__c?autoplay=1",
    image: logo2,
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/CY7sausmnJA?autoplay=1",
    image: logo3,
  },
];

const TestimonialSection = () => {
  const [playingVideo, setPlayingVideo] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Animation triggers every time you scroll
    });
  }, []);

  return (
    <section className="bg-[#0d0d26] py-14 flex flex-col items-center text-center text-white px-6">
      {/* Heading and Description */}
      <div className="mb-10 w-full md:w-3/4 lg:w-2/3">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
          data-aos="zoom-in"
        >
          Client Testimonials
        </h2>
        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          data-aos="fade-up"
        >
          Hear from our clients who have experienced world-class medical care
          and exceptional service. Learn how we helped them achieve their
          health goals without any hassles that come with travelling to a
          different country for medical treatment.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div
        className="w-full md:w-[80%] flex flex-wrap justify-center gap-6"
        data-aos="fade-up"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-[300px] md:w-[350px] h-[200px] md:h-[250px] rounded-lg overflow-hidden shadow-lg"
            data-aos="zoom-in-up"
          >
            {playingVideo[testimonial.id] ? (
              // Embedded YouTube Video
              <iframe
                width="100%"
                height="100%"
                src={testimonial.videoUrl}
                title="Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            ) : (
              // Image Overlay with Play Button
              <div className="relative w-full h-full">
                <img
                  src={testimonial.image}
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-[#0d0d26] opacity-50"></div>

                {/* Play Button */}
                <button
                  onClick={() =>
                    setPlayingVideo((prev) => ({
                      ...prev,
                      [testimonial.id]: true,
                    }))
                  }
                  className="absolute flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-red-500 text-white rounded-full opacity-90 hover:opacity-100 transition left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
                >
                  <FaYoutube className="text-2xl md:text-3xl" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
