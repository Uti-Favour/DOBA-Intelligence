import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { blogdetail } from "../constant";
import Footer from "../components/Footer";


const BlogContent = () => {
  const { id } = useParams();
  const blog = blogdetail.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white ">
        <Navbar />
        <div>
          <div className="flex justify-center text-center items-center mt-24">
            <div className="space-y-6">
              <span className="text-xl text-blue-400 font-semibold">
                {blog.category}
              </span>
              <h1 className="text-3xl  lg:text-6xl font-bold text-white lg:mx-44 mx-5">
                {blog.title}
              </h1>
              <p className="font-medium lg:text-xl text-base text-gray-300 mx-5 lg:mx-0">
                {blog.summary}
              </p>
            </div>
          </div>
          <div className="flex justify-center space-y-6 mt-10">
            <div>
              <img
                src={blog.firstimage}
                className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10 w-[320px] lg:rounded-xl rounded-3xl mx-auto lg:mx-0 "
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
                {blog.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <img
                src={blog.secondimage}
                className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10 rounded-xl"
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
                {blog.secondcontent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <img
                src={blog.thirdimage}
                className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10  rounded-xl"
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
                {blog.thirdcontent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogContent;
