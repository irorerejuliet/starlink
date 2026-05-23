

import NavBar from "./Layouts/NavBar";
import HomeCards from "./HomeCards"
import { IoMdPlay } from "react-icons/io";

const HeaderPage = ({
  title = " HIGH-SPEED INTERNET AROUND THE WORLD",
  subtitle = "Connect at home or on the go",
}) => {
  return (
    <header className="py-7 bg-homeHeroImg bg-repeat bg-cover w-full md:px-0 px-5 bg-white relative">
      <NavBar />
      <div className="text-center text-white pt-36 space-y-5">
        <h2 className="md:text-6xl text-3xl font-bold leading-tight md:w-[708px] w-[310px] text-center m-auto font-Arimo">
          {title}
        </h2>
        <h4 className="text-xl font-normal">{subtitle}</h4>
        <div className="">
          <p className="text-sm font-bold gap-10 ">
            <a
              href="/videos/Starlink_Residential_Hero_Mini.webm"
              className="flex justify-center items-center gap-2"
            >
              WATCH NOW
              <IoMdPlay />
            </a>
          </p>
        </div>
      </div>
      <HomeCards />
    </header>
  );
};

export default HeaderPage;
