import React , {useContext , useEffect}from 'react'
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";

const RelatedLawyers = ({speciality , lawId}) => {

    const {lawyers} = useContext(AppContext)
    const navigate = useNavigate();

    const [relaw , setRelLaw] = React.useState([])

    useEffect(() => {
        if (lawyers.length > 0 && speciality) {
            const doctorsData = lawyers.filter((law) => law.speciality === speciality && law._id !== lawId);
            console.log("Filtered lawyers: ", doctorsData);
            setRelLaw(doctorsData);
        }
    }, [lawyers, speciality, lawId]);


    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
            {/*    ---Section titles and names*/}
            <h1 className='text-3xl font-medium'>Top Lawyers to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted lawyers</p>
            <div className='w-full grid grid-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relaw.slice(0,5).map((item, index) => (
                    <div onClick={()=>{ navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-200 rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
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
                ))}
            </div>
            <button onClick={()=>{navigate('/lawyers'); scrollTo(0,0)}} className='bg-primary/25  px-6 py-3 rounded-full mt-12 cursor-pointer hover:scale-105 transition-all duration-300'>more</button>
        </div>
    )
}
export default RelatedLawyers
