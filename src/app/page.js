'use client'
import AboutSection from '@/Pages/Home/AboutSection'
import AwesomeGame from '@/Pages/Home/AwesomeGame'
import CreateVisual from '@/Pages/Home/CreateVisual'
import Faq from '@/Pages/Home/Faq'
import GameStudio from '@/Pages/Home/GameStudio'
import GetUpdate from '@/Pages/Home/GetUpdate'
import HeroSection from '@/Pages/Home/HeroSection'
import OurTeam from '@/Pages/Home/OurTeam'
import PlayGame from '@/Pages/Home/PlayGame'
import RoadMap from '@/Pages/Home/RoadMap'
import TokenDetails from '@/Pages/Home/TokenDetails'
import UpcomingGames from '@/Pages/Home/UpcomingGames'
import WhyPlay from '@/Pages/Home/WhyPlay'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
     <HeroSection></HeroSection>
     {/* <AboutSection></AboutSection> */}
     <AwesomeGame show={true}></AwesomeGame>
     <CreateVisual></CreateVisual>
     <GameStudio></GameStudio>
     <OurTeam></OurTeam>
     <WhyPlay></WhyPlay>
     {/* <PlayGame></PlayGame> */}
     <TokenDetails></TokenDetails>
     <Faq accBG={false}></Faq>
     <UpcomingGames></UpcomingGames>
     <GetUpdate></GetUpdate>
     {/* <RoadMap></RoadMap> */}
    </main>
  )
}
