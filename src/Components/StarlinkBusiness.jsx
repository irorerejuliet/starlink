import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const StarlinkBusiness = () => {
  return (
    <div className="text-center bg-black text-white py-40">
      <h2 className="font-bold md:text-5xl text-2xl">
        STARLINK FOR BUSINESSES AND POWER USERS
      </h2>
      <div className="md:flex flex-row justify-center items-center gap-4 pt-5">
        <p className="font-light md:text-xl text-lg">
          Reliable high-speed internet designed to keep businesses connected.
        </p>
        <div className="flex  items-center gap-2">
          <p className="font-bold text-sm md:ml-0 ml-36 py-2">LEARN MORE</p>
          <NavLink to="">
            <IoIosArrowForward />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StarlinkBusiness;
