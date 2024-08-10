import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import { steplists } from "../constant";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const CardListLeft = ({ illustration, heading, description, span }) => {
  return (
    <div className="items-center lg:justify-between lg:mx-16 mx-5 lg:flex">
      <motion.div
        className="lg:mt-0 mt-20"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="lg:w-[500px] lg:h-[500px] rounded-3xl object-cover"
        />
      </motion.div>

      <motion.div
        className="lg:mt-0 mt-5 "
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <span  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-lg">{span}</span>
        <h1 className="font-bold lg:text-6xl  text-3xl max-w-xl lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 lg:text-xl text-base text-gray-300">{description}</p>
        
      </motion.div>
    </div>
  );
};
const CardListRight = ({ illustration, heading, description, span }) => {
  return (
    <div className="items-center lg:justify-between lg:mx-16 mx-5 lg:flex ">
      <motion.div
        className="lg:hidden block lg:mt-10 mt-20"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
      <motion.div
        className="lg:mt-0 mt-5"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">{span}</span>
        <h1 className="font-bold lg:text-6xl  text-3xl max-w-xl lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 lg:text-xl text-base text-gray-300">{description}</p>
       
      </motion.div>

      <motion.div
        className="lg:block hidden"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="lg:w-[500px] lg:h-[500px] rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

const AiServices = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />

        <div className="flex justify-center text-center items-center mt-24">
          <div className="space-y-6">
            <span className="text-xl text-blue-400 font-semibold">
              AI Content Editing
            </span>
            <h1 className="text-3xl  lg:text-6xl font-bold text-white lg:mx-60 mx-5">
              Increase your visibility and customer base
            </h1>
            <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
              From Content Writing to AI content editing, we are your reliable
              content partner.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <div className="space-x-4">
            <Link to="/contact">
              <button className="py-3 px-10 bg-blue-400 rounded-3xl">
                Get Started
              </button>
            </Link>
            <a href="#service">Learn More</a>
          </div>
        </div>

        <div className="mt-24" id="service">
          <CardListLeft
          span={"Be the best in the market"}
            illustration={
              "https://img.freepik.com/premium-photo/data-privacy-security_839035-739309.jpg?w=740"
            }
            heading={"Innovate Your Marketing Strategy"}
            description={
              "Leverage cutting-edge AI to develop creative and effective marketing solutions. Collaborate with our expert team to stay ahead of the curve."
            }
          />
          <CardListRight
          span={"Optimized Content"}
            illustration={
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/383135189/original/2b9891138a582c3772e96e827b434cbc93686bb0/do-accounting-audit-and-finance-relating-tasks-for-you.jpeg"
            }
            heading={"Optimize E-commerce with AI"}
            description={
              "Boost your online sales with AI-driven insights. Utilize advanced analytics to understand customer behavior and enhance their shopping experience."
            }
          />

          <CardListLeft
          span={"Top support system"}
            illustration={
              "https://geidea.net/blog/wp-content/uploads/Understanding-the-Importance-of-Data-Security-in-POS-Systems-blog-post.png"
            }
            heading={"Personalized Customer Support"}
            description={
              "Enhance customer satisfaction with AI-powered support. Provide instant and personalized assistance to resolve queries efficiently and effectively."
            }
          />

  
         
         
        </div>

        <Cta />

        <Footer />
      </div>
    </>
  );
};

export default AiServices;
