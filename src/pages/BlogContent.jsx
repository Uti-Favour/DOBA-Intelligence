import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const BlogContent = () => {
  const [singleBlogPost, setSingleBlogPost] = useState(null);
  let { id } = useParams();

  const client = createClient({
    space: "mm4rlzi8oatc",
    accessToken: "T2wstymm0GMBCyWuH0RQbotS90yeIji4eWENJIxiavU",
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        const entry = await client.getEntry(id);
        setSingleBlogPost(entry);
      } catch (error) {
        console.log(`Error fetching blog post: ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  if (!singleBlogPost) return <p>Loading...</p>;

  const {
    blogTitle,
    blogCategory,
    blogSummary,
    authorsName,
    authorsImage,
    authorsField,
    imageHeader,
    blogDetails,
    date,
    readDuration,
  } = singleBlogPost.fields;

  // Custom render options for handling rich text content
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title } = node.data.target.fields;
        return (
          <img
            src={file.url}
            alt={title}
            className="my-4 mx-auto w-full max-w-3xl rounded-xl"
          />
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="list-disc ml-5">{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="list-decimal ml-5">{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li>{children}</li>;
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="text-blue-500 underline">
            {node.content[0].value}
          </a>
        );
      },
    },
  };

  return (
    <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
      <Navbar />
      <div>
        <div className="lg:flex lg:mx-16 mx-5 justify-between">
          <div className="mt-24 max-w-[700px]">
            <div className="space-y-6">
              <span className="text-xl text-blue-400 font-semibold">
                {blogCategory}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-white">
                {blogTitle}
              </h1>
              <p className="font-medium lg:text-lg text-base text-gray-300 max-w-lg">
                {blogSummary}
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="space-x-4 mt-5">
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <span>
                <i className="fas fa-glasses"></i> {readDuration}
              </span>
              <span className="bg-gray-500 py-1 lg:px-4 px-2 rounded-3xl">
                {blogCategory}
              </span>
            </div>

            {/* Author's Information */}
            <div className="flex space-x-2 mt-8">
              <img
                src={authorsImage.fields.file.url}
                alt="writer-image"
                className="w-[50px] h-[50px] rounded-full ring-blue-500 ring-2"
              />
              <div>
                <span className="font-semibold">{authorsName}</span> <br />
                <span className="text-gray-400">{authorsField}</span>
              </div>
            </div>
          </div>
          <div className="justify-center mt-10">
            <img
              src={imageHeader.fields.file.url}
              className="lg:w-[800px] lg:h-[500px] lg:object-cover mb-10 mt-10 w-[320px] lg:rounded-xl rounded-3xl mx-auto"
              alt={imageHeader.fields.title}
            />
          </div>
        </div>

        <div className="space-y-10 max-w-2xl text-lg lg:text-xl lg:mx-auto mx-5 mt-20">
          {blogDetails && documentToReactComponents(blogDetails, renderOptions)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogContent;
