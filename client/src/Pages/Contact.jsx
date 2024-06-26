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
        <div className='  w-full mt-20'>
          <div className='w-full  flex items-center justify-center '>

        <h1 className='md:text-4xl font-extrabold text-1xl text-white cursor-default select-none    '>Get In Touch</h1>
          </div>
          <div className=' flex flex-wrap justify-around  w-full my-10  cursor-default '>
            <div className='bg-white rounded-lg flex items-center hover:scale-110 transition-all  flex-col my-4 py-2   md:h-36 w-44'>
              <  FaLocationDot className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] '/>
              <h2 className='sm:font-medium text-pink-500 md:font-semibold my-3'>Our Main Office</h2>
              <p className='text-center'>Nirsa, Dhanbad Jharkhand , India  828204</p>
            </div>
            
            <div className='bg-white rounded-lg  flex items-center shadow-gray-600  hover:scale-110 transition-all  flex-col my-4 py-2    h-32   md:h-36 w-44'>
            < FaPhone className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] '/>
              <h2 className='sm:font-medium text-pink-500  md:font-semibold my-3'>Phone Number</h2>
              <Link to='https://www.facebook.com/bram.murmu'>
              <p>Please use <span className='text-blue-400'>Facebook</span> </p>
              </Link>
              <p>Other Social Media Links</p>
   </div>
            <div className='bg-white hover:scale-110 transition-all  rounded-lg shadow-lg shadow-grey-500/50  flex items-center flex-col my-4 py-2   h-32 w-44  md:h-36 '>
            < MdOutlineFax className='
              w-[20px] h-[20px] md:w-[50px] md:h-[50px] '/>
              <h2 className=' sm:font-medium text-pink-500 md:font-semibold my-3'>Fax</h2>
              <p>N/A for sometime </p>
   </div>
            <div className='bg-white  rounded-lg   flex items-center hover:scale-110 transition-all  flex-col my-4 py-2 h-32   md:h-36 w-44'>
            <  HiOutlineMail className='
              w-[20px] h-[20px] md:w-[50px] md:h-[50px] '/>
              <h2 className='sm:font-medium text-pink-500 md:font-semibold my-3'>Email</h2>
              <Link to='http://www.gmail.com/balramm413'>
              <p>Balram413@gmail.com</p>
              </Link>
   </div>
          </div>
        </div>



        <div className='  bg-slate-900  justify-around  flex flex-row w-full  '>
          <div className='item-center justify-around flex flex-col-reverse md:flex-row '>
            <div>
              <form action="" method="post " className='flex flex-col my-1 p-4   '>
                <div className='w-full flex md:flex-row flex-col mx-2   '>
                  <div >
                  <label htmlFor="" className='text-white  flex items-start flex-col font-bold '>Email <br />
                <input type="email" name="email" required placeholder="Enter email address..." className='  md:border-b-2 outline-none bg-transparent font-semibold '  />
                  </label>
                  </div>

                  <div>
                  <label htmlFor="" className='text-white font-bold  flex items-start flex-col'>
                    Name  <br />
                <input type="text" name="name" required placeholder="Enter your name..." className='  bg-transparent md:border-b-2 outline-none  font-semibold' />
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
                  <button className='hover:bg-slate-900 bg-slate-800 text-white py-2 px-6 font-semibold rounded-sm border '> Send </button>
                </div>
              </form>
            </div>
            <div className='w-1/2   m-auto flex flex-col justify-around'>
              <div>
                <h1 className='md:text-4xl text-2xl font-bold text-white'>Get in Touch</h1>
              </div>

              <div>
                <p className='font-2px italic  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium!</p>
              </div>
              <div>
                <p className='text-white font-semibold'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam autem excepturi molestiae dolorem repudiandae quod pariatur eligendi quas praesentium ut.
                </p>
              </div>
              <div>
                <ul className='flex flex-row my-10 '>
                  <Link to=''>
                   <li className='mx-5 cursor-pointer '><FaFacebook className='w-[30px] h-[30px] text-white hover:scale-125 transition-all border-zinc-300  rounded-full   '/></li>
                  </Link>
                  <li className='mx-5 cursor-pointer '><FaXTwitter className='w-[30px] h-[30px] text-white hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
                  <li className='mx-5 cursor-pointer '><FaSquareInstagram className='w-[30px] h-[30px]  text-white  hover:scale-125 transition-all border-zinc-300  rounded-full  '/></li>
                  <li className='mx-5 cursor-pointer '><IoLogoWhatsapp className='w-[30px] h-[30px]     text-white  hover:scale-125 transition-all border-zinc-300   rounded-full '/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
</section>
      
    </>
  )
}
