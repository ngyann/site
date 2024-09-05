import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import client1 from '../images/client1.webp'
import client2 from '../images/client2.webp'

function Faqs(){
    return(
        <>
        <section>
        <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mt-20">
          FAQs
        </h1>
        <div className="flex justify-center mt-4 mb-4">
          <FontAwesomeIcon icon={faChevronDown} style={{color:"#3572EF"}}/>
        </div> 
        <section class="mt-12 mx-10 text-white" id="Faqs-Section">
  <div class="grid grid-cols-3 gap-6">
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">What is the software all about?</h3>
    </div>
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">Is there a trial period?</h3>
    </div>
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">What is the payment procedure?</h3>
    </div>
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">Is there a free version?</h3>
    </div>
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">Are we hiring?</h3>
    </div>
    <div class="bg-[#3DC2EC] rounded-2xl p-6">
      <h3 class="text-lg font-semibold mb-2">What is the frequency of updates?</h3>
    </div>
  </div>
  <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mt-20">   What are the Clients Saying ?</h1>
  <div className="flex justify-center mt-5 mb-4">
          <FontAwesomeIcon icon={faChevronDown} style={{color:"#3572EF"}}/>
        </div>
        <secion className="bg-[#F2EEEE] mt-5">
        <div className="flex justify-between  mt-10">
        <div className="grid grid-cols-3 gap-6 h-[50px]">
          <div className="bg-[#3DC2EC] rounded-2xl p-6 h-[110px]">
            <h3 className="text-lg font-semibold mb-2">The software is fast reliable and user friendly</h3>
            <div class="relative w-48 h-48 rounded-full overflow-hidden mt-10">
      <img src={client1} alt="Circle Image" className="w-full h-full object-cover "/>
  </div>
            </div>
          
   
            </div>
        <div className="grid grid-cols-3 gap-6 h-[50px]"><div className="bg-[#3DC2EC] rounded-2xl p-6 h-[110px]">
            <h3 class="text-lg font-semibold mb-2">The software is fast reliable and user friendly</h3>
            <div className="relative w-48 h-48 rounded-full overflow-hidden flex flex-col mt-5">
      <img src={client2} alt="Circle Image" className="w-full h-full object-cover flex flex-col"/>
  </div>
            </div>
            
            </div>
        </div>
        </secion>

        
</section>
</section>
        </>
    )
}
export default Faqs;