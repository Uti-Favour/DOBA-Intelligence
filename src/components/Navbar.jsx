import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/DOBA Intelligence Icon 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const navcontent = [
  {
    key: "1",
    page: "Home",
    path: "/",
  },
  {
    key: "2",
    page: "Services",
    path: "/ai-services",
    dropdown: [
      { key: "2-1", page: "AI Content Editing", path: "/ai-services" },
      { key: "2-2", page: "Content Writing", path: "/content-service" },
    ],
  },
  {
    key: "3",
    page: "About",
    path: "/about",
  },
  {
    key: "4",
    page: "Blog",
    path: "/blog",
  },
  {
    key: "5",
    page: "Contact Us",
    path: "/contact",
  },
  {
    key: "7",
    page: "Promo",
    path: "/promo",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState(null);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key) => {
    if (openDropdownKey === key) {
      setOpenDropdownKey(null);
    } else {
      setOpenDropdownKey(key);
    }
  };

  return (
    <>
      <nav className="text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mt-5">
                <Link to="/">
                  <img className="h-10 w-10" src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 mt-5">
                  {navcontent.map((nav) => (
                    <div key={nav.key} className="relative">
                      {nav.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(nav.key)}
                            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium text-md flex items-center"
                          >
                            {nav.page}
                            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                          </button>
                          <div
                            className={`${
                              openDropdownKey === nav.key ? "block" : "hidden"
                            } absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 items-center`}
                          >
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {nav.dropdown.map((subNav) => (
                                <Link
                                  key={subNav.key}
                                  to={subNav.path}
                                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  {subNav.page}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={nav.path}
                          className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium text-md"
                        >
                          {nav.page}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 mt-5">
              <Link
                to="/getstarted"
                className="rounded-3xl bg-blue-400 py-3 px-8"
              >
                Get Started with $0
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
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 items sm:px-3">
            {navcontent.map((nav) => (
              <div key={nav.key} className="relative">
                {nav.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(nav.key)}
                      className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium items-center"
                    >
                      {nav.page}
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    <div
                      className={`${
                        openDropdownKey === nav.key ? "block" : "hidden"
                      } mt-2 space-y-1`}
                    >
                      {nav.dropdown.map((subNav) => (
                        <Link
                          key={subNav.key}
                          to={subNav.path}
                          className="block px-4 py-2 text-base text-gray-400 hover:bg-gray-100"
                        >
                          {subNav.page}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={nav.path}
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {nav.page}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/getstarted"
              className="rounded-3xl bg-blue-400 py-3 px-24"
            >
              Get Started for <span className="font-semibold">0 <FontAwesomeIcon icon={faHandHoldingUsd} /></span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
