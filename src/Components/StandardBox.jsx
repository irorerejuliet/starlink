import React from 'react'
import { StandardBoxes } from './Constant/StandardBoxes';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StandardBox = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 6,
     slidesToScroll: 3,
     arrows: true,
     
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
      <div className="md:w-[50%] w-[60%] mx-auto pt-24 text-white slider-container">
        <Slider {...settings}>
          {StandardBoxes.map(({ id, title, image }) => (
            <div className="text-center px-4" key={id}>
              <img
                src={image}
                alt="Starlink"
                className="w-full max-w-[149px] mx-auto object-contain"
              />
              <span className="text-[1.375rem] font-normal pt-24">{title}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default StandardBox
