import React from 'react';
import Alignogram from './Alignogram';
import ali from '../images/alignogram.jpg';
import Science from './Science';
import Features from './Features';
import Moto from './Moto';
import Faqs from './Faqs';
import ContactUs from './ContactUs';
import Footer from './footer';
import { About } from './About';
import Payment from './Payment';
import Organigram from './Organigram';

function Home() {
  const scrollToAlignogram = () => {
    const alignogramSection = document.getElementById('alignogram-section');
    alignogramSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById('About-Us');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-20" id="Home">
        <h1 className="text-3xl text-white font-['Sora'] font-normal text-center mt-10">
          WELCOME TO ZEZE LTD A DIGITAL MEDICAL<br />
          DEVICE MANUFACTURING COMPANY
        </h1>
      </header>

      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-[#080087] via-[#00a8cb] to-[#00b6eb] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-[#0093E9] to-[#80D0C7] transition-colors duration-300 hover:scale-110 transform origin-center font-['Montserrat']"
          onClick={scrollToAboutUs}
        >
          See More
        </button>
      </div>

      <section className="bg-[#F2EEEE] mt-40 mb-30">
        <div className="max-w-7xl mx-auto px-4 flex items-center flex-col md:flex-row">
          <div className="relative md:w-1/2 w-full mb-4 md:mb-0 md:mr-8">
            <img
              className="h-[400px] w-full object-cover rounded-lg shadow-lg"
              src={ali}
              alt="Alignogram"
            />
          </div>
          <div className="md:w-1/2 w-full font-['Montserrat'] font-['Sora'] text-lg">
            <p className="font-semibold text-2xl mb-4">
              ALIGNOGRAM is a Disorganisation (Misalignment) Measure. One of its uses is the detection and quantification of microcracks or microfractures.
            </p>
            <button
              className="bg-gradient-to-r from-[#0093E9] to-[#80D0C7] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r from-[#080087] via-[#00a8cb] to-[#00b6eb] transition-colors duration-300 hover:scale-110 transform origin-center font-['Montserrat']"
              onClick={scrollToAlignogram}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Science />
      <Alignogram />
      <Features />
      <About />
      <Organigram/>
      <Moto />
      <Faqs />
      <ContactUs />
      <Payment />
      <Footer />
    </div>
  );
}

export default Home;