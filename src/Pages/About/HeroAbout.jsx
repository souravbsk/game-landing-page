import HeroTitle from '@/components/HeroTitle/HeroTitle';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroAbout = () => {
    return (
        <section className=' pb-16 bg-[#F5FAFF] md:pb-32 pt-48'>
         <div className='container'>
        <HeroTitle pageName="About Page" pageTitle="About"></HeroTitle>
         </div>
        </section>
    );
};

export default HeroAbout;