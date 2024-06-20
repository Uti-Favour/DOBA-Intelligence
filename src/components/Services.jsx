import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { images } from "../constant";

const Services = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-16">
        <motion.h1
          className="font-semibold  max-w-xl lg:text-5xl text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          Provide the best service with{" "}
          <span className="text-blue-800 italic">out of the box </span>ideas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          className="text-gray-500 max-w-lg lg:mt-0 mt-5"
        >
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </motion.p>
      </div>

      {/* grid */}
      <div className="grid lg:grid-cols-3 mt-10 mx-5 lg:mx-16 space-x-4 text-white">
        <div className=" bg-black rounded-3xl space-y-36">
          <div className=" mt-5 text-gray-200 ml-10">
            <span className="text-8xl font-bold text-white">
              {" "}
              950<span className="text-blue-800">+ </span>
            </span>
            <br /> Projects finished superbly
          </div>

          <div className="flex ml-10 items-center">
            {images.map((image) => (
              <img
                src={image}
                className="w-20 h-20 rounded-full -ml-3 ring ring-white object-cover"
              />
            ))}

            <span className="text-white text-6xl font-bold ml-3">+ </span>
          </div>
        </div>
        
        <div className="  col-span-2">
          <img
            src="src/assets/DOBA Intelligence Logo 3 - Placement.jpg"
            alt=""
            className="rounded-3xl h-96 bg-cover w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
