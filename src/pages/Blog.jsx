import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { blogcontents } from "../constant";
import Footer from "../components/Footer";

function ListCard({ id, image, heading, description, timeframe, link, writer }) {
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
          <span className="h-3 w-3 bg-blue-400 rounded-full"></span>
          <span className="text-gray-300">{timeframe}</span>
        </div>
        <h1 className="text-2xl font-semibold text-blue-400 mt-5">{heading}</h1>
        <div className="flex items-end space-x-4 mt-8">
          <p className="text-gray-300">{description}</p>
          <a href={link} className="hover:opacity-80">
            <div className="bg-blue-400 text-white py-3 px-5 rounded-3xl flex items-center justify-center hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:scale-105 transition duration-300">
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>

        <div className="flex items-center space-x-4 mt-10">
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
      </div>
    </motion.div>
  );
}

const Blog = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div className="grid lg:grid-cols-3 gap-4 mx-5 lg:mx-20 mt-20">
          {blogcontents.map((contents) => (
            <ListCard
              key={contents.id} // Ensure each ListCard has a unique key prop
              id={contents.id}
              image={contents.image}
              heading={contents.heading}
              description={contents.description}
              timeframe={contents.timeframe}
              link={contents.link}
              writer={contents.writer} // Pass the writer object directly
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
