import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PricingCard = ({ rates,title, price, description,IconColor, features, buttonLabel, buttonColor, Color , BgColor , TextColor}) => {
  return (
    <div className={`p-3 flex flex-col border border-gray-400 justify-between px-4 rounded-xl bg-${BgColor}`}>
  <div className="flex flex-col">
    <div className={`py-3 font-medium text-${TextColor} text-center text-2xl mb-2`}>{title}</div>
    <div className="flex items-center pb-4">
      <div className={`font-bold text-xl text-${TextColor}`}>{price}</div>
      <span className="text-base font-thin  text-gray-400">{rates}</span>
    </div>
  </div>
  <div className="py-2  h-full border-t-2 text-gray-400 text-[14px] text-base">
    {description}
  </div>
  {features.map((feature, index) => (
    <div key={index} className="flex h-full items-center py-1">
      <FontAwesomeIcon icon={faCircleCheck} style={{color:`${IconColor}`}} />
      <div className={`pl-2 font-semibold text-lg text-${TextColor}`}>{feature}</div>
    </div>
  ))}
  <div>
    <button className={`font-semibold text-base mt-8 text-${Color} rounded-xl p-5 w-full bg-${buttonColor} hover:bg-yellow-700`}>
      {buttonLabel}
    </button>
  </div>
</div>
  );
};

export default PricingCard;
