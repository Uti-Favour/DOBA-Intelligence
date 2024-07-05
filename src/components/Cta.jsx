import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <div className="mt-32">
        <div className="bg-blue-500 lg:mx-20 lg:rounded-3xl lg:py-16 py-20">
          <div className="lg:flex lg:items-center lg:justify-between lg:mx-10">
          <h2 className="text-4xl lg:text-4xl text-white lg:px-10 ml-8 py-8 font-semibold">Ready to dive in? <br />
          Start your free trial today.</h2>
         <div className="space-x-4 ml-8 lg:ml-10 mt-5">
         <Link to="/contact"><button className="bg-white text-black py-3 px-6 rounded-3xl font-semibold">Get Started</button></Link>
         <Link to="/aboutus" className="font-semibold">Learn More</Link>
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
