import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";



function Footer() {
  return (
    <footer >
      <div className=' bg-slate-900 py-16 border-4 rounded-xl text-slate-100 md:flex justify-around  w-full h-58  grid grid-cols-2  '>

        <div className='mx-4'>
          <h1 className='font-bold text-2xl'> Founder <hr className='font-semibold text-indigo-600' /> </h1>
          <div className='flex flex-col items-start'>
            <h3 className='font-semibold'>PL Murmu</h3>
            <h3 className='font-semibold'> Hopen Tudu</h3>
            </div>

            <div >
              <ul className='flex flex-row gap-4' >
              <li className='mx-5 cursor-pointer '><FaXTwitter className='w-[30px] h-[30px] text-white hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
                  <li className='mx-5 cursor-pointer '><FaSquareInstagram className='w-[30px] h-[30px]  text-white  hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
<li className='mx-5 cursor-pointer '><IoLogoWhatsapp className='w-[30px] h-[30px]     text-white  hover:scale-125 transition-all border-zinc-300   rounded-full '/></li>

                  
              </ul>
          </div>
        </div>


        <div>
          <h1 className='font-bold text-2xl'>Balram Murmu  <hr className='h-8' /> </h1>
          <div className='flex flex-col items-start '>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-300'>100+ Client Handled </h3>
            <h3 className='p-1 rounded border-white m-1 border font-bold text-green-300'>Across India</h3>

            </div>
        </div>


        <div className='mx-5' >
          <h1  className='font-bold text-2xl '>Company <hr /> </h1>
          <div className='flex flex-row gap-5'>
            <div>
              <ul className='flex flex-col items-start'>
                <li>About us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

          </div>
        </div>
        <div className='mx-5'>
        <h1  className='font-bold text-2xl '>Product <hr /> </h1>
          
          <div className='flex flex-row gap-5'>
            <div>
              <ul className='flex flex-col items-start'>
                <li>Contact Us</li>
                <li>Job Assistant</li>
                <li>Term and Condiction</li>
              </ul></div>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
