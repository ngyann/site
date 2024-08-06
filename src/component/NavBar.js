import React from 'react'

function NavBar (){
    return(
        <>
      < nav class="bg-[#050C9C] opacity-90 h-20 text-base font-['Montserrat'] flex justify-between items-center">
        <div class="flex items-center gap-4 ml-4">
        <h1 class="text-white font-bold text-lg">Zeze Health</h1>
        </div>
        <div class="flex items-center gap-12 mr-52">
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">Science</h1>
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">Services</h1>
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">Contact Us</h1>
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">About us</h1>
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">Payment</h1>
        <h1 class="text-white font-semibold hover:text-blue-200 transition-colors duration-300">FAQs</h1>
    </div>
    </nav>
        </>
    )
}
export default NavBar;