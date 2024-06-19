import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=' bg-slate-900 cursor-default rounded-xl border-2 my-2   text-slate-100  flex flex-col   ' >
      <div className=' bg-slate-900 my-2 py-8   text-slate-100 md:flex justify-around  w-full  grid grid-cols-2  '>
        <div className='mx-4'>
          <h1 className='font-bold text-2xl items-start'> Developer <hr/> </h1>
          <div className='flex flex-col items-start'>
            <h3 className='font-bold'> Balram Murmu</h3>
            </div>
            <div >
              <ul className='flex flex-row gap-4 my-3' >
              <li className='md:mx-5 cursor-pointer '><FaXTwitter className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-white hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
              <li className='md:mx-5 cursor-pointer '><FaSquareInstagram className='md:w-[30px] w-[20px] md:h-[30px] h-[20px]  text-white  hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
              <li className='md:mx-5 cursor-pointer '><IoLogoWhatsapp className='md:w-[30px] w-[20px] md:h-[30px] h-[20px]     text-white  hover:scale-125 transition-all border-zinc-300   rounded-full '/></li>
              </ul>
          </div>
        </div>       
        <div>
          <h1 className='font-bold text-2xl'>Client Handled<hr/> </h1>
          <div className='flex flex-col items-start '>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-300'>20+ Client Handled </h3>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-300'>Across India</h3>
            </div>
        </div>
        <div className='mx-5' >
          <h1  className='font-bold text-2xl'>Company<hr /> </h1>
          <div className='flex flex-row gap-5'>
            <div>
              <ul className='flex flex-col items-start'>
                <Link to='/hireme'>
                <li>About Me</li>
                </Link>
                <Link to='/maintainance'> 
                <li>FAQ</li>
                </Link>
                <Link to='/maintainance'>
                <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='mx-5'>
        <h1  className='font-bold text-2xl '>Product <hr /> </h1>
        <div className='flex flex-row gap-5'>
            <div>
                <ul className='flex flex-col items-start'>
                <Link to='/contact'>
                <li>Contact Us</li>
                </Link>
                <Link to='/maintainance'>
                  <li>Career</li>
                </Link>
                <Link to='/maintainance'>
                <li>Term & Condiction</li>
                </Link>
              </ul></div>
          </div>
        </div>
        </div>
        <div>
<h1>This website is designed by <br /> Balram Murmu</h1>
<h3>All &#169; Copyright reserved 2024 	</h3>        
      </div>
    </footer>
  )
}

export default Footer
