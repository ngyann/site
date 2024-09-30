import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import client1 from '../images/client1.webp';
import client2 from '../images/client2.webp';

function Faqs() {
    return (
        <>
            <section id='Faqs'>
                <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mt-20">
                    FAQs
                </h1>
                <div className="flex justify-center mt-4 mb-4">
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
                </div>
                <section className="mt-12 mx-10 text-white" id="Faqs-Section">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">What is the software all about?</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">Is there a trial period?</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">What is the payment procedure?</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">Is there a free version?</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">Are we hiring?</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">What is the frequency of updates?</h3>
                        </div>
                    </div>
                    <h1 className="text-[#050C9C] font-['Montserrat'] font-semibold text-3xl flex items-center justify-center mt-20">
                        What are the Clients Saying?
                    </h1>
                    <div className="flex justify-center mt-5 mb-4">
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#3572EF" }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">The software is userfriendly</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">the software is easy to use</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">the software is very precised </h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">The software is fast</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2">The software reduces the error risks</h3>
                        </div>
                        <div className="bg-[#3DC2EC] rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-2"></h3>
                        </div>
                    </div>

                </section>
            </section>
        </>
    );
}

export default Faqs;