import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/images/LWE-LOGO-01.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    bg-transparent backdrop-blur-md rounded-full px-6 py-2 flex items-center justify-between 
    max-w-[90%] mx-auto border border-[rgba(255,255,255,0.2)]`}
  >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-full h-14 object-contain" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-lg text-gray-300">
        <li>
          <Link to="/" className="hover:text-orange-400">Home</Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center hover:text-orange-400"
          >
            Videos <IoMdArrowDropdown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/video1">Video 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/video2">Video 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        </li>
      </ul>

      {/* Choose Model Button */}
      <button className="px-5 py-[6px] rounded-full bg-gradient-to-r from-[#a011cb] via-[#5943df] to-[#2575fc] text-white shadow-lg transition-all duration-300 hover:shadow-xl font-medium mr-[440px]">
        Choose Model
      </button>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-[#2a2a3c] text-gray-400 px-4 py-2 rounded-full ml-4">
        <input
          type="text"
          placeholder="Your Business"
          className="outline-none bg-transparent placeholder-gray-400 w-40"
        />
        <FiSearch className="text-orange-500 ml-2 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
