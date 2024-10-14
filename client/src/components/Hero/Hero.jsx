import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/50 h-full pt-[60px] md:pt-[140px]">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="md:text-lg text-xl pb-4 font-serif font-semibold">
              Welcome to BPO of Walkers (PVT) Ltd
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold pb-8 pt-8 text-7xl items-center justify-center text-center font-serif"
            >
              Transforming Challenges into Opportunities
            </p>

            <p
              data-aos="fade-down"
              data-aos-delay="400"
              className="font-bold pb-2 pt-2 text-3xl items-center justify-center text-center font-serif"
            >
              With Expert BPO
            </p>
          </div>
          <div
            data-aos=""
            data-aos-delay="400"
            className="space-y-4 bg-transparent rounded-md  relative pb-[75px]"
          >
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div> */}
            <button className="bg-gradient-to-r from-primary to-secondary text-black font-bold hover:scale-105 hover:text-red-200 px-8 py-4 rounded-full duration-200 absolute -bottom-8 left-1/2 -translate-x-1/2 border-2 border-red-500 ">
              Hire Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
