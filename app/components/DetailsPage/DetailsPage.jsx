"use client";
import { decrement, increment } from "@/app/lib/Slices/CartSlices";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const DetailsPage = () => {
  const [quantity, setQuantity] = useState(0);
  const SelectedProduct = useSelector((state) => state.cart.selectedProduct);
  const dispatch = useDispatch();

  const QuantityinCart = useSelector((state) => {
    const itemInCart = SelectedProduct?.id;
    return (
      state.cart.items.find((item) => item.id === itemInCart)?.quantity || 0
    );
  });

  const handleIncrement = () => {
    dispatch(increment({ itemId: SelectedProduct.id }));
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrement({ itemId: SelectedProduct.id }));
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="Popppins container mx-auto my-20 max-w-[1170px] px-3 md:px-5 lg:px-10 xl:px-0">
        <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
          Account <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000] text-opacity-50">Gaming</span>
          <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000]">Havic HV G-92 Gamepad</span>
        </p>

        <div className="mt-20 flex flex-col gap-7 lg:flex-row">
          <div className="hidden space-y-4 lg:block">
            <div className="flex h-[138px] w-[170px] items-center justify-center bg-[#F5F5F5]">
              <Image
                width={121}
                height={114}
                unoptimized
                src={SelectedProduct.imageUrl}
                alt="gamepad"
                className="h-full w-full"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center bg-[#F5F5F5]">
              <Image
                width={121}
                height={114}
                unoptimized
                src={SelectedProduct.imageUrl}
                alt="gamepad"
                className="h-full w-full"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center bg-[#F5F5F5]">
              <Image
                width={121}
                height={114}
                unoptimized
                src={SelectedProduct.imageUrl}
                alt="gamepad"
                className="h-full w-full"
              />
            </div>
            <div className="flex h-[138px] w-[170px] items-center justify-center bg-[#F5F5F5]">
              <Image
                width={121}
                height={114}
                unoptimized
                src={SelectedProduct.imageUrl}
                alt="gamepad"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F5F5F5] md:ml-4 xl:ml-[30px] xl:h-[600px] xl:w-[500px]">
            <Image
              width={500}
              height={400}
              unoptimized
              src={SelectedProduct.imageUrl}
              alt="game"
              className="h-full max-h-[400px] w-full max-w-[446px] object-fill lg:max-h-[315px]"
            />
          </div>
          <div className="md:ml-5 xl:ml-[70px]">
            <h2 className="Inter text-2xl font-semibold leading-6">
              {SelectedProduct.title}
            </h2>
            <div className="mt-4 flex items-center">
              <div className="flex items-center gap-1">
                {Array.from({ length: SelectedProduct.rating }).map(
                  (_, index) => (
                    <Image
                      key={index}
                      src="/images/starlight.svg"
                      width={20}
                      height={20}
                      unoptimized
                      className="h-5 w-5"
                      alt="star"
                    />
                  ),
                )}
              </div>
              <p className="ml-2 text-[#000000] text-opacity-50">
                ({SelectedProduct.reviews})
              </p>
              <span className="mx-4 h-[21px] w-[1px] bg-[#000000] opacity-50"></span>
              <p className="text-[#00FF66]">In Stock</p>
            </div>

            <p className="Inter mt-4 text-2xl">${SelectedProduct.pricenow}</p>

            <p className="mt-5 max-w-[380px]">{SelectedProduct.description}</p>
            <div className="my-6 border-t border-[#000000] border-opacity-50"></div>

            <div>
              <p className="Inter text-xl font-normal leading-5">Colours:</p>
            </div>

            <div className="mt-5 flex items-center gap-2 md:gap-6">
              <p className="Inter text-xl font-normal leading-5">Size:</p>
              <div className="flex items-center gap-1 md:gap-4">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] font-medium hover:border-none hover:bg-[#DB4444] hover:text-white">
                  XS
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] font-medium hover:border-none hover:bg-[#DB4444] hover:text-white">
                  S
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] font-medium hover:border-none hover:bg-[#DB4444] hover:text-white">
                  M
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] font-medium hover:border-none hover:bg-[#DB4444] hover:text-white">
                  L
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#00000080] font-medium hover:border-none hover:bg-[#DB4444] hover:text-white">
                  XL
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex h-11 w-[160px] rounded border border-[#00000080]">
                <p
                  onClick={handleDecrement}
                  className="flex h-full w-10 cursor-pointer items-center justify-center border-r border-[#00000080] hover:bg-[#DB4444] hover:text-white"
                >
                  <FaMinus />
                </p>
                <div className="flex h-full w-20 items-center justify-center border-r border-[#00000080]">
                  {QuantityinCart}
                </div>
                <p
                  onClick={handleIncrement}
                  className="flex h-full w-10 cursor-pointer items-center justify-center hover:border-none hover:bg-[#DB4444] hover:text-white"
                >
                  <FaPlus />
                </p>
              </div>
              <Link href="/pages/checkout">
                <button className="h-11 w-[165px] rounded bg-[#DB4444] px-12 py-[10px] text-base font-medium leading-6 text-white">
                  Buy Now
                </button>
              </Link>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded border border-[#00000080]">
                <Image
                  width={20}
                  height={17}
                  unoptimized
                  src="/images/heart.svg"
                  alt="heart"
                  className="h-5 w-5"
                />
              </div>
            </div>

            <div className="mt-8 rounded border border-[#00000080] py-6">
              <div className="flex items-center gap-4 pl-4">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/icon-delivery.svg"
                  alt="shipping"
                  className="Invert h-10 w-10"
                />
                <div>
                  <h2 className=" text-base font-medium leading-6">
                    Free Delivery
                  </h2>
                  <p className="mt-2 text-xs font-medium leading-5">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="mt-4 border-t border-[#000000] opacity-50"></div>
              <div className="flex items-center gap-4 pl-4 pt-4">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/Icon-return.svg"
                  alt="shipping"
                  className="h-10 w-10"
                />
                <div>
                  <h2 className=" text-base font-medium leading-6">
                    Return Delivery
                  </h2>
                  <p className="mt-2 text-xs font-medium leading-5">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
