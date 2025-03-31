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



const ResidentialPage = () => {

  return (
    <>
     
      <ResidentialHeader/>
       <StreamMovies/> 
        <NavBarTwo/>
        <HighSpeed/>
       <VideoSection/>
        <WeatherResilence/>
        <StandardBox/>
        <AccessoriesMount/>
        <DayTrial/>
        <Footer/>
    </>
  );
}

export default ResidentialPage
