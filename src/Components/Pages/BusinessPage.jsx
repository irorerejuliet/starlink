import React from 'react'
import FooterSection from '../FooterSection';
import DayTrialDown from '../DayTrialDown';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { GiSelect } from 'react-icons/gi';
import EngineeredByspaceX from '../EngineeredByspaceX';
import UnlimitedService from '../UnlimitedService';
import FixedSiteMobility from '../FixedSiteMobility';
import BusinessHeader from '../Layouts/BusinessHeader';

const BusinessPage = () => {
  return (
    <>
    <BusinessHeader/>
      <main className="">
       <FixedSiteMobility/>
      <UnlimitedService/>
       <EngineeredByspaceX/>
        <DayTrialDown />
      </main>
      <FooterSection />
    </>
  );
}

export default BusinessPage
