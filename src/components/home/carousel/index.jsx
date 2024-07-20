import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three from "../../images/3.jpg";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

export default function MyCarousel() {
  const images = [
    { src: one, alt: "Image 1" },
    { src: two, alt: "Image 2" },
    { src: three, alt: "Image 3" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handlePrevious = () => {
    setIsSliding(true);
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
  const handleNext = () => {
    setIsSliding(true);
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 500); 
      return () => clearTimeout(timer); 
    }
  }, [isSliding]);

  return (
    <>
      <div className="carousel max-w-full mx-auto ">
        <div className="flex  items-center content-center">
          <div className={`imag-container ${isSliding ? "slide" : ""} w-full `}>
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full"
            />

            <div className="flex flex-col items-center justify-center absolute w-full  h-full hover:bg-black/50  hover:bg-opacity-5 transition delay-50  ">
              {activeIndex === 0 ? (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold  drop-shadow-md ">
                    Premium Quality Sofas
                  </h1>
                  <br />
                  Just Click on the button below!
                </span>
              ) : activeIndex === 1 ? (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold drop-shadow-md">
                    Classic Interior Design
                  </h1>
                  <br />
                  Just Click on the button below!
                </span>
              ) : (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold drop-shadow-md">
                    Wooden Home Accesories
                  </h1>
                  <br />
                  Just Click on the button below!
                </span>
              )}
              <button className=" hover:cursor-pointer hover:scale-110 transition-transform bg-green-700 w-36 h-10 rounded outline-none hover:bg-green-500 delay-50 p-1 text-xs font-medium ">
                Visit Our Showroom
              </button>
            </div>
          </div>
          {activeIndex > 0 && (
            <button
              className="absolute bg-slate-500 bg-opacity-40 w-9 h-9  rounded-full float-left hover:text-green-600 transition-colors  delay-200"
              onClick={handlePrevious}
            >
              <FaArrowLeft className=" m-2" />
            </button>
          )}
          {activeIndex < images.length - 1 && (
            <button
              className=" bg-slate-500 bg-opacity-40 w-9 h-9  rounded-full absolute right-1 hover:text-green-600 transition-colors  delay-200  "
              onClick={handleNext}
            >
              <FaArrowRight className="m-2" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
