import React, { useState } from "react";
import { pricinglists } from "../constant";
import { motion } from "framer-motion";

// ToggleSwitch Component
const ToggleSwitch = ({ selected, setSelected }) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className={`px-4 py-2 rounded-l-full ${
          selected === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setSelected('monthly')}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 rounded-r-full ${
          selected === 'annually' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setSelected('annually')}
      >
        Annually
      </button>
    </div>
  );
};

// PriceCard Component
const PriceCard = ({ category, pricing, description, lists, link, border, button, selected }) => {
  return (
    <div className={`bg-transparent border border-gray-700 p-8 rounded-3xl ${border}`}>
      <div>
        <span className="text-xl font-semibold text-blue-400">{category}</span>
      </div>
      {/* <p className="text-gray-300">{description}</p> */}
      <h1 className="text-4xl font-bold text-blue-400">
        {pricing}
        <span className="text-base text-gray-300 font-normal">/{selected === 'monthly' ? 'month' : 'year'}</span>
      </h1>
      <ul className="text-gray-300 space-y-4">
        {lists.map((item, index) => (
          <li key={index}>
            {" "}
            <i className="fas fa-check-circle text-blue-400 mr-4"></i>
            {item}
          </li>
        ))}
      </ul>
      <a href={link} className="flex justify-center">
        <button className={button}>Buy Plan</button>
      </a>
    </div>
  );
};

// Pricing Component
const Pricing = () => {
  const [selected, setSelected] = useState('monthly');

  return (
    <div className="mt-16 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-tr-[50px] rounded-tl-[50px] py-16">
      <div className="flex justify-center text-center items-center">
        <div className="space-y-4">
          <span className="text-xl text-blue-400 font-semibold">Pricing</span>
          <h1 className="text-4xl mx-5 lg:text-5xl font-bold text-white">
            Pricing plans for teams of all sizes
          </h1>
          <p className="font-medium text-xl text-gray-300 lg:mx-80 mx-5 lg:block hidden">
            Find the perfect fit for your team, no matter how big or small. We offer flexible plans with features designed to empower your success.
          </p>
        </div>
      </div>
   
      <ToggleSwitch selected={selected} setSelected={setSelected} />
      
      <motion.div className="grid lg:grid-cols-3 lg:gap-6 lg:mx-20 mx-5 -mt-8" initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
        {pricinglists.map((price) => (
          <PriceCard
            key={price.category}
            category={price.category}
            description={price.description}
            pricing={selected === 'annually' ? price.annualprice : price.pricing}
            lists={price.lists}
            link={price.link}
            border={price.border}
            button={price.button}
            selected={selected}  // Pass selected to PriceCard
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;

