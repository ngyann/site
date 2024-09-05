import React from 'react'

function NavBar() {
  const scrollToScience = () => {
    const ScienceSection = document.getElementById('Science-Section');
    ScienceSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFaqs = () => {
    const FaqsSection = document.getElementById('Faqs-Section');
    FaqsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactUs = () => {
    const ContactUsSection = document.getElementById('Contact-Us');
    ContactUsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutUs = () => {
    const AboutSectionUs = document.getElementById('About-Us');
    AboutSectionUs.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToHome = () => {
    const HomeSection = document.getElementById('Home');
    HomeSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPayment = () => {
    const PaymentSection = document.getElementById('Payment');
    PaymentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] opacity-95 h-20 text-base font-['Montserrat'] flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4 ml-4">
          <h1 className="text-white font-bold text-lg">Zeze Health</h1>
        </div>
        <div className="flex items-center gap-12 mr-52">
          <h1
            className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300"
            onClick={scrollToHome}
          >
            Home
          </h1>
          <h1
            className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300"
            onClick={scrollToScience}
          >
            Science
          </h1>
          <h1 className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300" onClick={scrollToAboutUs}>
            About us
          </h1>
          <h1 className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300" onClick={scrollToContactUs}>
            Contact Us
          </h1>
          <h1 className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300"onClick={scrollToPayment}>
            Payment
          </h1>
          <h1
            className="text-white font-semibold hover:text-blue-200 hover:scale-110 transition-all duration-300"
            onClick={scrollToFaqs}
          >
            FAQs
          </h1>
        </div>
      </nav>
    </>
  );
}
export default NavBar;