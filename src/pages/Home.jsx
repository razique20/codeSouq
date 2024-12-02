// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';

const Home = () => (
  <div className="bg-black text-white py-2">
    <Hero />
    <section className="py-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 hover:text-gold">What We Do</h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-400">We help businesses grow, innovate, and stand out with our cutting-edge services.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-[90%] mx-auto">
          {/* Web Development Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">Web Development</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "Your website is the digital storefront to your business. Let’s make it shine."
            </blockquote>
          </div>

          {/* E-commerce Solutions Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-store"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">E-commerce Solutions</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "Empowering your business with an online presence that converts visitors into customers."
            </blockquote>
          </div>

          {/* Digital Marketing Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">Digital Marketing</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "We create digital strategies that connect with your audience and drive results."
            </blockquote>
          </div>

          {/* UI/UX Design Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">UI/UX Design</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "Design that delights and drives engagement."
            </blockquote>
          </div>

          {/* SEO Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">Search Engine Optimization</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "Helping your business rank higher and grow faster."
            </blockquote>
          </div>

          {/* Maintenance and Support Card */}
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 ">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">Maintenance and Support</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300">
              "Keeping your systems running smoothly."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
