import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'
import computer from '/Images/computer.jpg'
import { Link } from 'react-router-dom'

export default function OurWork() {
  return (
      <>
          <Header/>
          <section className='w-full  text-white flex-col'>
            {/* my work card */}
            <div className='w-full flex flex-row bg-slate-500 min-h-50'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
</div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>Walkman</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_black'>
                          <button className='py-1 px-4 rounded-md bg-blue-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>


                      <div className='flex flex-col w-full items-start'>
                          <h1>Helow </h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, mollitia quae! Eum.</p>
                      </div>
</div>


            </div>
      </section>
      <SimpleFooter/>
          
    </>
  )
}
