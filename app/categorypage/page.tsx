import React from 'react'
import Navbar from '../components/Navbar'
import Hero1 from '../components/Hero1'
import AllPodcasts from '../components/AllPodcasts'
import Connect from '../components/Connect'
import Explore from '../components/Explore'

const CategoriesPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero1/>
        <AllPodcasts/>
        <Explore/>
        <Connect />
    </div>
  )
}

export default CategoriesPage