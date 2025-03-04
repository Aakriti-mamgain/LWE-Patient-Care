import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Verma",
    rating: 5,
    feedback:
      "The entire medical journey was seamless! From consultation to surgery, everything was well-coordinated. Highly recommended for anyone seeking treatment abroad.",
    avatar: "/path-to-avatar1.png",
  },
  {
    name: "Sonia Mehra",
    rating: 5,
    feedback:
      "Exceptional service! The team helped me find the best hospital for my treatment and took care of all travel and visa arrangements.",
    avatar: "/path-to-avatar2.png",
  },
  {
    name: "Rahul Khanna",
    rating: 5,
    feedback:
      "I was worried about my surgery in another country, but this agency made everything smooth. Great doctors and excellent post-operative care!",
    avatar: "/path-to-avatar3.png",
  },
  {
    name: "Dr. Neha Kapoor",
    rating: 5,
    feedback:
      "As a healthcare professional, I can vouch for their services. They ensure top-quality hospitals and doctors, making international medical treatment stress-free.",
    avatar: "/path-to-avatar4.png",
  },
];

const Review = () => {
  return (
    <section className="bg-[#0d0d26] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500">Reviews</h2>
        <div className="flex justify-center items-center mt-4">
          <p className="text-4xl ">Google</p>
          <p className="text-yellow-400 text-xl font-semibold ml-2">4.9</p>
          <span className="text-yellow-400 ml-1">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-gray-300 mt-4">
          Read our customers' reviews and see why they choose us.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#16162E] p-6 rounded-lg border border-gray-700 text-left"
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", type: "spring", stiffness: 300 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="text-xl font-semibold">{testimonial.feedback}</h3>
              <div className="flex items-center mt-4">
                <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
              </div>
              <p className="text-orange-400 mt-2 font-semibold">
                {testimonial.name}
              </p>
              <div className="mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
