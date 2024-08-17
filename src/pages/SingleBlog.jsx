import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link, useParams } from "react-router-dom";


const SingleBlog = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([])

  let { id } = useParams();

  const client = createClient({ space: "u3z6g4n1k7xk", accessToken: "UqIWPTOIDR-6D5Hf96zFEAartCZ39J_HBMsoZtiFStY" })

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])


  return (
   <>
   <div className='bg-gray-800'>
          <div className="flex justify-center text-center items-center mt-24">
            <div className="space-y-6">
              <span className="text-xl text-blue-400 font-semibold">
                {singleBlogPost?.fields?.blogCategory}
              </span>
              <h1 className="text-3xl  lg:text-6xl font-bold text-white lg:mx-44 mx-5">
                {singleBlogPost?.fields?.blogTitle}
              </h1>
              <p className="font-medium lg:text-xl text-base text-gray-300 mx-5 lg:mx-0">
                {singleBlogPost?.fields?.blogSummary}
              </p>
            </div>
          </div>
          <div className="flex justify-center space-y-6 mt-10">
            <div>
              <img
                src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10 w-[320px] lg:rounded-xl rounded-3xl mx-auto lg:mx-0 "
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
               
                  <p>{singleBlogPost?.fields?.firstParagraph}</p>
              
              </div>
              <img
                src={singleBlogPost?.fields?.firstImage?.fields?.file?.url}
                className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10 w-[320px] lg:rounded-xl rounded-3xl mx-auto lg:mx-0 "
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
        
                  <p>{singleBlogPost?.fields?.secondParagraph}</p>
              
              </div>
              <img
                src={singleBlogPost?.fields?.secondImage?.fields?.file?.url}
                  className="lg:w-[1000px] lg:h-[600px] lg:object-cover mb-10 mt-10 w-[320px] lg:rounded-xl rounded-3xl mx-auto lg:mx-0 "
              />
              <div className="space-y-10 max-w-4xl text-lg mx-5">
          
                  <p>{singleBlogPost?.fields?.thirdParagraph}</p>
                
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default SingleBlog