import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuWatch } from "react-icons/lu";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const BuyersGuide = () => {
  return (
    <>
      <nav className="bg-black text-white ">
        <div className="w-full max-w-[1283px] mx-auto flex justify-between pt-5">
          <div>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[200px] md:block hidden"
            />
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
              <div className="flex items-center gap-2 ml-[550%] py-1 px-6 bg-white text-[#637288] fontnormal rounded-lg">
                <CiSearch />
                <button>Search</button>
              </div>
            </div>
          </div>
          <div className="md:block hidden">
            <div className="text-sm font-bold flex gap-6">
              <Link to="">Request Sales Consultation</Link>
              <Link to="/">Order Fixed Business</Link>
              <Link to="">Order Maritemi</Link>
              <Link to="/OrderMobility">Oredr Mobility</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-[1283px] mx-auto flex justify-between">
        <div className="w-[300px] pt-6 text-[#4F5A66] h-screen overflow-y-scroll md:block hidden">
          <div>
            <h3 className=" font-bold text-xs">INTRODUCTION</h3>
            <p className="text-sm fontnormal">Getting Started With Starlink</p>
            <p className="text-sm fontnormal">Business Enterprises Guide</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">
              Buying Starlink
            </h3>
            <p className="text-sm fontnormal">
              Service Plans, Performance and Hardware
            </p>
            <p className="text-sm font-normal">Ordering, Billing & Payment</p>
            <p className="text-sm font-normal">Starlink Demo Program</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">INSTALLATION</h3>
            <p className="text-sm fontnormal">Getting Started</p>
            <p className="text-sm font-normal">Prepare for Install</p>
            <p className="text-sm font-normal">Install and maount Starlink</p>
            <p className="text-sm font-normal">Using a Third Party Router</p>
            <p className="text-sm font-normal">Multiple Starlink</p>
            <p className="text-sm font-normal">Accessories</p>
            <p className="text-sm font-normal">
              Maintainance and TroubleShooting
            </p>
            <p className="text-sm font-normal">Install and maount Starlink</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">
              TECHNICAL SPERCIFICATION
            </h3>
            <p className="text-sm fontnormal">IP Address</p>
            <p className="text-sm font-normal">Peering with Starlink</p>
            <p className="text-sm font-normal">Software Updates</p>
            <p className="text-sm font-normal">Using a Third Party Router</p>
            <p className="text-sm font-normal">TECHNICAL FAQs</p>
            <p className="text-sm font-normal">Interfrence</p>
            <p className="text-sm font-normal">
              Maintainance and TroubleShooting
            </p>
            <p className="text-sm font-normal">Install and maount Starlink</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">SUPPORT</h3>
            <p className="text-sm fontnormal">Support</p>
            <p className="text-sm font-normal">Generate a Quote</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">
              CUSTOMER TESTIMONIAls
            </h3>
            <p className="text-sm fontnormal">Testimonials: Fixed Business</p>
            <p className="text-sm font-normal">
              Testimonial: Maritime (Mobile)
            </p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">
              ENTERPRISES ACCOUNT MANAGEMENT
            </h3>
            <p className="text-sm font-normal">
              Enterprises Account Management
            </p>
            <p>Tools</p>
          </div>
          <div className="py-6 space-y-2">
            <h3 className="text-[#4F5A66] font-bold text-xs">
              ENTERPRISES ACCOUNT MANAGEMENT
            </h3>
            <p>Vendor onboarding</p>
          </div>
        </div>
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
            <div className="text-[0.938rem] font-normal space-y-4 md:w-[800px] w-[328px] md:px-0 px-5 pt-4">
              <p>
                Starlink provides high speed, broadband internet using a simple,
                scalable hardware platform that can be easily distributed across
                locations around the world. Unbounded by local infrastructure,
                and designed to support multiple paths back to the internet,
                Starlink provides reliable service to ensure your business can
                keep doing what it does best.
              </p>
              <p>
                Starlink currently provides services to tens of thousands of
                business locations and serves customers in a multitude of
                capacities, including: primary enterprise connectivity,
                replacement of 4G and VSAT, backup, interim setup, and emergency
                services. Examples of Starlink implementations around the globe
                are published here.
              </p>
              <p>
                For its Priority Service Plans, Starlink offers a 99.9% network
                availability Service Level Agreement (SLA). Read more Priority
                Plan Service Level Agreement.
              </p>
              <p>
                Looking for more information or want to talk to someone? Submit
                a Sales Consultation Request here.
              </p>
              <p>
                Does your business need extra support for network management,
                integration, or other value-added services? Check out our
                authorized resellers.
              </p>
            </div>
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
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Service, Plans, amd Performance</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Ordering, Billing and Payment</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Installation Details</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Maritime / Mobility Install Guide</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Technical FAQs</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Support</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Testimonials: Fixed Business</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
            <div className="flex items-center gap-2 text-base font-semibold">
              <p>Testimonial: Maritime (Mobile)</p>
              <HiMiniArrowSmallRight size={20} className="text-[#4F5A66]" />
            </div>
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
    </>
  );
}

export default BuyersGuide
