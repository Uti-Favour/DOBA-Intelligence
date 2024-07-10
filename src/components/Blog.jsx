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
            className="font-semibold max-w-xl lg:text-5xl text-4xl lg:leading-tight text-blue-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            Transform{" "}
            <span className="italic text-gray-300">Your Content Marketing</span>{" "}
            with Expert Writing.
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              className="text-gray-300 max-w-lg lg:mt-0 mt-5 leading-8"
            >
             You can outsource your blog to us, from brainstorming to writing. Show google that you are ready for the ranking challenge. Don’t rank one time, keep ranking forever ( till google shuts down.)
            </motion.p>
          </div>
        </div>

        <FeaturedBlogs />
      </div>
    </>
  );
};

export default Blog;
