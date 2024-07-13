import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../../images/1.jpg";
import two from "../../images/2.jpg";
import three from "../../images/3.jpg";

import React from "react";

export default function MyCarousel() {
  return (
    <>
      <Carousel className="rounded-xl bg-yellow-100 ">
        <div className="relative">
          <img src={one} />
          <div className="imgDetail  absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:scale-105">
            <h1 className="text-white text-5xl font-bold">Sofa Collection</h1>
            <p className="text-white">
              Premium design sofas are available.
              <br />
              Just click on visit our showroom!
            </p>
          </div>
          <p className="legend hover:cursor-pointer">Visit Our Showroom</p>
        </div>
        <div>
          <img src={two} />
          <div className="imgDetail  absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:scale-105">
            <h1 className="text-white text-5xl font-bold">Interior Design</h1>
            <p className="text-white">
              We design world class elegant interior with clean and soft finish.
              <br />
              Just click on visit our showroom!
            </p>
          </div>
          <p className="legend hover:cursor-pointer">Visit Our Showroom</p>
        </div>
        <div>
          <img src={three} />
          <div className="imgDetail  absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:scale-105">
            <h1 className="text-white text-5xl font-bold">
              Wooden Accesories Collection
            </h1>
            <p className="text-white">
              Premium design Wooden Accesories for your home are awailable.
              <br />
              Just click on visit our showroom!
            </p>
          </div>
          <p className="legend hover:cursor-pointer">Visit Our Showroom</p>
        </div>
      </Carousel>
    </>
  );
}
