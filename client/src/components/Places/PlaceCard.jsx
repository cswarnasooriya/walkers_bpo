import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950 dark:text-white cursor-pointer rounded-[20px]"
        onClick={handleOrderPopup}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[380px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-[22px]"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-semibold text-xl pt-4 pb-3">{title}</h1>
          <div className="flex items-center gap-3 opacity-60">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-6 text-justify items-center pb-8">{description}</p>
          {/* <div >
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
