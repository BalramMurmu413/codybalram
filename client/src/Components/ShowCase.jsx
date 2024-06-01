import React from 'react'
import flower from '/Images/flowerCouple.jpg'


export default function ShowCase() {
  return (
    <>
          <div className=' flex flex-col-reverse md:flex-row border-4 bg-sky-400 w-full m-auto rounded-lg px-2 py-4' >
              <div className=' flex flex-col-reverse w-full m-auto rounded-lg mt-4    '>
                  <div className=' '>
                    <h1 className= 'sm:text-sm md:text-4xl m-5 text-white font-bold'>Santhali samaj reya Online Raybar Platform</h1>
                      <p className='text-white m-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolores quia, repudiandae fugiat perferendis blanditiis.</p>
                      <button className='bg-blue-400 pt-1 pb-1 m-5 pl-3 pr-3 text-white rounded-lg'> Explore More.</button>
                </div>
        
              </div>

              <div className='flex flex-col-reverse w-full m-auto  ' >
              <img className=' rounded-lg w-[600px] ' src={flower} alt="" />
        </div>
      </div>

    </>
  )
}
