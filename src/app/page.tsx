import Expertise from '@/components/Expertise'
import Hero from '@/components/Hero'
import HomeImages from '@/components/HomeImages'
import HomeTitle from '@/components/HomeTitle'
import Intro from '@/components/Intro'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <HomeTitle />
      <HomeImages />
      <Expertise />
    </div>
  )
}

export default HomePage
