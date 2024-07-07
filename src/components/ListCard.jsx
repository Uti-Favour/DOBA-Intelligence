import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ListCard({
  id,
  image,
  heading,
  description,
  timeframe,
  writer,
}) {
  const { name, image: writerImage, field } = writer;
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      key={id}
    >
      <div className="bg-neutral-900 rounded-3xl lg:p-12 px-5 py-8 text-white">
        <div className="mb-10">
          <img
            src={image}
            className="h-52 w-full rounded-3xl"
            alt="Blog Image"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="h-3 w-3 bg-blue-800 rounded-full"></span>
          <span className="text-gray-300">{timeframe}</span>
        </div>
        <h1 className="text-2xl font-semibold text-blue-800 mt-5">{heading}</h1>
        <div className="flex items-end space-x-4 mt-8">
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="flex items-center space-x-4 mt-10 justify-between">
          <div className="flex space-x-2">
            <img
              src={writerImage}
              alt="writer-image"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div>
              <span className="font-semibold">{name}</span> <br />
              <span className="text-gray-500">{field}</span>
            </div>
          </div>
          <Link to={`/blog/${id}`} className="hover:opacity-80">
            <div className="bg-blue-800 text-white py-3 px-5 rounded-3xl flex items-center justify-center hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:scale-105 transition duration-300">
              <i className="fas fa-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ListCard;
