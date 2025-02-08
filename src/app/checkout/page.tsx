"use client"
import React, { useEffect, useState } from 'react'
import { ProductType } from '../../../types/products'
import { getCartItems } from '../AddtoCart/actions';
import { Link } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const Checkout = () => {
  const [cartItems, setcartItems] = useState<ProductType[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setformValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: ""
  })
  const [formErrors, setformErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    address: false,
    zipcode: false,
    city: false
  })
  useEffect(() => {
    setcartItems(getCartItems());
    const apppliedDiscount = localStorage.getItem("appliedDiscount");
    if (apppliedDiscount) {
      setDiscount(Number(apppliedDiscount))
    }
  }, [])
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory, 0
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformValues({
      ...formValues,
      [e.target.value]: e.target.value
    })
  }
  const validateForm = () => {
    const error = {
      firstname: !formValues.firstname,
      lastname: !formValues.lastname,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipcode: !formValues.zipcode,
      city: !formValues.city
    };
    setformErrors(error);
    return Object.values(error).every((error) => !error);
  }
  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("apppliedDiscount")
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/cart"
              className="text-blue-500 hover:text-blue-600 text-sm sm:text-base"
            >
              ← Back to Cart
            </Link>
            <span className="text-lg sm:text-xl font-semibold text-gray-800">
              Checkout
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between border-b py-4 gap-4"
              >
                {/* Product Image */}
                <div className="flex-shrink-0">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.productName}
                  </h3>
                  <p className="text-gray-600">Quantity: {item.inventory}</p>
                </div>

                {/* Price */}
                <p className="text-lg font-semibold text-gray-800">
                  ${(item.price * item.inventory).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No items in cart.</p>
          )}
          <div className="bg-white p-6 rounded-lg shadow-sm">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
  <div className="space-y-3">
    {/* Subtotal */}
    <div className="flex justify-between">
      <p className="text-gray-600">Subtotal</p>
      <p className="text-gray-800 font-semibold">${subTotal.toFixed(2)}</p>
    </div>

    {/* Discount */}
    <div className="flex justify-between">
      <p className="text-gray-600">Discount</p>
      <p className="text-gray-800 font-semibold">${discount.toFixed(2)}</p>
    </div>

    {/* Total */}
    <div className="flex justify-between border-t pt-3">
      <p className="text-lg font-bold text-gray-800">Total</p>
      <p className="text-lg font-bold text-gray-800">${subTotal.toFixed(2)}</p>
    </div>
  </div>
</div>
        </div>
        <div>
          <h2 className='font-bold sm:text-2xl'>Billing Information</h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* First Name */}
    <div>
      <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
        First Name
      </label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formValues.firstname}
        onChange={handleInputChange}
        placeholder="Enter Your First Name"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.firstname && (
        <p className="mt-1 text-sm text-red-600">First Name is Required</p>
      )}
    </div>

    {/* Last Name */}
    <div>
      <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
        Last Name
      </label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formValues.lastname}
        onChange={handleInputChange}
        placeholder="Enter Your Last Name"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.lastname && (
        <p className="mt-1 text-sm text-red-600">Last Name is Required</p>
      )}
    </div>

    {/* Address */}
    <div className="sm:col-span-2">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={formValues.address}
        onChange={handleInputChange}
        placeholder="Enter Your Address"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.address && (
        <p className="mt-1 text-sm text-red-600">Address is Required</p>
      )}
    </div>

    {/* Phone */}
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Phone
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
        placeholder="Enter Your Phone"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.phone && (
        <p className="mt-1 text-sm text-red-600">Phone is Required</p>
      )}
    </div>

    {/* ZipCode */}
    <div>
      <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
        ZipCode
      </label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        value={formValues.zipcode}
        onChange={handleInputChange}
        placeholder="Enter Your ZipCode"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.zipcode && (
        <p className="mt-1 text-sm text-red-600">ZipCode is Required</p>
      )}
    </div>

    {/* Email */}
    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Enter Your Email"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.email && (
        <p className="mt-1 text-sm text-red-600">Email is Required</p>
      )}
    </div>

    {/* City */}
    <div className="sm:col-span-2">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        City
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formValues.city}
        onChange={handleInputChange}
        placeholder="Enter Your City"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {formErrors.city && (
        <p className="mt-1 text-sm text-red-600">City is Required</p>
      )}
    </div>
    <button
  onClick={handlePlaceOrder}
  className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Place Order
</button>
  </div>
</div>

        </div>
      </div>
    </div>

  )
}


export default Checkout;