import React from 'react'
import Card from './card';

const HomeCards = () => {
  return (
    <div className="md:flex flex-row justify-center items-center gap-5 mt-60 ">
      <Card>
        <h3 className="font-bold text-2xl text-white py-3">RESIDENTIAL</h3>
        <p className="font-light text-base text-white">Connect at home</p>
        <p className="font-medium text-base text-white py-3">
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
        <h3 className="font-bold text-2xl text-white py-3">Roam</h3>
        <p className="font-light text-base text-white">
          Connect while traveling anywhere in over 100 markets
        </p>
        <p className="font-medium text-base text-white py-3">
          Starting at ₦38,000/mo
        </p>
        <button className="font-bold text-xs bg-white py-2 px-4 rounded-[4px]">
          ORDER NOW
        </button>
        <button className="font-bold text-xs py-2 px-4 rounded-[4px] border border-white text-white ml-2">
          LEARN MORE
        </button>
      </Card>
    </div>
  );
}

export default HomeCards
