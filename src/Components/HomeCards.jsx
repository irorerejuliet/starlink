import React from 'react'
import Card from './card';

const HomeCards = () => {
  return (
    <div className="md:flex flex-row justify-center items-center gap-5 mt-60">
      <Card>
        <h3 className="font-bold text-2xl text-white">RESIDENTIAL</h3>
        <p className="font-light text-base text-white">Connect at home</p>
        <p className="font-medium text-base text-white">
          Starting at ₦75,000/mo
        </p>
        <button className="font-bold text-xs bg-white py-2 px-4 rounded-[4px]">
          ORDER NOW
        </button>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white ml-2">
          LEARN MORE
        </button>
      </Card>
      <Card bg="black">
        <h3 className="font-bold text-2xl text-white">Roam</h3>
        <p className="font-light text-base text-white">
          Connect while traveling anywhere in over 100 markets
        </p>
        <p className="font-medium text-base text-white">
          Starting at ₦38,000/mo
        </p>
        <button className="font-bold text-xs bg-white py-2 px-4 rounded-[4px]">
          ORDER NOW
        </button>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white ml-2">
          LEARN MORE
        </button>
      </Card>
      {/* <div class=" bg-gradient-to-t from-black to-black/10 from-25%% via-zinc-950% to-90%  min-w-full h-20 absolute bottom-0">
        juliet{" "}
      </div> */}
    </div>
  );
}

export default HomeCards
