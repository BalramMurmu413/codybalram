import React from 'react'
import flower from '/Images/india-wedding-couple.jpg'


export default function ShowCaseTwo() {
  return (
    <>
         <div className=' flex flex-col-reverse md:flex-row border-4 bg-white dark:bg-slate-800 px-2 py-4 rounded-lg drop-shadow-2xl w-full m-auto     ' >
              <div className=' flex flex-col-reverse w-full m-auto   '>
                  <div className='items-center justify-center flex flex-col '>
            <h1 className='sm:text-xs md:text-4xl m-5 text-white font-bold'>Santhali samaj reya Online Raybar Platform</h1>
            <hr className='md:hidden w-48 flex text-emerald-600  font-extrabold h-[2px] outline-none border-none rounded-lg bg-emerald-600 items-center justify-center ' />
                      <p className='text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
                      <button className='bg-blue-400 pt-1 pb-1 m-5 pl-3 pr-3 text-white rounded-lg'> Explore More.</button>
                </div>
        
              </div>

              <div className='flex flex-col-reverse w-full m-auto  ' >
              <img className='rounded-lg w-[600px]' src={flower} alt="" />
        </div>

      </div>
          
    </>
  )
}