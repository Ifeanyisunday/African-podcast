'use client';

import React from 'react'
import Navbar from '../components/Navbar';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import EditorPick from '../components/EditorPick';
import TrendingWeek from '../components/TrendingThisWeek';
import TrendingEpisodes from '../components/TrendingEpisodes';
import StoryTelling from '../components/StoryTelling';
import Education from '../components/Education';
import Entertainment from '../components/Entertainment';
import Tech from '../components/Tech';
import Others from '../components/Others';
import Listen from '../components/keepListening';
import Partners from '../components/Partners';
import Connect from '../components/Connect';


const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero1/>
        <Hero2/>
        <EditorPick/>
        <TrendingWeek/>
        <TrendingEpisodes/>
        <StoryTelling/>
        <Education />
        <Entertainment />
        <Tech/>
        <Others/>
        <Listen/>
        <Partners/>
        <Connect/>
    </div>
  )
}

export default LandingPage