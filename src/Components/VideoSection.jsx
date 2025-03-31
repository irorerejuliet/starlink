import React from 'react'

const VideoSection = () => {
  return (
    <section className="text-white md:px-0 px-5 bg-earthimg bg-fixed  md:bg-left bg-center bg-[auto_900px] bg-no-repeat bg-black py-28">
      <div className="md:flex flex-row justify-between items-center md:w-[80%] mx-auto space-y-10">
        <div className="relative">
          <img
            className="object-contain md:w-[700px] w-[350px] md:ml-12 m-auto"
            src="/images/routerInstall.jpeg"
            alt="routerInstall"
          />
          <div className="absolute md:top-64 top-[35%] md:left-[43%] left-[35%]">
            <a href="/Videos/Starlink_What_Is_Starlink.mp4">
              <img
                src="/images/downloadVideo.png"
                alt="downloadVideo"
                className="md:w-full w-[100px]"
              />
            </a>
            <a href="/Videos/Starlink_What_Is_Starlink.mp4"></a>
          </div>
        </div>

        <div className="md:w-[649px] w-[350px] md:space-y-5 md:mb-0 mb-0">
          <h4 className="md:text-4xl text-2xl font-bold">
            GET ONLINE IN MINUTES
          </h4>
          <p className="text-base font-normal">
            Set up Starlink with just two steps. Instructions work in either
            order:
          </p>
          <ol className="text-2xl font-bold py-5  list-decimal pl-5">
            <li className="pb-5">PLUG IT IN</li>
            <li>POINT AT SKY</li>
          </ol>
          <p className="text-base font-normal">
            Starlink requires an unobstructed view of the sky. Download the
            Starlink app to determine your best install location.
          </p>
          <div className="flex gap-10 md:pb-0 pb-44">
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
      </div>

      <div className="md:flex flex-row justify-center items-center gap-20 pb-20 md:px-0 px-5 md:pt-0 pt-5 md:mt-36 mt-5">
        <div className="md:w-[550px] w-[340px] md:space-y-8 space-y-4 md:mt-0 mt-60">
          <h4 className="font-bold text-[2.5rem]">NO CONTRACTS</h4>
          <p className="md:text-sm text-xs font-medium">
            Long term contracts prevent both you and Starlink from making
            sensible changes when necessary.
          </p>
          <p className="md:text-sm text-xs font-medium md:pb-0 pb-8">
            With Starlink, it is a fair deal both ways. Starlink can adjust
            terms and pricing as needed, and you can cancel at any time, for any
            reason.
          </p>
        </div>
        <div className="">
          <img
            className="w-[710px]"
            src="/images/noContracts.jpeg"
            alt="contract-img"
          />
        </div>
      </div>
    </section>
  );
}

export default VideoSection
