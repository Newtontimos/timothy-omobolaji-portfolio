import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hi, I am Timothy,nice to meet you,can we build a website?</p>
          </div>
          <div>
            <p>
              I builds the user interfaces(UI) of websites and web
              applications.I use web languages like HTML , CSS , JAVASCRIPT and
              REACT.JS to create the visual elements users see and interact
              with.I bring designs to life,enhance user experience and ensure
              websites function seamlessly across browsers and devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
