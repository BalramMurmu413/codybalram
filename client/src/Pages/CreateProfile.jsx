import React from 'react'
import { Link } from 'react-router-dom'
import sample from '/Images/handbride.jpeg'


import Header from '../Components/Header.jsx'
export default function CreateProfile() {
    return (
        <>
        <Header/>
            <form action="" method="post">
          <div className='w-full select-none h-screen bg-slate-900 rounded-xl text-white flex flex-row justify-around items-center'>
{/* left  */}
              <div className='hidden md:block'>
                  <img src={sample}  alt="" className='bg-contain bg-center' />
              </div>
         
         {/* right */}
              <div className=' bg-slate-900 border-2 rounded-lg w-full md:w-1/3 h-screen flex flex-col items-center justify-around '>
                  <div>
                  <h1 className='text-2xl md:text-3xl font-bold text-center'>Welcome Back !</h1>
                      <p>Signup with Gmail or Username </p>
                  </div>    
                  <div>
                      <button className='border rounded-md  py-2 px-10'>Create Account with Google </button>
                  </div>
                         
                  <form action="">
                      <div className='flex flex-col  items-start'>
                          <label > Username                              
                          </label>
                          <input type="text"  placeholder='Username' className='py-1 px-2 outline-none  rounded-lg text-black' />
                          <label >
                              Password 
                          </label> 
                                <input type="password" placeholder='*******' className='py-1 px-2 outline-none rounded-lg text-black' />
                                <p className='text-blue-500 cursor-pointer text-sm underline'>Forgot User Id or Password?</p>
                          <button className='bg-sky-300 py-2 font-semibold text-white my-3 w-full rounded-lg'>Sign Up</button>
                      </div>

                      <div>
                          
                          <p>Already have an account ?
                            <Link to='/login'>  <span className='text-blue-800 cursor-pointer'>Login</span> </Link></p>
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
</form>

        </>
    )
}