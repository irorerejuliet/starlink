import React from 'react'
import NavBar from './Layouts/NavBar';

const RoamHeaderOne = () => {
  return (
    <header className="py-7 bg-roamHero md:bg-repeat bg-center bg-cover h-screen  w-full  md:px-0 px-5 relative">
      <NavBar />
      <div className="text-center m-auto pt-48 space-y-5  text-white relative ">
        <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[705px] w-[350px]  text-center m-auto font-Arimo">
          ROAM WITH STARLINK
        </h2>
        <p className="md:text-[1.563rem] text-lg font-normal text-center md:w-[554px] w-[350px] m-auto">
          Work and play at remote locations.
        </p>
        <div className="p-5 absolute md:left-[44%] -left-[6%] md:-bottom-[152%] -bottom-[155%]">
          <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] md:ml-3 md:mt-0 mb-32 md:w-[180px] w-[350px]">
            ORDER NOW
          </button>
        </div>
      </div>
      {/* <div className=" bg-gradient-to-t from-black to-black/10 from-50% via-0% to-500%  min-w-full h-60 absolute bottom-0"></div> */}
      {/* <div className=" bg-gradient-to-t from-black to-black/20 from-50% via-0% to-1900%  min-w-full h-20 absolute bottom-0"></div> */}
    </header>
  );
}

export default RoamHeaderOne
