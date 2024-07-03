import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 text-gray-300 py-52">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold">DOBA Intelligence</span>
          </div>
          <p className="mb-4">Making the world a better place through constructing elegant hierarchies.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-16 md:flex md:space-x-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Analytics</a></li>
              <li><a href="#" className="hover:underline">Commerce</a></li>
              <li><a href="#" className="hover:underline">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Guides</a></li>
              <li><a href="#" className="hover:underline">API Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><Link to="about" className="hover:underline">About</Link></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline">Claim</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 DOBA Intelligence, Inc. All rights reserved.</p>
      </div>
    </footer>
    </>
  
  );
};

export default Footer;
