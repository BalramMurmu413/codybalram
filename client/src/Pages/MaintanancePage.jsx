import React from 'react'
import Header from '../Components/Header.jsx'
import { Link } from 'react-router-dom'

export default function MaintanancePage() {
  return (
    <>
          <Header />
          <div className=' h-96 w-full flex  flex-col justify-center items-center bg-slate-900'>
      <h1 className='text-1xl  md:text-3xl my-5 text-white font-bold'>We'r Sorry! This Page is Under Maintainance</h1>
              <Link to='/'>
      <button className='py-2 px-3 bg-slate-800 text-white hover:border-2 border hover:bg-slate-700 '>Go Back</button>
              </Link>
    </div>
    </>
  )
}
