import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Commitments from "./components/Commitments";
import Team from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Commitments/>
    </div>
  );
};

export default App;
