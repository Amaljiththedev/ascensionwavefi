"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConnectNowClick = () => {
    window.open("https://wa.me/917025765018", "_blank");
  };

  return (
    <div className="sticky top-0 z-50 bg-transparent">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex flex-row items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full">
        <a
          className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1"
          href="/"
        >
          <img
            alt="logo"
            width="100"
            height="100"
            decoding="async"
            src="/assets/logo-dark.png"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex flex-row flex-1 items-center justify-center space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
          
        <a className="text-neutral-600 dark:text-neutral-300 px-4 py-2" href="#">
            Home
          </a>
          <a className="text-neutral-600 dark:text-neutral-300 px-4 py-2" href="#services-section">
            Services
          </a>

          <a className="text-neutral-600 dark:text-neutral-300 px-4 py-2" href="#contact-section">
            Contact
          </a>
        </div>

        {/* Connect Now Button */}
        <button
          onClick={handleConnectNowClick}
          className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
        >
          Connect Now
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden w-full justify-between items-center px-4 py-2 max-w-[calc(100vw-2rem)] mx-auto rounded-2xl">
        <a
          className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1"
          href="/"
        >
          <img
            alt="logo"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            src="/assets/logo-dark.png"
          />
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black dark:text-white"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full mt-4 flex flex-col items-center space-y-4 text-sm text-zinc-600 font-medium">
          <a className="text-neutral-600 dark:text-neutral-300 px-4 py-2" href="#services-section">
            Services
          </a>
          <a className="text-neutral-600 dark:text-neutral-300 px-4 py-2" href="#contact-section">
            Contact
          </a>

          {/* Connect Now Button in Mobile View */}
          <button
            onClick={handleConnectNowClick}
            className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Connect Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
