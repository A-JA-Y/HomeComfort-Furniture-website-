import React, {useState, useEffect} from "react";
import bg from "../../images/bg.jpg";

export default function SaleCoutdown() {
  const targetTime = new Date().getTime() + 24*60*60*1000;
  const [timeLeft,setTimeLeft] = useState(targetTime- new Date().getTime())

  useEffect(() => {
    const interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = targetTime - now;

      setTimeLeft(distance)

      if(distance < 0) {
        clearInterval(interval)
        setTimeLeft(0)
        alert("Sale ends!") // Uncomment to show alert when sale ends.
      }
    },1000)

    return () => clearInterval(interval) 
  },[targetTime]);
  const hours = Math.floor((timeLeft/(1000*60*60))%24);
  const minutes = Math.floor((timeLeft/1000/60)%60);
  const seconds = Math.floor((timeLeft/1000)%60);


  return (
    <>
      <div className="my-16">
        <div className="img relative">
          <div className=" h-50" style={{
            backgroundImage: `url(${bg})`,
            minHeight: "300px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}></div>
          
<div className="absolute  bg-green-950 bg-opacity-25 text-white inset-0 flex flex-col items-center justify-center-center text-center ">
  <div className="my-20">

  <h1 className="bg-transparent text-3xl">70% off Sale ends in:</h1>
  <h2 className="text-6xl my-5 lg:font-extrabold sm:font-bold ">{`${hours}h ${minutes}m ${seconds}s`}</h2>
  </div>
</div>



        </div>
      </div>
    </>
  );
}
