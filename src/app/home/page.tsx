// import AirMax from '@/components/AirMax'
import Dontmiss from '@/components/Dontmiss'
import { Featured } from '@/components/Featured'
import FlightEssential from '@/components/FlightEssential'
import HeroPage1 from '@/components/Hero1'
import HeroPage from '@/components/Hero2'
import FourProducts from '@/components/LAtest4products'


import React from 'react'



const HomePage = () => {
  return (
    <div >
        
        <HeroPage1/>
        <HeroPage/>
      
        <FourProducts/>

        <Featured/>
     
        <Dontmiss/>


        <FlightEssential/>
    </div>
  )
}

export default HomePage 