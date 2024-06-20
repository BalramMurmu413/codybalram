import React from 'react'
import computer from '/Images/computer.jpg'
import { Link } from 'react-router-dom'


export default function ShowCaseTwo() {
  return (
    <>
      <div className=' flex flex-col-reverse md:flex-row border-2 bg-white  dark:bg-slate-800 px-2 py-4 rounded-lg  w-full m-auto' >
              <div className=' flex flex-col-reverse w-full m-auto   '>
                  <div className='items-center justify-center flex flex-col '>
            <h1 className='sm:text-sm md:text-4xl m-5 text-white font-bold'>Welcome to my portfolio! </h1>
            <hr className='md:hidden w-48 flex text-emerald-600  font-extrabold h-[2px] outline-none border-none rounded-lg bg-emerald-600 items-center justify-center ' />
                      <p className='text-white m-5'>I'm dedicated to crafting exceptional digital experiences through innovative web development. With a sharp eye for detail and a passion for staying ahead in the ever-evolving digital landscape, I specialize in creating responsive, user-centric websites that not only meet but exceed client expectations. Whether it's building robust e-commerce platforms, dynamic content management systems, or sleek portfolio sites, I thrive on turning complex ideas into elegant, functional realities. My approach combines creativity with technical expertise to deliver solutions that are not just visually appealing but also intuitive to navigate. Explore my portfolio to see how I can help you achieve your digital goals with precision and creativity.</p>

                      <Link to='/maintanancePage'>
                      <button className='bg-slate-700 pt-1 pb-1 m-5 pl-3 pr-3 text-white rounded-lg border-[1px] hover:bg-slate-900'> Explore More.</button>
                        </Link>
                </div>
        
              </div>
              

              <div className='flex flex-col-reverse w-full m-auto  ' >
              <img className='rounded-lg w-[600px]' src={computer} alt="" />
        </div>

      </div>
          
    </>
  )
}
