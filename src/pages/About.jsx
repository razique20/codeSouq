// src/pages/About.jsx
import React from 'react';
import { FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const About = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Hero Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About CodeSouq
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            CodeSouq is your gateway to innovative web development, eCommerce, and digital marketing solutions. Based in Deira, Dubai, we help businesses thrive by combining creativity with cutting-edge technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission, Vision, and Values */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Mission */}
          <motion.div
            className="text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaLightbulb className="text-gold mx-auto text-6xl mb-6 transition duration-300 hover:text-yellow-500" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Empower businesses with tailored digital solutions that deliver results.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="text-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaRocket className="text-gold mx-auto text-6xl mb-6 transition duration-300 hover:text-yellow-500" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To become Dubai’s most trusted partner for digital transformation.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaHandshake className="text-gold mx-auto text-6xl mb-6 transition duration-300 hover:text-yellow-500" />
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400">
              Integrity, innovation, and a customer-first approach.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-gold mb-6"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Let’s Build Your Digital Future
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Transform your ideas into impactful solutions with CodeSouq. Together, we’ll redefine success in the digital age.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-gold text-black px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
