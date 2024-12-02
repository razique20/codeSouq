// src/pages/Services.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // State to manage "Read More" for each card
  const [expanded, setExpanded] = useState({});

  // Toggle function to expand or collapse a card
  const toggleReadMore = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Array of services with icons
  const services = [
    {
      title: 'Web Development',
      icon: 'fas fa-laptop-code', // Font Awesome class
      shortDescription: 'We craft modern, responsive, and user-friendly websites to strengthen your online presence.',
      fullDescription: 'Our web development services include custom website design, responsive layouts, fast-loading and SEO-optimized websites, and integration with third-party tools and APIs. Whether you need a personal blog or a corporate site, we ensure your vision comes to life.',
    },
    {
      title: 'E-commerce Solutions',
      icon: 'fas fa-store',
      shortDescription: 'Build an online store that converts visitors into loyal customers.',
      fullDescription: 'We provide custom online store designs, secure payment gateways, inventory management systems, and scalable solutions to grow your e-commerce business. From small startups to large enterprises, we tailor solutions to meet your needs.',
    },
    {
      title: 'Digital Marketing',
      icon: 'fas fa-bullhorn',
      shortDescription: 'Drive traffic, generate leads, and boost sales with targeted strategies.',
      fullDescription: 'Our digital marketing services include social media campaigns, email marketing, content creation, Google Ads, and PPC campaigns. We connect you with your target audience and help you achieve measurable results.',
    },
    {
      title: 'UI/UX Design',
      icon: 'fas fa-paint-brush',
      shortDescription: 'Create intuitive and visually engaging designs for better user experience.',
      fullDescription: 'We offer wireframing, prototyping, user research, and design systems that focus on enhancing user interaction. Our responsive and interactive designs ensure a seamless experience across all devices.',
    },
    {
      title: 'Search Engine Optimization',
      icon: 'fas fa-search',
      shortDescription: 'Improve your website\'s ranking to attract organic traffic.',
      fullDescription: 'Our SEO services include on-page and off-page optimization, keyword research, content optimization, and analytics monitoring to improve visibility and drive quality traffic to your website.',
    },
    {
      title: 'Maintenance and Support',
      icon: 'fas fa-tools',
      shortDescription: 'Keep your website updated, secure, and running smoothly.',
      fullDescription: 'Our maintenance services include regular updates, backups, security patches, performance optimization, and 24/7 technical support to ensure your website operates flawlessly.',
    },
  ];

  return (
    <div className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-5">
      <motion.h1
            className="text-5xl font-bold text-white mb-10 hover:text-gold text-center mt-3"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[90%] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 bg-black text-white rounded-xl shadow-xl border border-gold items-center justify-center flex flex-col"
            >
              <div className="text-5xl sm:text-6xl  mb-4">
                <i className={service.icon}></i> {/* Icon added here */}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-4">{service.title}</h2>
              <p className="text-base sm:text-lg text-gray-300 mb-4">
                {expanded[index] ? service.fullDescription : service.shortDescription}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-gold hover:text-white underline font-medium text-sm"
              >
                {expanded[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
