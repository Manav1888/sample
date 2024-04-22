import React, { useRef } from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import f5 from "../assets/f5.svg";
import f6 from "../assets/f6.png";
import sw from "../assets/similingWoman.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, height } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../cards/FeatureCard";
import "../styles/featurecard.css";
import { animate, motion } from "framer-motion";

const Features = () => {
  const dataCount = useRef(null);
  const pageCount = useRef(null);
  const reportThemeCount = useRef(null);
  const reportFormatCount = useRef(null);

  const animationDataCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (dataCount.current.textContent = v.toFixed()),
    });
  };
  const animationPageCount = () => {
    animate(0, 40, {
      duration: 1,
      onUpdate: (v) => (pageCount.current.textContent = v.toFixed()),
    });
  };

  const animationThemeCount = () => {
    animate(0, 3, {
      duration: 1,
      onUpdate: (v) => (reportThemeCount.current.textContent = v.toFixed()),
    });
  };
  const animationFormatCount = () => {
    animate(0, 2, {
      duration: 1,
      onUpdate: (v) => (reportFormatCount.current.textContent = v.toFixed()),
    });
  };

  const featuresData = [
    {
      image: f1,
      title: "Tag Health & Performance",
      description:
        "Our tool crawls your website to check if your GA4 tags are firing correctly and in the correct order. We also check for duplicate tags and loading times, as these issues can negatively impact your data accuracy and site performance.",
    },
    {
      image: f2,
      title: "Data Integrity & Quality",
      description:
        "Our GA audit provides comprehensive data quality checks to ensure a successful Google Analytics 4 migration. We check for issues such as missing data, data duplication, data discrepancies, bot traffic, spam, data filters, and sampling errors, and more.",
    },
    {
      image: f3,
      title: "Implementation Best Practices",
      description:
        "Our audit helps you implement GA4 best practices and put your data to work for effective marketing and business decision-making. We provide you with recommendations on how to optimize your GA4 set-up and use your data to improve your campaigns, user engagement, and conversion setup.",
    },
    {
      image: f4,
      title: "Actionable Plan",
      description:
        "Our tool not only identifies potential issues but also provides you with a clear and actionable plan on how to fix them so you, ensuring a smooth GA4 migration.",
    },
    {
      image: f5,
      title: "Save Time & Money",
      description:
        "Our audit tool eliminates the need for manual checks of your data for errors, reducing the risk of costly mistakes, and avoiding the expense of hiring a consultant or following a manual GA4 audit checklist.",
    },
    {
      image: f6,
      title: "Tailored Reporting Options",
      description:
        "Choose from different languages, multiple report themes, and file formats such as PDF and PowerPoint. With our white-labeling feature, agencies can even use their own branding and theme for the reports, providing a personalized touch to their clients.",
    },
  ];

  return (
    <div id="features" className="bg-white">
      <div className="bg-zinc-100  pt-10">
        <div className="flex justify-evenly">
          <button className="bg-green-500 font-semibold  text-xl text-white rounded-lg p-3 ">
            Features
          </button>
        </div>
        <div className=" flex flex-col items-center text-center justify-center w-full font-semibold text-5xl pt-10 max-sm:text-4xl">
          <div className="max-sm:px-4">
            <span>The features that make our </span>
            <span className="underline"> GA4 audit unique</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly gap-11 max-sm:px-8 p-11 md:gap-2 md:p-2">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className=" xl:w-1/4 md:w-1/4 sm:w-full mb-8"
            >
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center pb-10">
          <button className="bg-black font-semibold mt-6 text-xl text-white rounded-xl  px-10 py-5 ">
            Get Started
          </button>
        </div>
      </div>
      <div className=" max-sm:px-4 max-sm:text-4xl flex flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-12">
        <div>
          <span>What is included in the Google Analytics audit? </span>
        </div>
        <div className="text-center mt-8 text-lg  font-normal">
          Our Google Analytics audit includes over 40 pages in total, with more
          than 100 features analyzed, and 3 different themes, and 3 file formats
        </div>

        <div className="flex max-sm:px-3 m-2 flex-wrap justify-center items-center mt-12">
          <div className="flex flex-col sm:flex-row justify-evenly gap-11 items-center w-full">
          <div className="pt-2 w-full sm:w-96 h-44 justify-center border-slate-300 border-2 rounded-xl flex flex-col items-center">
              <div>
                <motion.span
                  whileInView={animationDataCount}
                  ref={dataCount}
                ></motion.span>
                <span>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#2A66FF" }} />
                </span>
              </div>
              <div className="text-center pt-4 font-thin text-3xl">
                DATA POINTS
              </div>
            </div>
            <div className="pt-2 w-full sm:w-96 h-44 justify-center border-slate-300 border-2 rounded-xl flex flex-col items-center">
              <div>
                <motion.span
                  whileInView={animationPageCount}
                  ref={pageCount}
                ></motion.span>
                <span>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#FDB52A" }} />
                </span>
              </div>
              <div className="text-center pt-4 font-thin text-3xl">
                PAGES
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly gap-11 items-center w-full mt-8 mb-12">
          <div className="pt-2 w-full sm:w-96 h-44 justify-center border-slate-300 border-2 rounded-xl flex flex-col items-center">
              <div>
                <motion.span
                  whileInView={animationFormatCount}
                  ref={reportFormatCount}
                ></motion.span>
                <span>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#ff4545" }} />
                </span>
              </div>
              <div className="text-center pt-4 font-thin text-3xl">
                REPORT FORMAT
              </div>
            </div>
            <div className="pt-2 w-full sm:w-96 h-44 justify-center border-slate-300 border-2 rounded-xl flex flex-col items-center">
              <div>
                <motion.span
                  whileInView={animationThemeCount}
                  ref={reportThemeCount}
                ></motion.span>
                <span>
                  <FontAwesomeIcon icon={faPlus} style={{ color: "#2fc553" }} />
                </span>
              </div>
              <div className="text-center pt-4 font-thin text-3xl">
                REPORT THEMES
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-evenly flex ">
        <div className="flex  p-4 rounded-2xl  bg-red-500 text-white font-bold">
          Why Use Our Google Analytics tools
        </div>
      </div>
      <div className=" flex flex-col items-center text-center justify-center w-full font-semibold text-5xl max-sm:text-4xl max-sm:px-4 mt-10">
        <div>
          <span>Our tool is great for brands, </span>
          <span className="underline"> agencies </span>
          <span>and enterprises</span>
        </div>
        <div className="block box-border lg:px-12 font-thin text-lg text-center my-12">
          Our Google Analytics audit tool is suitable for businesses of all
          sizes, including those in need of a single audit, agencies requiring
          multiple audits, and enterprises with custom needs.
        </div>
      </div>
      

<div className="flex pb-12 justify-center items-center gap-12 ">
  <div className="hidden lg:block xl:block">
    <img
      src={sw}
      className="h-[465px] rounded-tl-[150px] rounded-br-[150px] rounded-bl-[150px]"
    />
  </div>

  <div className="w-2/3 lg:w-1/2">
    <div className="lg:hidden xl:hidden">
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For brands</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For agencies</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For enterprises</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>

    <div className="hidden sm:hidden md:hidden lg:block xl:block">
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For brands</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For agencies</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="flex justify-between py-9 border-y w-full">
        <a className="">For enterprises</a>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Features;
