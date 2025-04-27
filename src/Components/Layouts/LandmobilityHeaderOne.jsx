import React from 'react'
import { Link } from 'react-router-dom';
import BusinessNav from './BusinessNav';

const LandmobilityHeaderOne = () => {
  return (
    <header className="py-7 bg-landMobilityHero md:bg-repeat bg-center bg-cover h-screen  w-full md:px-0 px-5 relative">
      <BusinessNav />
      <div className="text-center text-white pt-36 space-y-5">
        <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[879px] w-[310px]  text-center m-auto font-Arimo">
          STARLINK FOR BUSINESS
        </h2>
        <div className="md:w-[619px] w-[350px] text-center m-auto">
          <p className="text-[1.563rem] font-normal">
            Reliable high-speed internet for businesses. Starting at ₦159,000/mo
            with a hardware cost of ₦4,270,000.
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
  );
}

export default LandmobilityHeaderOne
