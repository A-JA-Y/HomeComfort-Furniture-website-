import { useState, useEffect } from "react";
import profile1 from "../../images/profile1.jpg";
import profile2 from "../../images/profile2.png";

export default function Vision() {
  const people = [
    {
      name: "Ajay Kumar",
      role: "Frontend dev",
      quote:
        "Wake up to reality nothing ever goes as planned in this acursed world ,the longer you live the more you will realise that the only thing that remains is pain, suffering and futility.",
      profile: profile1,
    },
    {
      name: "Rolex",
      role: "Sir",
      quote:
        '"Wake up to reality nothing ever goes as planned in this acursed world ,the longer you live the more you will realise that the only thing that remains is pain, suffering and futility."',
      profile: profile2,
    },
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
      prevIndex < people.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(!isSliding);
      }, 500);
      return () => clearTimeout(timer);
    }
    const interval = setInterval(() => {
      setIsSliding(!isSliding);
      setActiveIndex(prevIndex => (prevIndex + 1) % people.length); // Cycle through the `people` array
    }, 4000); // Change image every 2 seconds
  
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [people.length]);

  return (
    <>
      <div className="carousel max-w-full  ">
        <div className="flex flex-col items-center content-center px-10">
            <h1 className="text-3xl font-bold">Our Vision</h1>
          <div className={`imag-container ${isSliding ? "slide" : ""} w-full `}>
            <div className="quote italic">
              <p>{people[activeIndex].quote}</p>
              <p className="text-sm sm:text-base md:text-lg font-semibold ">
                {people[activeIndex].name}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold ">
                {people[activeIndex].role}
              </p>
              <div className="dots flex  bottom-0">
                <div
                  className={`absolute bg-gray-500 hover:bg-black h-2 w-2 rounded-full mx-4 ${activeIndex===0? "bg-black":"bg-gray-500"}`}
                  onClick={handleNext}
                ></div>
                <div
                  className={`absolute  hover:bg-black h-2 w-2 rounded-full ${activeIndex===1? "bg-black":"bg-gray-500"} `}
                  onClick={handlePrevious}
                ></div>

              </div>
            </div>
            <div className="dp py-3">
              <img
                src={people[activeIndex].profile}
                alt="profile"
                className="lg:w-1/4 sm:w-1/2 float-right rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
