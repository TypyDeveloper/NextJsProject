import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { SheetSide } from './Sheet';


const Navbar2 = () => {
    return (
        <header className='bg-pink-30  sm:h-[60px] flex sm:flex   items-center  sm:justify-center sm:items-center'>
            {/* lefticon */}
            <div className='flex justify-center  items-center'>
                <SheetSide/>
                <Image src={"/assets/Frame (1).png"} alt='nike icon image' width={50} height={20}
                    className=' w-[35px] sm:w-[60px]' />
            </div>
            {/* navbar */}
            <ul  className='sm:block justify-center items-center'>
                <li className=' sm:space-x-1 sm:font-semibold sm:ml-60  hidden sm:flex'>
                <Link href={'./'} className='mt-[6px]' >Home</Link>
                    
                    <Link href={"./carts"}>New & Featured </Link>
                    <Link href={"./carts"}>Men's</Link>
                    <Link href={"./carts"}>Women's</Link>
                    <Link href={'./carts'} className='mt-[6px]' >Sale</Link> &nbsp;&nbsp;&nbsp;
                    <Link className='mt-[6px]' href={"./carts"}>SNKRs </Link>

                </li>
            </ul>
            
                <div className=' bg-[#F5F5F5] hidden sm:flex  sm:ml-32 sm:w-[250px] sm:rounded sm:justify-center sm:items-center'>

                    <CiSearch className='sm:text-2xl sm:text-black' />
                    <input type="text" placeholder='Search...' />
                </div>
                {/* Icons */}
                <div className='flex ml-16 sm:ml-12 sm:space-x-4 sm:flex'>
                    < GoHeart className='sm:text-2xl' />
                    <Link href={"./cart"}>
                    <IoCartOutline className='sm:text-2xl' />
                    </Link>
                  
                </div>
            {/* </div> */}
        </header>

    )
}

export default Navbar2




