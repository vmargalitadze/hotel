"use client";

import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-800">სასტუმრო</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className=" hover:text-[#ff7200]  px-3 py-2 rounded-md text-[20px] font-bold transition-colors duration-200"
            >
              მთავარი
            </Link>

            <Link
              href="/about"
              className=" hover:text-[#ff7200] px-3 py-2 rounded-md text-[20px] font-bold transition-colors duration-200"
            >
              ჩვენს შესახებ
            </Link>
           
          </nav>

          {/* CTA Button - Desktop */}
          {/* <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-[18px] font-medium transition-colors duration-200">
              დაჯავშნა
            </button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-start p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">მთავარი მენიუ გახსნა</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ff7200"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ff7200"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 text-center justify-start items-center flex flex-col sm:px-3 bg-white h-screen border-t border-gray-200">
          <Link
            href="/"
            onClick={closeMenu}
            className=" hover:text-[#ff7200] block px-3 py-2 rounded-md text-[18px] font-medium transition-colors duration-200"
          >
            მთავარი
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className=" hover:text-[#ff7200] block px-3 py-2 rounded-md text-[18px] font-medium transition-colors duration-200"
          >
            ჩვენს შესახებ
          </Link>
      
        
        </div>
      </div>
    </header>
  );
}

export default Header;
