import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import PricingCard from "../cards/PricingCard";

const Pricing = () => {

  const oneTimeAudit = {
    title: "One-time Audit",
    price: "$59",
    description: "Get a comprehensive GA4 audit report with our one-time purchase option",
    features: [
      "1 comprehensive audit",
      "PDF, PowerPoint formats",
      "Multiple report themes",
      "Premium Support"
    ],
    buttonLabel: "Get Started",
    buttonColor: "black",
    Color: 'white',
    BgColor:"white",
    rates:' /audit'
  };

  const agencyProYearly = {
    title: "Agency Pro Yearly",
    price: "$499",
    description: "Perfect for agencies that need multiple white-label audits at a discounted rate",
    features: [
      "180 comprehensive audit per year",
      "PDF, PowerPoint, Google Slide formats",
      "Multiple report themes",
      "Premium Support",
      "Branding free reports",
      "Whitelabel, use your own theme"
    ],
    buttonLabel: "Get Started",
    buttonColor: "white",
    color:"black",
    BgColor:"black",
    TextColor:'white',
    rates:' /year',
    IconColor:"white"
  };

  const enterprise = {
    title: "Enterprise",
    price: "Contact Us",
    description: "Do you need more than 180 audits per year? Contact us for a custom plan",
    features: [
      "Custom number of audits per your needs",
      "PDF, PowerPoint,Google Slide formats",
      "Multiple report themes",
      "Premium Support",
      "Branding free reports",
      "Whitelabel, use your own theme",
      "Feature Requests"
    ],
    buttonLabel: "Get Started",
    buttonColor: "black",
    Color:"white",
    BgColor:"white"
  };

  return (
    <div id='pricing'>
    <div className="relative bg-blue-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-blue-500 rounded-tr-full rounded-bl-full rounded-br-full w-16 h-16 transform absolute top-0 left-0 z-0"></div>
      <div className="bg-red-500 rounded-tr-full rounded-br-full rounded-bl-full w-16 h-16 transform absolute top-0 left-16 z-0"></div>

      <div className="bg-green-500 rounded-tl-full rounded-br-full rounded-bl-full w-16 h-16 transform -rotate-90 absolute bottom-0 right-16 z-0"></div>
      <div className="bg-yellow-500 rounded-tl-full rounded-tr-full rounded-br-full w-16 h-16 transform rotate-90 absolute bottom-0 right-0 z-0"></div>

      <div className="flex justify-evenly pt-10 pb-2 relative z-10">
        <div className="flex p-2 rounded-xl items-center bg-blue-600 text-white">
          Pricing
        </div>
      </div>

      <div className="flex max-sm:text-4xl  flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-10 relative z-10">
        <div>Our Pricing</div>
        <div className="block box-border h-60 w-2/3 font-thin text-lg text-center mt-8">
          Choose the plan that's right for you
        </div>
      </div>

      <div className="z-10 max-sm:px-8 lg:px-8 mb-11 flex  justify-center lg:flex-nowrap min-[314px]:flex-wrap  gap-8 -mt-32 md:flex-wrap">
      <PricingCard {...oneTimeAudit} />
      <PricingCard {...agencyProYearly} />
      <PricingCard {...enterprise} />
    </div>

    </div>

    </div>
  );
};

export default Pricing;
