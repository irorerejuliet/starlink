import { Link, NavLink } from 'react-router-dom'
import BusinessNav from '../Layouts/BusinessNav'
import FooterSection from '../FooterSection';
import { Accessories } from '../Constant/Accessories';
import StandardBox from '../StandardBox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import LandMobilityCarousel from '../LandMobilityCarousel';
import LandmobilityHeaderOne from '../Layouts/LandmobilityHeaderOne';
import LandMobilityTwo from '../Layouts/LandMobilityHeaderTwo';
import LandMobilityHeaderTwo from '../Layouts/LandMobilityHeaderTwo';
import StayConnected from '../StayConnected';
import LandMobilityOperations from '../LandMobilityOperations';
import LandMobilityAccessories from '../LandMobilityAccessories';
import LandMobilityDayTrial from '../LandMobilityDayTrial';

const OrderMobility = () => {
  
  
  return (
    <>
      <LandmobilityHeaderOne />
      <LandMobilityHeaderTwo />
      <LandMobilityCarousel/>
      <StayConnected/>
      <LandMobilityOperations/>
      <StandardBox />
      <LandMobilityAccessories/>
     <LandMobilityDayTrial/>
      <FooterSection />
    </>
  );
}

export default OrderMobility
