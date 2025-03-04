import React from 'react'
import {assets} from "../assets/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {

    const navigate = useNavigate();
    const [token, setToken] = React.useState(true);
    const[showMenu, setShowMenu] = React.useState(false);

    return (
        <div className='flex  items-center justify-between text-sm mb-5 py-4 border-b border-gray-400 '>
            <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.Logo} alt="Logo of the law firm"/>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
              <NavLink to='/'>
                  <li className='py-1'>HOME</li>
                  <hr className='border-none outline-none h-0.5 bg-primary  w-3/5 m-auto hidden'/>
              </NavLink>
                <NavLink to='/lawyers'>
                    <li className='py-1'>ALL LAWYERS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary  w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary  w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary  w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-10 rounded-full' src={assets.profile} alt="Profile picture"/>
                            <ChevronDown  size={20}/>
                            <div className='absolute top-0 right-0 text-base font-medium text-gray-600 z-20 pt-14 hidden group-hover:block'>
                              <div className='min-w-48 flex flex-col bg-stone-100 rounded gap-4 p-4'>
                                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                                  <p onClick= {()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My appointments</p>
                                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                              </div>
                            </div>
                        </div>
                        : <button onClick={()=>navigate('/login')} className='bg-primary px-4 py-2 rounded-full text-white sm:text-base cursor-pointer font-light hidden md:block'>Create account</button>

                }
            </div>
        </div>
    )
}
export default Navbar
