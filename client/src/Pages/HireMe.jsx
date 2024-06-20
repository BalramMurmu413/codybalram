import React, { useState } from 'react';
import sample from '/Images/computer.jpg'

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const HireMe = () => {
  // useState
  const [toggleA , setToggleA] = useState(false)
  const [toggleB , setToggleB] = useState(false)
  // State to manage selected options
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Function to handle role selection
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  // Function to handle experience selection
  const handleExperienceChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  // Function to handle location selection
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <>
      <Header />
      <div className='bg-slate-900 border rounded-lg min-h-screen justify-around ' >
        <div  className='flex justify-around items-center flex-col min-h-screen '>
          <div className='my-10'>
            <h1 className='text-white text-2xl md:text-4xl font-bold'>Hire Me as Web Developer <span className='text-pink-500'>	&lt;&#8725;&gt; </span> </h1>
          <div className='my-10'>
            <p className='text-white text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatem quam voluptatibus, temporibus eos magnam!</p>
              
            </div>  
            :
            <div>
              <h1 onClick={()=> setToggleA(!toggleA)} className='text-white text-3xl py-3 px-4    cursor-pointer select-none bg-slate-600 '>Why You Hire me &darr;</h1>
              <ul className={`text-white flex flex-col   list-decimal items-start my-10 mx-10 
                
                ${toggleA
                  ? 'left-0 text-orange-400 hidden'
                  :'-left-100% text-red-400 '
                }  `}>
                <li className='text-start'>Passion: I am deeply passionate about web development and dedicated to staying updated on the latest trends and technologies to deliver forward-thinking solutions.</li>
                <li className='text-start'>Problem-Solving Skills: I thrive in challenging environments and excel at finding innovative solutions to overcome obstacles and achieve project goals.</li>
                <li className='text-start'>Adaptability: In the fast-paced world of web development, adaptability is crucial. I am adept at quickly learning new tools and technologies to meet project requirements.</li>
                <li className='text-start'>Team Player: Collaboration is at the heart of successful projects. I value teamwork and actively contribute to a positive and supportive work environment.</li>
              </ul>
            </div>
          </div> 
          <div>
          <div>
              <h1 className='text-white text-3xl py-3 px-4    cursor-pointer select-none bg-slate-600'onClick={()=> setToggleB(!toggleB)}>What I Bring to Your Team </h1>
              <ul className={`text-white flex flex-col   list-decimal items-start my-10 mx-10 
                
                ${toggleB
                  ? 'left-0 text-orange-400 hidden'
                  :'-left-100% text-red-400 '
                }  `}>
                <li className='text-start'>Passion: I am deeply passionate about web development and dedicated to staying updated on the latest trends and technologies to deliver forward-thinking solutions.</li>
                <li className='text-start'>Problem-Solving Skills: I thrive in challenging environments and excel at finding innovative solutions to overcome obstacles and achieve project goals.</li>
                <li className='text-start'>Adaptability: In the fast-paced world of web development, adaptability is crucial. I am adept at quickly learning new tools and technologies to meet project requirements.</li>
                <li className='text-start'>Team Player: Collaboration is at the heart of successful projects. I value teamwork and actively contribute to a positive and supportive work environment.</li>
              </ul>
            </div>
          </div>
          
        </div>

        </div>
       
      <div className='min-h-screen w-full flex  justify-center md:justify-around items-center bg-slate-900'>
        <div>
          <img src={sample} alt="" width={640} className=' hidden md:block rounded-lg shadow-lg' />
        </div>
        <div className="">
      <div className="bg-slate-800  p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl text-pink-500 font-bold mb-6">Hire Me</h1>

        <div className="mb-4">
          <label htmlFor="role" className="block text-pink-500 font-bold mb-2">Select Role:</label>
          <select
            id="role"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-pink-500"
            value={selectedRole}
              onChange={handleRoleChange}
              required
          >
            <option value="">-- Select Role --</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
                 
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-pink-500 font-bold mb-2">Select Experience:</label>
          <select
            id="experience"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={selectedExperience}
              onChange={handleExperienceChange}
              required
              
          >
            <option value="">-- Select Experience --</option>
            <option value="entry">Entry Level</option>
            <option value="intermediate">Intermediate Level</option>
                <option value="senior">Senior Level</option>
                
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-pink-500 font-bold mb-2">Select Location:</label>
          <select
            id="location"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={selectedLocation}
              onChange={handleLocationChange}
              required
              
          >
            <option value="">-- Select Location --</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
              </select>
              <input type="textarea" name="text-area" id="hire-me-custome-message " placeholder='Your Custom Message...' maxLength={50}  className='my-5
               w-full bg-transparent text-white  outline-none border-2 rounded-md
               ' />
               <span className='text-white mt-11 -ml-[368px] absolute'>max length 50 words</span>
              
        </div>

        <button onClick={() => {
                              alert("This feature is not in working please go to contact us page")
                          }} className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300">
          Submit
        </button>
      </div>
    </div>
    </div>
    <Footer/>

            </>
  );
};

export default HireMe;
