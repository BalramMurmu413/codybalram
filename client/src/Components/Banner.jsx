import { ReactTyped } from "react-typed";
import React from "react";
import { Link } from "react-router-dom";



function Banner() {
  return (
    <div className=" w-full   flex flex-col  items-center my-10 bg-slate-800   "   >
      <div>
        <h1 className=" text-2xl md:text-8xl font-bold text-white ">
        Bring Your Ideas to Life
        </h1 >
        <h1 className="text-white text-sm my-5 font-semibold">From Research to Design to Development, We Bring <br />
          Your Vision to Life</h1>
          <Link to='/maintanancePage'>
        <button className=" py-2 px-5 mb-2 hover:bg-slate-800 bg-slate-900 text-white rounded-full md:border-2">Let's Talk</button>
                        </Link>
        </div>
      <div className="md:my-5">
        <ReactTyped  className="sm:text-xl md:text-4xl  font-bold text-[#fff] "
      
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
      </div>
        



</div>


  )
}
export default Banner;