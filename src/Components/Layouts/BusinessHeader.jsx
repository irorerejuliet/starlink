import React from 'react'
import BusinessNav from './BusinessNav'
import { Link } from 'react-router-dom'
import { GiSelect } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'

const BusinessHeader = () => {
  return (
     <header className="py-7 bg-businessHero md:bg-repeat bg-center bg-cover h-screen  w-full md:px-0 px-5">
         <BusinessNav/>
           <div className="text-center text-white pt-36 space-y-5">
             <h2 className="md:text-6xl text-3xl  font-bold leading-tight  md:w-[879px] w-[310px]  text-center m-auto font-Arimo">
               STARLINK FOR BUSINESS
             </h2>
             <div className="md:w-[619px] w-[350px] text-center m-auto">
               <p className="text-[1.563rem] font-normal">
                 Reliable high-speed internet for businesses. Starting at
                 ₦159,000/mo with a hardware cost of ₦4,270,000.
               </p>
             </div>
           </div>
   
           <div className=" text-center py-10 text-white">
             <Link to="/StarlinkMockPayment" className="text-2xl font-bold">
               Connect with our team
             </Link>
             <span className='text-2xl font-light ml-2'>or view our</span>
             <Link to="" className="text-2xl font-bold ml-2">
               buyer's guide
             </Link>
           </div>
            <div className="py-20 relative text-white mt-20">
                     <h4 className="font-bold text-xm ml-[37%] py-2">Service Address</h4>
                     <div className="md:flex flex-row justify-center items-center">
                       <input
                         className="font-bold text-xs py-4 pl-6 pr-40 rounded-[4px] text-white bg-[#ffffff26] border"
                         type="TYPE AND SECLECT"
                         placeholder="TYPE AND SECLECT"
                       />
                       <GiSelect className=" text-white text-3xl absolute md:right-[46%] right-[10%] md:top-32 top-32" />
                       <button className="font-bold text-xs bg-white text-black md:py-4 md:px-10 py-4 px-36 rounded-[4px] ml-3 md:mt-0 mt-5">
                         ORDER NOW
                       </button>
                     </div>
                     <div className="flex justify-center text-center py-8 gap-4">
                       <p className="font-bold text-xs">VIEW AVAILABILITY & SPEED MAPS</p>
                       <Link to="/MapPage">
                         <IoIosArrowForward />
                       </Link>
                     </div>
             </div>
         </header>
  )
}

export default BusinessHeader
