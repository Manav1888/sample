import React from "react";
import TestimonialCard from "../cards/TestimonialCards";
import lori from "../assets/lori.png";
import will from "../assets/will.png";
import dayana from "../assets/dayana.png";

const Testimonial = () => {
  return (
    <div className="bg-white ">
      <div className="flex justify-evenly pt-12 pb-12 relative z-10">
        <div className="flex p-2 px-8 rounded-xl items-center bg-blue-600 text-white">
          Testimonial
        </div>
      </div>
      <div className="mb-10 flex flex-col items-center text-center justify-center w-full font-semibold text-5xl max-sm:text-4xl px-4">
        <div>
          <span>Don't take our word see what our </span>
          <div className="underline">customers say.</div>
        </div>
      </div>
      <div className="flex  justify-evenly pb-14">
            <div className="sm:w-full md:w-full lg:flex lg:m-4 max-sm:px-8 lg:gap-4">
                <TestimonialCard
                    color="bg-blue-500"
                    quote='"Simply the best"'
                    text="GA4 Auditor helped us quickly establish a baseline for our clients' GA4 implementations. With little time or effort, we were able to observe low-hanging fruit and areas of opportunity. Using this tool freed up our time to think more creatively about the big-picture transition to GA4. GA4 Auditor was definitely a time-saver, and I recommend it!"
                    image={lori}
                    name="Lori Brok"
                    position="Data Analyst at Surefoot"
                />
            
           
                <TestimonialCard
                    color="bg-yellow-500"
                    quote='"One of a kind tool"'
                    text="The GA4 Auditor is a brilliant and easy to use tool that quickly demystifies Google's new analytics offering. Given the deprecation of Google's Universal Analytics, I strongly recommend using GA4 Auditor to ensure your measurement efforts are giving you the necessary insights to grow your business. Customer support is also top notch!"
                    image={will}
                    name="Will Fleis"
                    position="CEO and Co-Founder of Shared Audiences"
                />
            
                <TestimonialCard
                    color="bg-red-500"
                    quote='"A game changer for us"'
                    text="GA4 Auditor is an invaluable resource for anyone seeking comprehensive insights and expertise in GA4. The website's user-friendly interface and well-organized content make it effortless to navigate and find the information I needed. What truly sets GA4 Auditor apart is its commitment to staying up-to-date with the latest developments in Google Analytics 4."
                    image={dayana}
                    name="Dayana Marin"
                    position="CEO at Adasight"
                />
            </div>
        </div>
    </div>
  );
};

export default Testimonial;
