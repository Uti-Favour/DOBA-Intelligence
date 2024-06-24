import React from "react";
import { motion } from "framer-motion";
import { blogcontent } from "../constant";

const Blog = () => {
  function ListCard({ id, image,  heading, description, timeframe, link , indication}) {
    return (
      <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration : 1}}>
       
        <div className="bg-[#F5F5F5] lg:p-12 px-5  py-8   rounded-3xl" key={id}>
        <div className="mb-10">
          <img src={image} className="h-52 w-full rounded-3xl" />
        </div>
          <div className="flex justify-between">
            <img src={indication} className="rounded-full mb-5"/>
            <span className="text-gray-800">{timeframe}</span>
          </div>
          <h1 className="text-2xl font-semibold text-blue-800">{heading}</h1>
          <div className="flex items-end space-x-4">
          <p className="mt-8 text-gray-700">{description}</p>
          <div className="">
            <li className="fas fa-arrow-right  bg-blue-800 text-white py-3 px-5 rounded-3xl  hover:border-blue-800 hover:text-white hover:scale-110"></li>
          </div>
          </div>
          <a href={link}></a>
        </div>
      </motion.div>
    );
  }
  return (
    <>
      <div className="py-3 rounded-tr-[50px] rounded-tl-[50px]">
        <div className="lg:flex lg:justify-between lg:mx-16 mx-5 mt-14 lg:mt-16">
          <motion.h1
            className="font-semibold  max-w-xl lg:text-5xl text-3xl lg:leading-tight  text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
          >
            Digital <span className="italic text-black">Marketing and SEO Services</span> That Grow Traffic.
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

            {/* <a href="">
              <button className=" px-10 py-3 text-white border-white bg-blue-800 rounded-3xl mt-5">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </a> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 lg:mx-16 mx-5 py-5 gap-4 mt-10">
          {blogcontent.map((blog) => (
            <ListCard
              key={blog.id}
              image={blog.image}
              indication={blog.indication}
              heading={blog.heading}
              description={blog.description}
              link={blog.link}
              timeframe={blog.timeframe}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
