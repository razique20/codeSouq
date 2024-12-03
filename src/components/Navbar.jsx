import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-gold text-2xl cursor-pointer"
        >
          CODESOUQ
        </h1>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 items-center">
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
          <Link
            to="/careers"
            className="ml-auto text-lg font-semibold text-gold border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition duration-300"
          >
            Join CodeSouq
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black text-white w-full ${menuOpen ? "block" : "hidden"} p-6 `}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={closeMenu}
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className="block py-2 text-lg font-semibold text-white hover:text-gold transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/careers"
          onClick={closeMenu}
          className="block text-lg font-semibold text-gold border border-gold px-4 py-2 rounded hover:bg-gold hover:text-black transition duration-300 "
        >
          Join CodeSouq
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
