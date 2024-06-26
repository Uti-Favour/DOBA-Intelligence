import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Services from "../components/Services";
import Commitments from "../components/Commitments";
import Features from "../components/Features";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Commitments/>
    <Features/>
    <Team/>
    <Blog/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default Home
