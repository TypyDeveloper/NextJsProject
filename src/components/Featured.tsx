import React from 'react'
import Image from 'next/image'

export const Featured = () => {
    return (
   
        <div>
            
            <div className='grid justify-items-center  gap-y-2 justify-center text-xs sm:text-2xl   '>
            <h1 className='font-bold sm:text-3xl sm:mr-[1050px]  mr-[150px]'>Featured</h1>
            <Image src={"/assets/Image (4).png"} alt='' width={800} height={200} quality={100} className='w-[200px] h-[200px] sm:w-[1200px] sm:h-[400px]' /><br/>
            <h2 className='font-bold'>STEP INTO WHAT FEELS GOOD</h2>
            <h1 className='sm:text-lg'>Cause everyone should know the feeling </h1>
            <h1 className='sm:text-lg'>of running in that perfect pair.</h1>
            <button className='bg-black  rounded-lg text-white  flex justify-center items-center text-xs sm:text-lg p-1 sm:p-3'>Find your Shoe</button>
            


            </div>
                 







         </div>
    )
}





// <div className='bg-gray-500 text-sm  sm:font-semibold md:text-3xl'>
// <h2>Featured</h2>

// </div>
// <div className='bg-yellow-800 grid justify-items-center  '>




// <div className='flex justify-center items-center'>
// <Image src={"/assets/Image (4).png"} alt='' width={1000} height={1000} quality={100} className='w-[290px] h-72 md:w-[1280px] md:h-[400px]' />

// </div>
// <div className='bg-slate-500 grid sm:justify-items-center justify- center items-center '>
// <div className='flex justify-center items-center text-xs font-semibold text-nowrap   md:text-3xl md:font-bold'>
//     <h2>STEP INTO WHAT FEELS GOOD</h2>
// </div>
// <div className='bg-blue-800 text-[8px] text-wrap  flex sm:justify-center items-center  '>
//     <h2 className=''>Cause everyone should know the feeling of running in that perfect pair.</h2>
    

// </div>
// <div className='flex justify-center items-center'>
// <button className='bg-black  rounded-lg text-white text-nowrap flex justify-center items-center text-sm sm:text-xl p-1 sm:p-3'>Find your Shoe</button>

   

// </div>

// </div>









// </div>
