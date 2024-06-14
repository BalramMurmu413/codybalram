import React from 'react'
import sample from '/Images/computer.jpg'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Banner from '../Components/Banner.jsx';

import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx';
export default function ClientPage() {


  return (
    <>
      <Header/>
          <section className='w-full bg-slate-900 items-center md:mt-20 flex my-2  min-h-36 justify-center'>
              <div className=''>
                  <h1 className='text-white text-xl font-bold  md:text-4xl'>Our Client from all over the world</h1>
                  <p className='text-white text-sm font-semibold md:text-base'>Here are our some client details and theire revies </p>
              </div>
            </section>
    <section className=' w-full my-5 md:my-32 border-2 py-20 bg-slate-900 rounded-md'>
    <div >
                  <div className=' w-10/12  m-auto flex flex-row flex-wrap items-center justify-around'>           

               {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}



                        {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}

                      

                        {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}



                        {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
                      {/* card ending */}
                      




                        {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}



                        {/* card one starting */}
               <div className=' w-44 md:w-44 my-2 border-2 hover:scale-125 duration-100 bg-slate-900 cursor-default '>
                        <div className='flex  flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={80} height={100} alt="" className=' rounded-full flex items-center justify-center' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500 md:text-lg text-sm'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold text-sm md:text-lg' >Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike className='cursor-pointer' />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}
            </div>
        </div>
                  
</section>
<Banner/>
          
      <SimpleFooter/>
    </>
  )
}
