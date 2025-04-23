import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { GiSelect } from "react-icons/gi";
import NavBar from "./Layouts/NavBar";

const ResidentialHeader = () => {
  return (
    <header className="py-7 bg-residentialHero bg-repeat bg-cover  w-full md:px-0 px-5">
      <NavBar />
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
        <div className="md:flex flex-row justify-center items-center">
          <input
            className="font-bold text-xs py-4 pl-6 pr-40 rounded-[4px]  bg-[#ffffff26] border"
            type="TYPE AND SECLECT"
            placeholder="TYPE AND SECLECT"
          />
          <GiSelect className=" text-white text-3xl absolute md:right-[46%] right-[10%] md:top-32 top-32" />
          <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] md:ml-3 md:mt-0 mt-5">
            ORDER NOW
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          <p className="font-bold text-xs py-8">
            VIEW AVAILABILITY & SPEED MAPS
          </p>
          <Link to="/MapPage">
            <IoIosArrowForward className="font-bold text-lg" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ResidentialHeader;
