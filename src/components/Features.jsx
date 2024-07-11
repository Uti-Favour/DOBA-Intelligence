import React from "react";
import { motion } from "framer-motion";
import { features } from "../constant";
import workImage from "/src/assets/DOBA Intelligence - Rollup Placement.jpg";
import Navbar from "./Navbar";

const Features = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-tr-[50px] rounded-tl-[50px] py-16 mt-16 ">
        <div className="lg:mx-20 mx-5 lg:flex lg:justify-between">
          <div>
            <h1 className="font-semibold lg:text-7xl text-4xl italic text-blue-400 lg:max-w-xl">Efficiency Meets Creativity 💫</h1>
            <p className="max-w-lg leading-8 mt-5 text-gray-300">
            At DOBA Intelligence, we blend the precision of AI technology with the boundless potential of human creativity. Our innovative approach ensures your content is not only delivered quickly and efficiently but also resonates deeply with your audience. 
            </p>
            <div className="mt-10">
              <img
                src={workImage}
                className="w-[500px] h-[250px] rounded-3xl object-cover"
              />
            </div>
          </div>
          {/* grid section */}
          <motion.div className="space-y-10 lg:mt-0 mt-10" initial={{x:-200}} whileInView={{x:0}} transition={{duration: 1}}>
            {features.map((feature) => (
              <div className="flex items-center" key={feature.header}>
                <div className="bg-blue-400 text-neutral-950 lg:w-16 w-24 lg:h-16 h-14 items-center flex justify-center rounded-xl">
                  <i className={feature.icon}></i>
                </div>
                <div className="ml-5">
                  <h2 className="text-2xl font-semibold">{feature.header}</h2>
                  <p className="mt-2 max-w-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
