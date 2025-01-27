import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-white shadow-md fixed top-0 z-50 w-full">
      <div className="grid-container flex justify-between h-h-100 items-center mx-auto px-4">
      <div className="w-full   flex  justify-between items-center h-10">
        {/* Logo */}
        <div className="text-blue-500 text-xl font-bold">
          <img src="./Icons/Logo.svg" alt="" className="sm:w-w-152" />
        </div>

        {/* Search Icon (Visible on all screens) */}
        <div className="flex items-center md:hidden gap-3">
        <img src="./Icons/search.svg" alt="" className="w-6" />

          {/* Mobile Menu Toggle */}
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="gap-4 justify-between items-center hidden md:flex">
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `  text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm ${
                isActive ? "underline" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm ${
                isActive ? "underline" : ""
              }`
            }
          >
            About Us
          </NavLink>
 
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm ${
                isActive ? "underline" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>
        <div className="px-4 py-4 hidden md:flex">
        <img src="./Icons/search.svg" alt="" />
      </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-blue-500 text-xl font-bold"><img src="./Icons/Logo.svg" alt="" /></div>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
         
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 p-4">
          <NavLink
            to="/"
            className="text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/how-it-works"
            className="text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </NavLink>
          <NavLink
            to="/contact"
            className="text-customText-primary fill-customText-secondary hover:text-blue-500 underline-offset-8 font-semibold text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;
