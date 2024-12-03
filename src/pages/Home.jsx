// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';

const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Web Development',
    quote: 'Your website is the digital storefront to your business. Let’s make it shine.',
  },
  {
    icon: 'fas fa-store',
    title: 'E-commerce Solutions',
    quote: 'Empowering your business with an online presence that converts visitors into customers.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Digital Marketing',
    quote: 'We create digital strategies that connect with your audience and drive results.',
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'UI/UX Design',
    quote: 'Design that delights and drives engagement.',
  },
  {
    icon: 'fas fa-search',
    title: 'Search Engine Optimization',
    quote: 'Helping your business rank higher and grow faster.',
  },
  {
    icon: 'fas fa-tools',
    title: 'Maintenance and Support',
    quote: 'Keeping your systems running smoothly.',
  },
];

const Home = () => (
  <div className="bg-black text-white py-2 pb-20 mb-20">
    <Hero />
    <section className="py-5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 hover:text-gold">What We Do</h2>
        <p className="text-lg sm:text-xl mb-12 text-gray-400">
          We help businesses grow, innovate, and stand out with our cutting-edge services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-[90%] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 sm:p-8 bg-black text-white rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 border border-gold"
            >
              <div className="text-5xl sm:text-6xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gold mb-4 hover:text-white">{service.title}</h3>
              <blockquote className="text-base sm:text-lg italic text-gray-300">{service.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
