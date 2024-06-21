import React from "react";
import { motion } from "framer-motion";
import { blogcontent } from "../constant";

const Blog = () => {
  function ListCard({ id, heading, description, timeframe, link }) {
    return (
      <div>
        <div className="bg-white p-12 rounded-3xl" key={id}>
          <h1 className="text-2xl font-semibold">{heading}</h1>
          <div className="flex items-end space-x-4">
          <p className="mt-10 text-gray-700">{description}</p>
          <div className="">
            <li className="fas fa-arrow-right  border border-black py-3 px-5 rounded-3xl hover:bg-black hover:border-white hover:text-white"></li>
          </div>
          </div>
          <a href={link}></a>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-[#F5F5F5] py-3 rounded-tr-[50px] rounded-tl-[50px]">
        <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-16">
          <motion.h1
            className="font-medium  max-w-xl lg:text-5xl text-4xl leading-loose"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
          >
            Digital Marketing and SEO Services That Grow Traffic and Increase
            Revenue
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 3 } }}
              className="text-gray-500 max-w-lg lg:mt-0 mt-5 leading-8"
            >
              Don’t want a monthly plan? Select how many articles you need and
              we will cost you per request. It has never been easier to produce
              content faster and at scale.All blogs are human written, except
              you want otherwise.
            </motion.p>

            <a href="">
              <button className=" px-10 py-3 bg-transparent border border-black rounded-3xl mt-5">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 mx-20 py-10 gap-4">
          {blogcontent.map((blog) => (
            <ListCard
              key={blog.id}
              heading={blog.heading}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
