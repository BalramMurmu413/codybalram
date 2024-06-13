import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import sample from '/Images/computer.jpg'


export default function SimpleFooter() {
  return (
    <>
          <section className='w-full bg-slate-900 rounded-lg'>
              <div className='flex flex-row justify-between  w-full min-h-20 items-center' >
                 
                  <div className=' flex items-start'>
                    <img src={sample} alt="" width={100 }  className=' rounded-s-full'/>
                  </div>
                 
                  <div className='flex flex-col items-start '>
                      <p className='text-pink-400 font-semibold'>Designed By Balram Murmu</p>
                      <p className=' text-sm text-pink-400'> All Copyright Reserved 2024 </p>
                  </div>
                  <div>
                      <ul className='flex flex-row gap-10 text-white mr-7'>
                          <li className='hover:scale-125 duration-100 cursor-pointer'><FaXTwitter/></li>
                          <li className='hover:scale-125 duration-100 cursor-pointer'><FaSquareInstagram/></li>
                          <li className='hover:scale-125 duration-100 cursor-pointer'><IoLogoWhatsapp/></li>
                      </ul>
                  </div>
              </div>
      </section>
          
    </>
  )
}
