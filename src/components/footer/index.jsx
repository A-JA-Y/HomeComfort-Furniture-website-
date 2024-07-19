import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Footer() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setCurrentPosition({
            lat: 28.4744,
            lng: 77.504,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <div className="footer bg-black h-full grid grid-cols-1 lg:grid-cols-2 max-w-8xl mx-auto">
        <div className="container py-10 px-4 lg:px-0 lg:w-1/2 mx-auto">
          <div className="left ml-0 lg:ml-10">
            <div className="text-7xl flex flex-col">
              <span className="text-green-400 lg:text-7xl sm:text-3xl">
                eco<span className="text-white">Furniture</span>
              </span>
              <span className="text-white text-2xl mt-4">Visit us at:</span>
              <p className="address text-white text-xl text-wrap mt-2">
                Vikash Nagar Near Panchmukhi Hanuman Mandir,
                <br /> Bhiwadi Road Dharuhera, Haryana, India 301019
              </p>
              <span className="text-white text-2xl mt-4">
                Call Us: +91-9260967689
                <br />
                <hr className="my-2" />
                &copy; All rights reserved 2024
              </span>
            </div>
          </div>
        </div>
        <div className="right items-center justify-center flex  ">
          <div className="icons float-right  ">
            <div className=" flex  items-center justify-center my-6  space-x-1">
              <a
                href="https://github.com/A-JA-Y" target="_blank"
                className=" px-2  text-gray-500 font-semibold hover:text-gray-700 transition duration-300 "
              >
                <FaGithub className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-kumar-358758227/" target="_blank"
                className=" px-2 text-gray-500 font-semibold hover:text-blue-800 transition duration-300"
              >
                <FaLinkedin className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl" />
              </a>
              <a
                href="https://x.com/sir_rrolex" target="_blank"
                className=" px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                <FaTwitter className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl" />
              </a>
              <a
                href="https://www.youtube.com/@zeroToOne-tv2pd" target="_blank"
                className=" px-2 text-gray-500 font-semibold hover:text-red-600 transition duration-300"
              >
                <FaYoutube className="w-7 h-6 hover:h-7 transition duration-400 drop-shadow-xl" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <LoadScript googleMapsApiKey="AIzaSyBcYmuVVhnd1GPPqDbVcPlwTWR4f8L0Z3I">
                {currentPosition && (
                  <GoogleMap
                    mapContainerStyle={{ height: "150px", width: "300px" }}
                    center={currentPosition}
                    zoom={12}
                  >
                    <Marker position={currentPosition} />
                  </GoogleMap>
                )}
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
