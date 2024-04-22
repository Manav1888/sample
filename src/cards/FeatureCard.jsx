import React from 'react';

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className='w-full h-full items-center mt-10 p-2 rounded-xl bg-white'>
    <img src={image} className='rounded-full mx-auto mt-3 ' alt={title} />
    <div className='text-center py-3 font-semibold text-xl'>{title}</div>
    <div className='text-center px-2 text-gray-600 text-[14px] text-base mb-12'>
      {description}
    </div>
  </div>
    );
}

export default FeatureCard;