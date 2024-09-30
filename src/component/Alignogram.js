import React from 'react';

const images = {
  fermure: require('../images/fermure.png'),
  pop: require('../images/pop.png'),
  leg: require('../images/leg.jpg'),
  alignogram: require('../images/alignogram.jpg')
};

function Alignogram() {
  return (
    <section className="bg-[#f5f5f5] py-10" id="alignogram-section">
      <div className="flex justify-center mb-10">
        <h1 className="font-bold font-['Sora'] text-[#050C9C] text-3xl mb-10">ALIGNOGRAM</h1>
      </div>
      <div className="container mx-auto px-5 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between font-['Sora'] text-[18px] font-[400]">
        <div className="md:mr-10 mb-5">
          <p>
            The Disorganization (Misalignment) detector<br />
            "ALIGNOGRAM: A QUANTITATIVE IMAGING TECHNOLOGY READILY AVAILABLE WORLDWIDE INCLUDING THE DEVELOPING WORLD."
          </p>
          <p className="my-5">
            The Alignogram is a Disorganisation (Misalignment) Measurer. One of its uses is the Detection and Quantification of Microcracks or Microfractures. Equally, the Alignogram is a complex software that analyses images and provides measures of disorganisation. It is based on the difference in the orientation of the pixels forming on the object (bone).
          </p>
        </div>
        <img className="w-full md:w-[500px] h-auto rounded-lg mb-5 md:mb-0 transform transition-transform duration-300 hover:scale-110" src={images.alignogram} alt="Alignogram" />
      </div>
      <h1 className="flex items-center text-[#050C9C] text-3xl font-['Sora'] font-bold justify-center mt-20">Application of Alignogram</h1>
      <div className="container mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between font-['Sora'] text-[18px] font-[400] mt-10">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:mr-5 mb-5 md:mb-0">
            <img src={images.pop} className="w-full md:w-[450px] h-auto rounded-lg transform transition-transform duration-300 hover:scale-110" alt="Pop X-ray" />
            <p className="text-center md:text-left">X-ray of the femur of a patient on long-time antiresorptive therapies. Showing cortical thickening and endosteal protrusion of the cortex (yellow dotted square)</p>
          </div>
          <div className="md:mx-5 mb-5 md:mb-0">
            <img src={images.fermure} className="w-full md:w-[450px] h-auto rounded-lg transform transition-transform duration-300 hover:scale-110" alt="Fermure Image" />
            <p className="text-center md:text-left">The Alignogram indicating the level of disorganization (Critical Disorganization value, Expected Disorganization), and the Disorganization value.</p>
          </div>
          <div className="md:ml-5 mb-5 md:mb-0">
            <img src={images.leg} className="w-full md:w-[450px] h-auto rounded-lg transform transition-transform duration-300 hover:scale-110" alt="Leg X-ray" />
            <p className="text-center md:text-left">An X-ray image sample of the leg showing the femur bone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alignogram;
