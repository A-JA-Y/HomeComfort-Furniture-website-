import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import image from "../../components/images/Designer.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="container flex flex-col sm:flex-col-reverse lg:flex-row gap-10 w-full">
          <div className="left flex flex-col items-center justify-center w-full lg:w-1/2">
            <h1 className="text-black text-left text-2xl sm:text-3xl md:text-4xl font-bold ml-5 my-3">
              About <br />
              Home<span className="text-green-600">Comfort</span>
            </h1>
            <p className="font-mono text-center text-sm sm:text-base md:text-lg my-2">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              aperiam ipsa provident molestiae repellendus cum unde mollitia
              excepturi incidunt nobis reprehenderit ullam dolorem ut dolor
              cupiditate accusamus fugiat commodi ea accusantium consectetur,
              architecto nostrum corrupti dignissimos. Dignissimos cumque cum
              nostrum corrupti! Ea nulla placeat similique, tenetur suscipit
              fugit assumenda quasi doloremque nobis et aliquam ad consequatur
              deleniti optio! Sunt est nemo tenetur inventore exercitationem
              illo delectus ipsum ex aut incidunt aliquid qui explicabo
              repudiandae architecto molestias eum, odio, magni perspiciatis
              beatae. Enim harum beatae perspiciatis incidunt earum iusto
              provident error voluptatum optio sed nihil, mollitia illo quidem
              laudantium delectus nemo?"
            </p>
          </div>
          <div className="right w-full lg:w-1/2">
            <div className="imgContainer">
              <img
                src={image}
                alt="homeFurniture"
                className="w-full sm:border-green-400 sm:rounded-full sm:my-3 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
