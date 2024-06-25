import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-gray-300 py-12 mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Info */}
          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-lg font-bold mb-4 text-white">DOBA Intelligence</h2>
            <p className="mb-4">
              Leading AI marketing agency providing innovative solutions for your business.
            </p>
            <p>© {new Date().getFullYear()} DOBA Intelligence. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-lg font-bold mb-4 text-white">Contact Us</h2>
            <ul>
              <li className="mb-2">
                <i className="fas fa-phone-alt mr-2"></i> +123-456-7890
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope mr-2"></i> info@dobaintelligence.com
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i> 1234 Market Street, Suite 100, San Francisco, CA 94103
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 px-4">
            <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="hover:underline">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="hover:underline">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" className="hover:underline">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4 text-white">Subscribe to our newsletter</h2>
          <form className="flex flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto flex-1 px-4 py-2 mb-4 md:mb-0 md:mr-4 border border-gray-600 bg-neutral-800 text-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
