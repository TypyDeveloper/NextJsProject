

import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Gearup = () => {
  return (
    <div className='bg-blac w-full grid justify-center items-center md:grid md:justify-center md:justify-items-center  gap-1 md:gap-4 text-black'>
        <div className='bg-gray-00 m-0 w-[800px] h-[300px] grid justify-center md:grid md:justify-center md:justify-items-center  md:w-[1500px] md:h-[600px]'>
            <div className='g-green-800 w-[515px] p-2 h-12 md:w-[1390px] md:h-16 flex justify-between items-center font-sans'>
                <div className='g-yellow-900 w-28 h-10 md:w-96 md:h-11 flex justify-center items-center md:flex md:justify-start md:items-center font-semibold md:font-bold md:ml-14 md:text-3xl'>
                    <h2>Gear Up</h2>
                </div>
                <div className='bg-orange-00 w-32 h-7 flex justify-center items-center md:w-36 md:h-9 gap-x-2'>
                    <div>
                        <h2>Shop now</h2>
                    </div>
                    <div>
                        <IoIosArrowBack/>
                    </div>
                    <div>
                        <IoIosArrowForward/>
                    </div>

                </div>

            </div>
            <div className='bg-violet-00 w-[510px] h-48 flex justify-center items-center md:w-[1350px] md:h-[410px] md:flex md:justify-center md:items-center gap-4 md:gap-8'>
                <div className='bg-orange-00 w-40 h-44  grid justify-center  items-center md:w-[350px] md:h-[390px] '>
                    <div>
                    <Image src={"/assets/7d2e335b4004272f096f61eca801a9ac.png"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' />
                    </div>
                    <div className=' bg-green-00 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[45px]'>
                        <div >
                        <h2 className='font-bold text-[9px] md:text-lg '>Nike Dri-FIT ADV TechKnit Ultra                  </h2>
                        </div>
                        <div>
                            <h2 className='font-black'>$13.995</h2>
                   </div>
                   
                    </div>
                    <div className=' bg-green-00 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
                        <h2 className='text-[10px] md:text-lg text-gray-800 '>Men&apos;s Short Seleeves</h2>
                    </div>
                    </div>

                {/* div 2 */}
                <div className='bg-orange-00 w-40 h-44  grid justify-center  items-center md:w-[350px] md:h-[390px] '>
                    <div>
                    <Image src={"/assets/d21cfea7f93af3fddc954f517700a18f.png"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' />
                    </div>
                    <div className=' bg-green-00 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[45px]'>
                        <div >
                        <h2 className='font-bold  text-[9px]  md:text-lg'>  Nike Dri-FIT ADV Run Division                </h2>
                        </div>
                        <div className='font-black'>
                            <h2 className='font-black'>$13.995</h2>
                   </div>
                   
                    </div>
                    <div className=' bg-green-00 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
                        <h2 className='text-[10px] md:text-lg text-gray-800 '>Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</h2>
                    </div>
                    </div>
                                        
                 {/*Div 3  */}

                 <div className='bg-orange-00 w-40 h-44  grid justify-center  items-center md:w-[350px] md:h-[390px] '>
                    <div>
                    <Image src={"/assets/5350c2e6e9423b89c3f22deea4f2d8bc.png"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' />
                    </div>
                    <div className=' bg-green-00 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[20px]'>
                        <div >
                        <h2 className='font-bold  text-[9px]  md:text-lg'>Nike Dri-FIT Challenger                  </h2>
                        </div>
                        <div>
                            <h2 className='font-black'>$13.995</h2>
                   </div>
                   
                    </div>
                    <div className=' bg-green-00 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
                        <h2 className='text-[10px] md:text-lg text-gray-800 '>Women&apos;s Long-Sleeve Running Top</h2>
                    </div>
                    </div>


                </div>
                <div>

                </div>
                <div>

                </div>
           

            </div>
    
    
    </div>
  )
}

export default Gearup