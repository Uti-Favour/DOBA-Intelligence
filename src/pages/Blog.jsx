import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { blogcontents } from "../constant/index"; // Make sure the path is correct
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import { createClient } from "contentful";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "mm4rlzi8oatc",
    accessToken: "T2wstymm0GMBCyWuH0RQbotS90yeIji4eWENJIxiavU",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries);
          console.log(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);
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

        <section className="lg:grid-cols-3 grid-cols-1 grid gap-4 lg:mx-20 mx-5 lg:mt-20 mt-16">
          {blogPosts?.items?.map((post) => (
            <section key={post.sys.id}>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                key={post.sys.id}
              >
                <div className="bg-neutral-900 rounded-3xl lg:p-10 px-5 py-8 text-white">
                  <div className="mb-10">
                    <img
                      src={post.fields.imageHeader.fields.file.url}
                      className="h-52 w-full rounded-3xl"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                   
                    <div className="flex items-center space-x-1">
                    <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">
                      {new Date(post.fields.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span> 
                    </div>
            
                    <span>{post.fields.readDuration}</span>
                  </div>
                  <h1 className="text-2xl font-semibold text-blue-400 mt-5">
                    {post.fields.blogTitle}
                  </h1>
                  <div className="flex items-end space-x-4 mt-8">
                    <p className="text-gray-300">{post.fields.blogSummary}</p>
                  </div>

                  <div className="flex items-center space-x-4 mt-10 justify-between">
                    <div className="flex space-x-2">
                      <img
                        src={post.fields.authorsImage.fields.file.url}
                        alt="writer-image"
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <div>
                        <span className="font-semibold">
                          {post.fields.authorsName}
                        </span>{" "}
                        <br />
                        <span className="text-gray-400">
                          {post.fields.authorsField}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/blogDetails/${post.sys.id}`}
                      className="hover:opacity-80"
                    >
                      <div className="bg-blue-400 text-white py-3 px-5 rounded-3xl flex items-center justify-center hover:bg-white hover:text-blue-400 hover:border-blue-600 hover:scale-105 transition duration-300">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </section>

        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
