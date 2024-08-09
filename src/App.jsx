import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import AiServices from "./pages/AiServices";
import ContentService from "./pages/ContentService";
import BlogContent from "./pages/BlogContent";
import FAQ from "./pages/FAQ";
import GetStarted from "./pages/GetStarted"
import Promo from "./pages/Promo";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-services" element={<AiServices/>} />
          <Route path="/content-service" element={<ContentService/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path= "/blog/:id" element={<BlogContent/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/getstarted" element={<GetStarted/>}/>
          <Route path="/promo" element={<Promo/>}/>
          <Route path="*" element={<ErrorPage/>}/>
         
        </Routes>
      
    </Router>
  );
};

export default App;
