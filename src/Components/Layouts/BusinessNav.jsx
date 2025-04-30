
import { NavLink } from 'react-router-dom';

const BusinessNav = () => {
  return (
    <nav className=" container max-w-[1438px] mx-auto flex justify-between items-center">
      <div className="flex justify-between items-center gap-16 text-white">
        <h1 className="font-bold text-2xl tracking-[0.162em]">
          <NavLink to="/">STARLINK</NavLink>
        </h1>
        <div className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
          <NavLink to="/FixedPage">FIXED SITE</NavLink>
          <NavLink to="./roam.html">LAND MOBILITY</NavLink>
          <NavLink to="./roam.html">MARITIME</NavLink>
          <NavLink to="./roam.html">AVIATION</NavLink>
          <NavLink to="./roam.html">DIRECT TO CELL</NavLink>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8 text-white">
        <div className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
          <NavLink to="/">PERSONAL</NavLink>

          <NavLink to="/BusinessPage">BUSINESS</NavLink>
        </div>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </nav>
  );
}

export default BusinessNav
