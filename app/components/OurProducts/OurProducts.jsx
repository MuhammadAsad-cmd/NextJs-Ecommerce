"use client";
import { ExploreProductsData } from "@/app/Data/SellingProducts";
import {
  addtocart,
  addtofavourites,
  setProductDetails,
} from "@/app/lib/Slices/CartSlices";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const OurProducts = () => {
  const favourites = useSelector((state) => state.cart.favourites);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFavourites = (item, e) => {
    e.stopPropagation();
    dispatch(addtofavourites(item));
  };

  const handleAddtoCart = (item, e) => {
    e.stopPropagation();
    dispatch(addtocart(item));
  };

  const isInCart = (itemId) => {
    return cartItems.some((product) => product.id === itemId);
  };

  const handleProductClick = (item) => {
    dispatch(setProductDetails(item));
    router.push(`/pages/product_details?${item.title}`);
  };
  return (
    <>
      <div className="Popppins container mx-auto  mt-[70px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            Our Products
          </p>
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="mt-5 flex items-center ">
            <h2
              className="Inter text-[27px] font-semibold leading-snug
           text-[#000000] md:text-4xl"
            >
              Explore Our Products
            </h2>
          </div>
          <div className="hidden items-center justify-center gap-2 md:flex">
            <button className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5]">
              <Image
                width={16}
                height={14}
                unoptimized
                alt="leftSlide"
                className="h-4 w-4"
                src="/images/rightSlide.svg"
              />
            </button>
            <button className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5]">
              <Image
                width={16}
                height={14}
                unoptimized
                alt="leftSlide"
                className="h-4 w-4"
                src="/images/LeftSlide.svg"
              />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-[30px] md:grid-cols-2 lg:grid-cols-4 ">
          {ExploreProductsData.map((item) => (
            <div
              onClick={() => handleProductClick(item)}
              key={item.id}
              className="group"
            >
              <div className="relative cursor-pointer">
                <div className="relative flex h-[260px] flex-col items-center  justify-between bg-[#F5F5F5] pt-4">
                  <Image
                    width={172}
                    height={152}
                    unoptimized
                    src={item.imageUrl}
                    alt="FlashSale"
                    className="h-full max-h-[180px] w-full max-w-[186px] object-contain"
                  />
                  <div className="absolute bottom-0 w-full">
                    {isInCart(item.id) ? (
                      <Link
                        href="/pages/cart"
                        className="flex h-[41px] w-full items-center justify-center  rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      >
                        Browse cart
                      </Link>
                    ) : (
                      <button
                        onClick={(e) => handleAddtoCart(item, e)}
                        className="flex h-[41px] w-full items-center justify-center  rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>

                <div className="absolute right-3 top-3">
                  <div
                    onClick={(e) => handleFavourites(item, e)}
                    className={`${favourites.some((product) => product.id === item.id) ? "border border-white border-opacity-50 bg-black text-white" : "#FFFFFF"} flex h-[34px]
                    w-[34px] cursor-pointer items-center justify-center rounded-full
                  bg-[#FFFFFF]`}
                  >
                    <FaRegHeart />
                  </div>
                  <div className="mt-2 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                    <Image
                      width={16}
                      height={16}
                      unoptimized
                      src="/images/Quick View.svg"
                      className="h-4 w-4"
                      alt="heart"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                  {item.title}
                </h2>

                <div className="mt-2 flex items-center gap-1">
                  <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                    ${item.pricenow}
                  </p>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Image
                      key={index}
                      width={20}
                      height={20}
                      unoptimized
                      src="/images/star2.svg"
                      className="h-5 w-5"
                      alt="star"
                    />
                  ))}
                  <p className="ml-2 text-sm font-semibold leading-5 text-[#000000] text-opacity-50">
                    ({item.reviews})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[60px] flex items-center justify-center">
          <button className="flex h-14 w-[234px] items-center justify-center rounded bg-[#DB4444] px-12 py-4 text-base font-medium leading-6 text-[#FAFAFA]">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
