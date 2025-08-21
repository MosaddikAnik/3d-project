import React from "react";
import "boxicons/css/boxicons.min.css"
const Header = () => {
      const toggle = () => {
            const mobileMenu = document.getElementById("mobile")
            if(mobileMenu.classList.contains("hidden")){
                  mobileMenu.classList.remove('hidden')
            }
            else{
                  mobileMenu.classList.add("hidden")
            }
      }
  return (
    <div className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-3xl text-white md:text-4xl lg:text-5xl font-light m-0">
        ANIMATION
      </h1>
      <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          company
        </a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          feature
        </a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          resources
        </a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          docs
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-md border-none font-medium hover:bg-gray-300">
        Sign in
      </button>
        <button onClick={toggle} className="md:hidden text-3xl p-2 z-50">
          <i className="bx bx-menu"></i>
        </button>
        <div id="mobile" className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
            <nav className="flex flex-col gap-6 items-center">
             <a
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          company
        </a>
        <a
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          feature
        </a>
        <a
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          resources
        </a>
        <a
          className="text-base uppercase tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          docs
        </a>
        </nav>
        </div>
    </div>
  );
};

export default Header;
