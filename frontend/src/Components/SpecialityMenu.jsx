import React from 'react'
import {SpecialityData} from "../assets/assets.js";
import {Link} from "react-router-dom";

const SpecialityMenu = () => {
    return (
        <div className="flex flex-col items-center py-16 gap-4 text-gray-800" id='speciality'>
            <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted lawyers, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {SpecialityData.map((item, index) => (
                    <Link onClick={() =>scrollTo(0,0)} key={index} to={`/lawyers/${item.speciality}`} className='flex flex-col flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300' >
                        <img className='w-16 sm:w-24 mb-2 rounded-full  border border-primary' src={item.image} alt="svg representative of the speciality"/>
                        <p className='text-sm text-center'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SpecialityMenu
