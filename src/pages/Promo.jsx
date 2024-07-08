import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import promoImage from "/src/assets/promo-3.jpg"
import Cta from "../components/Cta"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"

const Promo = () => {
  return (
   <>
    <div>
    <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
      <Navbar/>
      <div className="flex justify-center text-center items-center mt-24">
          <div className="space-y-6">
            <span className="text-xl text-blue-400 font-semibold">
            Promo <i className='fas fa-gift'></i>
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold text-white lg:mx-60 mx-5">
            $100 Marketing for Businesses
            </h1>
            <p className="font-medium lg:text-xl text-base text-gray-300 lg:mx-80 mx-5">
            Our expert team provides in-depth analyses, thought-provoking articles,
      and practical tips to help you navigate the ever-evolving landscape of
      digital marketing.
            </p>

           
          </div>
         
        </div>
        <div className='flex justify-center mt-16'>
            <img src={promoImage} className='lg:w-[1000px] lg:h-[600px] w-[325px] object-cover rounded-3xl ' />
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
        <Pricing/>
        <Testimonials/>
      <Cta/>
      <Footer/>
      </div>
    </div>
   </>
  )
}

export default Promo
