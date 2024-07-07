import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import Faqlists from "../constant/faq";
import Faqimage from "/src/assets/Faq.jpg"
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <div>
          <Navbar />
          <div className="flex justify-center text-center items-center mt-24">
            <div className="space-y-6">
              <span className="text-xl text-blue-800 font-semibold">
                FAQ <i class="fas fa-question-circle"></i>

              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-white lg:mx-60 mx-5">
                Frequently Asked Questions
              </h1>
              <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
                Find answers to the most common questions about DOBA
                Intelligence, our services, and how we can help your business
                thrive with AI-driven content marketing solutions.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
          <img src={Faqimage} className="lg:w-[1000px] lg:h-[600px] rounded-3xl w-[325px]" />
        </div>

          <motion.div className="grid lg:grid-cols-3 gap-x-6 gap-y-10 lg:mx-16 mx-5 mt-32"  initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}>
            {Faqlists.map((faq) => (
              <div className="space-y-2">
                <h2 className="font-semibold text-lg">{faq.question}</h2>
                <p className="text-lg text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
          <Cta />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FAQ;
