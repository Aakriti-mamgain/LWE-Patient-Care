import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import logo1 from "../assets/images/LWE-LOGO-02.png";
import doctor from "../assets/images/doctor.png";
import phone_call from "../assets/images/phone-call.png";
import maps from "../assets/images/maps-and-flags.png";
import mail from "../assets/images/mail.png";

const Footer = () => {
  return (
    <footer className="font-poppins">
      {/* Blue Section */}
      <div style={{ backgroundColor: "#005897" }} className="text-white py-[30px] w-full h-full">
  <div className="container mx-auto pl-[170px] pr-[170px] grid grid-cols-1 md:grid-cols-4 gap-8">

    
    {/* Logo and description */}
    <div>
      <img src={logo1} alt="LWE Patient Care" className="h-16 w-auto" />
      <p className="mt-3 text-sm leading-relaxed">
        lwepatientcare – A Unit of LWE CARE PHARMACEUTICALS PVT LTD is a leading medical tourism company headquartered in India, dedicated to providing seamless healthcare solutions to global patients seeking affordable and world-class medical treatments.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-bold text-lg mb-3">Quick Links</h3>
      <ul className="space-y-2">
        {["Home", "Doctors", "Treatments", "Hospitals", "About Us", "Contact"].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className=" text-white p-2 rounded-full">
              <FaArrowRight size={12} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Our Treatments */}
    <div>
      <h3 className="font-bold text-lg mb-3">Our Treatments</h3>
      <ul className="space-y-2">
        {["Oncology", "Orthopedic", "Organ Transplant", "Respiratory", "Neurology"].map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className=" text-white p-2 rounded-full">
              <FaArrowRight size={12} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Us */}
    <div>
      <h3 className="font-bold text-lg mb-3">Contact Us</h3>
      <ul className="space-y-3">
        {[
          { icon: phone_call, text: "+91 7065062058" },
          { icon: phone_call, text: "+91 99999 62058" },
          { icon: mail, text: "contact@lwepatientcare.in" }
        ].map((contact, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="bg-red-600 text-white p-2 rounded-full flex items-center justify-center">
              <img src={contact.icon} alt="icon" className="h-4 w-4 filter invert" />
            </span>
            {contact.text}
          </li>
        ))}
      </ul>
      <p className="mt-4 leading-relaxed">
        LWE CARE PHARMACEUTICALS PRIVATE LIMITED <br />
        Durga Enclave, Plot No.1, Near Doon Bharti Public School, Faridabad, Haryana, 121003
      </p>
    </div>

  </div>
</div>



      {/* Black Section*/}


<section className="relative bg-black text-white py-4 flex items-center justify-center">
  <div className="max-w-[1140px] w-full px-4">
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
      <a href="https://Iwepatientcare.in/terms-conditions/" className="hover:text-gray-300 transition flex items-center gap-1">
        <FaArrowRight className="text-gray-500" />
        Terms & Conditions
      </a>
      <a href="https://Iwepatientcare.in/privacy-policy/" className="hover:text-gray-300 transition flex items-center gap-1">
        <FaArrowRight className="text-gray-500" />
        Privacy Policy
      </a>
      <a href="https://Iwepatientcare.in/terms-conditions/" className="hover:text-gray-300 transition flex items-center gap-1">
        <FaArrowRight className="text-gray-500" />
        Disclaimer
      </a>
      <a href="https://Iwepatientcare.in/refund/" className="hover:text-gray-300 transition flex items-center gap-1">
        <FaArrowRight className="text-gray-500" />
        Refund Policy
      </a>
      <span className="text-gray-500 text-xs"></span>
      <span className="text-gray-400 text-xs">
        Copyright © 2023 lwepatientcare – A Unit of LWE CARE PHARMACEUTICALS PVT LTD. All rights reserved.
      </span>
    </div>
  </div>
</section>




    </footer>
  );
};

export default Footer;
