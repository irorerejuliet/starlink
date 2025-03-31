import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBarTwo = () => {
  return (
      <header className="bg-[#212121CC]  text-white p-6 ">
        <nav className="container max-w-[1196px] mx-auto flex justify-between items-center">
          <h2 className="font-bold text-[1.75rem]">PRESIDENTAIL</h2>
          <div className="flex gap-8">
            <menu className="flex justify-between gap-8 font-medium text-base">
                <NavLink to="">SERVICE PLANS</NavLink>
                <NavLink to="">SPECIFICATIONS</NavLink>
                <NavLink to="">FAQs</NavLink>
            </menu>
            <button className="font-bold text-[0.563rem] bg-white  text-black py-2 px-4 rounded-[4px]">
              ORDER NOW
            </button>
          </div>
        </nav>
      </header>
  );
}

export default NavBarTwo
