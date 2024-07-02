import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navcontent } from "../constant";
import logo from "/src/assets/DOBA_Intelligence_Logo_1-removebg-preview.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   
      <nav className=" text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mt-5">
                <Link to="/">
                  <img
                    className="h-20 w-20"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 mt-5">
                  {navcontent.map((nav) => (
                    <Link
                      key={nav.path}
                      to={nav.path}
                      className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium text-md"
                    >
                      {nav.page}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 mt-5">
              <Link
                to="/about"
                className=" rounded-3xl bg-blue-400 py-2 px-5 "
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="border border-1 border-gray-500 rounded-3xl text-white py-2 px-5"
              >
                Contact Us
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleIsOpen}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <i className={`${isOpen ? "fas fa-times" : "fas fa-bars"}`}></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navcontent.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium "
              >
                {nav.page}
              </Link>
            ))}
         
          </div>
          <div className="space-x-4 mt-10 ml-5">
              <Link
                to="/about"
                className=" rounded-3xl bg-blue-400 py-3 px-8"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="border border-1 border-gray-500 rounded-3xl text-white py-3 px-8"
              >
                Contact Us
              </Link>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
