import AirMax from '@/components/AirMax'
import Dontmiss from '@/components/Dontmiss'
import { Featured } from '@/components/Featured'
import FlightEssential from '@/components/FlightEssential'
import Gearup from '@/components/Gearup'
import HeroPage1 from '@/components/Hero1'
import HeroPage from '@/components/Hero2'
import Navbar2 from '@/components/Navbar2'
import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full h-12000'>
        
        <HeroPage1/>
        <HeroPage/>
        <AirMax/>
        <Featured/>
        <Gearup/>
        <Dontmiss/>

        <FlightEssential/>
    </div>
  )
}

export default HomePage 