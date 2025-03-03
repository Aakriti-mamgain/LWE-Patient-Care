import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const videos = [
  { id: "5-vBbCvI__c", thumbnail: "https://i.ytimg.com/vi/5-vBbCvI__c/sddefault.jpg" },
  { id: "CY7sausmnJA", thumbnail: "https://i.ytimg.com/vi/CY7sausmnJA/sddefault.jpg" },
  { id: "j-n4PH9db0g", thumbnail: "https://i.ytimg.com/vi/j-n4PH9db0g/sddefault.jpg" },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animations trigger every time on scroll
      easing: "ease-in-out", // Smooth transition effect
    });
  }, []);

  const handleVideoClick = (videoId) => {
    setLoading(true);
    setTimeout(() => {
      setActiveVideo(videoId);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-b from-[#e8f0ff] to-[#f4f6ff] min-h-screen py-16 px-6 flex flex-col items-center gap-10">
      {/* Animated Heading */}
      <h2 className="text-center text-5xl font-bold text-[#0d3b66] mb-4" data-aos="fade-up">
        Clients Testimonials
      </h2>

      {/* Animated Description */}
      <p className="text-center text-lg text-gray-700 max-w-3xl mb-8" data-aos="fade-up">
        Hear from our clients who have experienced world-class medical care and exceptional service. Learn how we helped them achieve their health goals without any hassles that come with travelling to a different country for medical treatment.
      </p>

      {/* Video Thumbnails */}
      <div className="flex flex-wrap justify-center gap-12">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-all duration-300 transform hover:scale-105"
            onClick={() => handleVideoClick(video.id)}
            data-aos="zoom-in-up" // Scroll animation
          >
            {activeVideo === video.id ? (
              loading ? (
                <div className="w-[60vw] h-[60vh] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
              ) : (
                <iframe
                  className="w-[60vw] h-[60vh] rounded-xl shadow-xl border-4 border-gray-300"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              )
            ) : (
              <div className="relative overflow-hidden rounded-xl shadow-lg border-4 border-gray-300 w-[60vw] h-[60vh]">
                <img
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
                  <div className="bg-red-600 p-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.576-2.598A1 1 0 009 9.34v5.317a1 1 0 001.176.97l4.576-2.598a1 1 0 000-1.74z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
