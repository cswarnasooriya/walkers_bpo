const Hero = () => {
  

  return (
    <div className=" bg-black/50 h-full pt-[60px] md:pt-[140px]">
      <div className="h-full flex justify-center text-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
          
            <p data-aos="fade-up" className="md:text-[28px] sm:text-[22px] text-[16px] pb-4 font-serif font-semibold ">
              Welcome to BPO of Walkers (PVT) Ltd
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="pb-8 pt-2 md:pt-4 text-3xl md:text-7xl sm:text-4xl items-center justify-center text-center font-mono font-bold "
            >
              Transforming Challenges into Opportunities
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="font-bold pb-2 pt-2 md:text-3xl text-2xl sm:text-xl items-center justify-center text-center font-serif"
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
            <button className="bg-gradient-to-r bg-cyan-400 to-secondary text-black font-bold hover:scale-105 hover:bg-primary px-8 py-4 rounded-full duration-200 absolute -bottom-8 left-1/2 -translate-x-1/2 border-2 border-black  ">
              Hire Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
