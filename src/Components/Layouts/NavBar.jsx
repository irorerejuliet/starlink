import { MdMenu } from "react-icons/md";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };
  return (
    <>
      <nav className="container max-w-[1438px] mx-auto flex items-center justify-between text-base font-medium text-white font-Roboto gap-6">
        <div className="flex items-center gap-24">
          <Logo />
          <div className="text-white flex gap-6">
            <NavLink to="ResidentialPage">PRESIDENTAIL</NavLink>
            <NavLink to="/RoamPage">ROAM</NavLink>
          </div>
        </div>
        <div className="md:flex hidden justify-between items-center gap-8 text-white">
          <NavLink to="/">PERSONAL</NavLink>
          <NavLink to="/BusinessPage">BUSINESS</NavLink>
          <button>
            <MdMenu onClick={toggleMenu} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <nav className="fixed inset-0 z-40 h-full w-full bg-black text-white space-y-4">
          <div className="flex-wrap">
            <NavLink to="/">PRESIDENTAIL</NavLink>
            <NavLink to="/RoamPage">ROAM</NavLink>
            <NavLink to="/">PERSONAL</NavLink>
            <NavLink to="/BusinessPage">BUSINESS</NavLink>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;

