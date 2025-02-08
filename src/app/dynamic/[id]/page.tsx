


import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";



interface ProductType {
  _id: string;
  _type: string;
  productName: string;
  description: string;
  price: number;
  inventory: number;
  status: string;
  category: string;
  colors: string[];
  imageUrl: string;
}

async function GetProduct(id: string): Promise<ProductType | null> {
  return client.fetch(
    groq`*[_type == "product" && _id == $id][0]{
      _id,
      _type,
      productName,
      description,
      price,
      inventory,
      status,
      category,
      colors,
      "imageUrl": image.asset._ref
    }`,
    { id } // Bind `id` to the query
  );
}

export default async function ProductPage({ params }: { params:Promise<{ id: string }>}) {
  const { id } = await params; // Extract `id` from the route parameters
  const product = await GetProduct(id);
 
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        {product ? (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="sm:w-1/3">
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.productName}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>

              <div className="sm:w-2/3 space-y-4">
                <p className="text-gray-600">{product.description}</p>
                <div className="text-lg font-semibold text-blue-600">Price: ₹{product.price}</div>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-sm text-gray-500">Status: {product.status}</p>
                <p className="text-sm text-gray-500">Available Colors: {product.colors.join(", ")}</p>
                <p className="text-sm text-gray-500">Inventory: {product.inventory}</p>
                <button
                  className=" bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-600 text-lg">Product not found.</p>
        )}
      </div>
    );
  }

