// src/pages/Contact.jsx
import { motion } from "framer-motion"; // Import framer-motion
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 w-[90%] mx-auto mt-5">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center hover:text-gold"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-center mt-4 text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Have a question? We’d love to hear from you.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-black rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gold">
              Contact Information
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center text-gray-300">
                <FaPhoneAlt className="text-gold text-xl mr-4" />
                <span>+971 55 123 4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <FaEnvelope className="text-gold text-xl mr-4" />
                <span>info@codesouq.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="text-gold text-xl mr-4" />
                <span>Deira, Dubai, UAE</span>
              </li>
            </ul>
            {/* Embedded Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6692369999995!2d55.32964287475993!3d25.271333026732094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c19e14b0001%3A0xc3d8464d67268f3f!2sDeira%20Dubai!5e0!3m2!1sen!2sae!4v1693498827369!5m2!1sen!2sae"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                title="Deira Dubai Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gold">Send Us a Message</h3>
            <form className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message"
                  rows="5"
                  className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-gold text-gray-900 font-bold rounded-lg hover:bg-gray-700 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
