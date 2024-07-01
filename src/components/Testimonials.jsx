import React from "react";
import { testimonials } from "../constant";

const Testimonials = () => {
  return (
    <>

    <div className="flex justify-center text-center mb-10 space-y-4 mt-20">
     <div>
     <h3 className="text-blue-400 font-semibold text-xl ">Testimonials</h3>
     <p className="text-3xl lg:text-5xl max-w-4xl font-semibold">We have worked with thousands of amazing people</p>
     </div>
    </div>
      <div className="grid lg:grid-cols-3 gap-6  lg:mx-20 mx-5 mt-10 lg:mt-20">
       
          {testimonials.map((testimonial) => (
            <div className="bg-neutral-900 p-5 rounded-3xl space-y-8">
              <div className="text-blue-400 space-x-2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-200">"{testimonial.description}"</p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt="testimonial-image" className="w-[50px] h-[50px] rounded-full"/>
              
              <div>
              <span className="font-semibold">{testimonial.name}</span> <br />
              <span className="text-gray-500">@ {testimonial.company}</span>
                </div> 
               
              </div>
            </div>
          ))}
        
      </div>
    </>
  );
};

export default Testimonials;
