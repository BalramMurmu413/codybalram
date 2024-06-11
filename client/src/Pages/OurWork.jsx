import React from 'react'
import Header from '../Components/Header.jsx'
import SimpleFooter from '../Components/SimpleFooter.jsx'

export default function OurWork() {
  return (
      <>
          <Header/>
          <section className='h-screen'>
              <div>
                  <h1>Our Work</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
                  <div>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
                  </div>
                  <div>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
                  </div>
                  <div>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
                  </div>
              </div>
      </section>
      <SimpleFooter/>
          
    </>
  )
}
