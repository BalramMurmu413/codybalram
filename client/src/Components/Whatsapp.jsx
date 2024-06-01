import React from 'react'
import whatsapp from '/Images/whatsapp.jpg'





export default function Whatsapp() {
  return (
      <>
          <div className='fixed bottom-10 right-10 '>
        <div>
            
                  <img src={whatsapp} alt="" /* width={30} md:width={60} */ className=' rounded-full w-10 md:w-16' />
          
              </div>
          </div>
      
    </>
  )
}
