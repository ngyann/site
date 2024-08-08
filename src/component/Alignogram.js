import React from 'react'
import ali from '../images/al2.jpg'
import fermure from '../images/fermure.jpg'
import eye from '../images/eye.png'
import leg from '../images/leg.jpg'

function Alignogram(){
    return(
        <>

    <section className="bg-[#F2EEEE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="relative h-[500px] w-1/2 mr-8">
            <img
              className="h-[500px] w-full object-cover rounded-lg shadow-lg"
              src={ali}
              alt="My Image"
            />
          </div>
          <div className="w-1/2 mb-40">
            <h1 className=" font-bold  font-['Montserrat'] text-[#050C9C] text-4xl">ALIGNOGRAM</h1><br></br>
            <p className="font-['Montserrat'] text-base font-semibold">
            The Disorganization (Misalignment) detector
<l1>"ALIGN0GRAM: A QUANTITATIVE IMAGING TECHNOLOGY READILY AVAILABLE WORLDWIDE INCLUDING THE DEVELOPING WORLD."</l1>
<l2>The Alignogram is a Disorganisation (Misalignment) Measurer. One of its uses is the Detection and Quantification of Microcracks or Microfractures.</l2>
<l3>Equally, The Alignogram is a complex software that analyses images and provides measures of disorganisation.</l3>
<l4>It is based on the difference in the orientation of the pixels forming on the object (bone).</l4>
            </p><br></br>
          </div>
        </div>
        <div className=" font-['Montserrat']  ">
      <h1 className="mr-10 font-bold text-[#050C9C] text-4xl"> Application of the Alignogram:</h1><br></br>
      <div className="flex items-center">
      <ul>
        <img className="h-[250px]"src={fermure}/>
        <p className="font-['Montserrat'] font-semibold">X-ray of the femur of a patient on long time antiresorptive therapies.<br></br> Showing 
cortical thickening and endosteal 
protrusion of the cortex <br></br>(yellow dotted 
square)</p>
      </ul>
      <ul>
        <img className="h-[250px]"src={eye}/>
        <p className="font-['Montserrat'] font-semibold">The Alignogram indicating the level of Critical 
Disorganization value, <br></br>Expected  
 Disorganization, and the 
Disorganization value</p>
      </ul>
      <ul>
        <img className="h-[250px] w-[400px]"src={leg}/>
        <p className="font-['Montserrat'] font-semibold">An X-ray image sample 
of the leg <br></br>showing the 
femur bone</p>
      </ul>
      </div>
    </div>
      </section><br></br>
  
     </>
      );
    

}
export default Alignogram