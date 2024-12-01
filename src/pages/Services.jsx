import { FaCode, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useNavigate } from 'react-router-dom';
const Services = () => {
const navigate = useNavigate()


const handleLearnMoreClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate('/contact'); // Navigate to the /about page
  };

 return(
  <section className="bg-black text-white pt-20 min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-4 text-center">
      {/* Animated Headline */}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      {/* Animated Subheadline */}
      <motion.p
        className="mt-4 text-base md:text-lg lg:text-xl text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover how we can help your business thrive in the digital era.
      </motion.p>
      {/* Service Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Web Development */}
        <div className="p-6 bg-black rounded-lg hover:shadow-xl transition relative border border-gold">
          <FaCode className="hover:text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gold">Web Development</h3>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Build robust, responsive, and modern websites tailored to your needs.
          </p>
          {/* Small Gold Border */}
          {/* <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1/3 h-1 bg-gold"></div> */}
        </div>

        {/* E-Commerce */}
        <div className="p-6 bg-black rounded-lg hover:shadow-xl transition relative border border-gold">
          <FaShoppingCart className="hover:text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gold">E-Commerce</h3>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Launch scalable and user-friendly online stores to boost your sales.
          </p>
          {/* Small Gold Border */}
          {/* <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1/3 h-1 bg-gold"></div> */}
        </div>

        {/* Digital Marketing */}
        <div className="p-6 bg-black rounded-lg hover:shadow-xl transition relative border border-gold">
          <FaChartLine className="hover:text-gold text-4xl mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-gold">Digital Marketing</h3>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Elevate your brand and reach your target audience effectively.
          </p>
          {/* Small Gold Border */}
          {/* <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1/3 h-1 bg-gold"></div> */}
        </div>
      </div>

      {/* Additional Section - Why Choose Us */}
      <motion.section
        className="py-16 bg-black text-white mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose CodeSouq?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We combine creativity, technology, and passion to craft solutions that help businesses scale and succeed. Our approach is customer-first, ensuring your needs are met every step of the way.
          </motion.p>
        </div>
      </motion.section>

      {/* Call to Action Section */}

      <div className='border-t border-gold w-[45%] mx-auto'>

      </div>
      <motion.section
        className="py-16 bg-black text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let us help you take your business to the next level. Get in touch with us to discuss your project.
          </motion.p>
          <motion.button
            className="mt-6 px-8 py-3 text-lg font-semibold bg-gold text-black rounded-full hover:bg-white transition"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleLearnMoreClick}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  </section>
);
}

export default Services;
