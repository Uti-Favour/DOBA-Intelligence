import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Info */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">DOBA Intelligence</h2>
            <p className="mb-4">
              Leading AI marketing agency providing innovative solutions for your business.
            </p>
            <p>© {new Date().getFullYear()} DOBA Intelligence. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
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
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:underline">
              <i class="fab fa-facebook"></i>

              </a>
              <a href="https://twitter.com" className="hover:underline">
              <i class="fab fa-twitter"></i>

              </a>
              <a href="https://linkedin.com" className="hover:underline">
              <i class="fab fa-linkedin"></i>

              </a>
              <a href="https://instagram.com" className="hover:underline">
              <i class="fab fa-instagram"></i>

              </a>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Subscribe to our newsletter</h2>
          <form className="flex flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto flex-1 px-4 py-2 mb-4 md:mb-0 md:mr-4 bg-gray-800 text-white rounded"
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

export default Footer
