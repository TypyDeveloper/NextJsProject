import React from 'react'
import Image from 'next/image'

export const Featured = () => {
    return (
        <div className='bg-yellow-00  w-[600px] h-[480px] grid justify-items-center md:w-[1400px] md:h-[700px] '>

            <div className='bg-yellow-00 w-[600px] h-[500px] grid justify-items-center md:w-[1200px] md:h-[600px] '>
                <div className='mr-96 mt-2 md:mt-3 md:mr-[1100px] font-semibold md:text-3xl'>
                    <h2>Featured</h2>
                </div>

                <div>
                    <Image src={"/assets/Image (4).png"} alt='' width={80} height={200} className='w-[450px] h-72 md:w-[1180px] md:h-[400px]' />

                </div>
                <div className='bg-slate-00 w-96 h-28 md:w-[620px] md:h-[170px] grid justify-center items-center'>
                    <div className='flex justify-center items-center text-2xl font-semibold   md:text-4xl md:font-bold'>
                        <h2>STEP INTO WHAT FEELS GOOD</h2>
                    </div>
                    <div className='flex justify-center items-center md:text-[14px] text-[11px]'>
                        <h2>Cause everyone should know the feeling of running in that perfect pair.</h2>

                    </div>
                    <div className='flex justify-center items-center'>
                    <button className='bg-black rounded-lg text-white flex justify-center items-center w-28 h-8 md:w-28 md:h-10 text-sm'>Find your Shoe</button>

                       

                    </div>

                </div>









            </div>








        </div>
    )
}
