import React from 'react'
import flower from '/Images/balram.jpg'


export default function ShowCase() {
  return (
    <>
          <div className=' flex flex-col-reverse md:flex-row border-4 bg-slate-900 w-full m-auto rounded-lg px-2 py-4' >
              <div className=' flex flex-col-reverse w-full m-auto rounded-lg mt-4    '>
                  <div className=' '>
                    <h1 className= 'sm:text-sm md:text-4xl m-5 text-white font-bold'>Santhali samaj reya Online Raybar Platform</h1>
                      <p className='text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
                      <button className='bg-slate-700 pt-1 pb-1 m-5 pl-3 pr-3 text-white rounded-lg border-[1px] hover:bg-slate-900'> Explore More</button>
                </div>
        
              </div>

              <div className='flex flex-col-reverse w-full m-auto  ' >
              <img className=' rounded-full w-[200px] md:w-[500px] m-auto ' src={flower} alt="" />
        </div>
      </div>

    </>
  )
}
