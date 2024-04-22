import React from "react";

const TestimonialCard = ({ color, quote, text, image, name, position }) => {
  return (
    <div className={` border p-4  h-auto items-center mt-12 rounded-xl  bg-white`}>
      <div className="flex gap-1">
        <div className={`${color} rounded-tr-full rounded-bl-full rounded-br-full w-6 h-6 transform z-0`}></div>
        <div className={`${color} rounded-tr-full rounded-bl-full rounded-br-full w-6 h-6 transform z-0`}></div>
      </div>
      <div className="pt-2 font-semibold text-xl">{quote}</div>
      <div className="px-1 text-gray-600 text-[14px] text-base">{text}</div>
      <div className="flex mt-6">
        <img src={image} className="rounded-t-full rounded-br-full w-20" />
        <div className="ml-2 flex-col font-bold">
          {name}
          <div className="text-gray-500 font-extralight">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;