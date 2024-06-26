import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

     

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Navbar;
