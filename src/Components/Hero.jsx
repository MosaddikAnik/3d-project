import React from "react";
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]  lg:px-20 lg:gap-16">
      
      {/* Left Content */}
      <div className="flex flex-col -mt-[40%] lg:mt-40 items-center lg:items-start text-center lg:text-left max-w-xl">
        
        {/* Tag Box */}
        <div
          className="relative w-[95%] sm:w-48 h-10 
                     bg-gradient-to-r from-[#656565] to-[#e99b63] 
                     shadow-[0_0_15px_rgba(255,255,255,0.4)] 
                     rounded-full"
        >
          <div
            className="absolute inset-[3px] 
                       bg-black rounded-full 
                       flex items-center justify-center gap-1"
          >
            <i className="bx bx-diamond" aria-hidden="true"></i>
            INTRODUCING
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR <br /> DEVELOPERS
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam hic
          doloremque temporibus ipsam aliquid possimus illo unde quasi sit
          eveniet?
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
          <a
            href="#"
            className="border border-[#2a2a2a] 
                       py-2 sm:py-3 px-4 sm:px-5 
                       rounded-full 
                       text-sm sm:text-base md:text-lg font-semibold 
                       tracking-wider 
                       transition-all duration-300 
                       hover:bg-[#1a1a1a] hover:text-white 
                       inline-flex items-center gap-2"
          >
            Documentation <i className="bx bx-link-external" aria-hidden="true"></i>
          </a>
          <a
            href="#"
            className="border border-[#2a2a2a] 
                       py-2 sm:py-3 px-4 sm:px-5 
                       rounded-full 
                       text-sm sm:text-base md:text-lg font-semibold 
                       tracking-wider 
                       transition-all duration-300 
                       hover:bg-[#1a1a1a] hover:text-white 
                       inline-flex items-center gap-2"
          >
            Get Started <i className="bx bx-link-external" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Right Content (3D) */}
      <div className="w-full lg:w-1/2 lg:mt-14 -mt-60 h-full lg:h-[600px]">
        <Spline className="className=absolute lg:top-0 bottom-0 lg:left-[25%]  h-full" scene="https://prod.spline.design/pDK7cOCnuwKliar8/scene.splinecode" />
      </div>
    </main>
  );
};

export default Hero;
