import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroTitle = ({pageTitle,pageName}) => {
    return (
        <div className=' text-[#000642]'>
        <h2 className='text-3xl md:text-5xl  font-bold text-center'>{pageName}</h2>
        <p className='flex items-center justify-center gap-3 md:text-xl mt-5 font-medium'>Home <FaArrowRight></FaArrowRight> {pageTitle}</p>
      </div>
    );
};

export default HeroTitle;