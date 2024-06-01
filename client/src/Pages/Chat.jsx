import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function Chat() {
  return (
    <>
          <Header />
          
          <div className='w-full h-full items-center justify-center flex '>
              <div className='flex flex-col justify-center items-center bg-cyan-100 py-6 px-5'>
                  <h1 className='text-blue-400 font-bold text-4xl'>We are Sorry!</h1>
                  <h1 className='text-blue-400 font-bold text-4xl my-6'>This Page is Under Maintainance</h1>
                  <Link to='/'> 
                  <button className='bg-white text-black border py-2 px-5 rounded-sm'>Go Back </button>
                  </Link>
              </div>
        </div>
    </>
  )
}
