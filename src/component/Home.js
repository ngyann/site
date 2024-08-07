import React from 'react';
import image from '../images/ali.png'

function Home() {
  return (
    <div>
      <section>
        <div className="py-12 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">WELCOME TO ZEZE LTD</h1>
            <p className="text-lg">A DIGITAL MEDICAL DEVICE MANUFACTURING COMPANY</p>
            <div className="justify-center flex items-center">
              <button className="bg-[#0E72ED] h-10 w-40 rounded-lg flex items-center justify-center">
                See more
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="relative h-[500px] w-1/2 mr-8">
              <img
                className="h-full w-full object-cover rounded-lg shadow-lg"
                src={image}
                alt="My Image"
              />
            </div>
            <div className="w-1/2">
              <h1 className=" font-bold mb-4 font-['Montserrat'] text-[#050C9C] text-4xl">ALIGNOGRAM</h1>
              <p className="font-['Montserrat'] font-semibold text-3xl">ALIGNOGRAM is a Disorganization (Misalignment) Measurer. One of its uses is the Detection and Quantification of Microcracks or Microfractures.</p>
              <div className="justify-center">
              <br></br><button className="bg-[#0E72ED] h-10 w-40 rounded-lg flex items-center justify-center text-white">
                learn more
              </button>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;