// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="w-40" src="src/assets/DOBA_Intelligence_Logo_2-removebg-preview.png" alt="Logo" />
        <div className='hidden lg:block'>
        <div className="ml-10 flex items-baseline space-x-4 text-gray-800">
              <a href="#" className="px-3 py-2 rounded-md text-md font-semibold hover:underline">
                Service
              </a>
              <a href="#" className=" px-3 py-2 rounded-md text-md font-semibold hover:underline">
                Agency
              </a>
              <a href="#" className=" px-3 py-2 rounded-md text-md font-semibold hover:underline">
                Case Study
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-md font-semibold hover:underline">
                Resources
              </a>
              <a href="#" className=" px-3 py-2 rounded-md text-md font-semibold hover:underline">
                Contact
              </a>
            </div>
        </div>
          </div>
          <div className="hidden md:block">
            <button className="border-gray-800 border border-1 text-gray-800 px-8 py-2 rounded-3xl text-md font-semibold">
              Get Started <i className='fas fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
