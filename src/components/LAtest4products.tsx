
"use client"
import { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import {  Four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ProductType } from "../../types/products";

export default function FourProducts() {
    const [data, setdata] = useState<ProductType[]>([])
    useEffect(() => {
        const fetchdata = async () => {
            const url: ProductType[] = await client.fetch(Four);
            setdata(url);
        
        }
        fetchdata();
       
        

    }, [])
    return (
        <div className="max-w-6xl mx-auto px-y py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Latest Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {data.map((dataget)=>(
            <div key={dataget._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                <Link href={`/dynamic/${dataget._id}`}>
                {dataget.image && (
                     <Image src={urlFor(dataget.image).url()} alt={dataget.productName} width={200} height={200}
                     className="w-full h-48 object-cover rounded-md"/>) }
                     <h2 className="text-lg font-semibold mt-4">Name:
                     {dataget.productName}
                     </h2>
                     <p className="text-gray-500 mt-2">Price: {dataget.price}</p>
                     </Link>
              
                
            </div>

         ))}
        </div>


        </div>
        
    )

} 