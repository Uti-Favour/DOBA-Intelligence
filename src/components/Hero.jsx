import React from "react";
import { useState } from "react";
import Button from "./common/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-white text-black py-10  ">
        <div className=" lg:flex lg:justify-between mx-5 lg:mx-32">
          <div className="mt-10">
            <h1 className="font-semibold text-4xl lg:text-6xl max-w-lg ">
              Stay ahead of the curve with our <span className="text-blue-800 italic">forward-thinking</span>
            </h1>
            <p className="max-w-lg mt-10 leading-7 text-gray-800">
            To rank your website higher consistency is key. 
            Outsource the entire process to us and we will deliver in 8 hours to meet your content deadline !!
            </p>

            <div className="flex items-center space-x-10 mt-10">
              <Button link={"google.com"} content={"Schedule Call"} icon={'fas fa-calendar-check ml-1'} id={1} />
              <a href="" className="text-black underline lg:block hidden text-lg">
                View case sturdy
              </a>
            </div>
          </div>

          <div className="lg:w-[420px] lg:h-[420px] mt-16 lg:mt-0 bg-blend-darken ">
            <img src="src/assets/hero-asset.png" alt="" />
          </div>
        </div>

        <div className="lg:flex ml-5 lg:ml-32 mt-16 lg:mt-10 items-center">
          <h3 className="lg:max-w-[210px] font-semibold text-lg lg:text-md">
            Trusted by the world's biggest brands :
          </h3>      
          <div className="grid grid-cols-2 items-center lg:gap-3 lg:mt-0  mt-5">
          <img src="src/assets/Google.png" className=" lg:w-24" />
          <img src="src/assets/Microsoft.png" className="lg:w-24"/>
          <img src="src/assets/PayPal.png" className="lg:w-24"/>
          <img src="src/assets/Salesforce Logotype.png" className="lg:w-24"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
