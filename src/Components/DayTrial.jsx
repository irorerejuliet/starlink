
import { IoIosArrowForward } from "react-icons/io";
import { GiSelect } from "react-icons/gi";
import { Link } from "react-router-dom";

const DayTrial = () => {
  return (
    <section className="bg-trialEarthImg bg-fixed  md:bg-right bg-center bg-[auto_900px] bg-no-repeat bg-black text-white py-40">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[3.188rem] font-bold">30 DAY TRIAL</h2>

          <p className="md:text-[1.563rem] text-[1rem] font-normal">
            Try Starlink for 30 days and if not satisfied, get a full refund.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h4 className="text-sm font-bold mb-3">Service Address</h4>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="TYPE AND SELECT"
                className="w-full bg-[#ffffff14] border border-gray-500 rounded-sm py-5 px-6 text-sm font-semibold outline-none"
              />

              <GiSelect className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-gray-300" />
            </div>

            {/* Button */}
            <button className="bg-white text-black font-bold text-sm px-10 py-5 rounded-sm hover:bg-gray-200 transition">
              GET STARTED
            </button>
          </div>

          {/* Link */}
          <Link
            to="/MapPage"
            className="flex items-center justify-center gap-2 mt-10 text-sm font-bold"
          >
            <span>VIEW AVAILABILITY & SPEEDS MAP</span>
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DayTrial;