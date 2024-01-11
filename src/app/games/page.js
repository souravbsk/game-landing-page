'use client'
import GameHero from '@/Pages/Games/GameHero';
import AwesomeGame from '@/Pages/Home/AwesomeGame';
import GetUpdate from '@/Pages/Home/GetUpdate';
import UpcomingGames from '@/Pages/Home/UpcomingGames';
import AwesomeBox from '@/components/AwesomeBox/AwesomeBox';
import HeroTitle from '@/components/HeroTitle/HeroTitle';
import React from 'react';

const page = () => {
    return (
        <main>
        <GameHero></GameHero>
        <AwesomeGame></AwesomeGame>
        <UpcomingGames></UpcomingGames>
     <GetUpdate></GetUpdate>

       </main>
    );
};

export default page;