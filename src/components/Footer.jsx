import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
          <p className="mb-4 lg:max-w-80">At DOBA Intelligence, we combine the best of human efforts and AI tools to make content creation easier.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-16 md:flex md:space-x-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul>
              <li><Link to="#" className="hover:underline">Marketing</Link></li>
              <li><a href="#" className="hover:underline">Analytics</a></li>
              <li><a href="#" className="hover:underline">SEO</a></li>
              <li><a href="#" className="hover:underline">Content Writing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
            <ul>
              <li><Link to="/" className="hover:underline">For Team</Link></li>
              <li><Link to="/" className="hover:underline">For Email Marketers</Link></li>
              <li><Link to="/" className="hover:underline">For Blog Writers</Link></li>
              <li><Link to="/" className="hover:underline">For Social Managers</Link></li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><Link to="about" className="hover:underline">About</Link></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><Link to="#" className="hover:underline">Press</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
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
