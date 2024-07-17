import React from "react";
import i from "../../images/i.webp";
import ii from "../../images/ii.webp";
import iii from "../../images/iii.webp";
import iv from "../../images/iv.webp";
import v from "../../images/v.jpg";
import vi from "../../images/vi.webp";
import vii from "../../images/vii.webp";
import viii from "../../images/viii.webp";
import ix from "../../images/ix.webp";
import "./style.css";

export default function CardGrid() {
  const cardImages = [
    { src: i, title: "Cupboard", alt: "one", desc: "This is a cupboard" },
    { src: ii, title: "Bed", alt: "two", desc: "This is a bed" },
    { src: iii, title: "Study Desk", alt: "three", desc: "This is a study desk" },
    { src: iv, title: "Chilling Chairs", alt: "four", desc: "This is a chilling chair" },
    { src: v, title: "Recliner sofa", alt: "five", desc: "This is a recliner sofa" },
    { src: vi, title: "Single Cloth Hanger", alt: "six", desc: "This is a single cloth hanger" },
    { src: vii, title: "Multi use hanger", alt: "seven", desc: "This is a multi use hanger" },
    { src: viii, title: "Multi use Self", alt: "eight", desc: "This is a multi use self" },
    { src: ix, title: "Small Sofa", alt: "nine", desc: "This is a small sofa" },
  ];

  return (
    <>
      <div className="grid grid-cols-3  w-4/5 mx-auto">
        {cardImages.map((image, index) => (
          <div className="container flex items-center justify-center ">
            <div className="flip-card  my-5 mx-3">
              <div className="flip-card-inner sm:text-wrap">
                <div key={index} className="flip-card-front  ">
                  <div className="title flex flex-col items-center justify-center text-white absolute w-full h-full bg-black bg-opacity-40 ">
                    <h1 className="lg:text-4xl    lg:font-bold  sm:text-2xl ">{image.title}</h1>
                    <p>more info</p>
                  </div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    id="card"
                    className={`object-cover w-full h-full `}
                  />
                </div>
                <div className="flip-card-back flex flex-col items-center justify-center">
                  <h1 className="lg:text-4xl    lg:font-bold  sm:text-2xl ">{image.title}</h1>
                  <p className="my-2">{image.desc}</p>
                  <button className=" my-2 hover:cursor-pointer hover:scale-110 transition-transform bg-green-700 w-36 h-10 rounded outline-none hover:bg-green-500 delay-50 p-1 text-xs font-medium ">
                View Details
              </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
