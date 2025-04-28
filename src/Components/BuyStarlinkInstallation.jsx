import React from 'react'
import { JumbtoSectionData } from './Constant/JumptoSectionData'
import { BiDislike, BiLike } from 'react-icons/bi'
import { LuWatch } from 'react-icons/lu'
import TechnicalSpecification from './TechnicalSpecification'
import AboutStarlinkAndGude from './AboutStarlinkAndGude'

const BuyStarlinkInstallation = () => {
  return (
   <div className="w-full max-w-[1283px] mx-auto flex justify-between">
         <TechnicalSpecification/>
           <div className="w-[1152px]  overflow-y-scroll pt-6">
             <div className="md:px-0 px-5">
               <h2 className="text-3xl font-bold">
                 Getting Started with Starlink Business & Enterprise Guide
               </h2>
               <p className="text-lg font-semibold text-[#4F5A66] py-3">
                 Interested in Starlink for your business? Learn more about
                 technical specifications, Service Plans, Starlink Support, and
                 more.
               </p>
             </div>
             <div className="border-b-gray-100 border my-3"></div>
             <div>
               <img
                 src="/images/starlinkGuide.jpeg"
                 alt="starlink guide"
                 className="md:w-[800px] w-[328px] md:px-0 px-5"
               />
              <AboutStarlinkAndGude/>
               <div className="flex items-center text-[#4F5A66] gap-2 pt-10 md:px-0 px-5">
                 <LuWatch />
                 <p>Updated 17 days ago</p>
               </div>
               <div className="border border-b-gray-100 my-4"></div>
             </div>
             <div className="space-y-1 md:px-0 px-5">
               <h4 className="text-[#4F5A66] font-semibold text-sm">
                 JUMP TO SECTION
               </h4>
               {JumbtoSectionData.map(({ title, Icon, id }) => (
                 <div
                   className="flex items-center gap-2 text-base font-semibold"
                   key={id}
                 >
                   <p>{title}</p>
                   {Icon && <Icon size={20} className="text-[#4F5A66]" />}
                 </div>
               ))}
             </div>
             <div className="flex justify-center gap-2 my-20 py-1 px-5 border border-gray-300 w-[293px] mx-auto rounded-md  text-sm font-normal text-[#4F5A66]">
               <button className="flex items-center">
                 Did this Page help you? <BiLike className="ml-4" /> Yes
               </button>
               <button className="flex items-center ml-2">
                 <BiDislike />
                 No
               </button>
             </div>
           </div>
         </div>
  )
}

export default BuyStarlinkInstallation
