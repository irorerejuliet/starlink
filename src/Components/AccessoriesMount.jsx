import Slider from "react-slick";
import { Accessories } from "./Constant/Accessories";


const AccessoriesMount = () => {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 3,
   arrows: true, // Enable arrows for navigation

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
        <div className="md:flex justify-between items-center gap-20">
          <div className="space-y-5  md:border-l-4 border-l-0 md:pl-10">
            <h5 className="text-[1.75rem] font-bold">Low-latency</h5>
            <p className="text-xs font-normal md:w-[370px] w-[350px]">
              "It's an entirely different world...Before Starlink we had to
              ration data and we couldn't stream. Now we have files downloading,
              Pandora playing, Zoom going and there's no latency whatsoever."
            </p>
            <p className="text-xs font-medium">
              - William D. from Colorado, USA
            </p>
          </div>
          <div className="space-y-5 md:border-l-4 border-l-0 md:pl-12">
            <h5 className="text-[1.75rem] font-bold">Game changer</h5>
            <p className="text-xs font-normal md:w-[370px] w-[350px]">
              "Absolute game changer! There's no overpromising and
              underdelivering like our old slow provider. Plug it in and show
              Dishy the sky, that's it! In under 5 minutes we've gone from the
              forgotten to having the fastest internet connection in the area."
            </p>
            <p className="text-xs font-medium">
              - Aaron W. from Southern England
            </p>
          </div>
          <div className="space-y-5 md:border-l-4 border-l-0 md:pl-12">
            <h5 className="text-[1.75rem] font-bold">Blisteringly fast</h5>
            <p className="text-xs font-normal md:w-[370px] w-[350px]">
              "Millions are not connected to the Internet — we're thrilled to
              say that we're no longer among them. Blisteringly fast and online
              in minutes, Starlink ends a six-year journey."
            </p>
            <p className="text-xs font-medium">
              - Neil V. from New South Wales Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccessoriesMount
