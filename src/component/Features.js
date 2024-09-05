import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSmile, faShield, faCog, faZap, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-10">
        <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mb-5">
          Software Features
        </h1>
        <div className="flex justify-center mb-10">
          <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
        </div>
        <div className="container mx-auto px-5 md:px-10 font-['Montserrat'] font-semibold">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="text-[#3572EF]" icon={faSmile} style={{ fontSize: "32px" }} />
              <h1 className="mt-2 text-[#3572EF]">Easy To Use</h1>
              <p>Our software's user interface and navigation should be intuitive and straightforward, allowing users to quickly and easily find what they need</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="text-[#3572EF]" icon={faShield} style={{ fontSize: "32px" }} />
              <h1 className="mt-2 text-[#3572EF]">Secure</h1>
              <p>The app should have robust security measures in place to protect user data and prevent unauthorized access or malicious attacks</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="text-[#3572EF]" icon={faCog} style={{ fontSize: "32px" }} />
              <h1 className="mt-2 text-[#3572EF]">Customizable</h1>
              <p>The software provides users with the ability to personalize the experience to their liking.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon className="text-[#3572EF]" icon={faZap} style={{ fontSize: "32px" }} />
              <h1 className="mt-2 text-[#3572EF]">Fast</h1>
              <p>Our software is responsive and have quick load times. Users expect apps to load and perform actions quickly, without any noticeable lag or delay.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-[#3572EF] text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h1 className="mt-2 text-[#3572EF]">Flexible</h1>
              <p>Our software's user interface and navigation should be intuitive and straightforward, allowing users to quickly and easily find what they need.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-[#3572EF] text-white flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h1 className="mt-2 text-[#3572EF]">Accessible</h1>
              <p>The software provides users with the ability to personalize the experience to their liking.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;