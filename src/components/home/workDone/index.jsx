import React, { useEffect, useState } from "react";
import bg from "../../images/bg.jpg";

export default function WorkDone() {
  const [customerCount, setCustomerCount] = useState(0);
  const [productsDelivered, setProductsDelivered] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerCount((prevCount) => {
        if (prevCount >= 1000) {
          clearInterval(interval);
          return `${prevCount}+`;
        } else {
          return prevCount + 10;
        }
      });
      setProductsDelivered((prevCount) => {
        if (prevCount >= 1000) {
          clearInterval(interval);
          return `${prevCount <1000 ? prevCount : "1k"}+`;
        } else {
          return prevCount + 10;
        }
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-12 ">
        <div className="img relative">
          <div
            
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
          <div >
            <div className="absolute  z-10 bg-green-950  bg-opacity-25 text-white inset-0 flex flex-col items-center justify-center text-center left-0 w-1/2">
              <div className="my-20">
                <h1 className="bg-transparent text-6xl lg:font-extrabold sm:font-bold stroked">
                  {customerCount}
                </h1>
                <h2 className="text-3xl my-5 ">Customer</h2>
              </div>
            </div>
            <div className="absolute z-10  bg-green-950  bg-opacity-25 text-white inset-0 flex flex-col items-center justify-center-center text-center left-1/2 w-1/2 ">
              <div className="my-20">
                <h1 className="bg-transparent text-6xl lg:font-extrabold sm:font-bold stroked">
                  {productsDelivered}
                </h1>
                <h2 className="text-3xl my-5 ">Products delivered</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
