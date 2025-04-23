import React from 'react'
import ResidentialHeader from "../ResidentialHeader"
import StreamMovies from '../StreamMovies';
import NavBarTwo from '../Layouts/NavBarTwo';
import HighSpeed from '../HighSpeed';
import VideoSection from '../VideoSection';
import WeatherResilence from '../WeatherResilence';
import StandardBox from '../StandardBox';
import AccessoriesMount from '../AccessoriesMount';
import DayTrial from '../DayTrial';
import Footer  from '../FooterSection';
import { IoIosArrowForward } from 'react-icons/io';
import { GiSelect } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import DayTrialDown from '../DayTrialDown';



const ResidentialPage = () => {

  return (
    <>
      <ResidentialHeader />
      <StreamMovies />
      <NavBarTwo />
      <HighSpeed />
      <VideoSection />
      <WeatherResilence />
      <StandardBox />
      <AccessoriesMount />
      <DayTrialDown />
      <Footer />
    </>
  );
}

export default ResidentialPage
