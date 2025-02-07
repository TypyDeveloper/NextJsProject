import React from 'react'

const HeroPage1 = () => {
  return (
    <div>
        <div className='bg-orange-40 w-[100%] h-[55px]  grid justify-center items-center md:w-[100%] md:h-[70px] font-sans mb-2'>
          <div className='bg-purple-40  flex justify-center items-center font-bold text-sm md:text-lg mb-0'>
            <h2 className='mb-0 '> Hello Nike App</h2>
          </div>
          <div className='bg-orange-40 flex justify-center items-center mt-0'>
            <h2 className='mt-0 text-[10px] md:text-base'>Download the app to access everything Nike. <u>Get Your Great</u></h2>

          </div>
        </div>
    </div>
  )
}

export default HeroPage1