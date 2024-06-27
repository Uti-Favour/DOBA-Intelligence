import React from "react";
import Navbar from "../components/Navbar";
import { cardlists } from "../constant";

const CardList = ({ illustration, heading, description }) => {
  return (
    <div className="flex items-center justify-between mx-20">

      <div className="flex">
        <img src={illustration} alt="" />
      </div>

      <div>
        <h1>{heading}</h1>
        <p className="max-w-lg">{description}</p>
        <button>Get Started</button>
        <button>Learn More</button>
      </div>

    </div>
  );
};

const Services = () => {
  return (
    <>
      <div class="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
        <Navbar />
        {cardlists.map((lists) => (
          <CardList
            key={lists.key}
            illustration={lists.illustration}
            heading={lists.heading}
            description={lists.description}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
