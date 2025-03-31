import React, { useState } from "react";
import Logo from "./Logo";
import {MdMenu} from "react-icons/md";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container max-w-[1438px] mx-auto flex justify-between items-center">
      <div className="flex justify-between items-center gap-16 text-white">
        <Logo />
        <menu className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
          <NavLink to="/ResidentialPage">RESIDENTAIL</NavLink>
          <NavLink to="/RoamPage">ROAM</NavLink>
        </menu>
      </div>
      <div className="flex justify-between items-center gap-8 text-white">
        <menu className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
          <NavLink to="/">PERSONAL</NavLink>
          <NavLink to="/BusinessPage">BUSINESS</NavLink>
        </menu>
        <MdMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hi"
        />
        <div
          className={`absolute xl:hidden top-16  left-0 bg-black text-white
           flex flex-col w-full h-96 items-center gap-6 font-semibold text-lg transform  
           transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul className="list-none w-full text-center p-4 ">
              <NavLink to="/">PRESIDENTAIL</NavLink> 
              <NavLink to="/RoamPage">ROAM</NavLink>
              <NavLink to="/">PERSONAL</NavLink> 
              <NavLink to="/BusinessPage">BUSINESS</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
