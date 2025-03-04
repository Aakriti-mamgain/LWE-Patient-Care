import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";
import logo from "../assets/images/LWE-LOGO-01.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d26] text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* CTA Section */}
        <div className="flex justify-center my-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-6 lg:p-8 rounded-2xl w-full lg:w-3/4 flex flex-col md:flex-row justify-between items-center shadow-lg">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-2xl font-semibold">Looking for World-Class Medical Treatment at Affordable Prices?</h2>
              <p className="text-sm md:text-base mt-2">
                Let’s connect with expert doctors. Start your medical journey with us today!
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-orange-700 flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-md animate-bounce hover:scale-105 transition-transform duration-300">
              <FaPhone className="text-orange-700 rotate-90" />
              Call Now
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* Logo & Icons */}
          <div>
            <img src={logo} alt="Logo" />
            <div className="flex gap-3 mt-4">
              {[FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-500">
                  <Icon className="text-white text-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg">ADDRESS</h3>
            <p className="text-gray-400 text-sm mt-2">
              <span className="font-semibold">Head Office:</span> 1102, Samdariya Green City, Jabalpur, MP
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <span className="font-semibold">Chhattisgarh Branch:</span> Ambikapur, Chhattisgarh, India
            </p>
          </div>

          {/* Videos */}
          <div>
            <h3 className="font-bold text-lg">VIDEOS</h3>
            <ul className="mt-2 space-y-1">
              {["Testimonial", "Customer-reviews", "Reviews-videos"].map((item, index) => (
                <li key={index} className="text-gray-400 text-sm hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">QUICK LINKS</h3>
            <ul className="mt-2 space-y-1">
              {["About", "Videos", "Contact", "Careers"].map((item, index) => (
                <li key={index} className="text-gray-400 text-sm hover:text-orange-500 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024 salesboosterad.com All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            {["Privacy Policy", "Terms and Conditions", "Refund Policy", "Legal Site Map"].map((item, index) => (
              <span key={index} className="hover:text-orange-500 cursor-pointer">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
