import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'
import computer from '/Images/computer.jpg'
import { Link } from 'react-router-dom'

export default function OurWork() {
  return (
      <>
      <Header />
      

      <section className='w-full flex items-center mt-16 mb-10 min-h-36 justify-center bg-slate-900'>
        <div>
          <h1 className='text-white text-xl font-bold  md:text-4xl'>Building the web, one pixel at a time</h1>
          <p className='text-white text-sm font-semibold md:text-base'>Code crafted with passion</p>
        </div>
      </section>
          <section className='w-full min-h-svh  text-white flex-col '>
           
        {/* my work card */}
            <div className='w-full my-2  md:flex-row flex flex-col bg-slate-900  border-2'>
                  <div className='md:mr-5'>
                      <img src={computer} alt="" className=' md:w-96 w-full'  />
                  </div>
                  <div className='w-full my-2 mx-2  '>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 text-xl md:text-2xl font-bold'>Beats.com</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_blank'>
                          <button className='py-1 mr-8 px-4 rounded-md bg-pink-600 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col  w-full justify-start items-start'>
                          <h1> This was my first Portfolio website </h1>
              <p className=' place-content-start text-start  '>
                <span className='font-bold  '>Used frameworks : </span>  
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum laboriosam quos at cumque ea.</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        
          {/* my work card */}
          <div className='w-full my-2  md:flex-row flex flex-col bg-slate-900  border-2'>
          <div className='md:mr-5'> 
                      <img src={computer} alt="" className=' md:w-96 w-full'  />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
              <h1 className='text-pink-300 text-xl md:text-2xl font-bold'>codingtag.com</h1>
              <Link to='https://d53e7b78.codingtag.pages.dev/ ' target='_blank'>
              <button className='py-1 mr-8 px-4 rounded-md bg-pink-600 text-white font-semibold '>Visit</button>
                        
                          </Link>
                      </div>
  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
              <h1 className='text-pink-300 text-xl md:text-2xl font-bold'>codingtag.com</h1>
              <Link to='https://sanjumake.pages.dev/ ' target='_blank'>
              <button className='py-1 mr-8 px-4 rounded-md bg-pink-600 text-white font-semibold '>Visit</button>
                        
                          </Link>
                      </div>
                    <div className='flex flex-col  w-full justify-start items-start'>
                          <h1> This is an E-commerce website  </h1>
              <p className=' place-content-start text-start  '>
                <span className='font-bold'>Used frameworks : </span>  
                This website is developed by HTML, CSS, and Javascript and have very poor functionality becouse this was my first website i have made....</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        



          {/* my work card */}
          <div className='w-full my-2  md:flex-row flex flex-col bg-slate-900  border-2'>
          <div className='md:mr-5'>
                      <img src={computer} alt="" className=' md:w-96 w-full' />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                      <h1 className='text-pink-300 text-xl md:text-2xl font-bold'>medifine.com</h1>
                      <Link to='https://html-css-poject-6-multipage-html.pages.dev/ ' target='_black'>
                          <button className='py-1 mr-8 px-4 rounded-md bg-pink-600 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This is an E-commerce website  </h1>
              <p className=' place-content-start text-start  '>
                <span className='font-bold'>Used frameworks : </span>  
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dignissimos quidem quae, velit praesentium ab quia voluptatibus minus facere culpa.</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        




      </section>
      <SimpleFooter/>
          
    </>
  )
}
