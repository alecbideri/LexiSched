import React, {useContext, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";

const Lawyers = () => {

    const {speciality} = useParams()
    const [filterLaw , setFilterLaw] = React.useState([])
    const navigate = useNavigate();
    const {lawyers} = useContext(AppContext);

    const ApplyFilter = () => {
        if(speciality){
            setFilterLaw(lawyers.filter(law=> law.speciality === speciality));
        }else{
            setFilterLaw(lawyers);
        }
    }

    useEffect(() => {
        ApplyFilter();
    } , [lawyers, speciality]);

    return (
        <div>
            <p className='text-gray-600'>Browse through the lawyers speciality</p>
            <div className='flex flex-col sm:flex-row items-start gap-7 mt-3'>
                <div className='flex flex-col gap-4 text-sm text-gray-600 mt-4'>
                    <p onClick={()=> speciality === 'Trainings' ? navigate('/lawyers') : navigate('/lawyers/Trainings')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Trainings' ? "bg-blue-100 text-black" : ""}`}>Trainings</p>
                    <p onClick={()=> speciality === 'Aviation' ? navigate('/lawyers') : navigate('/lawyers/Aviation')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Aviation' ? "bg-blue-100 text-black" : ""}`}>Aviation</p>
                    <p onClick={()=> speciality === 'Dispute Resolution' ? navigate('/lawyers') : navigate('/lawyers/Dispute Resolution')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dispute Resolution' ? "bg-blue-100 text-black" : ""}`}>Dispute Resolution</p>
                    <p onClick={()=> speciality === 'Energy infrastructure' ? navigate('/lawyers') : navigate('/lawyers/Energy infrastructure')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Energy infrastructure ' ? "bg-blue-100 text-black" : ""}`}>Energy infrastructure</p>
                    <p onClick={()=> speciality === 'Mining' ? navigate('/lawyers') : navigate('/lawyers/Mining')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Mining' ? "bg-blue-100 text-black" : ""}`}>Mining</p>
                    <p onClick={()=> speciality === 'Construction' ? navigate('/lawyers') : navigate('/lawyers/Construction')} className={`w-[94vw] sm:w-auto pl-3 pr-16 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Construction' ? "bg-blue-100 text-black" : ""}`}>Construction</p>
                </div>
                <div className='w-full grid grid-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                    {
                        filterLaw.map((item, index) => (
                            <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                                <img className='bg-blue-50' src={item.image} alt="Lawyers image"/>
                                <div className='px-4 pt-4'>
                                    <div className='flex items-center gap-2 text-sm text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 px-4 pb-4'>
                                    <p className='font-semibold tex-lg'>{item.name}</p>
                                    <p className='text-sm text-gray-500 font-medium'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Lawyers

