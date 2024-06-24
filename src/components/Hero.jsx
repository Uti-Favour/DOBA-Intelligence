import React from "react";
import { useState } from "react";
import Button from "./common/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] text-black py-10  mt-20">
        <div className=" lg:flex lg:justify-between mx-5 lg:mx-20">
          <div className="mt-5">
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

          <div className="lg:w-[600px] lg:h-[600px] mt-16 lg:mt-0">
            <img src="https://i.pinimg.com/736x/d3/5c/c0/d35cc0f9cc8ca722e019e465e992c2e7.jpg" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
