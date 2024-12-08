import React from 'react'
import Image from 'next/image'

const Dontmiss = () => {
  return (
    <div className='bg-blac flex justify-center items-center'>
        <div className='bg-yellow-00 w-[600px] h-[320px] grid justify-items-center md:w-[1200px] md:h-[500px] mt-0'>
            <div className='bg-orange-00 w-28 h-8 md:w-[190px] md:h-[35px] mr-96 mt-2 md:mt-3 md:mr-[1100px] font-semibold md:text-3xl'>

                <h2>Don&apos;t Miss</h2>
            </div>
            <div>
                <Image src={"/assets/017347b121cf5c3f123897602c6d0905.png"} alt='' width={80} height={200} className='w-[480px] h-72 md:w-[1100px] md:h-[400px]'/>

            </div>
        </div>
    </div>
  )
}

export default Dontmiss