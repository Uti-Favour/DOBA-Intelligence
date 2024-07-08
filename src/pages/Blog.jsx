import React from "react";
import Navbar from "../components/Navbar";
import { blogcontents } from "../constant/index"; // Make sure the path is correct
import Footer from "../components/Footer";
import ListCard from "../components/ListCard" // Import ListCard component
import Cta from "../components/Cta";

const Blog = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div className="flex justify-center text-center items-center mt-24">
          <div className="space-y-6">
            <span className="text-xl text-blue-400 font-semibold">
              Blogs <i className="fas fa-blog"></i>
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mx-60 mx-5">
              Insights and Innovations: The DOBA Intelligence Blog
            </h1>
            <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
              Our expert team provides in-depth analyses, thought-provoking
              articles, and practical tips to help you navigate the
              ever-evolving landscape of digital marketing.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mx-5 lg:mx-20 mt-20">
          {blogcontents.map((contents) => (
            <ListCard
              key={contents.id} // Ensure each ListCard has a unique key prop
              id={contents.id}
              image={contents.image}
              heading={contents.heading}
              description={contents.description}
              timeframe={contents.timeframe}
              writer={contents.writer} // Pass the writer object directly
            />
          ))}
        </div>


        <Cta/>
        <Footer />
      </div>
   
    </>
  );
};

export default Blog;
