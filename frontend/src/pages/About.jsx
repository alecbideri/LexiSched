import React from 'react'
import {assets} from "../assets/assets.js";

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_us} alt="The about image"/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                    <p>Welcome to LexiSched, your trusted partner in streamlining legal consultations with ease and efficiency. At LexiSched, we recognize the complexities clients face when seeking legal expertise and the challenges law firms encounter in managing appointments seamlessly.
                        <br/> <br/>LexiSched is built with precision for the legal profession, offering a reliable and intuitive platform that connects clients with experienced attorneys across various legal fields. Whether you're booking your first consultation or coordinating ongoing case discussions, LexiSched ensures every appointment is scheduled with clarity and convenience.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>

        {/*    --- Why choose us ----*/}

            <div>
                <div className='text-xl my-4 text-gray-600'>
                    <p>WHY <span className='font-semibold text-gray-800'>CHOOSE US</span></p>
                </div>

                <div className='flex flex-col md:flex-row mb-20'>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 border-gray-400'>
                        <b>Efficiency:</b>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 border-gray-400'>
                        <b>Convenience:</b>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 border-gray-400'>
                        <b>Personalization:</b>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About
