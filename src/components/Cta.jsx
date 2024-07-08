import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <div className="mt-32">
        <div className="bg-blue-400 lg:mx-20 lg:rounded-3xl lg:py-16 py-20">
          <div className="lg:flex lg:items-center lg:justify-between lg:mx-10">
          <h2 className="text-4xl lg:text-4xl text-white lg:px-10 ml-8 py-8 font-semibold">Get up to <span className=" italic">20%</span> of each package <br /> when you refer a client to us 🚀</h2>
         <div className="space-x-4 ml-8 lg:ml-10 mt-5">
         <Link to="/getstarted"><button className="bg-white text-black py-3 px-10 rounded-3xl font-semibold">Learn More</button></Link>
         
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
