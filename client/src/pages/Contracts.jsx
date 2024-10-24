import React from 'react'
import img1 from "../../src/assets/places/C1.jpg"
import img2 from "../../src/assets/places/C2.jpg"
import img3 from "../../src/assets/places/C3.jpg"
import img4 from "../../src/assets/places/C4.jpg"
import Whychoose from './Whychoose'

const Contracts = () => {
  return (
    <>
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10 pt-[100px] md:pt-[160px]">
      <section data-aos="fade-up" className="container ">
        <h1 className=" my-8 border-l-8 border-primary/80 py-2 pl-2 text-3xl font-bold font-serif md:text-4xl">
        Our BPO Contracts
        </h1>
        
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
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">Fixed-Term Contracts </h1>
              <div className="flex items-center gap-3 opacity-60">
              
                <span>These contracts are established for a specific duration, typically outlining the client's service requirements and the terms for a set period (e.g., 6 months, 1 year).
                <br/>
                Fixed-term contracts are useful for projects with clearly defined scopes or needs, such as seasonal demand or specific project initiatives. Once the period ends, the contract may be renewed or terminated based on performance and business needs.</span>
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
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">Temporary Project or Job-Based Contracts </h1>
              <div className="flex items-center gap-3 opacity-60">
              
                <span>These contracts are designed for specific projects or tasks that have a defined start and end date. They often involve short-term work such as seasonal customer support during peak periods or specific project-based tasks.
                <br/>
                Ideal for businesses needing additional resources for short durations without committing to long-term contracts. These contracts can help organizations manage flexibility in staffing according to fluctuating business demands.</span>
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
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">Contracts with No Mandatory Contract Period</h1>
              <div className="flex items-center gap-3 opacity-60">
              
              <span>These contracts do not impose a set duration for the agreement, allowing for flexibility. They can be utilized on an as-needed basis without being tied to a specific timeline.
                <br/>
                This type is appropriate for ongoing services where the relationship can evolve. Businesses can terminate the service with proper notice without a rigid contract period.</span>
                </div>
              
            </div>
          </div>
          
          <div
            className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-[20px]"
          
          >
            <div className="overflow-hidden">
              <img
                src={img4}
                alt="No image"
                className="mx-auto h-[380px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-[22px]"
              />
            </div>
    
            <div className="space-y-2 p-3">
              <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">No Obligatory Contracts</h1>
              <div className="flex items-center gap-3 opacity-60">
              
              <span>These are informal agreements that do not require the signing of a formal contract, leading to a flexible working arrangement. They are often based on mutual understanding and can be in the form of service requests or purchase orders.
                <br/>
                Suitable for organizations looking for a low-commitment approach, often used for trial periods or initial engagements before entering into more formal agreements.</span>
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

export default Contracts;


  