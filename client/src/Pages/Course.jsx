import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'
import { ReactTyped } from 'react-typed'
import computer from '/Images/computer.jpg'


export default function Course() {
  return (
    <>
          <Header />
        {/* first section        */}
      <section className='w-full bg-slate-900 min-h-96 my-10 rounded-lg'>
        
        <div className='w-full px-5 min-h-80  flex flex-col-reverse md:flex-row  justify-between items-center '>

          <div>
            <h1 className='text-pink-500 text-xl font-semibold md:text-4xl text-start'>Lorem, ipsum. <br />
            <ReactTyped  className="sm:text-xl md:text-4xl  font-bold text-orange-400 "
      
      strings={[
        "  Web Designing",
        " Web Development",
        " Deployment",
        "Handling",
        ]}
        typeSpeed={80}
        backSpeed={40}
        loop={true}
/>
        </h1>
            <h3 className='text-pink-500 text-lg md:text-2xl text-start'>Lorem ipsum dolor sit amet.</h3>
            <p className='text-start text-white font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo totam magnam in voluptate inventore?</p>
          </div>

            

          <div>
            <img src={computer} alt="" width={640} className='md:my-0 md:mx-0 my-5 flex items-center ' />
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
