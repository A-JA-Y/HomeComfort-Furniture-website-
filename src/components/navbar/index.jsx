import React from "react";
import logo from "../images/Designer.png";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center text-gray-800 bg-white p-4 ">
        <div className="bg-white flex justify-around items-center font-serif hover:cursor-pointer w-1/5">
          <img src={logo} alt="" className="h-16 rounded-full" />
          <strong>EcoFurniture</strong>
        </div>
        <div className="bg-white">
          <ul className="list-none flex justify-between  items-center  ">
            <li className="px-4 hover:text-green-600 cursor-pointer font-bold text-gray-600 ">
              Home
            </li>
            <li className="px-4 hover:text-green-600 cursor-pointer font-bold text-gray-600 ">
              About Us
            </li>
            <li className="px-4 hover:text-green-600 cursor-pointer font-bold text-gray-600 flex ">
              Products
            </li>
            <li className="px-4 hover:text-green-600 cursor-pointer font-bold text-gray-600 ">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="bg-white w-1/3 px-28">
          <ul className="list-none flex justify-center  items-center ">
            <li className="px-4 w-1/4">
              <FaGithub className="  w-5 hover:w-6 h-6 hover:cursor-pointer" />
            </li>
            <li className="px-4 w-1/4">
              <FaLinkedin className=" w-5 hover:w-6 h-6 hover:cursor-pointer" />
            </li>
            <li className="px-4 w-1/4">
              <FaTwitter className=" w-5 hover:w-6 h-6 hover:cursor-pointer" />
            </li>
            <li className="px-4 w-1/4">
              <FaYoutube className=" w-5 hover:w-6 h-6 hover:cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
