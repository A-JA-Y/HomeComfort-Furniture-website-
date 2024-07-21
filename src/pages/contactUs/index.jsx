import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import WaMe from "../../components/wa-top-btn/whatsapp";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact font-sans">
        <h1 className="font-extrabold text-7xl ml-10">Contact Us!</h1>
        <div className=" my-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-5 h-full w-full bg-slate-100">
          <div className="left mx-2  ">
          <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZ0Dma5xkEtfwjs0Z6VSGNEtH6-Lqhwd62IhMKM1Z7wxrBMQ/viewform?embedded=true"
              className="sm:w-full lg:w-[650px] md:w-[650]  h-[650px] sm:h-[1050px] md:h-[1250px] "
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
          <div className="right  items-center flex flex-col gap-4 font-medium my-4">
            <div className="w-full flex flex-col gap-4 my-8">
            <h1 className="text-4xl font-semibold">Visit us at:</h1>
              <div className="flex text-xl  ">
                <p>
                  <CiLocationOn className="text-3xl  text-green-900" />
                  Sector PI ,near Eldeco green meadows, Greater Noida ,
                  <br /> Gautambudhdhanagar,Uttar Pradesh, India 201310
                </p>
              </div>

              <div className="flex items-center">
                <span>Call:</span>
                <div>
                  <div className="flex items-center justify-center">
                  Call: <FaPhoneAlt />
                  9260967689
                  </div>
                </div>
                
              </div>
              <div className="flex items-center">
                <span>Email: </span>
                <div>
                  <div className="flex items-center justify-center">
                    <CiMail />
                    mailtoajay7007@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span>Whatsapp:</span>
                <a href="https://wa.link/hed8v6" target="_blank">
                  <button className="flex bg-green-800 hover:bg-green-600 h-10 items-center justify-center w-40 rounded-md">
                    <FaWhatsapp />
                    Click Here
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <WaMe />
      </div>
      <Footer />
    </div>
  );
}
