import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container px-4 md:px-6 max-w-[1438px] mx-auto flex items-center justify-between py-4 text-base font-medium text-white font-Roboto">
        {/* Logo and left nav */}
        <div className="flex items-center gap-6">
          <Logo logoStyle={"w-[130px]"}/>
          <div className="hidden md:flex gap-6">
            <NavLink to="/ResidentialPage">PRESIDENTAIL</NavLink>
            <NavLink to="/RoamPage">ROAM</NavLink>
          </div>
        </div>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/">PERSONAL</NavLink>
          <NavLink to="/BusinessPage">BUSINESS</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden" onClick={toggleMenu}>
          <MdMenu fontSize={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 text-white p-6">
          <div className="flex items-center justify-between mb-6">
            <Logo logoStyle={"w-[130px]"}/>
            <button onClick={toggleMenu}>
              <FaTimes fontSize={28} />
            </button>
          </div>
          <ul className="space-y-4 text-lg font-semibold">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ResidentialPage" onClick={toggleMenu}>
                Residential
              </NavLink>
            </li>
            <li>
              <NavLink to="/RoamPage" onClick={toggleMenu}>
                Roam
              </NavLink>
            </li>
            <li>
              <NavLink to="/BusinessPage" onClick={toggleMenu}>
                Business
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
