import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import about from '../images/about.jpg'

export function About(){
    return(
        <>
        <section id="About-Us" className="py-10 bg-[#f5f5f5]">
        <h1 className="text-[#050C9C] font-semibold text-3xl flex items-center justify-center mb-5">
          What is Zeze Health
        </h1>
        <div className="flex justify-center mb-5">
          <FontAwesomeIcon icon={faChevronDown} style={{color:"#3572EF"}}/>
        </div>
        <div className="font-['Sora'] text-18px font-400 px-5 md:px-10 flex justify-center">
            <p>ZeZeHealth is a new start-up company that specializes in the design and manufacturing of novel biomarkers and diagnostic test. A Digital Medical Device Manufacturing Company. We manufacture software as medical device for Africa and the rest of the world.</p>
        </div>
        <div className='px-5 md:px-10 mt-10 flex flex-col md:flex-row items-center justify-between font-400 text-18px font-[Sora]'>
           <img src={about} className="w-full md:w-[500px] h-[700px] rounded-lg mb-5 md:mb-0"/> 
           <div className="md:ml-10">
           <h1 className="text-[#050C9C] font-semibold text-3xl">
                  Our Mission
                </h1>
            <p>Our current focus is detecting fractures when they are still tiny breaks (not visible to the naked eye on the X-ray) 
              These are Microfractures.Even at this early stage when they are not visible, microfractures are responsible for many symptoms
               such as pain (that can be chronic and debilitating), limping and poor quality of life.</p>
           <h1 className="text-[#050C9C] font-semibold text-3xl">
                  Our Product
                </h1>
            <p>Our current focus is detecting fractures when they are still tiny breaks (not visible to the naked eye on the X-ray) 
              These are Microfractures.Even at this early stage when they are not visible, microfractures are responsible for many symptoms
               such as pain (that can be chronic and debilitating), limping and poor quality of life.</p>
           <h1 className="text-[#050C9C] font-semibold text-3xl">
                  Our Focus
                </h1>
            <p>Our current focus is detecting fractures when they are still tiny breaks (not visible to the naked eye on the X-ray) 
              These are Microfractures.Even at this early stage when they are not visible, microfractures are responsible for many symptoms
               such as pain (that can be chronic and debilitating), limping and poor quality of life.</p>
            <div className='mt-5'>
                <h1 className="text-[#050C9C] font-semibold text-3xl">
                  Our Vision
                </h1>
                <p>- Our Vision is to revolutionize the diagnosis and treatment of diseases.</p>
                <p>- Develop the medical device industry in Africa, in particular SaMDs. Africa has many highly skilled engineers and software developers but who are underemployed and lack opportunities to demonstrate their unique skills.</p>
                <h1 className="text-[#050C9C] font-semibold text-3xl mt-5">
                  Our Strategy
                </h1>
                <p>- Our strategy is to build a leading, focused medical device company which is based on artificial intelligence.</p>
                <p>- Devices manufactured are intended to diagnose diseases that are prevalent in Africa but are also major public health problems worldwide.</p>
            </div>
           </div>
        </div>
        </section>
        </>
    )
}