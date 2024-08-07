import React from 'react'
import ali from '../images/al2.jpg'

function Alignogram(){
    <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="relative h-[500px] w-1/2 mr-8">
              <img
                className="h-full w-full object-cover rounded-lg shadow-lg"
                src={ali}
                alt="My Image"
              />
            </div>
            <div className="w-1/2">
              <h1 className=" font-bold mb-4 font-['Montserrat'] text-[#050C9C] text-4xl">ALIGNOGRAM</h1>
              <p className="font-['Montserrat'] font-semibold text-3xl">
              The Disorganization (Misalignment) detector
<l1>"ALIGN0GRAM: A QUANTITATIVE IMAGING TECHNOLOGY READILY AVAILABLE WORLDWIDE INCLUDING THE DEVELOPING WORLD."</l1>
 <l2>The Alignogram is a Disorganisation (Misalignment) Measurer. One of its uses is the Detection and Quantification of Microcracks or Microfractures.</l2>
<l3>Equally, The Alignogram is a complex software that analyses images and provides measures of disorganisation.</l3>
<l4>It is based on the difference in the orientation of the pixels forming on the object (bone).</l4>
              </p>
              <div className="justify-center">
            </div>
            </div>
          </div>
        </section>

}
export default Alignogram