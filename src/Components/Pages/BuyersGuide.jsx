
import { LuWatch } from "react-icons/lu";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import BuyerGuideNav from '../Layouts/BuyerGuideNav';
import { JumbtoSectionData } from "../Constant/JumptoSectionData";
import BuyStarlinkInstallation from "../BuyStarlinkInstallation";
import AboutStarlinkAndGude from "../AboutStarlinkAndGude";

const BuyersGuide = () => {
  return (
    <>
      <BuyerGuideNav />
      <BuyStarlinkInstallation/>
    </>
  );
}

export default BuyersGuide
