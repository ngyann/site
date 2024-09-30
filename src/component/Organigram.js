import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Import images
import Laura from '../images/Laura.jpg';
import jordan from '../images/Jordan.jpg';
import kevin1 from '../images/Kevin1.jpg';
import tessa from '../images/Tes.jpg';
import mayla from '../images/mayla.jpg';
import Dyane from '../images/Dyane.jpg';
import peter from '../images/peter.jpg';
import linda from '../images/Linda.jpg';
import zebaze from '../images/zebaze.png';
import devine from '../images/devine.jpg';
import Kevin2 from '../images/Kevin2.jpg';

const data = [
  {
    name: "CEO: Dr Martin Zebaze",
    image: zebaze,
    level: 1,
  },
  {
    name: "General Manager: Laura Nawangha",
    image: Laura,
    level: 2,
  },
  {
    name: "Accountant: Mr Itadison",
    image: zebaze,
    level: 3,
  },
  {
    name: "Medical Director: Kevin Djopseu",
    image: kevin1,
    level: 3,
  },
  {
    name: "PA/Marketer: Linda Angwi",
    image: linda,
    level: 3,
  },
  {
    name: "Assistant Medical Director: Tessa Makeba",
    image: tessa,
    level: 4,
  },
  {
    name: "Assistant Marketer: Odile Maela",
    image: mayla,
    level: 4,
  },
  {
    name: "Chief IT Engineer: Peter Anye",
    image: peter,
    level: 5,
  },
  {
    name: "Chief Image Analyst: Jordan Zebaze",
    image: jordan,
    level: 5,
  },
  {
    name: "Radiologist: Dyan Ngaw",
    image: Dyane,
    level: 5,
  },
  {
    name: "Assistant IT Engineer: Divine Monyuy",
    image: devine,
    level: 6,
  },
  {
    name: "Assistant Image Analyst: Kevin Ngougni",
    image: Kevin2,
    level: 6,
  },
];

function Organigram() {
  const renderNode = (item) => (
    <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-[#89CFF0] hover:bg-[#5bc0df] transition-colors duration-300 shadow-lg transform hover:scale-105">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden mb-4 transition-transform duration-300 transform hover:scale-110">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold text-center">{item.name}</h2>
    </div>
  );

  return (
    <section id='Organigram'>
      <div className="bg-[#E0F7FA] p-6 md:p-8 lg:p-16 min-h-screen"> {/* Adjust padding for different screens */}
      <h1 className="text-[#050C9C] font-semibold text-3xl flex items-center justify-center mb-5 transform transition-transform duration-300 hover:scale-105">
    Organigram
</h1>
<div className="flex justify-center mb-5 transform transition-transform duration-300 hover:scale-105">
    <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} className="text-2xl" />
</div>
        <div className="flex flex-col items-center">
          {/* Level 1 */}
          <div className="mb-12">{renderNode(data[0])}</div>
          {/* Level 2 */}
          <div className="mb-12">{renderNode(data[1])}</div>
          {/* Level 3 */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
            {renderNode(data[2])}
            {renderNode(data[3])}
            {renderNode(data[4])}
          </div>
          {/* Level 4 */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
            {renderNode(data[5])}
            {renderNode(data[6])}
          </div>
          {/* Level 5 */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
            {renderNode(data[7])}
            {renderNode(data[8])}
            {renderNode(data[9])}
          </div>
          {/* Level 6 */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
            {renderNode(data[10])}
            {renderNode(data[11])} {/* Render the Assistant Image Analyst */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organigram;