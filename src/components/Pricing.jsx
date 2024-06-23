import React from "react";
import { useState } from "react";
import { pricinglists } from "../constant";

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
    <div className={border}>
      <div>
        <span className="text-xl font-semibold text-blue-800">{category}</span>
      </div>
      <p className="text-gray-700">{description}</p>
      <h1 className="text-4xl font-bold">
        {pricing}
        <span className="text-base text-gray-700 font-normal">/month</span>
      </h1>

      <ul className="text-gray-700 space-y-4">
        {lists.map((item, index) => (
          <li key={index}>
            {" "}
            <i className="fas fa-check-circle text-blue-800  mr-4"></i>
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
    <div className="mt-16">
      <div className="flex justify-center text-center items-center">
        <div className="space-y-4">
          <span className="text-xl text-gray-800 font-semibold">Pricing</span>
          <h1 className="text-5xl font-bold text-blue-800">
            Pricing plans for teams of all sizes
          </h1>
          <p className="font-medium text-xl text-gray-700 mx-80">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-6 gap-2 lg:mx-20 mx-5">
        {pricinglists.map((price) => (
          <PriceCard
            category={price.category}
            description={price.description}
            pricing={price.pricing}
            lists={price.lists}
            link={price.link}
            border={price.border}
            button={price.button}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
