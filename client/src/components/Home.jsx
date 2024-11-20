import React from 'react'
import Navbar from './ui/Navbar'
import HeroSection from './ui/HeroSection'
import CategoryDisplay from './ui/CategoryDisplay'
import LatestJobs from './LatestJobs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <CategoryDisplay /> */}
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home
