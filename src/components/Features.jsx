import React from "react";
import { features } from "../constant";
import workImage from "/src/assets/DOBA Intelligence - Rollup Placement.jpg";

const Features = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] rounded-tr-[50px] rounded-tl-[50px] py-16 mt-16">
        <div className="lg:mx-20 mx-5 lg:flex lg:justify-between">
          <div>
            <h1 className="font-semibold text-7xl italic text-blue-800">How it works...</h1>
            <p className="max-w-lg leading-8 mt-5 text-gray-800">
              You can outsource your blog to us, from brainstorming to writing.
              Show google that you are ready for the ranking challenge. Don’t
              rank one time, keep ranking forever ( till google shuts down.)
            </p>
            <div className="mt-10">
              <img
                src={workImage}
                className="w-[500px] h-[250px] rounded-3xl object-cover"
              />
            </div>
          </div>
          {/* grid section */}
          <div className="space-y-10 lg:mt-0 mt-10">
            {features.map((feature) => (
              <div className="flex items-center">
                <div className="bg-blue-800 text-white lg:w-16 w-20 lg:h-16 h-12 items-center flex justify-center rounded-xl">
                <i className={feature.icon}></i>
                </div>

                <div className="ml-5">
                  <h2 className="text-2xl font-semibold">{feature.header}</h2>
                  <p className="mt-2 max-w-sm text-gray-800">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
