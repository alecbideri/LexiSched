import React from 'react'
import {assets} from "../assets/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import {Menu , X} from 'lucide-react'

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
                        : <button onClick={()=>navigate('/login')} className='bg-primary px-4 py-2 rounded-full text-white text-sm sm:text-sm cursor-pointer font-light hidden md:block'>Create account</button>
                }
                <Menu onClick={()=>setShowMenu(true)} className='md:hidden cursor-pointer'/>

                {/*    --- Mobile Menu -----*/}

                <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img onClick={()=>navigate('/')} className='w-36 cursor-pointer' src={assets.Logo} alt="Logo of prescripto"/>
                        <X className='cursor-pointer' onClick={()=>setShowMenu(false)} />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink className='hover:bg-primary hover:text-white px-3 py-2 rounded' onClick={()=>setShowMenu(false)} to='/'>HOME</NavLink>
                        <NavLink className='hover:bg-primary hover:text-white px-3 py-2 rounded' onClick={()=>setShowMenu(false)} to='/doctors'>ALL DOCTORS</NavLink>
                        <NavLink className='hover:bg-primary hover:text-white px-3 py-2 rounded' onClick={()=>setShowMenu(false)} to='/about'>ABOUT US</NavLink>
                        <NavLink className='hover:bg-primary hover:text-white px-3 py-2 rounded' onClick={()=>setShowMenu(false)} to='/contact'>CONTACT</NavLink>

                        <button
                            onClick={()=>{navigate('/login') ; setShowMenu(false)}}
                            className='bg-primary text-white rounded-full cursor-pointer px-6 py-3 font-light mt-4 w-full md:w-auto md:block'
                        >
                            Create account
                        </button>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Navbar
