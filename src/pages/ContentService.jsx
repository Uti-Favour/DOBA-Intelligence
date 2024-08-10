import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const CardListLeft = ({ illustration, heading, description }) => {
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
          className="lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>

      <motion.div
        className="lg:mt-0 mt-5 "
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold lg:text-6xl  text-4xl max-w-xl lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 text-xl text-gray-300">{description}</p>
        
      </motion.div>
    </div>
  );
};
const CardListRight = ({ illustration, heading, description }) => {
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
        <h1 className="font-bold lg:text-6xl  text-4xl max-w-xl lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 text-xl text-gray-300">{description}</p>
       
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
          className="lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
    </div>
  );
};


const ContentService = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />

        <div className="flex justify-center text-center items-center mt-24">
  <div className="space-y-6">
    <span className="text-xl text-blue-400 font-semibold">
      DOBA Content Writing Services 
    </span>
    <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mx-60 mx-5">
      Elevate Your Brand with Quality Content
    </h1>
    <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
      From engaging content creation to AI-powered editing, we deliver content that connects and converts.
    </p>
  </div>
</div>

        <div className="flex justify-center mt-14">
          <div className="space-x-4">
            <Link to="/contact">
              <button className="py-3 px-10 bg-blue-400 rounded-3xl text-base">
                Get Started
              </button>
            </Link>
            <a href="#service" className="text-lg">
              Learn More 
            </a>
          </div>
        </div>

        <div className="mt-32" id="service">
        <CardListLeft
  illustration={
    "https://cdn.prod.website-files.com/659c2c47a369c0049813bad9/659ff8c0743c6c93fb016d8b_security-sequens%201.png"
  }
  heading={"Automated Content Creation with AI"}
  description={
    "Transform your content strategy with AI-driven creativity. Collaborate with our team to generate innovative, data-backed content that resonates with your audience."
  }
/>
<CardListRight
  illustration={
    "https://cdn.prod.website-files.com/659c2c47a369c0049813bad9/659ffa344b10c77a6efc770d_proofreader-sequens%20copie%201.png"
  }
  heading={"Enhance Content Distribution"}
  description={
    "Maximize your content reach with AI. Leverage advanced analytics to distribute your content effectively across platforms, ensuring optimal audience engagement."
  }
/>

<CardListLeft
  illustration={
    "https://cdn.prod.website-files.com/659c2c47a369c0049813bad9/659ff9a989a9b4e17691f920_tonofvoice-sequens%201.png"
  }
  heading={"AI-Driven Content Personalization"}
  description={
    "Deliver personalized content experiences with AI. Tailor your messaging to meet the unique needs of each audience segment, boosting engagement and conversions."
  }
/>


          
        </div>

      

        <Cta />

        <Footer />
      </div>
    </>
  );
};

export default ContentService;
