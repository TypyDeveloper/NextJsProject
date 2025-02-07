"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../AddtoCart/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const [cartitem, setcartitems] = useState<ProductType[]>([]);

  useEffect(() => {
    setcartitems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "You will not be able to Remove",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setcartitems(getCartItems());
        Swal.fire("Removed", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setcartitems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartitem.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartitem.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartitem.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      position: "top-left",
      title: "Proceed to checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success"
        );
        router.push("./checkout")
        
        setcartitems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartitem.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cartitem.map((item) => (
            <div key={item._id} className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                { item.image &&(
                     <Image
                     src={urlFor(item.image).url()}
                     alt={item.productName}
                     width={500}
                     height={500}
                     className="w-20 h-20 object-cover rounded"
                   />

                ) }
               
                <div>
                  <h2 className="text-xl font-semibold">{item.productName}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.inventory}</span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Proceed Button */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8">
            <p className="text-2xl font-bold">
              Total: ${calculatedTotal().toFixed(2)}
            </p>
            <button
              onClick={handleProceed}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4 md:mt-0"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;