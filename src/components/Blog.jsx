import React from "react";
import { motion } from "framer-motion";
import { blogcontents } from "../constant";

function ListCard({
  id,
  image,
  heading,
  description,
  timeframe,
  link,
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
          <span className="h-3 w-3 bg-blue-400 rounded-full"></span>
          <span className="text-gray-300">{timeframe}</span>
        </div>
        <h1 className="text-2xl font-semibold text-blue-400 mt-5">{heading}</h1>
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

          <a href={link} className="hover:opacity-80">
            <div className="bg-blue-400 text-white py-3 px-5 rounded-3xl flex items-center justify-center hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:scale-105 transition duration-300">
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const Blog = () => {
  // Slice the blogcontents array to show only the first three items
  const displayedBlogs = blogcontents.slice(0, 3);

  return (
    <>
      <div className="py-3 rounded-tr-[50px] rounded-tl-[50px]">
        <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-16 text-white">
          <motion.h1
            className="font-semibold max-w-xl lg:text-5xl text-3xl lg:leading-tight text-blue-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            Digital{" "}
            <span className="italic text-gray-300">
              Marketing and SEO Services
            </span>{" "}
            That Grow Traffic.
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              className="text-gray-300 max-w-lg lg:mt-0 mt-5 leading-8"
            >
              Don’t want a monthly plan? Select how many articles you need and
              we will cost you per request. It has never been easier to produce
              content faster and at scale. All blogs are human written, unless
              you specify otherwise.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 lg:mx-16 mx-5 py-5 gap-4 mt-10">
          {displayedBlogs.map((blog) => (
            <ListCard
              key={blog.id}
              image={blog.image}
              heading={blog.heading}
              description={blog.description}
              link={blog.link}
              timeframe={blog.timeframe}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
