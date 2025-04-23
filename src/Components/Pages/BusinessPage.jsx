import React from 'react'
import FooterSection from '../FooterSection';
import DayTrialDown from '../DayTrialDown';
import { NavLink } from 'react-router-dom';

const BusinessPage = () => {
  return (
    <>
      <header className="py-7 bg-businessHero md:bg-repeat bg-center bg-cover h-screen  w-full md:px-0 px-5">
        <nav className=" container max-w-[1438px] mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-16 text-white">
            <h1 className="font-bold text-2xl tracking-[0.162em]">
              <a href="/index.html">STARLINK</a>
            </h1>
            <div className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
                <NavLink to="/FixedPage">FIXED SITE</NavLink>
                <NavLink to="./roam.html">LAND MOBILITY</NavLink>
                <NavLink to="./roam.html">MARITIME</NavLink>
                <NavLink to="./roam.html">AVIATION</NavLink>
                <NavLink to="./roam.html">DIRECT TO CELL</NavLink>
            </div>
          </div>
          <div className="flex justify-between items-center gap-8 text-white">
            <div className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
              
                <NavLink to="/">PERSONAL</NavLink>
              
                <NavLink to="/BusinessPage">BUSINESS</NavLink>
              
            </div>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
        <div className="text-center text-white pt-36 space-y-5">
          <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[879px] w-[310px]  text-center m-auto font-Arimo">
            {" "}
            STARLINK FOR BUSINESSES{" "}
          </h2>
          <div className="w-[619px] text-center m-auto">
            <p className="text-[1.563rem] font-normal">
              Reliable high-speed internet for businesses. Starting at
              ₦159,000/mo with a hardware cost of ₦4,270,000.
            </p>
          </div>
        </div>

        <div className=" text-center py-20 text-white">
          <h4 className="font-bold text-xm mr-[20%] py-2">Service Address</h4>
          <input
            className="font-bold text-xs py-4 pl-6 pr-40 rounded-[4px]  bg-[#ffffff26] border"
            type="TYPE AND SECLECT"
            placeholder="TYPE AND SECLECT"
          />
          <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
            ORDER NOW
          </button>
          <p className="font-bold text-xs py-8">
            <a href="">
              {" "}
              VIEW AVAILABILITY & SPEED MAPS
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </header>
      <main className="">
        {/* <!-- FixedSite & LandMobility --> */}
        <section className=" text-white md:px-0 px-5 bg-earthimg bg-fixed  py-14">
          <div className="flex justify-center items-center gap-64">
            <div className="text-center">
              <img
                src="/images/fast.jpeg"
                alt="fast"
                className="w-[100px] text-center m-auto"
              />
              <div>
                <h2 className="text-4xl font-bold py-8">FAST</h2>
                <p>40-220+ Mbps Download</p>
                <p>8-25+ Mbps Upload</p>
                <p>20-60 ms Latency</p>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/Anywhere.jpeg"
                alt="Anywhereimg"
                className="w-[100px] text-center m-auto"
              />
              <div>
                <h2 className="text-4xl font-bold py-8">ANYWHERE</h2>
                <p>Connect almost any site</p>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/Resilent.jpeg"
                alt="resilient"
                className="w-[100px] text-center m-auto"
              />
              <div>
                <h2 className="text-4xl font-bold py-8">RESILIENT</h2>
                <p>Improve business continuity</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 m-auto w-[1550px] gap-8 py-20">
            <div className="relative hover:translate-x-5 hover:translate-y-5 transition-all">
              <img
                src="/images/fixedsite.jpeg"
                alt="Fixed-site"
                className='w-[660px]'
              />
              <div className="absolute top-2 left-5">
                <h1 className="text-3xl font-bold">FIXED SITE</h1>
                <p className="text-[1.563rem] font-normal">
                  Connectivity For businesses
                </p>
              </div>
            </div>
            <div className="relative hover:translate-x-5 hover:translate-y-5 transition-all">
              <img src="/images/landMobility.jpeg" alt="Land-mobility" />
              <div className="absolute top-2 left-5">
                <h1 className="text-3xl font-bold">LAND MOBILITY</h1>
                <p className="text-[1.563rem] font-normal">
                  in-motion Connectivity of land
                </p>
              </div>
            </div>
            <div className="relative hover:translate-x-5 hover:translate-y-5 transition-all">
              <img src="/images/maritime.jpeg" alt="meritime" />
              <div className="absolute top-2 left-5">
                <h1 className="text-3xl font-bold">MARITIME</h1>
                <p className="text-[1.563rem] font-light">
                  Connectivity on water
                </p>
              </div>
            </div>
            <div className="relative hover:translate-x-5 hover:translate-y-5 transition-all">
              <img src="/images/aviation.jpeg" alt="" />
              <div className="absolute top-2 left-5">
                <h1 className="text-3xl font-bold">AVIATION</h1>
                <p className="text-[1.5rem] font-light">
                  Connectivity while in the air
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-center  m-auto">
              <h3 className="text-[3.188rem] font-bold">
                KEEP YOUR BUSINESS CONNECTED
              </h3>
              <p className="text-base font-medium w-[675px] text-center m-auto py-4">
                Connect employees across sites, monitor IoT devices, and backup
                your network, even in the most remote locations across the
                globe.
              </p>
            </div>
            <div className="flex justify-center items-center gap-40 py-40">
              <div className="space-y-10">
                <h4 className="md:text-4xl text-2xl font-bold">
                  EASY TO GET ONLINE
                </h4>
                <p className="text-base font-normal w-[510px]">
                  The Starlink Kit arrives with everything needed to get online
                  in minutes. All you need is a clear view of the sky.
                </p>
                <p className="text-base font-normal">
                  Download the Starlink App to determine your best install
                  location.
                </p>
                <div className="flex  gap-10 md:pb-0 pb-44">
                  <p className="text-[0.688rem] font-bold md:pt-0 pt-4">
                    <a href="">
                      DOWNLOAD FOR ANDRIOD
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </p>
                  <p className="text-[0.688rem] font-bold md:pt-0 pt-4">
                    <a href="">
                      DOWNLOAD FOR ANDRIOD
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
              <img src="/images/getOnline.jpeg" alt="getOnline" />
            </div>
            <div className="flex justify-center items-center gap-40 py-20">
              <img src="/images/prioritizedService.jpeg" alt="location" />
              <div className="space-y-10 w-[510px]">
                <h4 className="md:text-4xl text-2xl font-bold">
                  24/7 PRIORITIZED SERVICE
                </h4>
                <p className="text-base font-normal">
                  Priority Data customers are given network precedence and
                  receive consistently faster speeds.
                </p>
                <p className="text-base font-normal ">
                  Customers on Priority plans will also benefit from 24/7,
                  prioritized support and a publicly routable IPv4 address.
                </p>
                <p>
                  Download the Starlink App to determine your best install
                  location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Unlimited Service --> */}
        <section className="bg-unlimitedService bg-repeat bg-cover bg-bottom w-full h-screen">
          <div className="md:mr-48 m-auto md:pt-16 pt-8 md:w-[510px] w-[350px] text-white">
            <p className="text-4xl font-bold">ENGINEERED BY SPACEX</p>
            <p className=" text-base font-normal pt-5">
              As the world's leading provider of launch services – and the only
              provider with an orbital className reusable rocket – SpaceX has
              deep experience with both spacecraft and on-orbit operations.
            </p>
            <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white mt-5">
              LEARN MORE
            </button>
          </div>
        </section>

        {/* <!-- ENGINEERED BY SPACEX --> */}
        <section className="bg-bySpaceX bg-repeat bg-cover bg-bottom w-full h-screen">
          <div className="md:ml-48 m-auto md:pt-16 pt-8 md:w-[510px] w-[350px] text-white">
            <p className="text-4xl font-bold">ENGINEERED BY SPACEX</p>
            <p className=" text-base font-normal pt-5">
              As the world's leading provider of launch services – and the only
              provider with an orbital className reusable rocket – SpaceX has
              deep experience with both spacecraft and on-orbit operations.
            </p>
            <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white mt-5">
              LEARN MORE
            </button>
          </div>
        </section>

        {/* <!-- 30 DAY TRIAL --> */}
       <DayTrialDown/>
      </main>
     <FooterSection/>
    </>
  );
}

export default BusinessPage
