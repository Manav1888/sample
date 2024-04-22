import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const StatsSection = ({ stats }) => {
    return (
        <div className='flex-col justify-center items-center mt-12'>
            {stats.map((stat, index) => (
                <div key={index} className='flex justify-evenly gap-11 items-center mb-8'>
                    {stat.map((item, idx) => (
                        <div key={idx} className='w-96 h-44 border-slate-300 border-2 rounded-xl flex-col justify-center items-center'>
                            <span>{item.value}</span>
                            <span><FontAwesomeIcon icon={faPlus} style={{ color: item.color }} /></span>
                            <div className='text-center pt-4 font-thin text-3xl'>{item.label}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default StatsSection;