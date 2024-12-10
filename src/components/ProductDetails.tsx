import React from 'react'
import Link from 'next/link'

import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  return (
    <div className='flex justify-center items-center w-full h-[600px]'>
        <div className='bg-blac w-[480px] h-[390px]  md:w-[1200px] md:h-[680px] md:p-5 flex justify-between items-center md:flex p-4'>
            <div className='bg-slate-00 grid justify-center items-center w-44 h-[350px]  md:w-[400px] md:h-[500px] md:ml-20 md:mb-4 '>
                <div className='bg-green-00 w-40 h-12 md:w-96 p-2  md:h-28 flex md:flex text-black  justify-between items-center'>
                
                <h2 className='md:text-5xl font-semibold '>Nike Air Force 1 
                PLT.AF.ORM</h2>
                </div>
                <div className='bg-orange-00 w-40 h-56 md:w-96  p-2 md:p-5 md:h-72 grid md:grid text-black  justify-between items-center md:space-y-4 '>
                    <h2 className='text-wrap text-[9px] md:text-sm '>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</h2>
                    <h1 className='md:text-2xl md:font-bold'>$8,695.00</h1>
                    

                </div>
                <div className='bg-black w-28 h-9 flex flex-row justify-center items-center rounded-lg md:justify-center md:items-center text-[12px] md:font-2xl text-white  md:w-40 md:h-16 md:flex  md:flex-row'>
                <div>
                    < FaShoppingCart className=' font-bold w-8 h-4  md:w-10 md:h-8 md:mr-3'/>
                    </div>
                    <div>
                    <Link href="" >Add To Cart</Link>
                    </div>
                   
                    

                </div>

            </div>
            <div>
                <Image src={"/assets/download (4).jpeg"} alt="mobile image" width={240} height={22} className='w-64 h-56 md:w-[540px] md:h-[500px]'   />

            </div>

        </div>

    </div>
  )
}

export default ProductDetails