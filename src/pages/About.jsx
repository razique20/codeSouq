// src/pages/About.jsx
import { FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion
import { useNavigate } from 'react-router-dom';
const About = () => {


    const navigate = useNavigate()

    const handleLearnMoreClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        navigate('/contact'); // Navigate to the /about page
      };
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
            className="text-5xl font-bold text-white mb-6 hover:text-gold"
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
      <section className="py-16 w-[90%] mx-auto">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="service-card p-8 flex flex-col items-center bg-black text-white rounded-xl shadow-xl border border-gold transition duration-300 hover:shadow-2xl hover:scale-105">
            <FaLightbulb className="hover:text-gold text-6xl mb-4 transition duration-300 " />
            <h2 className="text-2xl font-bold text-gold mb-2 text-center">Our Mission</h2>
            <p className="text-gray-400 text-center">
              Empower businesses with tailored digital solutions that deliver results.
            </p>
            <p className="text-gray-400 text-center mt-4">
              We strive to create custom digital solutions that drive success for your business. Let's work together to transform your ideas into reality.
            </p>
            
          </div>

          {/* Vision */}
          <div className="service-card p-8 flex flex-col items-center bg-black text-white rounded-xl shadow-xl border border-gold transition duration-300 hover:shadow-2xl hover:scale-105">
            <FaRocket className="hover:text-gold text-6xl mb-4 transition duration-300" />
            <h2 className="text-2xl font-bold text-gold mb-2 text-center">Our Vision</h2>
            <p className="text-gray-400 text-center">
              To become Dubai’s most trusted partner for digital transformation.
            </p>
            <p className="text-gray-400 text-center mt-4">
              Our vision is to push the boundaries of innovation and bring new, impactful technologies to your business.
            </p>
           
          </div>

          {/* Values */}
          <div className="service-card p-8 flex flex-col items-center bg-black text-white rounded-xl shadow-xl border border-gold transition duration-300 hover:shadow-2xl hover:scale-105">
            <FaHandshake className="hover:text-gold text-6xl mb-4 transition duration-300 " />
            <h2 className="text-2xl font-bold text-gold mb-2 text-center">Our Values</h2>
            <p className="text-gray-400 text-center">
              Integrity, innovation, and a customer-first approach.
            </p>
            <p className="text-gray-400 text-center mt-4">
              We prioritize transparency, continuous innovation, and customer satisfaction above all.
            </p>
           
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="bg-black text-white py-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to transform your business?
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join CodeSouq and take the first step towards your digital future. We’re here to help you succeed.
        </motion.p>
        <button onClick={handleLearnMoreClick} className="bg-gold text-black py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
