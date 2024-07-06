import React, { useRef, useEffect } from "react";
import Button from "./common/Button";
import Typed from 'typed.js';
import heroimage from "/src/assets/hero-image.png"
import { Link } from "react-router-dom";



const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["No queues.", "No waiting time.", "Better quality."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative py-10 mt-8 text-white">
      
      <div className="lg:flex lg:justify-between mx-5 lg:mx-20">
        <div className="mt-5">
          <h1 className="font-semibold text-4xl lg:text-6xl max-w-lg">
          Get your next Article in 8 hrs <br /><span className="text-blue-400 italic auto-type" ref={typedElement}></span>
          </h1>
          <p className="max-w-lg mt-10 leading-7 text-gray-300">
            To rank your website higher consistency is key. 
            Outsource the entire process to us and we will deliver in 8 hours to meet your content deadline !!
          </p>

          <div className="flex items-center space-x-10 mt-10">
           <Link to="/getstarted"> <Button content={"Get Started"} icon={'fas fa-rocket ml-1'} id={1} /></Link>
            <Link to="/promo" className="text-white underline lg:block hidden text-lg">
              View our promo
            </Link>
          </div>
        </div>

        <div className="lg:w-[600px] lg:h-[600px] mt-16 lg:mt-0">
          <img src={heroimage} className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
