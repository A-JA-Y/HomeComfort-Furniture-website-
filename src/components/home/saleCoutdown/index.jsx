import React, { useState, useEffect } from "react";
import bg from "../../images/bg.jpg";

export default function SaleCoutdown() {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="my-16">
        <div className="img relative">
          <div
            className=" h-50 "
            style={{
              backgroundImage: `url(${bg})`,
              minHeight: "300px",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "blur(1.5px)",
            }}
          ></div>

          <div className="absolute  bg-green-950  bg-opacity-25 text-white inset-0 flex flex-col items-center justify-center-center text-center ">
            <div className="my-20">
              <h1 className="bg-transparent text-3xl ">
                70% off Sale ends in:
              </h1>
              <h2 className="text-6xl my-5 lg:font-extrabold sm:font-bold stroked">
                {hours}h {minutes}m {seconds}s
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
