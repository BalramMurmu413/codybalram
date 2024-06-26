import React from 'react'
import flower from '/Images/balram.png'
import { Link } from 'react-router-dom'


export default function ShowCase() {
  return (
    <>
          <div className=' flex flex-col-reverse md:flex-row border-2  bg-slate-900 w-full m-auto rounded-lg px-2 py-4' >
              <div className=' flex flex-col-reverse  w-full m-auto rounded-lg mt-4    '>
                  <div className=' md:my-52 flex items-center justify-center flex-col'>
                    <h1 className= 'text-2xl md:text-4xl m-5 text-white font-bold'>Balram Murmu</h1>
                      <p className='text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
            <Link to='/maintanancePage'>
                      <button className='bg-slate-700 pt-1 pb-1 m-5 pl-3 pr-3 text-white rounded-lg border-[1px] hover:bg-slate-900'> Explore More</button>
            </Link>
                </div>
        
              </div>

              <div className='flex flex-col-reverse w-full m-auto  ' >
              <img className=' rounded-full w-[200px] md:w-[500px] m-auto ' src={flower} alt="" />
        </div>
      </div>

    </>
  )
}
