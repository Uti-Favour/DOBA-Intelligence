import React from 'react'
import { steplists } from '../constant'
const StepsLists = ({ description, illustration , benefits}) => {
    return (
      <>
        <div>
          <div className=" border border-1 border-neutral-900 flex items-center rounded-3xl lg:py-0 lg:px-6 py-3 px-2 space-x-4">
            <img
              src={illustration}
              alt=""
              className="lg:w-40 w-28 lg:h-40 h-28"
            />
            <div>
                <span className='text-blue-400 font-medium font-base'>{benefits}</span> <br />
              <span className="lg:text-[20px] text-base">{description}</span>
            </div>
          </div>
        </div>
      </>
    );
  }; 
const Steps = () => {
  return (
    <>
   <div className='py-16'>
   <div className="flex justify-center text-center items-center">
        <div className="space-y-4">
          <span className="text-xl text-blue-400 font-semibold">Benefits</span>
          <h1 className="text-4xl mx-5 lg:text-5xl font-bold text-white">
          Why Choose Us?
          </h1>
          <p className="font-medium text-xl text-gray-300 lg:mx-80 mx-5 lg:block hidden">
            Find the perfect fit for your team, no matter how big or small. We offer flexible plans with features designed to empower your success.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:mx-20 mx-5 gap-4 mt-16">
          {steplists.map((step) => (
            <StepsLists
              key={step.id}
              illustration={step.illustration}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
   </div>
    </>
  )
}

export default Steps
