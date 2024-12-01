// src/components/Services.jsx
import { FaCode, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const Services = () => (
  <motion.section
    className="bg-black text-white py-20 min-h-screen items-center justify-center flex"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gold"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Discover how we can help your business thrive in the digital era.
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Web Development */}
        <motion.div
          className="p-6 bg-black rounded-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }} // Apply scale on hover
        >
          <FaCode className="text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gold">Web Development</h3>
          <p className="mt-2 text-gray-300">
            Build robust, responsive, and modern websites tailored to your needs.
          </p>
        </motion.div>

        {/* E-Commerce */}
        <motion.div
          className="p-6 bg-black rounded-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }} // Apply scale on hover
        >
          <FaShoppingCart className="text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gold">E-Commerce</h3>
          <p className="mt-2 text-gray-300">
            Launch scalable and user-friendly online stores to boost your sales.
          </p>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div
          className="p-6 bg-black rounded-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }} // Apply scale on hover
        >
          <FaChartLine className="text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gold">Digital Marketing</h3>
          <p className="mt-2 text-gray-300">
            Elevate your brand and reach your target audience effectively.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Services;
