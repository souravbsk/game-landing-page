'use client'
import React from 'react';

const WhyPlayBox = ({icon,title,pera}) => {
    return (
        <div>
            <div>
               <button className='border-[#22275c] shadow-sm shadow-[#FF7825] border-4 px-3 py-3 bg-[#FF7825] text-3xl rounded-full text-[#F5F3FF]'> {icon}</button>
            </div>
            <div className='mt-5'>
                <h2 className='text-[#000642] mb-4 text-[26px] font-semibold'>{title}</h2>
                <p className='text-[#000642]'>
                    {pera}
                </p>
            </div>
        </div>
    );
};

export default WhyPlayBox;