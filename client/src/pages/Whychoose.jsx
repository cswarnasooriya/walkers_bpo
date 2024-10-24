import React from "react";
import TravelImg from "../../src/assets/places/C1.jpg";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Whychoose = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-200 pb-12 pt-8">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={TravelImg}
                  alt="walkers logo"
                  className="max-w-[550px] h-[500px] w-full mx-auto drop-shadow-[10px_5px_12px_rgba(0,0,0,0.7)] object-cover rounded-xl"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-10 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-semibold font-serif capitalize"
                >
                 Get Start Touday
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-md text-gray-700 text-justify tracking-wide leading-7"
                >
                 Enhance your engineering processes with Walkers BPO specialized BPO support services in design, drafting, and estimating. Contact us today to discuss how we can streamline your operations, improve efficiency, and drive success in your projects. Let’s build the future together!
                  <br />
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Digital</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Engineering</p>
                    </div>
                  </div>
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Finance</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
