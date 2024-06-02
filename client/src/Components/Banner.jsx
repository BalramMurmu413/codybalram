import { ReactTyped } from "react-typed";
import React from "react";
function Banner() {
  return (
    <div className=" w-full  flex flex-col items-center py-20 bg-slate-800  "  >
      <div>
        <h1 className=" text-sm md:text-8xl font-bold text-white ">
        Bring Your Ideas to Life
        </h1 >
        <h1 className="text-white my-5 font-bold">From Research to Design to Development, We Bring <br />
          Your Vision to Life</h1>
        <button className="my-2 mx-4 md:py-3 md:px-5 bg-blue-900 text-white rounded-full md:border-2">Let's Talk</button>
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