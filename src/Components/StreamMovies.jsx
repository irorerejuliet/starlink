import React from 'react'

const StreamMovies = () => {
  return (
    <section className=" bg-residentialEarth bg-fixed bg-cover h-screen  w-full md:px-0 px-5">
      <div className="text-center text-white pt-24">
        <h2 className="md:text-[2.5rem] text-lg font-bold">
          STREAM MOVIES, MAKE VIDEO CALLS, GAME & MORE
        </h2>
        <div className=" text-center m-auto my-10 py-10 px-6 border border-gray-400 w-[308px]">
          <h4 className="text-[1.75rem] font-bold">RESIDENTIAL</h4>
          <p className="text-base font-normal py-5">Best for households</p>
          <p className="text-[3.188rem] font-semibold">
            ₦75,000
            <span className="text-[1.375rem] text-[#6B6B6B]">/mo</span>
          </p>
          <p className="text-base font-normal py">Unlimited data</p>
        </div>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white">
          VIEW ALL PLANS
        </button>
        <button className="font-bold text-xs bg-white  text-black py-2 px-4 rounded-[4px] ml-2">
          ORDER NOW
        </button>
      </div>
    </section>
  );
}

export default StreamMovies
