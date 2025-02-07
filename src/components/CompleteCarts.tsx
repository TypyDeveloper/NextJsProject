"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { AllProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ProductType } from "../../types/products";
import { Addtocart } from "@/app/AddtoCart/actions";
import Swal from "sweetalert2";


const GetProducts = () => {
  const [allData, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await client.fetch(AllProducts); // Fetch products from Sanity
      setData(products);
      console.log(products); // Debugging log
    };
    fetchData();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: ProductType) => {
    e.preventDefault()
    Swal.fire({
      position :"top-left",
      icon : "success",
      title:`${product.productName} added to cart`,
      showConfirmButton : false,
      timer:1000
    })
  
  
    

    Addtocart(product);

 
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-bold sm:text-2xl">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allData.map((product) => {
          
          return (
            <Link href={`/dynamic/${product._id}`} key={product._id}>
              <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()} // Generate image URL using `urlFor`
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-4">
                  Name: {product.productName}
                </h2>
                <p className="text-gray-500 mt-2">Price: ₹{product.price}</p>
                <button
                  className=" bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add To Cart
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GetProducts;