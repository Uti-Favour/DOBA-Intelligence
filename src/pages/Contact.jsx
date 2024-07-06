import React from "react";
import Navbar from "../components/Navbar";
import contactus from "/src/assets/contact.jpg"
import Footer from "../components/Footer";
import Cta from "../components/Cta";

const Contact = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div className="flex justify-center text-center items-center mt-24">
          <div className="space-y-6">
            <span className="text-xl text-blue-400 font-semibold">
              Contact DOBA Intelligence
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mx-60 mx-5">
              Get in Touch with DOBA Intelligence
            </h1>
            <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
              Whether you have questions about our services, need support, or
              want to learn more about how we can help your business thrive, our
              team is here to assist you.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <img src={contactus} className="lg:w-[1000px] lg:h-[600px] rounded-3xl w-[325px]" />
        </div>

        <div>
          <div className="flex justify-center mt-10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdAT6RhQqVyNpRJm3STUG8a350aBUqohtsnTn1cLUeS4nCjvQ/viewform?embedded=true"
              width="800"
              height="1087"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <Cta/>
        <Footer/>
      </div>
    
    </>
  );
};

export default Contact;
