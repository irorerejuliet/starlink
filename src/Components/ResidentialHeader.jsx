import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { GiSelect } from "react-icons/gi";

const ResidentialHeader = () => {
  return (
    <header className="py-7 bg-residentialHero bg-repeat bg-cover  w-full md:px-0 px-5">
      <nav className=" container max-w-[1438px] mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-16 text-white">
          <h1 className="font-bold text-2xl tracking-[0.162em]">
            <a href="/">STARLINK</a>
          </h1>
          <ul className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
            <li>
              <a href="/">PRESIDENTAIL</a>
            </li>
            <li>
              <a href="/roamPage">ROAM</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-8 text-white">
          <ul className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
            <li>
              <a href="/">PERSONAL</a>
            </li>
            <li>
              <a href="/BusinessPage">BUSINESS</a>
            </li>
          </ul>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </nav>
      <div className="text-center m-auto pt-48 space-y-5  text-white ">
        <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[705px] w-[310px]  text-center m-auto font-Arimo">
          STARLINK FOR HOMES
        </h2>
        <p className="md:text-[1.563rem] text-lg font-normal text-center md:w-[554px] w-[310px] m-auto">
          Reliable high-speed internet, wherever you live. ₦75,000 per month,
          with a hardware cost of ₦590,000.
        </p>
      </div>
      <div className=" text-center py-20 text-white relative">
        <h4 className="font-bold text-xm mr-[20%] py-2">Service Address</h4>
        <div className="flex justify-center items-center">
          <input
            className="font-bold text-xs py-4 pl-6 pr-40 rounded-[4px]  bg-[#ffffff26] border"
            type="TYPE AND SECLECT"
            placeholder="TYPE AND SECLECT"
          />
          <GiSelect  className=" text-white text-3xl absolute"/>
          <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
            ORDER NOW
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          <p className="font-bold text-xs py-8">
            VIEW AVAILABILITY & SPEED MAPS
          </p>
          <NavLink href="/">
            <IoIosArrowForward className="font-bold text-lg" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default ResidentialHeader;
