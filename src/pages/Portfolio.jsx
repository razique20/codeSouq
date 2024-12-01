// src/components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', img: '/assets/portfolio1.jpg' },
    { id: 2, title: 'Marketing Website', img: '/assets/portfolio2.jpg' },
    { id: 3, title: 'Brand Revamp', img: '/assets/portfolio3.jpg' },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold">Our Portfolio</h2>
        <p className="mt-4 text-lg">
          See how we’ve helped businesses transform their digital experiences.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
