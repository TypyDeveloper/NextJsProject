// "use client"
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// interface datatype{
//     productName: string,
//     category: string,
//     price: 10795,
//     inventory: 20,
//     colors: [
//         string
//     ],
//     status: string,
//     description: string
// }

// const AirMax = () => {
//     const [nikedata , setnikedata] = useState<datatype[]>([])
// useEffect(()=>{
//     const fetchdata = async() => {
//         const url = await fetch("https://template-03-api.vercel.app/api/products");
//         const res = await url.json();
//         setnikedata(res);

//     }
//     fetchdata();

// },[])
// return(
//     <div>
//         <ul>
        
//         {
//             nikedata.map( (data) => {}
//             })
//         }
//     </ul>


//     </div>
    
// )


// }
// export default AirMax;






























// import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import Image from 'next/image';
// import Link from 'next/link';

// const AirMax = () => {
//   return (
//     <div className='bg-blac w-full  h-[650px] md:w-full md:h-[530px] grid justify-center items-center md:grid md:justify-center md:justify-items-center m-0 gap-1 md:gap-4 text-blac'>
//         <div className='bg-gray-00 m-0 w-[330px] h-[640px] grid justify-items-center md:grid md:justify-center md:justify-items-center  md:w-[1500px] md:h-[510px]'>
//             <div className='bg-green-00 w-[322px] p-2 h-12 md:w-[1390px] md:h-16 flex justify-between items-center font-sans'>
//                 <div className='bg-yellow-00 w-28 h-10 md:w-96 md:h-11 flex justify-center items-center md:flex md:justify-start md:items-center font-semibold md:font-bold md:ml-14 md:text-3xl'>
//                     <h2 className='text-[16px] md:text-[30px]'>Best of Air Max</h2>
//                 </div>
//                 <div className='bg-orange-00 w-28 h-7 flex justify-center items-center md:w-36 md:h-9 gap-x-2'>
//                     <div>
//                         <h2 className='text-[12px] md:text-[20px]'>Shop now</h2>
//                     </div>
//                     <div>
//                         <IoIosArrowBack/>
//                     </div>
//                     <div>
//                         <IoIosArrowForward/>
//                     </div>

//                 </div>

//             </div>
//             <div className='bg-violet-60 w-[230px] h-[570px] grid justify-center items-center md:w-[1350px] md:h-[380px] md:flex md:justify-center md:items-center gap-1 md:gap-8'>
//                 <div className='bg-orange-70 w-48 h-40 p-2 grid justify-center  items-center md:w-[350px] md:h-[350px] '>
//                     <div>
                    
//                     <Link href={"/products"}> <Image src={"/assets/download (1).jpeg"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' /></Link>
//                     </div>
//                     <div className=' bg-green-50 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[20px]'>
//                         <div >
//                         <h2 className='font-bold '>Nike Air Max Pulse                   </h2>
//                         </div>
//                         <div>
//                             <h2>$13.995</h2>
//                    </div>
                   
//                     </div>
//                     <div className=' bg-green-40 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
//                         <h2 className='text-[10px] md:text-lg text-gray-800 '>Women&apos;s Shoes</h2>
//                     </div>
//                     </div>

//                 {/* div 2 */}
//                 <div className='bg-orange-40 w-48 h-40 p-2 grid justify-center  items-center md:w-[350px] md:h-[350px] '>
//                     <div>
                        
//                     <Link href={"/products"}> <Image src={"/assets/Image (2).png"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' /></Link>
//                     </div>
//                     <div className=' bg-green-40 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[20px]'>
//                         <div >
//                         <h2 className='font-bold '>Nike Air Max Pulse                   </h2>
//                         </div>
//                         <div>
//                             <h2>$13.995</h2>
//                    </div>
                   
//                     </div>
//                     <div className=' bg-green-40 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
//                         <h2 className='text-[10px] md:text-lg text-gray-800 '>Women&apos;s Shoes</h2>
//                     </div>
//                     </div>
                                        
//                  {/*Div 3  */}

//                  <div className='bg-orange-50 w-48 h-40 p-2 grid justify-center  items-center md:w-[350px] md:h-[350px] '>
//                     <div>
//                     <Link href={"/products"}><Image src={"/assets/Image (3).png"} alt="" width={30} height={30} className='w-40 h-28 md:w-[330px] md:h-[280px]' /></Link>
//                     </div>
//                     <div className=' bg-green-60 w-[157px] h-5 flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[20px]'>
//                         <div >
//                         <h2 className='font-bold '>Nike Air Max Pulse                   </h2>
//                         </div>
//                         <div>
//                             <h2>$13.995</h2>
//                    </div>
                   
//                     </div>
//                     <div className=' bg-green-60 w-[156px] h-4  flex  justify-between items-center text-[10px] md:text-lg md:w-[330px] md:h-[25px] mb-3'>
//                         <h2 className='text-[10px] md:text-lg text-gray-800 '>Women&apos;s Shoes</h2>
//                     </div>
//                     </div>


//                 </div>
//                 <div>

//                 </div>
//                 <div>

//                 </div>
           

//             </div>
//         </div>


//   )
// }

// export default AirMax