import React from 'react'

const StandardBox = () => {
  return (
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
          <span className="text-[1.375rem] font-normal pt-24">STARLINK</span>
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
          <span className="text-[1.375rem] font-normal pt-24">AC CABLE</span>
        </div>
      </div>
    </section>
  );
}

export default StandardBox
