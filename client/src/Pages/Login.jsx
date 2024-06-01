import React from 'react'
import sample from '/Images/handbride.jpeg'
import { Link } from 'react-router-dom'

// Component
import Header from '../Components/Header.jsx'



export default function Login() {
  return (
      <>
          <Link to='/'>
          <Header />
          </Link>
          <div className='w-full select-none h-screen bg-white rounded-xl text-black flex flex-row justify-around items-center'>
{/* left  */}
              <div className='hidden md:block '>
                  <img src={sample}  alt="" className=' bg-contain bg-center h-[640px]' />
              </div>
         
         {/* right */}
              <div className=' bg-slate-100 w-full md:w-1/3 h-screen flex flex-col items-center justify-around '>
                  <div>
                  <h1 className='text-2xl md:text-3xl font-bold text-center'>Welcome Back !</h1>
                      <p>login with gmail or username </p>
                  </div>    
                  <div>
                      <button className='border rounded-md py-2 px-10'>Sign in with Google </button>
                  </div>
                         
                  <form action="">
                      <div className='flex flex-col  items-start'>
                          <label > Username                              
                          </label>
                          <input type="text"  placeholder='Username' className='py-1 px-2 outline-none rounded-full' />
                          <label >
                              Password 
                          </label> 
                          <input type="password" placeholder='********'  className='py-1 px-2 outline-none rounded-full' />
                          <p className='text-blue-500 cursor-pointer text-sm underline'>Forgot User Id or Password?</p>
                          <button className='bg-sky-300 py-2 font-semibold text-white my-3 w-full rounded-lg'>Login</button>
                      </div>

                      <div>
                          
                          <p>Don't have account ?
                            <Link to='/createProfile'>  <span className='text-blue-800 cursor-pointer'>Sign Up</span> </Link></p>
                      </div>
                  </form>
                  <div>
                      <Link to='/'>
                      <p className=' cursor-pointer select-none'>
                          skip for now
                      </p>
                      </Link>
                  </div>
              </div>

            </div>
    </>
  )
}
