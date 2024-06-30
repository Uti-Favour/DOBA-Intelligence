import React from "react";
import { testimonials } from "../constant";

const Testimonials = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6  lg:mx-20 mx-5">
       
          {testimonials.map((testimonial) => (
            <div className="bg-neutral-900 p-5 rounded-3xl space-y-8">
              <p className="text-gray-200">"{testimonial.description}"</p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt="testimonial-image" className="w-[50px] h-[50px] rounded-full"/>
              
              <div>
              <span className="font-semibold">{testimonial.name}</span> <br />
              <span>@ {testimonial.company}</span>
                </div> 
               
              </div>
            </div>
          ))}
        
      </div>
    </>
  );
};

export default Testimonials;
