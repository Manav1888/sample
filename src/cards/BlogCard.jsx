// BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, imageSrc, date, title,width }) => {
  return (
    <Link to={`/article/${id}`}>
      <div className="p-1 lg:w-auto items-center justify-center  border-2 border-gray-100 rounded-xl">
        <div className="lg:flex  xl:flex md:flex-col flex-wrap">
          <div>
            <img src={imageSrc} className='rounded-xl w-[550px] ' alt={title} />
          </div>
          <div className="flex-col">
            <div className="pl-6 pb-2 pt-2 text flex-shrink text-gray-500">
              {date}
            </div>
            <div className="pl-6 pt-2 font-bold text-xl md:text-base">
              {title}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
