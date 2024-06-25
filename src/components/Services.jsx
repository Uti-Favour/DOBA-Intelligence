import React from "react";
import { motion } from "framer-motion";
import { servicelist } from "../constant";

const Services = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-0 text-white">
        <motion.h1
          className="font-semibold max-w-xl lg:text-5xl text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          Provide the best service with{" "}
          <span className="text-blue-400 italic">out of the box </span>ideas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          className="text-gray-300 max-w-lg lg:mt-0 mt-5"
        >
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </motion.p>
      </div>

      {/* grid */}
      <div className="lg:mx-16 mx-5 grid lg:grid-cols-3 gap-2 lg:gap-6 mt-20">
        {servicelist.map((services, index) => (
          <div key={index} className="space-y-5 border border-gray-700 p-8 rounded-3xl transition duration-300 group hover:bg-blue-800">
            <div className="h-16 w-16 rounded-tr-3xl rounded-br-3xl bg-blue-400 text-white flex justify-center items-center transition duration-300 group-hover:bg-white group-hover:text-blue-800">
              <i className={services.icon}></i>
            </div>
            <h2 className="text-xl font-semibold text-white transition duration-300 group-hover:text-white">{services.heading}</h2>
            <p className="text-gray-400 mb-16 transition duration-300 group-hover:text-gray-300">{services.description}</p>
            <div>
              <a href={services.link} className="text-blue-400 font-semibold transition duration-300 group-hover:text-white">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
