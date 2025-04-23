import React from 'react'

const WeatherResilence = () => {
  return (
    <section className="bg-residentialWeather bg-repeat bg-center bg-cover bg-bottom w-full h-screen">
      <div className="md:ml-[60%] m-auto md:pt-16 pt-8 md:w-[510px] w-[350px] text-white ">
        <p className="text-4xl font-bold">WEATHER RESILIENT</p>
        <p className=" text-base font-normal pt-5">
          Starlink is designed to endure the elements - it can melt snow and
          withstand sleet, heavy rain, and harsh winds.
        </p>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white mt-5">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

export default WeatherResilence
