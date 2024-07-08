import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        className="lg:flex lg:justify-between mx-5 lg:mx-16 mt-16 lg:mt-16 text-white"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* content */}
        <div className="lg:mt-0 mt-16">
          <h2 className="font-bold lg:bold lg:text-5xl text-4xl text-blue-400">We are Express Writers</h2>
          <p className="max-w-[450px] text-gray-300 mt-5 mb-12">
          It has never been easier to produce content faster and at scale. Our AI technology ensures quality and efficiency.
          </p>
       <Button content={'Learn More'} link={'/about'} />
        </div>

        <div className="grid grid-cols-2 lg:gap-16 gap-10 lg:mt-0 mt-12 mx-1">
          {stats.map((stat) => (
            <div className="" key={stat.id}>
              <h3 className="font-bold lg:text-5xl text-4xl text-blue-400">
                {stat.number}
              </h3>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Commitments;
