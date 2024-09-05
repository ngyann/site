import React from 'react'
import Alignogram from './Alignogram'
import ali from '../images/alignogram.jpg'
import Science from './Science';
import Features from './Features';
import Moto from './Moto'
import Faqs from './Faqs'
import ContactUs from './ContactUs'
import Footer  from './footer';
import { About } from './About';
import Payment from './Payment'

function Home() {
  const scrollToAlignogram = () => {
    const alignogramSection = document.getElementById('alignogram-section');
    alignogramSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    const AboutSectionUs = document.getElementById('About-Us');
    AboutSectionUs.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="font-['Montserrat'] font-bold text-white flex justify-center items-center mt-20" id="Home">
        <h1 className="text-3xl justify-center items-center flex-col mt-10 font-['Sora'] text-lg font-normal">WELCOME TO ZEZE LTD A DIGITAL MEDICAL<br></br> DEVICE MANUFACTURING COMPANY</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center ">
          <button className="bg-gradient-to-r from-[#080087] via-[#00a8cb] to-[#00b6eb] text-white px-4 py-2 rounded-md mt-4 hover:bg-gradient-to-r from-[#0093E9] to-[#80D0C7] transition-colors duration-300 hover:scale-110 transform origin-center font-['Montserrat']" onClick={scrollToAboutUs}>
            See More
          </button>
        </div>
      </div>

      <section className="bg-[#F2EEEE] mt-40 mb-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="relative h-[500px] w-1/2 mr-8">
            <img
              className="h-[400px] w-[700px] object-cover rounded-lg shadow-lg mt-10 mb-10"
              src={ali}
              alt="My Image"
            />
          </div>
          <div className="w-1/2 mb-40 mt-40 font-['Montserrat'] font-['Sora'] text-lg font-normal">
            <p className="font-semibold text-2xl ">ALIGNOGRAM is a Disorganisatio(Misalignment) Measure. One of its uses is The Dection and Quantification of Microcracks or Microfractures</p>
            <button
              className="bg-gradient-to-r from-[#0093E9] to-[#80D0C7] text-white px-4 py-2 rounded-md mt-4 hover:bg-gradient-to-r from-[#080087] via-[#00a8cb] to-[#00b6eb] transition-colors duration-300 hover:scale-110 transform origin-center font-['Montserrat']"
              onClick={scrollToAlignogram}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Science />
      <Alignogram /><br></br>
      <Features />
      <About />
      <Moto />
      <Faqs />
      <ContactUs />
      <Payment />
      <Footer />
    </div>
  );
}

export default Home;