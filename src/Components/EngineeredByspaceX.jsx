import React from 'react'

const EngineeredByspaceX = () => {
  return (
    <section className="bg-by bg-bySpaceX bg-cover bg-bottom w-full h-screen">
      <div className="md:ml-48 m-auto md:pt-16 pt-8 md:w-[510px] w-[350px] text-white">
        <p className="text-4xl font-bold">ENGINEERED BY SPACEX</p>
        <p className="text-base font-normal pt-5">
          As the world's leading provider of launch services – and the only
          provider with an orbital className reusable rocket – SpaceX has deep
          experience with both spacecraft and on-orbit operations.
        </p>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white mt-5">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

export default EngineeredByspaceX
