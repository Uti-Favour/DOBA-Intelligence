import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "./common/Button";

const Commitments = () => {
  const stats = [
    {
      id: "1",
      number: "245%",
      description: "More revenue for the brand",
    },
    {
      id: "2",
      number: "130K+",
      description: "Audience Matched",
    },
    {
      id: "3",
      number: "50+",
      description: "Brands trusts us",
    },
    {
      id: "4",
      number: "28+",
      description: "Wordwide Award",
    },
  ];
  return (
    <>
      <motion.div
        className="lg:flex lg:justify-between mx-5 lg:mx-16 mt-16 lg:mt-16"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* content */}
        <div className="lg:mt-0 mt-16">
          <h2 className="font-semibold text-5xl text-blue-800">Commitments</h2>
          <p className="max-w-[450px] text-gray-700 mt-5 mb-12">
            We help you save time, money and energy. We help get all your
            content writing needs in one place.
          </p>
          <a href="#" className="text-blue-800 flex items-center">
            Learn More
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:gap-16 gap-10 lg:mt-0 mt-12">
          {stats.map((stat) => (
            <div className="" key={stat.id}>
              <h3 className="font-semibold text-5xl text-blue-800">
                {stat.number}
              </h3>
              <p className="text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Commitments;
