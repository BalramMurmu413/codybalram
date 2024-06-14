import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'

export default function Course() {
  return (
    <>
          <Header />
        {/* first section        */}
      <section className='w-full bg-orange-100 min-h-96 my-10'>
        
        <div className='w-full max-h-svh flex flex-col md:flex-row  justify-between items-center place-content-center'>
          <div>
            <h1 className='text-pink-500 text-xl font-semibold md:text-3xl text-start'>Lorem, ipsum.</h1>
            <h3 className='text-pink-500 text-lg md:text-2xl text-start'>Lorem ipsum dolor sit amet.</h3>
            <p className='text-start text-white font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo totam magnam in voluptate inventore?</p>
          </div>

            

          <div>
            <img src="" alt="" />
          </div>

        </div>
        
      </section>


{/* second section  */}
      <section className='w-full bg-orange-900 min-h-96 my-10'>
        
</section>
      

      {/* third sectionn */}
      <section className='w-full bg-orange-500 min-h-96 my-10'>
      

      </section>


      <SimpleFooter/>
    </>
  )
}
