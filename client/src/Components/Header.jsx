import React from 'react'
import { Link } from 'react-router-dom';

// icons
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
// images
import SagunBaplaLogo from '/Images/SagunBapla_logo.png'

function Header() {
    const [toggle, setToggle] = useState(false)
    const [searchToggle, setSearchToggle] = useState(false)

    return (
        <>
            {/* header container closing tag */}

            {/* header uppper part */}
            <div className='flex flex-col w-11/12 min-h-42 bg-slate-800 justify-between  m-auto'>
                <div className='flex flex-row justify-between items-center '>
                    <div className='flex flex-row items-center '>
                       
                        <Link to='/'>
                        <h1 className=' font-bold md:text-[32px] text-pink-400  font-sans text-[22px]'><span>&lt;</span> CodyBalram <span> &#8725; &gt;</span></h1>
                        </Link>
                    </div>
                    <div>
                        <div className='hidden   lg:flex  relative '>
                            <div className=' ml-1 mt-[9px] absolute' >
                                <BiSearchAlt className=' w-[20px] h-[20px] opacity-70 text-white ' />
                            </div>
                            <input className=' min-w-[550px] min-h-10 bg-slate-700 border-slate-100 text-slate-100 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />
                        </div>
                    </div>
                    <div>
                        <Link to='/login'>
                        <button className='hidden  lg:flex bg-slate-700  border  hover:bg-slate-800 text-white pl-5 pr-5 pt-[7px] pb-[7px]  rounded text-xl '>Login/Register </button>

                        </Link>
                        <div className=' flex gap-4 items-center '>
                            <BiSearchAlt onClick={() => setSearchToggle(!searchToggle)} className='w-[25px] h-[25px]  cursor-pointer text-pink-500 lg:hidden  block' />
                            {
                                toggle ?
                                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='h-7 w-7 cursor-pointer lg:hidden text-pink-500 block' />
                                    :
                                    <RiMenu3Line onClick={() => setToggle(!toggle)} className='h-8 w-8 cursor-pointer text-pink-500 lg:hidden  block ' />
                            }
                        </div>
                    </div>
                </div>
                {/* header lower part whene menus lie */}
                <div className='w-full '>
                    <nav className='hidden   lg:flex'>
                        <ul className='w-full flex flex-row justify-between text-[17px]  font-semibold text-slate-400'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Raybar</li>
                            <Link to='/chat'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Chat </li>
                            </Link>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Job Portal</li>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Notification</li>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Become an affiliate</li>
                            <Link to='/contact'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded text-white '>Contact</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* header container closing tag */}
            {/* responsive menus  */}
            <div className={` w-full h-20  justify-center  flex items-center  ${searchToggle ? 'left-[0]' : '-left-[100%]'}`} >

                <input className='fixed hidden  md:hidden min-w-[300px] min-h-10 border-slate-400 rounded outline-none border pl-12 pr-3' type="search" placeholder='Search by product title' />
            </div>
            <div className=' md:hidden block'>
                <nav className={`   fixed -mt-20 bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen block transition-all duration-25  ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <div className='bg-slate-100 min-h-[70px] flex items-center justify-center '>
       
                        <Link to='/login'>
                            <button className='  text-white px-3 border-none rounded text-[14px] font-semibold '> Login/Register </button>
                        </Link>       
                     
                    </div>
                    <ul className=' flex flex-col items-start text-white text-[15px]  ml-2 mt-8 font-semibold '>
                        <li className='hover:bg-gradient-to-r  from-cyan-500 to-blue-500 pt-2 m-1 cursor-pointer pb-2 pl-4 pr-4 border-none rounded '>Raybar </li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '> Chat Box </li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '> Search </li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Request</li>
                        <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Comment</li>
                        <Link to='/contact'>
                    <li className='hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Contact Us</li>
                    </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
