
import React from 'react';
import BlogCard from '../cards/BlogCard';
import cardsData from '../data/cardsData.json';

const Blog = () => {
  return (
    <div id="blog" className="bg-white pb-4">
      <div className="pt-12">
        <div className="flex justify-evenly mb-8 relative z-10">
          <div className="flex p-3 px-4 text-sm rounded-xl items-center bg-blue-600 text-white">
            Blog
          </div>
        </div>

        <div className="flex max-sm:px-4 flex-col items-center justify-center text-center font-semibold text-5xl relative z-10">
          <div>Articles</div>
          <div className="box-border pb-12 w-full md:w-2/3 font-thin text-lg text-center mt-4">
            GA4 Auditor Blog - Your Essential Guide to Google Analytics 4 (GA4)
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="max-sm:px-7 flex justify-center items-center md:px-8">
            <div className="w-full ">
              {cardsData.map((card, index) => (
                <div key={card.id} className="mb-4">
                  <BlogCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

