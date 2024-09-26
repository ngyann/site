import React, { useState } from 'react';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] opacity-95 h-20 text-base font-['Montserrat'] flex justify-between items-center fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div className="flex items-center gap-4">
        <h1 className="text-white font-bold text-lg">Zeze Health</h1>
      </div>
      <div className={`md:flex items-center gap-12 ${isMenuOpen ? 'block' : 'hidden'} ${isMenuOpen && 'bg-gray-800 p-4'}`}>
        {['Home', 'Science', 'About-Us', 'Contact-Us', 'Payment', 'Faqs'].map((section) => (
          <h1
            key={section}
            className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={() => scrollToSection(section.replace(' ', '-'))}
          >
            {section}
          </h1>
        ))}
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;