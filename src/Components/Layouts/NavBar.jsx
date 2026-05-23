import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="container px-4 md:px-6 max-w-[1438px] mx-auto flex items-center justify-between py-4 text-base font-medium text-white font-Roboto">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <Logo logoStyle={"w-[130px]"} />

          <div className="hidden md:flex gap-6">
            <NavLink to="/ResidentialPage">RESIDENTIAL</NavLink>
            <NavLink to="/RoamPage">ROAM</NavLink>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/">PERSONAL</NavLink>
          <NavLink to="/BusinessPage">BUSINESS</NavLink>

          {/* MENU BUTTON */}
          <button onClick={() => setIsOpen(true)}>
            <MdMenu fontSize={28} />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="block md:hidden" onClick={() => setIsOpen(true)}>
          <MdMenu fontSize={28} className="text-white" />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* SIDEBAR */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-[300px] overflow-y-auto bg-black text-white p-6 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between mb-10">
            <Logo logoStyle={"w-[120px]"} />

            <button onClick={() => setIsOpen(false)}>
              <FaTimes fontSize={26} />
            </button>
          </div>

          {/* LINKS */}
          <div className="mt-10">
            {/* TOP TABS */}
            <div className="flex items-center gap-5 text-[17px] font-bold border-b border-gray-800 pb-4">
              <NavLink className="border-b-2 border-white pb-1">
                Personal
              </NavLink>

              <NavLink>Business</NavLink>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col text-[18px] font-semibold">
              <NavLink
                to="/ResidentialPage"
                onClick={() => setIsOpen(false)}
                className="py-5 border-b border-gray-800"
              >
                Residential
              </NavLink>

              <NavLink
                to="/RoamPage"
                onClick={() => setIsOpen(false)}
                className="py-5 border-b border-gray-800"
              >
                Roam
              </NavLink>

              <div className="py-5 border-b border-gray-800 flex items-center gap-2">
                NG 🌐
              </div>

              <NavLink className="py-5 border-b border-gray-800">
                Sign In
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Help Center
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Availability Map
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Specifications
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Service Plans
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Video Guides
              </NavLink>

              <NavLink className="py-5 border-b border-gray-800">
                Technology
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
