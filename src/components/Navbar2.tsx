import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
// import { IoCartOutline } from "react-icons/io5";


const Navbar2 = () => {
    return (
        <div>
            <div className=' h-[120px] grid justify-center items-center   md:w-[100%] md:h-[90px]  md:gap-[148px] md:top-[88px] md:left-[135px] md:flex md:justify-center md:items-center'>
            <div className='  md:p-3 grid justify-items-center w-[520px] h-[100px] md:w-[95%] md:h-[68px] md:flex md:justify-between md:items-center'>
                <div className=' flex justify-center items-center md:flex md:justify-center md:items-center w-20 h-10 md:w-[120px] md:h-[54px]'> 
                <Image src={"/assets/Frame (1).png"} alt='nike image' width={80} height={20}/>
                </div>
                <div className=' flex justify-center items-center w-[380px] md:flex md:w-[850px] md:h-[40px] text-black '>
                <ul className='md:w-[78px] text-black font-semibold md:h-[30px] text-nowrap m-0 md:m-0 flex justify-center gap-2 md:flex  md:justify-center md:text-1xl md:gap-12'>
                            <li><Link href="/home" >New & Featured</Link> </li>
                            <li><Link href="/products" >Men </Link></li>
                            <li><Link href="/products" >Women </Link></li>
                            <li><Link href="/products" >Kids</Link></li>
                            <li><Link href="/products" >Sale </Link></li>
                            <li><Link href="/products" >SNKRS</Link></li>

                        </ul>

                </div>
                <div className='md:ml-10  w-[320px] h-[35px] md:w-[350px] md:h-[38px] flex justify-between items-center'>
                    <div className='  text-black w-[243px] h-[22px] flex md:w-[250px] md:h-[33px]  md:flex justify-center items-center'>
                    <CiSearch className='mr-0 md:mr-0 md:font-bold font-bold w-12 h-6 md:w-32 md:h-7 md:text-1xl '/> 
                        <input type="text" name="text" id="text" placeholder='Search.. '   />
                         
                                             

                    </div>
                    <div className='text-black w-[100px] h-[24px] flex md:w-[80px] md:h-[33px]   md:flex justify-center items-center gap-4'>
                        <GoHeart className='md:font-bold font-bold w-12 h-6 md:w-[755px] md:h-9   '/>
                        <Image src={"/assets/Frame (3).png"} alt='cart' width={20} height={25} className='md:font-bold font-bold w-12 h-6 md:w-32 md:h-8  '/>
                        

                    </div>


                </div>
                    
                </div>

            </div>















           
        </div>
    )
}

export default Navbar2