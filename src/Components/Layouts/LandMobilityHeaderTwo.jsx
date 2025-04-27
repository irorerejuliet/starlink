import React from 'react'
import { NavLink } from 'react-router-dom';

const LandMobilityHeaderTwo = () => {
  return (
    <header className="bg-[#1A1A1A]  text-white p-10 items-center md:block hidden">
      <nav className="container max-w-[1196px] mx-auto flex justify-between items-center">
        <h2 className="font-bold text-[1.75rem]">LAND MOBILITY</h2>
        <div className="flex gap-8">
          <div className="flex justify-between gap-8 font-medium text-base">
            <NavLink to="">SERVICE PLANS</NavLink>
            <NavLink to="">SPECIFICATIONS</NavLink>
            <NavLink to="">FAQs</NavLink>
          </div>
          <button className="font-bold text-[0.563rem] bg-white  text-black py-2 px-4 rounded-[4px]">
            ORDER NOW
          </button>
        </div>
      </nav>
    </header>
  );
}

export default LandMobilityHeaderTwo
