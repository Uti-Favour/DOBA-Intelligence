import React from "react";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Blog from "../components/Blog"
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <Faq />
        <Blog/>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
