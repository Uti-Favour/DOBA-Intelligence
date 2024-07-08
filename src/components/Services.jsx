import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicelist } from "../constant";

const Services = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-0 text-white">
        <motion.h1
          className="font-semibold max-w-2xl lg:text-5xl text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          We are the fastest and Cheapest{" "}
          <span className="text-blue-400 italic">
            content marketing agency{" "}
          </span>{" "}
          in the world.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          className="text-gray-300 max-w-lg lg:mt-0 mt-5"
        >
          To rank your website higher consistency is key Outsource the entire
          process to us and we will deliver in 5 hours or less. Leveraging
          advanced AI technology, our team of experts handles everything from
          content strategy and keyword research to writing, editing, and
          publishing.
        </motion.p>
      </div>

      {/* grid */}
      <div className="lg:mx-16 mx-5 grid lg:grid-cols-3 gap-6 mt-20">
        {servicelist.map((services, index) => (
          <div
            key={index}
            className="space-y-5 border border-gray-700 p-8 rounded-3xl transition duration-300 group hover:border-gray-600"
          >
            <div className="h-16 w-16 rounded-tr-3xl rounded-br-3xl bg-blue-400 text-white flex justify-center items-center transition duration-300">
              <i className={services.icon}></i>
            </div>
            <h2 className="text-xl font-semibold text-white transition duration-300 group-hover:text-white">
              {services.heading}
            </h2>
            <p className="text-gray-400 mb-16 transition duration-300">
              {services.description}
            </p>
            <div>
              <Link
                to={services.link}
                className="text-blue-400 font-semibold transition duration-300 "
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
