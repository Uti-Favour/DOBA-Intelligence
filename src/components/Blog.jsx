import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogcontents } from "../constant/index";
import ListCard from "./ListCard";
import FeaturedBlogs from "./FeaturedBlogs";

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

        
         <FeaturedBlogs/>
        
      </div>
    </>
  );
};

export default Blog;

