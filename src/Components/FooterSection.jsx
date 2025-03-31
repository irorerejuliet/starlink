import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-black text-white md:px-0 px-5">
      <div className="container w-full md:mx-auto m-auto md:flex flex-row md:justify-between justify-center">
        <div>
          <ul className="md:flex flex-row gap-3 items-center font-bold text-xs md:space-y-0 space-y-2">
              <NavLink to=""> Careers</NavLink>
              <NavLink to="">Satellite Operators</NavLink>
              <NavLink to="">Authorized Reseller</NavLink>
              <NavLink to="">Privacy & Legal</NavLink>
              <NavLink to="">Privacy Preferences</NavLink>
          </ul>
          <div className="md:flex flex-row gap-3 font-normal text-xs py-5 md:space-y-0 space-y-2">
            <p>Starlink © 2025</p>
            <p>Starlink is a division of SpaceX.</p>
            <p>Visit us at spacex.com</p>
          </div>
        </div>
        <div>
          <div className="md:flex flex-row justify-between items-center gap-2">
            <p className="font-bold text-xs">
              Interested in staying up to date with Starlink?
            </p>
            <span className="font-normal text-xs">Email</span>
            <span className="font-bold text-xs ml-44">SIGN UP</span>
          </div>
          <p className="font-bold text-xs text-center md:ml-60 m-auto py-5">
            By clicking Sign Up, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection
