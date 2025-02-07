import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Cartpage from '@/app/carts/page';


const HeroPage = () => {
  return (
    <div className='bg-blac  grid justify-center items-center h-[420px] md:h-[650px] md:grid md:justify-center md:justify-items-center m-0 gap-1 md:gap-4'>
        <div className='bg-gray-00 m-0 w-[450px] h-[400px] grid justify-items-center md:w-[90%] md:h-[640px]'>
          <div>
            <Link href={'./carts'}>  <Image src={"/assets/Shoe.jpg"} alt='heropic' width={1000} height={1000} quality={100} className='w-[450px] h-52 md:w-[1300px] md:h-[370px]' /></Link>
           

          </div>
          <div className='bg-violet-50 grid justify-items-center p-2 w-96 h-44 md:w-[550px] md:h-52 font-sans'>
            <div className=' bg-red-60 w-36 h-6 flex justify-center items-center md:w-[180px] md:h-[30px] text-sm md:flex md:justify-center md:items-center'>
              <h2>First Look</h2>
            </div>
            <div className=' bg-orange-50 w-36 h-6 flex justify-center items-center md:w-[400px] md:h-[50px] text-2xl font-semibold md:font-semibold md:flex md:justify-center md:items-center'>
              <h2 className='text-[14px] font-bold md:text-4xl'>Nike Air Max Pulse</h2>

            </div>
            <div className=' bg-green-60 w-[300px] h-11 flex justify-center items-center text-[8px] text-center md:w-[410px] md:h-[60px] md:text-xs text-black md:flex md:justify-center md:items-center'>
              <h2>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
              —designed to push you past your limits and help you go to the max.</h2>

            </div>
            <div className=' bg-blue-40 w-44 h-8 flex justify-center items-center  text-wrap md:w-[220px] md:h-[50px] md:flex md:justify-center gap-3 md:items-center'>
              <button className='bg-black rounded-lg text-white flex justify-center text-[10px] font-bold md:text-[15px] items-center w-20 h-6 md:w-24 md:h-10'>Notify Me</button>
              <button className='bg-black rounded-lg text-white flex justify-center text-[10px] md:text-[15px] font-bold items-center p-2 '>Shop Air Max</button>

            </div>

          </div>
            
        </div>
        





    </div>
  )
}

export default HeroPage