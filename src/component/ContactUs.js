import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  return (
    <>
      {/* Start Section */}
      <section className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] py-10 md:py-16 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Start with us now
            </h2>
            <p className="mt-4 text-lg text-white">
              Enter your email to get started.
            </p>
            <div className="mt-8">
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4 sm:mb-0 sm:rounded-l-md transform transition-transform duration-300 hover:scale-105" 
                  />
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-2xl sm:text-3xl flex items-center justify-center mt-10 sm:mt-20">
        Send Us a Message
      </h1>
      <div className="flex justify-center mt-5 sm:mt-10 mb-5 sm:mb-10">
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
      </div>

      {/* Contact Us Form Section */}
      <section id="Contact-Us" className="px-4">
        <div className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 rounded-lg shadow-md max-w-md mx-auto mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                placeholder="Your message" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
