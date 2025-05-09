import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import {BadgeCheck, Info} from "lucide-react";
import RelatedLawyers from "../Components/RelatedLawyers.jsx";

const Appointments = () => {

    const {lawId} = useParams()
    const {lawyers} = useContext(AppContext);
    const navigate = useNavigate();
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']


    const [lawInfo, setLawInfo] = useState(null);
    const [lawSlots, setLawSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    //  Time slot functionality

    const getAvailableSlots = async () => {
        setLawSlots([])

        // Getting current date

        let today = new Date();

        for (let i = 0; i < 7; i++) {

            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // Setting end time of the date with index

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // setting hours

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10, 0, 0, 0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                // Add slot to a time array , through push

                timeSlots.push({
                    dateTime: new Date(currentDate),
                    time: formattedTime
                })

                // increment this by thirty minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setLawSlots(prev => ([...prev, timeSlots]))
        }
    }

    const fetchLawInfo = async () => {
        const lawInfo = lawyers.find(law => law._id === lawId);
        setLawInfo(lawInfo);
    }

    useEffect(() => {
        fetchLawInfo();
    } , [lawyers , lawId])

    // Use effect for the time available slots

    useEffect(() => {
        getAvailableSlots()
    }, [lawInfo])


    return lawInfo &&  (
        <div>
        {/*    --- Doctor's details----*/}
            <div className='flex flex-col sm:flex-row gap-4 '>
                <div>
                    <img className='bg-primary w-full rounded-lg sm:max-w-72' src={lawInfo.image} alt="Lawyer's image"/>
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0  mt-[-80px] sm:mt-0' >
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900' >{lawInfo.name} <BadgeCheck color="blue" size={20} /></p>
                    <div className='flex items-center gap-2 text-sm text-gray-600 mb-2' >
                        <p className='text-base'>{lawInfo.degree} - {lawInfo.speciality}</p>
                        <button className='border border-gray-200 px-2 rounded-full' >{lawInfo.experience}</button>
                    </div>
                {/*    ---Law infos about them */}
                    <div className='flex flex-col gap-1 mt-2' >
                        <p className='flex items-center gap-1' >About <Info size={15}/></p>
                        <p className='max-w-250 text-gray-600 ' >{lawInfo.about}</p>
                        <p className='mt-3 text-gray-600 font-medium' >Appointment: <span className='text-black' >${lawInfo.fees}</span></p>
                    </div>
                </div>
            </div>
        {/*    --- Booking slots ----*/}

            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        lawSlots.length && lawSlots.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-400'}`}>
                                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                                <p>{item[0] && item[0].dateTime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {lawSlots.length && lawSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button onClick={()=>navigate('/my-appointment')} className='bg-primary px-14 py-3 text-white rounded-full cursor-pointer mt-6 text-sm font-light'>Book an appointment</button>
            </div>
            <RelatedLawyers lawId={lawId} speciality={lawInfo.speciality} />
        </div>
    )
}
export default Appointments
