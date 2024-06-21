import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Commitments from "./components/Commitments";
import Features from "./components/Features";
import Team from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Commitments/>
      <Features/>
    </div>
  );
};

export default App;
