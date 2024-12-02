// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.jpeg";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/about'); // Navigate to the /about page
  };

  return (
    <section className="bg-black text-white h-screen flex items-center w-[90%] mx-auto pt-7">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Transform Your <span className="text-gold">Digital Presence</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg text-gray-300"
          >
            At CodeSouq, we specialize in creating cutting-edge web solutions that empower businesses worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-gold text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition">
              Get Started
            </button>
            <button
              onClick={handleLearnMoreClick} // Add the onClick handler here
              className="ml-4 px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-gray-900 transition"
            >
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <motion.img
            src={logo}
            alt="CodeSouq Hero"
            className="w-3/4 hidden sm:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
