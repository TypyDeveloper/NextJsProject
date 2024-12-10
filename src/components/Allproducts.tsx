import React from 'react'
import Link from 'next/link'
import { TbMathGreater } from "react-icons/tb";
import Image from 'next/image';


const Allproducts = () => {
    return (
        <div className='bg-green-00 w-full h-[4800px] flex justify-center items-center md:flex md:justify-center md:items-center md:w-full md:h-[500]'>


          <div className='bg-pink-00 flex justify-center items-center w-[700px] h-[4700px] md:w-[1100px] md:h-[300] '>
          <div className=' bg-gray-00  text-black w-56 md:w-[320px] h-[900px]  md:h-[850px] p-3 mb-[3770px] md:mb-[3800px]'>

<h1 className='text-xl font-semibold md:font-bold md:text-3xl'> New (500)</h1>
<div className='mt-4 w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Shoes</h1> < TbMathGreater className='mt-[6px] md:mt-2 font-bold' />
</div>
<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Sports Bra</h1> < TbMathGreater className='mt-[6px] md:mt-2 font-bold' />
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Top & T-shirts</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Hoodies & Sweatshirts</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Jackets</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Trouser's & Tights</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Shorts</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Tracksuits</h1>
</div>

<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Jumpsuits & Rompers</h1>
</div>
<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lgfont-sans flex justify-items-center'>Skirts & Dresses</h1>
</div>
<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lg font-sans flex justify-items-center'>Socks</h1>
</div>
<div className=' w-[98%] h-[30px] flex justify-between md:w-[98%] md:h-[30px] md:flex md:justify-between md:items-start'>
    <h1 className=' md:text-lgfont-sans flex justify-items-center'>Accessoiries & Equipments</h1>
</div>
{/* Gender Division */}

<div>
    <div className='mt-8' >
        <h2 className='font-bold'>Gender</h2>
    </div>
    <div className='mt-4 ml-6'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label > Men</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label>Women</label><br/>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label > Unisex</label><br/>
                            </div>



                        </div>
                        {/* Kids Division */}
                        <div>
    <div className='mt-8' >
        <h2 className='font-bold'>Kids</h2>
    </div>
    <div className='mt-4 ml-6'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label > Girl's</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label>Boy's</label><br/>
                        </div>
                    </div>

                    {/* Shop By Price */}
                    <div>
    <div className='mt-8' >
        <h2 className='font-bold'>Shop By Price</h2>
    </div>
    <div className='mt-4 ml-6'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label > Under 1000-4000</label><br/>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label>Under 5000-10000</label><br/>
                        </div>
                    </div>


                </div>
                {/* Side Slider End */}
                <div className=''>
                
<div className=" bg-orange-00 flex justify-center items-center mt-7 w-[320px] h-[4700px] md:w-[750px] md:mt-0 md:h-[1600px] md:mb-[3050px] text-black">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-6">
{/* Card 1 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">

<Link href={"/productdetails"}><Image
src="/assets/Image (1).png"
alt="Card Image" 
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>

{/* Card 2 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download (1).jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>

{/* Card 3 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download (2).jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 4 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download (3).jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 5 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download (8).jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 6 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download (1).jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 7 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/download.jpeg"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 8 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/Image (2).png"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 9 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/Image (3).png"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>

{/* Card 10 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/Image (3).png"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 11 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/Image (3).png"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>
{/* Card 12 */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<Link href={"/productdetails"}><Image
src="/assets/Image (3).png"
alt="Card Image"
width={100} height={48}
className="w-full h-48 object-cover"
/></Link>
<div className="p-4">
<h2 className="text-lg font-semibold text-red-600">Just in</h2>
<p className="mt-2 text-gray-600">
Nike Airforce Mid-07
</p>
<p className="mt-1 text-gray-600">
Men&apos;s Shoes
</p>
<p className="mt-1 text-gray-600">
1 Color
</p>
<p className="mt-1 text-black">
MPR: 10.56
</p>

</div>
</div>






































</div>
</div>

                </div>

          </div>


            





                              

                </div>
           

        
        

                                









        // </div>





                            )
}

                            export default Allproducts