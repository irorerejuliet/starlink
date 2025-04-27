
import Slider from 'react-slick';
import { LandMobilityData } from './Constant/LandMobilityData';

const LandMobilityCarousel = () => {
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
    <div className=" bg-black text-white">
      <div className=" w-full max-w-[1380px] mx-auto py-28  gap-5 slider-container">
        <Slider {...settings}>
          {LandMobilityData.map(({ id, image, title, description }) => (
            <div key={id}>
              <img src={image} alt={title} className="w-[532px]" />
              <div className=" ">
                <h2 className="text-lg font-normal my-2">{title}</h2>
                <p className="text-sm font-medium w-[500px]">{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LandMobilityCarousel
