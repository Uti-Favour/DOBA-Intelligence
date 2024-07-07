import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import getstartedimage from "/src/assets/DOBA Intelligence Logo 2.jpg"

const GetStarted = () => {
  return (
    <>
      <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        <div className="flex justify-center text-center items-center mt-24">
          <div className="space-y-6">
            <span className="text-xl text-blue-800 font-semibold">
              Get Started <i className='fas fa-rocket'></i>
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mx-60 mx-5">
            Accelerate Your Marketing with DOBA Intelligence
            </h1>
            <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
        Let's start a conversation today. Our expert team is ready to collaborate with you every step of the way, ensuring your success in the digital landscape.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <img src={getstartedimage} className="lg:w-[1000px] lg:h-[600px] rounded-3xl w-[340px]" />
        </div>

        <div>
          <div className="flex justify-center mt-10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfdSoVzNPpuoPY2lt_h_ec9QVadvru7RDHtescRcT1ENSoGEQ/viewform?embedded=true"
              width="1000"
              height="1491"
            >
              Loading…
            </iframe>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default GetStarted;
