import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FiBookOpen } from 'react-icons/fi'
import { MdOutlineMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'

const BuyerGuideNav = () => {
  return (
    <nav className="bg-black text-white ">
      <div className="w-full max-w-[1283px] mx-auto flex justify-between pt-5">
        <div>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[200px] md:block hidden"
            />
          </Link>
          <div className="md:hidden block px-5 py-5">
            <div className="flex justify-between items-center gap-6">
              <MdOutlineMenu />
              <div className="flex justify-between items-center gap-2">
                <FiBookOpen />
                <p className="text-sm font-bold">Guide</p>
              </div>
              <CiSearch className="ml-48" size={20} />
            </div>
          </div>
          <div className="py-5 md:block hidden">
            <div className="flex items-center gap-2">
              <FiBookOpen />
              <p className="text-sm font-bold">Guides</p>
            </div>
            <div className="flex items-center gap-2 ml-[550%] py-1 px-6 bg-white text-[#637288] fontnormal rounded-lg w-[170px]">
              <CiSearch />
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="text-sm font-bold flex gap-6">
            <Link to="">Request Sales Consultation</Link>
            <Link to="/">Order Fixed Business</Link>
            <Link to="/OrderMaritemi">Order Maritemi</Link>
            <Link to="/OrderMobility">Oredr Mobility</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BuyerGuideNav
