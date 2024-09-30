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
        <h1 className="text-white font-bold text-2xl">Zeze Health</h1>
      </div>
      <div className={`md:flex items-center text-xl gap-12 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        {['Home', 'Science', 'About-Us', 'Organigram', 'Contact-Us', 'Payment', 'Faqs'].map((section) => (
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
      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-800 p-4 rounded-lg shadow-lg">
          {['Home', 'Science', 'About-Us', 'Organigram', 'Contact-Us', 'Payment', 'Faqs'].map((section) => (
            <h1
              key={section}
              className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300 cursor-pointer my-2"
              onClick={() => {
                scrollToSection(section.replace(' ', '-'));
                setIsMenuOpen(false); // Close the menu after selection
              }}
            >
              {section}
            </h1>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;