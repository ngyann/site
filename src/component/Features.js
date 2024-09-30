import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSmile, faShield, faCog, faZap, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mb-5">
        Software Features
      </h1>
      <div className="flex justify-center mb-10">
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
      </div>
      <div className="container mx-auto px-5 md:px-10 font-['Montserrat'] font-semibold">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="text-[#3572EF]" icon={faSmile} style={{ fontSize: "32px" }} />
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Easy To Use</h2>
            <p className="text-center text-base">Our software features an intuitive interface, allowing users to quickly find what they need.</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="text-[#3572EF]" icon={faShield} style={{ fontSize: "32px" }} />
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Secure</h2>
            <p className="text-center text-base">Robust security measures protect user data and prevent unauthorized access.</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="text-[#3572EF]" icon={faCog} style={{ fontSize: "32px" }} />
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Customizable</h2>
            <p className="text-center text-base">Personalize the software experience to meet your preferences.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="text-[#3572EF]" icon={faZap} style={{ fontSize: "32px" }} />
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Fast</h2>
            <p className="text-center text-base">Enjoy quick load times and responsive actions with our software.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-[#3572EF] text-white flex items-center justify-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Flexible</h2>
            <p className="text-center text-base">Adapt the software to your unique workflow and needs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-[#3572EF] text-white flex items-center justify-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h2 className="mt-2 text-[#3572EF] text-lg text-center">Accessible</h2>
            <p className="text-center text-base">Our software is designed to be inclusive and user-friendly for everyone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;