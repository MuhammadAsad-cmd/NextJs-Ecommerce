"use client";
import {
  decrement,
  increment,
  removefromcart,
} from "@/app/lib/Slices/CartSlices";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const [selectedShippingOption, setSelectedShippingOption] = useState("free");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems ? cartItems.length : 0;

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      return acc + item.pricenow * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    const Subtotal = calculateSubtotal();
    const shippingRate = selectedShippingOption === "flat" ? 10 : 0;
    return Subtotal + shippingRate;
  };

  const handleremovefromcart = (item) => {
    dispatch(removefromcart(item));
  };

  const handleIncrement = (itemId) => {
    dispatch(increment({ itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement({ itemId }));
  };

  return (
    <>
      <div className="Popppins container mx-auto my-20 max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
          Home <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000]">Cart</span>
        </p>

        <div className="mt-20">
          {cartQuantity === 0 ? (
            <p>There is no products in your Cart</p>
          ) : (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr
                    className={`Shadow mb-10 h-[72px] w-full bg-[#FFFFFF] text-base leading-6`}
                  >
                    <td scope="col" className="py-3 md:px-6">
                      Product
                    </td>
                    <td scope="col" className="py-3 md:px-6">
                      Price
                    </td>
                    <td scope="col" className="py-3 md:px-6">
                      Quantity
                    </td>
                    <td scope="col" className="py-3 md:px-6">
                      Subtotal
                    </td>
                  </tr>
                  {cartItems.map((item) => {
                    const { id, title, imageUrl, pricenow, quantity } = item;
                    const itemSubtotal = pricenow * quantity;
                    return (
                      <tr
                        key={id}
                        className={`Shadow group mb-10 w-full bg-[#FFFFFF] text-base leading-6 md:h-[72px]`}
                      >
                        <td className="px-3 py-4 font-medium text-gray-900 md:px-6">
                          <div className="flex flex-col md:flex-row md:items-center md:gap-5">
                            <div className="relative">
                              <Image
                                width={54}
                                height={54}
                                unoptimized
                                alt="led"
                                src={imageUrl}
                                className="h-[54px] w-[54px] object-cover"
                              />
                              <div
                                onClick={() => handleremovefromcart(item)}
                                className="absolute -left-2 top-0"
                              >
                                <Image
                                  width={24}
                                  height={24}
                                  unoptimized
                                  src="/images/delete.svg"
                                  className="h-6 w-6 cursor-pointer opacity-0 transition-opacity  duration-500 ease-in-out group-hover:opacity-100"
                                />
                              </div>
                            </div>

                            <p>{title}</p>
                          </div>
                        </td>
                        <td className="px-3 py-4 md:px-6">${pricenow}</td>
                        <td className="px-3 py-4 md:px-6">
                          <div className="flex h-11 max-w-[72px] items-center justify-between gap-4 rounded border border-[#00000066] px-3 py-[6px]">
                            <p>{item.quantity}</p>
                            <div>
                              <Image
                                width={16}
                                height={16}
                                unoptimized
                                src="/images/Drop-Up-Small.svg"
                                alt="down"
                                className="h-4 w-4 cursor-pointer"
                                onClick={() => handleIncrement(id)}
                              />
                              <Image
                                width={16}
                                height={16}
                                unoptimized
                                src="/images/Drop-Down-Small.svg"
                                alt="down"
                                className="h-4 w-4 cursor-pointer"
                                onClick={() => handleDecrement(id)}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 md:px-6">
                          ${itemSubtotal.toFixed(0)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              type="submit"
              className="rounded border border-[#00000080] px-12 py-4 text-center text-base font-medium leading-6 text-[#000000] duration-300 ease-in-out hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
            >
              Return To Shop
            </Link>
            <button
              type="submit"
              className="rounded border border-[#00000080] px-12 py-4 text-center text-base font-medium leading-6 text-[#000000] duration-300 ease-in-out hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
            >
              Update Cart
            </button>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-5 lg:flex-row">
            <div className="flex  gap-4">
              <input
                type="text"
                className="block h-[50px] w-full max-w-[300px] rounded border border-[#000000] p-2.5 text-sm text-black opacity-50 outline-none"
                placeholder="Coupon Code"
              />
              <button
                type="submit"
                className="h-[50px] w-full max-w-[211px] rounded bg-[#DB4444] px-10 py-4 text-center text-sm font-medium text-white "
              >
                Apply Coupon
              </button>
            </div>
            <div className="rounded border border-[#000000] px-6 py-8 lg:min-w-[470px]">
              <h2 className="text-xl font-medium leading-7">Cart Total</h2>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h4>Subtotal:</h4>
                  <p> ${calculateSubtotal().toFixed(0)}</p>
                </div>
                <div className="my-4 border-t border-[#000000] border-opacity-50"></div>
                <div className="flex items-center justify-between">
                  <h4>Shipping:</h4>
                  <p>Free</p>
                </div>
                <div className="my-4 border-t border-[#000000] border-opacity-50"></div>

                <div className="flex items-center justify-between">
                  <h4>Total:</h4>
                  <p>${calculateTotal().toFixed(0)}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Link href="/pages/checkout">
                    <button
                      type="submit"
                      className="mt-4 flex h-[50px] items-center justify-center rounded bg-[#DB4444] px-12 py-4 text-center text-sm font-medium text-white "
                    >
                      Procees to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
