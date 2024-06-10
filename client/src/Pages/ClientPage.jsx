import React from 'react'
import sample from '/Images/computer.jpg'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
export default function ClientPage() {
  // increment function

  function increment() {
    let total = 0
    return total++
  }

  return (
    <>
      <Header/>
    <section className=' w-full'>
            
    <div >
                  <div className=' w-10/12   m-auto flex flex-row flex-wrap items-center justify-around'>
                      {/* card one starting */}
            <div className='h-68 w-64 my-5 border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* card ending */}
            {/*card starting  */}
            <div className='h-68 w-64 my-5  border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            {/* ending */}
            {/* multi card staring*/}
            <div className='h-68 w-64 my-5 border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
            </div>
            

            <div className='h-68 w-64  border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
            </div>
            


            <div className='h-68 w-64  border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
            </div>
            


            <div className='h-68 w-64  border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
            </div>
            

            <div className='h-68 w-64  border-2 hover:scale-125 duration-100 cursor-default '>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
            
            {/* multi card ending */}
            <div className='h-68 w-64  border-2 hover:scale-125 duration-100 cursor-default'>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike />
                                          <span>2</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
                        {/* emnding */}
                      {/* card one starting */}
                      
                      <div className='h-68 w-64 my-5 border-2 hover:scale-125 duration-100 cursor-default'>
                        <div className='flex mx- my-6 flex-col'>
                            <div className=' flex flex-row justify-around items-center'>
                                  <img src={sample} width={100} height={100} alt="" className=' rounded-full' />
                                  <div className='flex flex-col items-start'>
                                  <h3 className='text-pink-500'>Organisation Name</h3>
                                  <h3 className='text-white text-2xl'> *  *  * </h3>
                                  </div>
                            </div>
                            <div>
                                  <h1 className='text-white font-bold'>Review</h1>
                            <p className='text-white italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis.</p>      
                              </div>
                              <div>
                                  <ul className='flex flex-row justify-around'>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiLike  className='cursor-pointer'  />
                                          <span>0</span>
                                      </li>
                                      <li className='flex flex-row items-center text-white'>
                                          <BiDislike className='cursor-pointer' />
                                          <span>0</span>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                        </div>

                  
                  
            </div>
        </div>
                  
</section>
          
      <Footer/>
    </>
  )
}
