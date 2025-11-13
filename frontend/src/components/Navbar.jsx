import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-gray-900 via-gray-800 to-black border-b border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* 🔹 Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300"
        >
          🎥 Movie Finder
        </Link>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="hover:text-blue-400">
              Feedback
            </Link>
          </li>
        </ul>

        

        {/*  Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/*  Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 py-4">
          <ul className="flex flex-col items-center gap-4 text-gray-300 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Feedback
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
