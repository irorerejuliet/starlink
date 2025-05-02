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
      <RoamHeaderTwo/>
      <WorkAndPlay />
      <PayAsYouGo />
      <StarlinkOnMotion />
      <StarlinkOnWater />
      <StandardBox />
      <AccessoriesMount />
      <DayTrialDown />
      <FooterSection />
    </>
  );
};

export default RoamPage;
