import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import { steplists } from "../constant";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const CardListLeft = ({ illustration, heading, description }) => {
  return (
    <div className="items-center lg:justify-between lg:mx-28 mx-5 lg:flex">
      <motion.div
        className="lg:mt-0 mt-5"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="lg:w-[600px] lg:h-[600px]"
        />
      </motion.div>

      <motion.div
        className="lg:mt-0 mt-5 "
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-semibold lg:text-5xl  text-4xl max-w-md lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 text-md text-gray-300">{description}</p>
       
      </motion.div>
    </div>
  );
};
const CardListRight = ({ illustration, heading, description }) => {
  return (
    <div className="items-center lg:justify-between lg:mx-28 mx-5 lg:flex ">
      <motion.div
        className="lg:hidden block mt-10"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="lg:w-[600px] lg:h-[600px]"
        />
      </motion.div>
      <motion.div
        className="lg:mt-0 mt-5"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-semibold lg:text-5xl  text-4xl max-w-md lg:leading-[60px]">
          {heading}
        </h1>
        <p className="max-w-md mt-5 text-md text-gray-300">{description}</p>
       
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
          className="lg:w-[600px] lg:h-[600px]"
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
            From Content Writing to AI content editing, we are your reliable content partner.
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
            <a href="#service">
              Learn More 
            </a>
          </div>
        </div>

        <div className="mt-24" id="service">
          <CardListLeft
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719586574/product_development___idea_thought_innovation_people_team_teamwork_working_together_vw2lkc.jpg?_s=public-apps"
            }
            heading={"Innovate Your Marketing Strategy"}
            description={
              "Leverage cutting-edge AI to develop creative and effective marketing solutions. Collaborate with our expert team to stay ahead of the curve."
            }
          />
          <CardListRight
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719586783/finance_e-commerce___purchase_payment_credit_card_monitor_computer_man_people_njt6ze.jpg?_s=public-apps"
            }
            heading={"Optimize E-commerce with AI"}
            description={
              "Boost your online sales with AI-driven insights. Utilize advanced analytics to understand customer behavior and enhance their shopping experience."
            }
          />

          <CardListLeft
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719586934/support___supportive_motivation_encouraging_encouragement_hand_gesture_people_1_updyiq.jpg?_s=public-apps"
            }
            heading={"Personalized Customer Support"}
            description={
              "Enhance customer satisfaction with AI-powered support. Provide instant and personalized assistance to resolve queries efficiently and effectively."
            }
          />

          <CardListRight
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719587089/social_media___network_media_social_profile_account_image_picture_photo_lzpch9.jpg?_s=public-apps"
            }
            heading={"Transform Social Media Engagement"}
            description={
              "Harness the power of AI to analyze social media trends and engage with your audience. Create impactful campaigns that resonate with your followers."
            }
          />
          <CardListLeft
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719587125/task_management___balance_balancing_unicycle_shapes_woman_people_tasks_ljlupx.jpg?_s=public-apps"
            }
            heading={"Streamline Task Management"}
            description={
              "Utilize AI tools to manage your marketing tasks efficiently. Balance multiple projects and achieve your goals with precision and ease."
            }
          />

          <CardListRight
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719587180/finance___increase_money_cash_profit_salary_raise_man_people_receipt_document_thpbuf.jpg?_s=public-apps"
            }
            heading={"Maximize Financial Gains"}
            description={
              "Utilize AI to boost your profits and manage finances effectively. Gain insights into your financial data to make informed decisions and drive growth."
            }
          />

          <CardListLeft
            illustration={
              "https://res.cloudinary.com/dcbgwcxlm/image/upload/fl_preserve_transparency/v1719587600/data_management___document_paper_page_file_files_woman_people_overload_s0iolu.jpg?_s=public-apps"
            }
            heading={"Efficient Data Management"}
            description={
              "Streamline your data processes with AI solutions. Manage documents and files effortlessly, reducing overload and improving productivity."
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
