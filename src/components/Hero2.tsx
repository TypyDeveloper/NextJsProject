import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <div className='bg-black-0 grid justify-center items-center md:grid md:justify-center md:justify-items-center m-0 gap-1 md:gap-4'>
        <div className='bg-gray-00 m-0 w-[450px] h-[400px] grid justify-items-center md:w-[90%] md:h-[640px]'>
          <div>
            <Link href={"/products"}>  <Image src={"/assets/Shoe.png"} alt='heropic' width={240} height={70} className='w-[450px] h-52 md:w-[1300px] md:h-[370px]' /></Link>
           

          </div>
          <div className='bg-violet-00 grid justify-items-center p-2 w-96 h-44 md:w-[550px] md:h-52 font-sans'>
            <div className=' bg-red-00 w-36 h-6 flex justify-center items-center md:w-[180px] md:h-[30px] text-sm md:flex md:justify-center md:items-center'>
              <h2>First Look</h2>
            </div>
            <div className=' bg-orange-00 w-52 h-6 flex justify-center items-center md:w-[480px] md:h-[40px] text-2xl md:text-5xl font-semibold md:font-semibold md:flex md:justify-center md:items-center'>
              <h2>Nike Air Max Pulse</h2>

            </div>
            <div className=' bg-green-00 w-[420px] h-16 flex justify-center items-center text-xs text-center md:w-[410px] md:h-[80px] md:text-xs text-black md:flex md:justify-center md:items-center'>
              <h2>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
              —designed to push you past your limits and help you go to the max.</h2>

            </div>
            <div className=' bg-blue-00 w-64 h-12 flex justify-center items-center text-wrap md:w-[] md:h-[] md:flex md:justify-center gap-3 md:items-center'>
              <button className='bg-black rounded-lg text-white flex justify-center items-center w-24 h-8 md:w-24 md:h-10 text-sm'>Notify Me</button>
              <button className='bg-black rounded-lg text-white flex justify-center items-center w-24 h-8 md:w-24 md:h-10 text-sm'>Shop Air Max</button>

            </div>

          </div>
            
        </div>
        





    </div>
  )
}

export default HeroPage