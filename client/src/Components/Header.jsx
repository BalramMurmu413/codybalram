import React from 'react'
import { Link } from 'react-router-dom';

// icons
import { AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
// images

function Header() {
    const [toggle, setToggle] = useState(false)
    const [searchToggle, setSearchToggle] = useState(false)

    return (
        <>
            {/* header container closing tag */}

            {/* header uppper part */}
            <section className='w-full bg-slate-900  mx-0 '>

            <div className='flex flex-col w-11/12  justify-between  m-auto'>
                <div className='flex flex-row justify-between items-center '>
                    <div className='flex flex-row items-center '>
                       
                        <Link to='/'>
                        <h1 className=' font-bold md:text-[32px] text-pink-500  font-sans text-[22px]'><span>&lt;</span> CodyBalram <span> &#8725; &gt;</span></h1>
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
                        <div className=' flex gap-4 items-center  '>
                            {
                                toggle ?
                                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='h-8 w-8  cursor-pointer lg:hidden text-pink-500 block' />
                                    :
                                    <RiMenu3Line onClick={() => setToggle(!toggle)} className='h-8 w-8  cursor-pointer text-pink-500 lg:hidden  block ' />
                            }
                        </div>
                    </div>
                </div>
                {/* header lower part whene menus lie */}
                <div className='w-full my-5 '>
                    <nav className='hidden   lg:flex'>
                        <ul className='w-full flex flex-row justify-between font-semibold text-slate-400'>
                            <Link to='/course'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded font-semibold text-white '>Courses</li>
                            </Link>
                            <Link to='/service'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded font-semibold text-white '>Services</li>
                            </Link>
                            <Link to='/client'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none font-semibold rounded text-white '>Our Client</li>
                            </Link>

                            <Link to='/ourwork'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded font-semibold text-white '>Our Work</li>
                            </Link>

                            <Link to='/hireme'>
                            <li className='bg-pink-500 py-2 cursor-pointer border-white border-2 px-4 border-none rounded font-semibold text-white '>Hire Me</li>
                            </Link>
                            <Link to='/contact'>
                            <li className='hover:bg-slate-600 py-2 cursor-pointer  px-4 border-none rounded font-semibold text-white '>Contact</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* header container closing tag */}
            {/* responsive menus  */}
            <div className=' lg:hidden  block'>
                <nav className={`   fixed  bg-slate-900 w-full h-screen block transition-all duration-25  ${toggle ? 'left-0' : 'left-[-100%]'}`}>
                    <div className='bg-slate-700 min-h-[70px] flex items-center justify-center '>
       
                        <Link to='/login'>
                            <button className='  text-white px-3 border-none rounded text-[14px]font-bold  '> Login/Register </button>
                        </Link>       
                     
                    </div>
                    <ul className=' flex flex-col items-start text-white text-[15px]  ml-2 mt-8 font-semibold '>
                        <Link to='/course'>
                        <li className='hover:bg-slate-700 pt-2 m-1 cursor-pointer pb-2 pl-4 pr-4 border-none rounded '>Courses</li>
                        </Link>
                        <Link to='/service'>
                        <li className='hover:bg-slate-700 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Services </li>
                        </Link>
                        <Link to='/ourwork'>

                        <li className='hover:bg-slate-700 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Our Work</li>
                        </Link>
                        <Link to='/client'>
                            
                        <li className='hover:bg-slate-700 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Our Client</li>
                        </Link>
                        <Link to='/hireme'>
                        <li className='hover:bg-slate-700 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Hire Me</li>
                        </Link>
                        <Link to='/contact'>
                    <li className='hover:bg-slate-700 cursor-pointer pt-2 m-1 pb-2 pl-4 pr-4 border-none rounded '>Contact Us</li>
                    </Link>
                    </ul>
                </nav>
            </div>
            </section>
        </>
    )
}

export default Header
