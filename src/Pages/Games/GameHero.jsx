import HeroTitle from '@/components/HeroTitle/HeroTitle';
import React from 'react';

const GameHero = () => {
    return (
        <section className=' bg-[#F5FAFF] pb-16 md:pb-32 pt-48'>
        <div className='container'>
       <HeroTitle pageName="Game Page" pageTitle="Game"></HeroTitle>
        </div>
       </section>
    );
};

export default GameHero;