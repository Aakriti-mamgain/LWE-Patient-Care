import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import payment from "../assets/images/PAYMENT-WHITE-1.png";

const VideoSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0d0d26] min-h-screen flex items-center justify-center px-4"
    >
      {/* Gradient Background Inside Div */}
      <div className="bg-gradient-to-b from-[#f3c6ff] to-[#9055ff] p-8 rounded-xl max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-6 items-center shadow-lg">
        {/* Left Side - Video */}
        <div className="relative bg-orange-500 rounded-xl p-4 flex items-center justify-center shadow-md w-full h-[300px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Pricing & Buttons */}
        <div className="text-center md:text-left">
          <h2 className="text-6xl font-poppins font-bold text-white leading-[1.3em] tracking-[-0.02em] m-0 mb-2">
            <span className="text-4xl line-through text-gray-800 text-[16px] font-bold leading-[1.5] tracking-[0.5px] px-1 text-center">
              Normal Price: ₹1999
            </span>
          </h2>
          <h3 className="text-2xl font-semibold text-black px-4 py-2 inline-block">
            Offer Price: ₹0
          </h3>

          <p className="text-black mt-2 font-medium">
            Hurry up. The offer is limited.
          </p>

          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
              🛒 Order Now
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
              📱 WhatsApp
            </button>
          </div>

          {/* Payment Methods */}
          <div className="max-w-full text-center w-auto mt-4">
            <img
              src={payment}
              alt="Payment Methods"
              className="inline-block max-w-full h-auto border-0 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSections;
