import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Services from "../components/Services";
import Commitments from "../components/Commitments";
import Features from "../components/Features";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
   <div class="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white">
   <Navbar/>
    <Hero/>
    <Services/>
    <Commitments/>
    <Features/>
    <Blog/>
    <Pricing/>
    <Footer/>
   </div>
    </>
  )
}

export default Home
