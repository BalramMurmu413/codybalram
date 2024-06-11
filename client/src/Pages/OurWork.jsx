import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'
import computer from '/Images/computer.jpg'
import { Link } from 'react-router-dom'

export default function OurWork() {
  return (
      <>
          <Header/>
          <section className='w-full min-h-svh  text-white flex-col'>
           
        {/* my work card */}
            <div className='w-full my-2 flex flex-row bg-slate-700 min-h-'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>Beats.com</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_blank'>
                          <button className='py-1 px-4 rounded-md bg-pink-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This was my first Portfolio website </h1>
              <p className=' place-content-start'>
                <span className='font-bold'>Used frameworks : </span>  
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illum laboriosam quos at cumque ea.</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        
          {/* my work card */}
          <div className='w-full my-2 flex flex-row bg-slate-700 min-h-'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>codingtag.com</h1>
                          <Link to='https://codingtag.pages.dev/ ' target='_blank'>
                          <button className='py-1 px-4 rounded-md bg-pink-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This is an E-commerce website, listed the items of Beats electronic product to purchase online  </h1>
              <p className=' place-content-start'>
                <span className='font-bold'>Used frameworks : </span>  
                This website is developed by HTML, CSS, and Javascript and have very poor functionality becouse this was my first website i have made....</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        



          {/* my work card */}
          <div className='w-fullmy-2  flex flex-row bg-slate-700 min-h-'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>Beats.com</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_black'>
                          <button className='py-1 px-4 rounded-md bg-pink-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This is an E-commerce website, listed the items of Beats electronic product to purchase online  </h1>
              <p className=' place-content-start'>
                <span className='font-bold'>Used frameworks : </span>  
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dignissimos quidem quae, velit praesentium ab quia voluptatibus minus facere culpa.</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        



          {/* my work card */}
          <div className='w-full my-2  flex flex-row bg-slate-700 min-h-'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>Beats.com</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_black'>
                          <button className='py-1 px-4 rounded-md bg-pink-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This is an E-commerce website, listed the items of Beats electronic product to purchase online  </h1>
              <p className=' place-content-start'>
                <span className='font-bold'>Used frameworks : </span>  
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dignissimos quidem quae, velit praesentium ab quia voluptatibus minus facere culpa.</p>
                      </div>
          </div>
            </div>
          {/* ending of card */}

        




          {/* my work card */}
          <div className='w-full my-2 flex flex-row bg-slate-700 min-h-'>
                  <div className='mr-5'>
                      <img src={computer} alt="" width={400} />
                  </div>
                  <div className='w-full my-2 mx-2'>
                      <div className='w-full mr-16 flex justify-between'>
                          <h1 className='text-pink-300 font-bold'>Beats.com</h1>
                          <Link to='https://walkmanproject1.pages.dev/ ' target='_black'>
                          <button className='py-1 px-4 rounded-md bg-pink-400 text-white font-semibold '>Visit</button>
                          </Link>
                      </div>
                      <div className='flex flex-col w-full items-start'>
                          <h1> This is an E-commerce website, listed the items of Beats electronic product to purchase online  </h1>
              <p className=' place-content-start'>
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
