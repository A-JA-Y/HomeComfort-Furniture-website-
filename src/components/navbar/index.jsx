import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import logo from "../images/Designer.png";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaHome } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between ">
          <div className="flex space-x-7">
            <div>
              <NavLink to={'/'} className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2 hover:scale-110 rounded drop-shadow-md " />
                <span className="font-semibold text-gray-500 text-lg hover:text-green-600 transition delay-300 ">
                  EcoFurniture
                </span>
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to={'/'}
              className="py-4 px-2 text-green-500  border-green-500 font-semibold "
            >
              <div className="home flex text-center items-center content-evenly"><FaHome className="mx-1 "/>Home</div>
              
            </NavLink>
            <NavLink
              to="/products"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 "
            >
              Products
            </NavLink>
            <NavLink
              to={'/about'}
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About
            </NavLink>
            <NavLink
              to={'/contact-us'}
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="https://github.com/A-JA-Y" target="_blank"
              className="py-4 px-2  text-gray-500 font-semibold hover:text-black transition duration-300 "
            >
              <FaGithub className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl"/>
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-kumar-358758227/" target="_blank"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl"/>
            </a>
            <a
              href="https://x.com/sir_rrolex" target="_blank"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              <FaTwitter className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl"/>
            </a>
            <a
              href="https://www.youtube.com/@zeroToOne-tv2pd" target="_blank"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-red-600 transition duration-300"
            >
              <FaYoutube className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl"/>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-600 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <NavLink to={'/'} className="block py-2 px-4 text-sm hover:bg-green-100">
        Home
        </NavLink>
        <NavLink to={'/products'} className="block py-2 px-4 text-sm hover:bg-green-100">
          Products
        </NavLink>
        <NavLink to={'/about'} className="block py-2 px-4 text-sm hover:bg-green-100">
          About
        </NavLink>
        <NavLink to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100">
          Contact
        </NavLink>
        
      </div>
    </nav>
  );
}
