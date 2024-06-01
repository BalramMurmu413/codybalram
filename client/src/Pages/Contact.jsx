import React from 'react'
import Header from '../Components/Header.jsx'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineFax } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <>
    <Header />
      <section>
        <div className='  w-full '>
          <div className='w-full  flex items-center justify-center'>

        <h1 className='md:text-4xl font-extrabold text-indigo-500'>Get In Touch</h1>
          </div>
          <div className=' flex flex-wrap justify-around  w-full mt-28   '>
            <div className='bg-white rounded-lg flex items-center hover:scale-110 transition-all  flex-col my-4 py-2 h-44 w-44'>
              <  FaLocationDot className='
               w-[30px] h-[30px] md:w-[50px] md:h-[50px] '/>
              <h2 className='sm:font-medium md:font-semibold my-3'>Our Main Office</h2>
              <p className='text-center'>SoHo 94 Broadway St New York, Ny 101</p>
            </div>
            
            <div className='bg-white rounded-lg  flex items-center shadow-gray-600  hover:scale-110 transition-all  flex-col my-4 py-2   h-44 w-44'>
            < FaPhone className='
            w-[30px] h-[30px]
              md:w-[50px] md:h-[50px]'/>
              <h2 className='sm:font-medium  md:font-semibold my-3'>Phone Number</h2>
              <p>+91 4500-5748-0000 </p>
              <p>1800- 4500-4500</p>
   </div>
            <div className='bg-white hover:scale-110 transition-all  rounded-lg shadow-lg shadow-grey-500/50  flex items-center flex-col my-4 py-2  h-44 w-44'>
            < MdOutlineFax className='
              w-[30px] h-[30px]
              md:w-[50px] md:h-[50px]'/>
              <h2 className=' sm:font-medium md:font-semibold my-3'>Fax</h2>
              <p>9500 - 9500 - 00 </p>
   </div>
            <div className='bg-white  rounded-lg   flex items-center hover:scale-110 transition-all  flex-col my-4 py-2
              h-44 w-44'>
            <  HiOutlineMail className='
              w-[30px] h-[30px]
              md:w-[50px] md:h-[50px]'/>
              <h2 className='sm:font-medium  md:font-semibold my-3'>Email</h2>
              <p>SagunBapla@gmail.com </p>

   </div>
          </div>
        </div>
        <div className=' items-center justify-around flex flex-row w-screen h-screen '>

          <div className='item-center justify-around flex flex-col-reverse md:flex-row mt-48'>
            <div>
              <form action="" method="post " className='flex flex-col  mt-14 p-4  justify-between '>
                <div className='w-full flex flex-row '>
                  <div>
                  <label htmlFor="" className='text-white  font-bold '>Email <br />
                <input type="email" name="email" required placeholder="Enter a valid email address" className=' md:border-b-4 rounded-s-none outline-none bg-transparent '  />
                  </label>
                  </div>
                  <div>

                  <label htmlFor="" className='text-white font-bold'>
                    Name  <br />
                <input type="text" name="name" required placeholder="Enter your name" className='bg-transparent md:border-b-4 outline-none  decoration-solid' />

                  </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="" className='text-white font-bold'>Message <br />
                    <textarea name="message" placeholder="Message" className='bg-transparent border text-white outline-none'> 
                    </textarea>
                  </label>
                </div>
                <div>
                  <button className='bg-slate-600 text-white py-2 px-6 font-semibold rounded-sm border '> Send </button>
                </div>
              </form>
            </div>
            <div className='w-1/2 h-60  flex flex-col justify-around pl-5'>
              <div>
             <h1 className='md:text-4xl font-bold text-white'>Get in Touch</h1>
              </div>

              <div>
                <p className='font-semibold italic  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium!</p>
              </div>
              <div>
                <p className='text-white font-semibold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam autem excepturi molestiae dolorem repudiandae quod pariatur eligendi quas praesentium ut.
                </p>
              </div>
              <div>
                <ul className='flex flex-row '>
                  <li className='mx-5 cursor-pointer '><FaFacebook className='w-[30px] h-[30px] hover:scale-125 transition-all border-zinc-300   '/></li>
                  <li className='mx-5 cursor-pointer '><FaXTwitter className='w-[30px] h-[30px] hover:scale-125 transition-all border-zinc-300   '/></li>
                  <li className='mx-5 cursor-pointer '><FaSquareInstagram className='w-[30px] h-[30px] hover:scale-125 transition-all border-zinc-300   '/></li>
                  <li className='mx-5 cursor-pointer '><IoLogoWhatsapp className='w-[30px] h-[30px] hover:scale-125 transition-all border-zinc-300   '/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
</section>
      
    </>
  )
}
