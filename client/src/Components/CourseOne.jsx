import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import computer from "/Images/computer.jpg";

export default function CourseOne(){
  return (
    <>
      <section className="bg-slate-900  items-start my-5 border-2 py-2 px-2" >
        <div className="w-full flex flex-col items-start  bg-slate-900 ">
          <div>
            <h1 className="text-xl md:text-4xl text-pink-500 my-10 font-bold">
              Our Free Courses
            </h1>
          </div>
          <div className="w-full flex  justify-between items-start">
            <h2 className=" text-base md:text-xl text-white font-bold">
              Web Development
            </h2>
            <button className="md:py-1 px-2  bg-pink-500 flex text-white rounded-lg font-semibold hover:bg-pink-400 text-sm md:text-base items-center justify-center">
              View All <FaArrowRight className="inline h-8 " width={10} /> 
            </button>
          </div>
        </div>
        
        {/* card list */}
        <section className="flex flex-wrap">

      <section className=" w-64 bg-slate-700 text-white hover:scale-105 duration-100 m-auto flex my-5 flex-row rounded-lg text-start border-2 py-2 px-2">
          <div>
            <div>
              <img src={computer} alt="" />
            </div>
            <div>
              <h1 className="font-bold  text-pink-500">Full Stack Web Development</h1>
              <span>
                <FaArrowRight className="inline"/>
              </span>
            </div>
            <div>
              <p>
                Job Ready | ticket to fast track career growth in web
                development
              </p>
            </div>
            <div>
              <h1>Register For free Courses</h1>
              <span> 20 May 2024</span>
            </div>
            <div className="w-full flex flex-row py-4 px-4 justify-between items-center">
              <button className="border-[1px] py-[4px] px-3 rounded  hover:bg-slate-800">Explore</button>
              <button className="border-[1px] py-[4px] px-3  rounded hover:bg-slate-800">Buy now</button>
            </div>
          </div>
        </section>

        {/* multi card list */}


        <section className=" w-64 bg-slate-700 text-white hover:scale-105 duration-100 m-auto flex my-5  md:flex-row rounded-lg text-start border-2 py-2 px-2">
          <div>
            <div>
              <img src={computer} alt="" />
            </div>
            <div>
              <h1 className="font-bold  text-pink-500">Frontend Web Development</h1>
              <span>
                <FaArrowRight className="inline"/>
              </span>
            </div>
            <div>
              <p>
                Job Ready | ticket to fast track career growth in web
                development
              </p>
            </div>
            <div>
              <h1>Register For free Courses</h1>
              <span> 20 May 2024</span>
            </div>
            <div className="w-full flex flex-row py-4 px-4 justify-between items-center">
              <button className="border-[1px] py-[4px] px-3 rounded  hover:bg-slate-800">Explore</button>
              <button className="border-[1px] py-[4px] px-3  rounded hover:bg-slate-800">Buy now</button>
            </div>
          </div>
        </section>





        <section className=" w-64 bg-slate-700 hover:scale-105 duration-100 text-white m-auto flex my-5  rounded-lg text-start border-2 py-2 px-2">
          <div>
            <div>
              <img src={computer} alt="" />
            </div>
            <div>
              <h1 className="font-bold  text-pink-500">Backend Web Development</h1>
              <span>
                <FaArrowRight className="inline"/>
              </span>
            </div>
            <div>
              <p>
                Job Ready | ticket to fast track career growth in web
                development
              </p>
            </div>
            <div>
              <h1>Register For free Courses</h1>
              <span> 20 May 2024</span>
            </div>
            <div className="w-full flex flex-row py-4 px-4 justify-between items-center">
              <button className="border-[1px] py-[4px] px-3 rounded  hover:bg-slate-800">Explore</button>
              <button className="border-[1px] py-[4px] px-3  rounded hover:bg-slate-800">Buy now</button>
            </div>
          </div>
        </section>




        <section className=" w-64 bg-slate-700 text-white hover:scale-105 duration-100 m-auto flex my-5  rounded-lg text-start border-2 py-2 px-2">
          <div>
            <div>
              <img src={computer} alt="" />
            </div>
            <div>
              <h1 className="font-bold  text-pink-500">MERN Stack Development</h1>
              <span>
                <FaArrowRight className="inline"/>
              </span>
            </div>
            <div>
              <p>
                Job Ready | ticket to fast track career growth in web
                development
              </p>
            </div>
            <div>
              <h1>Register For free Courses</h1>
              <span> 20 May 2024</span>
            </div>
            <div className="w-full flex flex-row py-4 px-4 justify-between items-center">
              <button className="border-[1px] py-[4px] px-3 rounded  hover:bg-slate-800">Explore</button>
              <button className="border-[1px] py-[4px] px-3  rounded hover:bg-slate-800">Buy now</button>
            </div>
          </div>
        </section>
        </section>

{/* ending multi card list */}

        

        </section>
    </>
  )
}
