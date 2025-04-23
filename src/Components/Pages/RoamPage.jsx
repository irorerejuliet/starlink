import DayTrial from "../DayTrial";
import FooterSection from "../FooterSection";
import Logo from "../Layouts/Logo";
import NavBar from "../Layouts/NavBar";
import { GiSelect } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import StandardBox from "../StandardBox";
import DayTrialDown from "../DayTrialDown";
import AccessoriesMount from "../AccessoriesMount";
import StarlinkOnWater from "../StarlinkOnWater";
import StarlinkOnMotion from "../StarlinkOnMotion";
import PayAsYouGo from "../PayAsYouGo";
import WorkAndPlay from "../WorkAndPlay";
import { NavLink } from "react-router-dom";
import RoamHeaderTwo from "../Layouts/RoamHeaderTwo";
import RoamHeaderOne from "../RoamHeaderOne";

const RoamPage = () => {
  return (
    <>
      <RoamHeaderOne/>

      {/* <!--   Second Header --> */}
      <RoamHeaderTwo/>
     

      {/* <!--WORK AND PLAY AT REMOTE LOCATIONS  --> */}

      <WorkAndPlay />
      {/* <!-- Pay as you go --> */}

      <PayAsYouGo />

      {/* <!-- USE STARLINK IN MOTION --> */}
      <StarlinkOnMotion />

      {/* <!-- starlink on water --> */}
      <StarlinkOnWater />

      {/* <!-- WHAT'S IN THE STANDARD BOX --> */}
      <StandardBox />
      {/* <Accessories/> */}
      <AccessoriesMount />
      <DayTrialDown />
      <FooterSection />
    </>
  );
};

export default RoamPage;
