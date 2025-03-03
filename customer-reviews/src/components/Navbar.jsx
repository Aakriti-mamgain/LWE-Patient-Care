import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/images/LWE-LOGO-01.png";
import doctor from "../assets/images/doctor.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="w-full font-[Poppins] text-gray-900">
      {/* Top Blue Bar */}
      <div className="bg-blue-700 text-white text-sm py-2 px-4 flex justify-center items-center text-[14px] font-medium ">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-white" />
          <span>+91 7065062058</span>
        </div>
        <div className="mx-6 border-l border-white h-4"></div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <span>contact@lwepatientcare.in</span>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center ml-[12rem]">
          <img src={logo} alt="LWE Patient Care" className="h-16 w-auto"/>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 text-[16px]">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          
          {/* Treatments Dropdown */}
          <li
            className="relative cursor-pointer hover:text-blue-500"
            onMouseEnter={() => toggleDropdown("treatments")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Treatments <FaChevronDown className="inline ml-1 text-sm" />
            {dropdownOpen === "treatments" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md py-2 rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Treatment 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Treatment 2</li>
              </ul>
            )}
          </li>

          {/* Top Procedures Dropdown */}
          <li
            className="relative cursor-pointer hover:text-blue-500"
            onMouseEnter={() => toggleDropdown("procedures")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            Top Procedures <FaChevronDown className="inline ml-1 text-sm" />
            {dropdownOpen === "procedures" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md py-2 rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Procedure 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Procedure 2</li>
              </ul>
            )}
          </li>

          <li className="hover:text-blue-500 cursor-pointer">Doctors</li>
          <li className="hover:text-blue-500 cursor-pointer">Hospitals</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Book Appointment Button with Doctor Image */}
        <div className="hidden md:flex items-center space-x-2">
          
        <button className="bg-red-600 text-white px-5 py-2 rounded-md text-[16px] font-medium hover:bg-red-700 transition-all flex items-center gap-2">
  <img src={doctor} alt="Doctor" className="h-6 w-6 filter invert" />
  Book Appointment
</button>

        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-center space-y-4 py-4 font-medium text-gray-700 text-[16px]">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Treatments</li>
          <li className="hover:text-blue-500 cursor-pointer">Top Procedures</li>
          <li className="hover:text-blue-500 cursor-pointer">Doctors</li>
          <li className="hover:text-blue-500 cursor-pointer">Hospitals</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all">
            Book Appointment
          </button>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
