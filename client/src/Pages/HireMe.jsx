import React, { useState } from 'react';
import sample from '/Images/computer.jpg'

import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

const HireMe = () => {
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
    <Header/>
      <div className='min-h-screen w-full flex justify-center md:justify-around items-center bg-slate-900'>
        <div>
          <img src={sample} alt="" width={640} className=' hidden md:block rounded-lg shadow-lg' />
        </div>
        <div className="">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
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
        </div>

        <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300">
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
