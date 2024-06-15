import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
// import computer from '/Images/computer.jpg'

export default function CourseOne() {
  return (
    <>
          <section>
              
              <div className='w-full flex flex-col items-start border-2 bg-slate-900 '>
                  <div>
                      <h1  className='text-xl md:text-4xl text-pink-500 my-10 font-bold'>Our Free Courses</h1>
                  </div>
                  <div className='w-full flex  justify-between items-start '>
                      <h2 className='text-xl text-white font-bold'>Web & Software Development</h2>
                      <button className='py-1 px-2 bg-pink-500 flex text-white rounded-lg font-semibold hover:bg-pink-400  items-center justify-center'>View All <FaArrowRight className='inline' /> </button>
          </div>
            </div>
{/* course CArds  */}
        <Section>
          <div>
            <div></div>
            <div>
              <h1>Full Stack Web Development</h1>
              <span><FaArrowRight className='inline'/></span>
            </div>
            <div>
              <p>Job Ready |  ticket to fast track career growth in web development</p>
            </div>
            <div>
            <h1>Register For  free Coureses</h1>
            <span> 20 May 2024</span>
            </div>
            <div className='w-full flex flex-row justify-between items-center'>
              <button className='border-[1px] py-3 px-5 '>Explore</button>
              <button className='border-[1px] py-3 px-5 '>Buy now</button>
</div>
            
        </div>
        </Section>        

          
    </section>
      
    </>
  )
}
