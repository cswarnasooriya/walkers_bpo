import React from 'react'
import img1 from "../../src/assets/places/Business.jpg"
import img2 from "../../src/assets/places/Help Desk.jpg"
import img3 from "../../src/assets/places/Data.jpg"
import Whychoose from './Whychoose'
const Support = () => {
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10 pt-[100px] md:pt-[160px]">
      <section data-aos="fade-up" className="container ">
        <h1 className=" my-8 border-l-8 border-primary/80 py-2 pl-2 text-3xl font-bold font-serif md:text-4xl">
        IT Support & Data Entry 
        </h1>
        <p className=" my-8  md:text-[20px] text-xl">
        In the current world where everything is moving so fast especially with the introduction of technology it is important for a business to have good IT support and proper handling of data. The Business Process Outsourcing services such as IT Support and Data Entry are designed to make your business more efficient and effective and enable you to accomplish your organizational objectives. 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 rounded-md">
        <div
            className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-[20px]"
          
          >
            <div className="overflow-hidden">
              <img
                src={img1}
                alt="No image"
                className="mx-auto h-[380px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-[22px]"
              />
            </div>
    
            <div className="space-y-2 p-3">
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">Business System Support </h1>
              <div className="flex items-center gap-3 opacity-60">
              
                <span>Our team will manage your business systems so that they operate in the manner desired in your business. Our services include system installation, system improvement, system maintenance and general system service. Thus, it is possible to avoid the emergence of technical issues that disrupt the work and increase the efficiency of the work performed. </span>
              </div>
              
            </div>
          </div>
          <div
            className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-[20px]"
          
          >
            <div className="overflow-hidden">
              <img
                src={img2}
                alt="No image"
                className="mx-auto h-[380px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-[22px]"
              />
            </div>
    
            <div className="space-y-2 p-3">
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">IT Help Desk </h1>
              <div className="flex items-center gap-3 opacity-60">
              
                <span>Our IT help desk is always on call to address any of your technical needs at any given time. Whether it is software issues, hardware issues or network issues, our technical specialists are always ready to fix them as soon as possible so that your team can continue working and be connected. </span>
              </div>
              
            </div>
          </div>
          <div
            className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-[20px]"
          
          >
            <div className="overflow-hidden">
              <img
                src={img3}
                alt="No image"
                className="mx-auto h-[380px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-[22px]"
              />
            </div>
    
            <div className="space-y-2 p-3">
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">Data Entry </h1>
              <div className="flex items-center gap-3 opacity-60">
              
                <span>Accuracy is crucial particularly when dealing with data and our data entry services ensure your data is entered and processed to the level of accuracy you need. We handle all your records from customer’s record to sales record so that you are provided with well-organized records for decision making.</span>
              </div>
              
            </div>
          </div>
          
        </div>
        <Whychoose/>
      </section>
    </div>
    </>
  )
}

export default Support;


  