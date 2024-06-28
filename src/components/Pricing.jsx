import React from "react";
import { pricinglists } from "../constant";
import { motion } from "framer-motion";

const PriceCard = ({
  category,
  pricing,
  description,
  lists,
  link,
  border,
  button,
}) => {
  return (
    <div className={`bg-transparent border border-gray-700 p-8 rounded-3xl ${border}`}>
      <div>
        <span className="text-xl font-semibold text-blue-400">{category}</span>
      </div>
      <p className="text-gray-300">{description}</p>
      <h1 className="text-4xl font-bold text-blue-400">
        {pricing}
        <span className="text-base text-gray-300 font-normal">/month</span>
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

const Pricing = () => {
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
          <p className="font-medium text-xl text-gray-300 lg:mx-80 mx-5 lg:hidden">
            We offer flexible plans with features designed to empower your success.
          </p>
        </div>
      </div>
      <motion.div className="grid lg:grid-cols-3 lg:gap-6 lg:mx-20 mx-5" initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
        {pricinglists.map((price) => (
          <PriceCard
            key={price.category} // Add a unique key here
            category={price.category}
            description={price.description}
            pricing={price.pricing}
            lists={price.lists}
            link={price.link}
            border={price.border}
            button={price.button}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
