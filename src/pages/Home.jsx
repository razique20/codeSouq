// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';

const Home = () => (
  <div className="bg-black text-white py-15">
    <Hero />
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 hover:text-gold">What We Do</h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-400">We help businesses grow, innovate, and stand out with our cutting-edge services.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-[90%] mx-auto">
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 text-gold">
              <i className="fas fa-laptop-code"></i> {/* Add your icon here */}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">Web Development</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300 mb-4">
              "Your website is the digital storefront to your business. Let’s make it shine."
            </blockquote>
            <p className="text-base sm:text-lg">
              We build modern, responsive, and secure websites that elevate your brand and offer seamless user experiences.
            </p>
          </div>
          
          <div className="service-card p-6 sm:p-8 bg-black text-white  rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 text-gold">
              <i className="fas fa-store"></i> {/* Add your icon here */}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">E-commerce Solutions</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300 mb-4">
              "Empowering your business with an online presence that converts visitors into customers."
            </blockquote>
            <p className="text-base sm:text-lg">
              We create scalable and engaging online stores that help you increase sales and connect with customers globally.
            </p>
          </div>
          
          <div className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gold">
            <div className="text-5xl sm:text-6xl mb-4 text-gold">
              <i className="fas fa-bullhorn"></i> {/* Add your icon here */}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold hover:text-white mb-4">Digital Marketing</h3>
            <blockquote className="text-base sm:text-lg italic text-gray-300 mb-4">
              "We create digital strategies that connect with your audience and drive results."
            </blockquote>
            <p className="text-base sm:text-lg">
              Boost your brand visibility and sales with targeted digital marketing campaigns tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
