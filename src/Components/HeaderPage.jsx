

import NavBar from "./Layouts/NavBar";
import HomeCards from "./HomeCards"
import { IoMdPlay } from "react-icons/io";

const HeaderPage = () => {
  return (
    <header className="py-7 bg-homeHeroImg bg-repeat bg-cover w-full  md:px-0 px-5 bg-white">
      <NavBar />
      <div className="text-center text-white pt-36 space-y-5">
        <h2 className="md:text-6xl text-3xl font-bold leading-tight md:w-[708px] w-[310px] text-center m-auto font-Arimo">
          HIGH-SPEED INTERNET AROUND THE WORLD
        </h2>
        <h4 className="text-xl font-normal">Connect at home or on the go.</h4>
        <div className="flex justify-center items-center gap-2">
          <p className="text-sm font-bold gap-10">
            <a href="/Videos/Starlink_What_Is_Starlink.mp4">WATCH NOW</a>
          </p>
          <IoMdPlay />
        </div>
      </div>
      <HomeCards />
    </header>
  );
};

export default HeaderPage;
