import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

 export  default function ContactUs(){
    return(
        <>
        <section class="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] md:py-16 mt-[350px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Start with us now
      </h2>
      <p class="mt-4 text-lg text-white">
        Enter your email to get started.
      </p>
      <div class="mt-8">
        <form class="max-w-md mx-auto">
          <div class="flex">
            <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            <button type="submit" className="px-4 py-3 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mt-20">   Send Us a Message </h1>
  <div className="flex justify-center mt-10 mb-10">
          <FontAwesomeIcon icon={faChevronDown} style={{color:"#3572EF"}}/>
        </div>
        <section id="Contact-Us">
        <div class="bg-gray-100 py-12 px-6 rounded-lg shadow-md max-w-md mx-auto mb-10">
  <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>
  <form >
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Your Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
    </div>
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
    </div>
    <div class="mb-4">
      <label for="subject" class="block text-gray-700 font-bold mb-2">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Subject" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700 font-bold mb-2">Your Message</label>
      <textarea id="message" name="message" rows="4" placeholder="Your message" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Submit
    </button>
  </form>
</div>
        </section>

        </>
    )

}
