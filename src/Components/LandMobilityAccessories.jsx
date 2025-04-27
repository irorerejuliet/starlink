import React from 'react'
import { Accessories } from './Constant/Accessories';
import Slider from 'react-slick';

const LandMobilityAccessories = () => {
     const settings = {
       dots: true,
       infinite: true,
       speed: 800,
       slidesToShow: 3,
       slidesToScroll: 3,

       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           },
         },
         {
           breakpoint: 640,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
  return (
    <section className="bg-black py-20  md:px-0 px bg-residentialEarth3 bg-fixed bg-center bg-[auto_950px] bg-no-repeat md:pt-0 pt-48">
      <div className="md:w-[60%] w-[60%] mx-auto slider-container">
        <Slider {...settings}>
          {Accessories.map(({ image, title, id }) => (
            <div className="text-center px-4" key={id}>
              <img
                src={image}
                alt="ETHERNET ROUTER"
                className="w-full max-w-[340px] mx-auto object-contain"
              />
              <p className="text-lg font-medium text-white py-6">{title}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* <!-- WHAT OUR CUSTOMERS HAVE TO SAY --> */}
      <div className="text-white mt-80 max-w-[1419px] mx-auto md:px-0 px-5 ">
        <h4 className=" md:text-[1.375rem] text-base font-normal my-20">
          WHAT OUR CUSTOMERS HAVE TO SAY
        </h4>
        <div className="md:flex  items-center gap-20 text-white">
          <div className="space-y-5  md:border-l-4 border-l-0 md:pl-10">
            <h5 className="text-[1.75rem] font-bold">CONNECTING GUESTS</h5>
            <p className="text-xs font-normal md:w-[608px] w-[350px]">
              "Starlink gave us the new beginning we were looking for. It gave
              us connectivity we can be proud to share with our guests. It gave
              us the knowledge we needed to continue to build better train
              connectivity beyond the satellite [internet] itself…and, most of
              all, it gave us a new beginning for train enthusiasts to get
              excited about because it is doable, it is maintainable, [and] it
              is as exciting as it seems."
            </p>
            <p className="text-xs font-medium">- Brightline</p>
          </div>
          <div className="space-y-5 md:border-l-4 border-l-0 md:pl-12">
            <h5 className="text-[1.75rem] font-bold">REMOTE COVERAGE</h5>
            <p className="text-xs font-normal md:w-[608px] w-[350px]">
              "Provides reliable emergency communication in remote areas that
              typically have no reliable data and voice connection."
            </p>
            <p className="text-xs font-medium">
              - Queensland Fire & Emergency Services
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex flex-row justify-center gap-4 m-auto max-w-[1550px] py-20 gap-y-10">
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/landmobility_fixedsite.jpeg"
            alt="Fixed-site"
            className="md:w-[600px] w-[320px]"
          />
          <div className="absolute top-2 left-5 text-white">
            <h1 className="text-3xl font-bold">FIXED SITE</h1>
            <p className="md:text-[1.563rem] text-xl font-normal">
              Connectivity For businesses
            </p>
          </div>
        </div>
        <div className="relative md:hover:translate-x-5 md:hover:translate-y-5 md:transition-all">
          <img
            src="/images/landmobility_maritime.jpeg"
            alt="Land-mobility"
            className="md:w-[600px] w-[320px]"
          />
          <div className="absolute top-2 left-5 text-white">
            <h1 className="text-3xl font-bold">LAND MOBILITY</h1>
            <p className="md:text-[1.563rem] text-xl font-normal">
              in-motion Connectivity of land
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandMobilityAccessories
