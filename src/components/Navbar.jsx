import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false); // Define a separate function for closing the menu

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-end sm:justify-center items-center p-6">
        {/* Logo */}

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-gold transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-white hover:text-gold transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-lg font-semibold text-white hover:text-gold transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold text-white hover:text-gold transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white w-full ${
          menuOpen ? "block" : "hidden"
        } p-6`}
      >
        <Link
          to="/"
          onClick={closeMenu} // Use the closeMenu function here
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={closeMenu} // Use the closeMenu function here
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={closeMenu} // Use the closeMenu function here
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu} // Use the closeMenu function here
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
