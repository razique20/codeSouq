import React, { useState } from 'react';
import career from "../assets/careers.png";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send it to an API or email service)
    console.log('Form submitted:', formData);
    alert('Your application has been submitted!');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-8 bg-black text-white mt-20 ">
      <div className="w-full sm:w-1/2 hidden sm:flex justify-center mb-6 sm:mb-0 ">
        <img src={career} alt="Careers" className="max-w-full h-auto" />
      </div>

      <div className="w-full sm:w-1/2 bg-black text-white p-6 rounded-lg shadow-md">
        {/* <h1 className="text-4xl font-bold text-center mb-8 hover:text-gold">
          Careers at CodeSouq
        </h1> */}
        <p className="text-md text-center text-gray-400 mb-6">
          Interested in joining CodeSouq? Fill out the form below and send us your resume. We’ll get back to you soon!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-gray-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-gray-600"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-400 mb-1">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full p-2 bg-gray-800 text-gray-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-black font-medium py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
