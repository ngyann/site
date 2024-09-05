import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import image from "../images/science.jpg"

function Science() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-10" id="Science-Section">
        <h1 className="text-[#050C9C] font-['Sora']font-semibold text-3xl flex items-center justify-center mb-5">
          SCIENCE
        </h1>
        <div className="flex justify-center mb-10">
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
        </div>
        <div className="container mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between font-['Montserrat'] text-2xl font-semibold">
          <img className="w-full md:w-[500px] h-[550px] rounded-lg mb-5 md:mb-0" src={image} />
          <div className="md:ml-10 font-['Sora'] text-lg font-normal">
            <p>
              ZeZeHealth is a new start up high-tech medical device company that is specialized in the design and manufacturing of novel biomakers and diagnostics tests.
            </p>
            <p className="my-5">
              At the core of our technology platform is the novel concept of disorganization (i.e misarrangement, misalignment) of cells, tissues, or components as a common, yet neglected cause, mechanism and biomaker of diseases. We are the pioneers and world leaders of this novel concept.
            </p>
            <p>
              Disorganization is seen in many diseases including cancers, stroke, infections, abscesses, necrosis, infarct (e.g heart attack) and musculoskeletal diseases such as fractures or osteoporosis. Hence, quantification of disorganized bone is a missing tool in the diagnostic arsenal of scientists and clinicians (Zebaze et al). Yet, there has been until recently, no disorganisation measurer.
            </p>
            <p className="mt-5">
              Our Mission is to address a critical Unmet Health need in health-develop, manufacture, and commercialize Disorganization Measurer and Related Products. Disorganisation is measured using various unique patented image processing algorithms and artificial intelligence (AI).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Science;