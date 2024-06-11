import React from 'react'
import computer from '/Images/computer.jpg'
import { Link } from 'react-router-dom'


export default function ShowCaseTwo() {
  return (
    <>
         <div className=' flex flex-col-reverse md:flex-row border-2 bg-white  dark:bg-slate-800 px-2 py-4 rounded-lg  w-full m-auto     ' >
              <div className=' flex flex-col-reverse w-full m-auto   '>
                  <div className='items-center justify-center flex flex-col '>
            <h1 className='sm:text-sm md:text-4xl m-5 text-white font-bold'>Lorem, ipsum dolor.</h1>
            <hr className='md:hidden w-48 flex text-emerald-600  font-extrabold h-[2px] outline-none border-none rounded-lg bg-emerald-600 items-center justify-center ' />
                      <p className='text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
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
