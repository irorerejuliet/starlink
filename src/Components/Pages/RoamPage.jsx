import { Accessories } from "../Constant/Accessories";
import DayTrial from "../DayTrial";
import FooterSection from "../FooterSection";
import Logo from "../Layouts/Logo";

const RoamPage = () => {
  return (
    <>
      <header className="py-7 bg-roamHero md:bg-repeat md:bg-cover h-screen  md:w-full md:px-0 px-5  border border-red-800 relative">
        <nav className=" container max-w-[1438px] mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-16 text-white">
            <Logo />
            <ul className="md:flex hidden justify-center gap-4 text-base font-medium text-white font-Roboto">
              <li>
                <a href="/ResidentialPage">PRESIDENTAIL</a>
              </li>
              <li>
                <a href="/">ROAM</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-8 text-white ">
            <ul className="md:flex hidden justify-center items-center gap-8 text-base font-medium text-white font-Roboto">
              <li>
                <a href="/">PERSONAL</a>
              </li>
              <li>
                <a href="/BusinessPage">BUSINESS</a>
              </li>
            </ul>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
        <div className="text-center m-auto pt-48 space-y-5  text-white relative ">
          <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[705px] w-[310px]  text-center m-auto font-Arimo">
            ROAM WITH STARLINK
          </h2>
          <p className="md:text-[1.563rem] text-lg font-normal text-center md:w-[554px] w-[310px] m-auto">
            Work and play at remote locations.
          </p>
          <div className="p-5 absolute md:left-[44%] md:-bottom-[152%]  border border-red-800">
            <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
              ORDER NOW
            </button>
          </div>
        </div>
        <div className=" bg-gradient-to-t from-black to-black/10 from-30% via-0% to-1500%  min-w-full h-20 absolute bottom-0"></div>
      </header>
      {/* <!-- bg-gradient-to-tr from-black to-black -->
        <!-- <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div> -->
     */}
        {/* <!--   HIGH-SPEED INTERNET NO MATTER HOW REMOTE --> */}
        <section className="md:block hidden">
          <header className="bg-[#1A1A1A]  text-white p-10 items-center">
            <nav className="container max-w-[1196px] mx-auto flex justify-between items-center">
              <h2 className="font-bold text-[1.75rem]">Roam</h2>
              <div className="flex gap-8">
                <ul className="flex justify-between gap-8 font-medium text-base">
                  <li>
                    <a href="">SERVICE PLANS</a>
                  </li>
                  <li>
                    <a href="">SPECIFICATIONS</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                </ul>
                <button className="font-bold text-[0.563rem] bg-white  text-black py-2 px-4 rounded-[4px]">
                  ORDER NOW
                </button>
              </div>
            </nav>
          </header>
        </section>

        {/* <!--WORK AND PLAY AT REMOTE LOCATIONS  --> */}
        <section className="bg-workPlay bg-repeat bg-cover w-full h-screen  py-32">
          <div className="md:mr-48 m-auto  md:w-[510px] w-[330px] text-white">
            <h3 className="md:text-4xl text-2xl font-bold">
              WORK AND PLAY AT REMOTE LOCATIONS
            </h3>
            <p className=" md:text-base text-sm font-normal pt-5">
              Starlink offers high-speed internet almost anywhere across the
              world. Roam allows for travel anywhere in your country and
              international trips in live Starlink markets.
            </p>
            <p className=" md:text-base text-sm font-normal pt-5">
              Starlink connects within minutes and packs up quickly when it's
              time to move to your next destination.
            </p>
          </div>
        </section>

        {/* <!-- Pay as you go --> */}

        <section className="bg-black text-white bg-roamEarth1 bg-fixed bg-center ">
          <div className="text-center py-40 md:w-[800px]  m-auto">
            <h4 className="font-bold md:text-[3.188rem] text-3xl">Pay as you go</h4>
            <p className="font-normal md:text-[1.563rem] text-sx">
              Pause and un-pause service at any time. Billing is in one-month
              increments, allowing you to customize your service to your
              individual travel needs.
            </p>
          </div>
        </section>

        {/* <!-- USE STARLINK IN MOTION --> */}
        <section className="bg-starlinkOnMotion md:bg-repeat bg-cover w-full bg-center h-screen  py-32">
          <div className="md:ml-48 m-auto  md:w-[510px] w-[330px] text-white">
            <h3 className="md:text-4xl text-2xl font-bold">
              USE STARLINK IN MOTION
            </h3>
            <p className=" md:text-base text-sm font-normal pt-5">
              In-motion use up to 100 mph (160 kmph) is supported with all of
              our Roam service plans. See our FAQ to learn more.
            </p>
          </div>
        </section>

        {/* <!-- starlink on water --> */}
        <section className="bg-black text-white">
          <div className="flex  items-center">
            <img
              className="w-[950px]"
              src="/images/starlinkOnWater.jpeg"
              alt="Starlink-ship"
            />
            <div className="py-40  md:w-[510px] w-[300px] m-auto">
              <h4 className="font-bold text-[2.5rem]">STARLINK ON TH WATER</h4>
              <p className=" md:text-base text-sm font-normal pt-5">
                Get high speed internet for your boat on inland and territorial
                waters with Starlink Roam.
              </p>
              <p className=" md:text-base text-sm font-normal pt-5">
                For use in international waters and ocean travel, see Starlink
                Maritime for service plans that support your needs.
              </p>
              <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white mt-5">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex justify-between  items-center">
            <div className="md:w-[649px] w-[350px] md:space-y-5 md:mb-0 mb-60 pl-40">
              <h4 className="md:text-4xl text-2xl font-bold">
                GET ONLINE IN MINUTES
              </h4>
              <p className="text-base font-normal">
                Set up Starlink with just two steps. Instructions work in either
                order:
              </p>
              <ol className=" text-2xl font-bold py-5">
                <li className="pb-5">PLUG IT IN</li>
                <li>POINT AT SKY</li>
              </ol>
              <p className="text-base font-normal">
                Starlink requires an unobstructed view of the sky. Download the
                Starlink app to determine your best install location.
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
            <img
              className="w-[950px]"
              src="/images/onlineMinute.jpeg"
              alt="roam_install"
            />
          </div>
        </section>

        {/* <!-- WHAT'S IN THE STANDARD BOX --> */}
        <section className="bg-standardBose bg-cover bg-center  w-full h-screen md:mb-0 -mb-96">
          <div className="md:ml-48 m-auto  md:w-[500px] w-[330px] md:pt-28 text-white">
            <h3 className="md:text-[3.188rem] pt-5 leading-snug text-2xl font-bold">
              WHAT'S IN THE STANDARD BOX
            </h3>
            <p className="py-8">
              The Starlink Kit arrives with everything you need to get online in
              minutes.
            </p>
            <p className="text-[0.688rem] font-bold md:pt-0 pt-4">
              <a href="">
                VIEW SPECIFICATIONS
                <i className="fa fa-angle-right ml-3" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div className="md:flex flex-row justify-center pt-24 text-white">
            <div className="text-center">
              <img className="" src="/images/Starlink.webp" alt="Starlink" />
              <span className="text-[1.375rem] font-normal pt-24">
                STARLINK
              </span>
            </div>
            <div className="text-center ">
              <img src="/images/Base.png" alt="Base" />
              <span className="text-[1.375rem] font-normal pt-24">BASE</span>
            </div>
            <div className="text-center">
              <img src="/images/Router.png" alt="Router" />
              <span className="text-[1.375rem] font-normal pt-24">ROUTER</span>
            </div>
            <div className="text-center">
              <img src="/images/StarlinkCable.png" alt="Starlink-cable" />
              <span className="text-[1.375rem] font-normal pt-24">
                STARLINK CABLE
              </span>
            </div>
            <div className="text-center">
              <img src="/images/Ac-Cable.png" alt="AC-cable" />
              <span className="text-[1.375rem] font-normal pt-24">
                AC CABLE
              </span>
            </div>
          </div>
        </section>
       <Accessories/>
      <DayTrial/>
      <FooterSection/>
       
    
    </>
  );
}

export default RoamPage
