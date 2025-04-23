import React from 'react'

const StarlinkOnWater = () => {
  return (
     <section className="bg-black text-white">
        <div className="md:flex flex-row  items-center">
          <img
            className="w-[950px]"
            src="/images/starlinkOnWater.jpeg"
            alt="Starlink-ship"
          />
          <div className="py-40  md:w-[510px] w-[300px] m-auto">
            <h4 className="font-bold md:text-[2.5rem] text-2xl">
              STARLINK ON TH WATER
            </h4>
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
        <div className="md:flex flex-row justify-between  items-center">
          <div className="md:w-[649px] w-[350px] md:space-y-5 md:mb-0 mb-60 md:pl-40 mx-auto">
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
              <p className="md:text-[0.688rem] text-[0.626rem] font-bold md:pt-0 pt-4">
                <a href="">
                  DOWNLOAD FOR ANDRIOD
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </p>
              <p className="md:text-[0.688rem] text-[0.626rem] font-bold md:pt-0 pt-4">
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
  )
}

export default StarlinkOnWater
