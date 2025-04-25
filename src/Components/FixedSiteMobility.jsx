import React from 'react'

const FixedSiteMobility = () => {
  return (
    <section className=" text-white md:px-0 px-5 bg-earthimg bg-fixed  py-14">
      <div className="md:flex flex-row justify-center items-center gap-10  mt-60">
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

      <div className="grid md:grid-cols-2 grid-cols-1 m-auto max-w-[1550px] gap-2 py-20 gap-y-10">
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/fixedsite.jpeg"
            alt="Fixed-site"
            className="md:w-[660px] w-[320px]"
          />
          <div className="absolute top-2 left-5">
            <h1 className="text-3xl font-bold">FIXED SITE</h1>
            <p className="md:text-[1.563rem] text-xl font-normal">
              Connectivity For businesses
            </p>
          </div>
        </div>
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/landMobility.jpeg"
            alt="Land-mobility"
            className="md:w-[660px] w-[320px]"
          />
          <div className="absolute top-2 left-5">
            <h1 className="text-3xl font-bold">LAND MOBILITY</h1>
            <p className="md:text-[1.563rem] text-xl font-normal">
              in-motion Connectivity of land
            </p>
          </div>
        </div>
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/maritime.jpeg"
            alt="meritime"
            className="md:w-[660px] w-[320px]"
          />
          <div className="absolute top-2 left-5">
            <h1 className="text-3xl font-bold">MARITIME</h1>
            <p className="md:text-[1.563rem] text-xl font-light">
              Connectivity on water
            </p>
          </div>
        </div>
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/aviation.jpeg"
            alt=""
            className="md:w-[660px] w-[320px]"
          />
          <div className="absolute top-2 left-5">
            <h1 className="text-3xl font-bold">AVIATION</h1>
            <p className="md:text-[1.5rem] text-xl font-light">
              Connectivity while in the air
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center  m-auto">
          <h3 className="md:text-[3.188rem] text-2xl font-bold">
            KEEP YOUR BUSINESS CONNECTED
          </h3>
          <p className="text-base font-medium md:w-[675px] w-[350px] text-center m-auto py-4">
            Connect employees across sites, monitor IoT devices, and backup your
            network, even in the most remote locations across the globe.
          </p>
        </div>
        <div className="md:flex flex-row justify-center items-center gap-40 py-40">
          <div className="space-y-10">
            <h4 className="md:text-4xl text-2xl font-bold">
              EASY TO GET ONLINE
            </h4>
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
        <div className="md:flex flex-row justify-center items-center gap-40 py-20">
          <img src="/images/prioritizedService.jpeg" alt="location" />
          <div className="space-y-10 md:w-[510px] w-[300px]">
            <h4 className="md:text-4xl text-2xl font-bold">
              24/7 PRIORITIZED SERVICE
            </h4>
            <p className="md:text-base text-xs font-normal">
              Priority Data customers are given network precedence and receive
              consistently faster speeds.
            </p>
            <p className="md:text-base text-xs font-normal ">
              Customers on Priority Plans will also benefit from 24/7
              prioritized support, a publicly routable IPv4 address, and
              includes a Service Level Agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FixedSiteMobility
