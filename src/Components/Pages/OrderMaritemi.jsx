import React from 'react'
import BusinessNav from '../Layouts/BusinessNav';
import { Link } from 'react-router-dom';
import LandMobilityHeaderTwo from '../Layouts/LandMobilityHeaderTwo';
import LandMobilityCarousel from '../LandMobilityCarousel';
import StayConnected from '../StayConnected';
import LandMobilityOperations from '../LandMobilityOperations';
import StandardBox from '../StandardBox';
import LandMobilityAccessories from '../LandMobilityAccessories';
import LandMobilityDayTrial from '../LandMobilityDayTrial';
import FooterSection from '../FooterSection';

const OrderMaritemi = () => {
  return (
    <>
      <>
        <header className="py-7 bg-maritimeHero md:bg-repeat bg-center bg-cover h-screen  w-full md:px-0 px-5 relative">
          <BusinessNav />
          <div className="text-center text-white pt-36 space-y-5">
            <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[879px] w-[310px]  text-center m-auto font-Arimo">
              STARLINK FOR BUSINESS
            </h2>
            <div className="md:w-[619px] w-[350px] text-center m-auto">
              <p className="text-[1.563rem] font-normal">
                Reliable high-speed internet for businesses. Starting at
                ₦159,000/mo with a hardware cost of ₦4,270,000.
              </p>
            </div>
          </div>

          <div className=" text-center py-10 text-white">
            <Link to="/StarlinkMockPayment" className="text-2xl font-bold">
              Connect with our team
            </Link>
            <span className="text-2xl font-light ml-2">or view our</span>
            <Link to="/BuyersGuide" className="text-2xl font-bold ml-2">
              buyer's guide
            </Link>
            <div className="mt-80">
              <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
                ORDER NOW
              </button>
            </div>
          </div>
        </header>
        <LandMobilityHeaderTwo />
        <LandMobilityCarousel />
        <section className=" bg-globalCoverage bg-cover bg-bottom w-full h-screen">
          <div className="md:mr-48  m-auto md:pt-[35%]  md:w-[510px] w-[350px] text-white">
            <p className="text-4xl font-bold">GLOBAL MARITIME COVERAGE</p>
            <p className="text-base font-normal pt-5">
              With the world's largest satellite constellation, Starlink
              provides connectivity on Earth's oceans and waterways, including
              coverage in international waters. See our FAQs to learn more
            </p>
          </div>
        </section>
        <section className="bg-earthimg bg-cover bg-repeat py-20 text-white">
          <div className="flex items-center w-[1460px] mx-auto gap-14">
            <div className="w-[510px]">
              <h3 className="text-[2.5rem] font-bold">
                PRIORITY NETWORK ACCESS ON THE WATER
              </h3>
              <p className="text-base font-semibold">
                Starlink for Maritime delivers faster speeds and network
                priority - meaning your data is prioritized whether at port or
                on open waters.
              </p>
            </div>
            <img
              src="/images/networkAccess.jpeg"
              alt="networkAccess"
              className="w-[710px]"
            />
          </div>
        </section>
        <section className=" bg-secureFleet bg-cover bg-bottom w-full h-screen">
          <div className="md:mr-48  m-auto md:pt-[35%]  md:w-[510px] w-[350px] text-white">
            <p className="text-4xl font-bold">GLOBAL MARITIME COVERAGE</p>
            <p className="text-base font-normal pt-5">
              With the world's largest satellite constellation, Starlink
              provides connectivity on Earth's oceans and waterways, including
              coverage in international waters. See our FAQs to learn more
            </p>
          </div>
        </section>
        
        <StandardBox />
        <LandMobilityAccessories />
        <LandMobilityDayTrial />
        <FooterSection />
      </>
    </>
  );
}

export default OrderMaritemi
