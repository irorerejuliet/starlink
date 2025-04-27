import React from 'react'

const LandMobilityOperations = () => {
  return (
    <section className=" text-white md:px-0 px-5 bg-earthimg bg-fixed ">
      <div className="flex gap-44 items-center">
        <img src="/images/fastAndSecure.jpeg" alt="" className="w-[910px]" />
        <div className="w-[510px]">
          <p className="text-4xl font-bold">
            FAST AND SECURE FOR REMOTE OPERATIONS
          </p>
          <p className="text-sm font-normal pt-5">
            Operate seamlessly anywhere, at any time. Starlink protects your
            data and confidentiality of user traffic with end-to-end encryption.
          </p>
        </div>
      </div>
      <section className=" bg-designedHarsh bg-cover bg-bottom w-full h-screen">
        <div className="md:ml-48 m-auto md:pt-[33%]  md:w-[510px] w-[350px] text-white">
          <p className="text-4xl font-bold">DESIGNED FOR HARSH ENVIRONMENTS</p>
          <p className="text-sm font-normal pt-5">
            Starlink is designed for permanent installation on your vehicle and
            can withstand extreme cold, heat, sleet, heavy rain, and hurricane
            winds.
          </p>
        </div>
      </section>
      <div className="md:flex flex-row justify-center items-center gap-10  mt-10">
        <div className="text-center mr-20">
          <img
            src="/images/fast.jpeg"
            alt="fast"
            className="md:w-[100px] w-[50px] text-center m-auto"
          />
          <div>
            <h2 className="md:text-4xl text-2xl font-bold py-8">FAST</h2>
            <p>40-220+ Mbps Download</p>
            <p>8-25+ Mbps Upload</p>
            <p>20-60 ms Latency</p>
          </div>
        </div>
        <div className="text-center md:border-l-4 border-l-0 md:pl-28 md:pr-0 pr-16 pt-10">
          <img
            src="/images/Anywhere.jpeg"
            alt="Anywhereimg"
            className="md:w-[100px] w-[50px] text-center m-auto"
          />
          <div>
            <h2 className="md:text-4xl text-2xl font-bold py-8">ANYWHERE</h2>
            <p>Connect almost any site</p>
          </div>
        </div>
        <div className="text-center md:border-l-2 border-l-0 md:pl-28 pt-10">
          <img
            src="/images/Resilent.jpeg"
            alt="resilient"
            className="md:w-[100px] w-[50px] text-center m-auto"
          />
          <div>
            <h2 className="md:text-4xl text-2xl font-bold py-8">RESILIENT</h2>
            <p>Improve business continuity</p>
          </div>
        </div>
      </div>
      <div className="md:flex flex-row justify-center items-center gap-40 py-40">
        <div className="space-y-10">
          <h4 className="md:text-4xl text-2xl font-bold">EASY TO GET ONLINE</h4>
          <p className="md:text-base text-sm font-normal md:w-[510px] w-[350px]">
            The Starlink Kit arrives with everything needed to get online in
            minutes. All you need is a clear view of the sky.
          </p>
          <p className="text-base font-normal">
            Download the Starlink App to determine your best install location.
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
    </section>
  );
}

export default LandMobilityOperations
