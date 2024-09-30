import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Moto() {
  return (
    <section className="bg-[#F2EEEE] py-10">
      <div className="flex justify-center mb-10">
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
      </div>
      <div className="container mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between font-['Montserrat'] text-2xl font-bold text-[#3572EF]">
        <div className="flex flex-col items-center md:items-start md:mr-10 mb-10 md:mb-0">
          <h1 className="mb-5 text-center md:text-left">Integrity</h1>
          <div className="bg-gray-200 rounded-full w-32 h-32 md:w-40 md:h-40 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-[#3572EF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:mr-10 mb-10 md:mb-0">
          <h1 className="mb-5 text-center md:text-left">Ownership</h1>
          <div className="bg-gray-200 rounded-full w-32 h-32 md:w-40 md:h-40 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-[#3572EF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-5 text-center md:text-left">Inclusion</h1>
          <div className="bg-gray-200 rounded-full w-32 h-32 md:w-40 md:h-40 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-[#3572EF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Moto;