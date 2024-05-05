"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  addtofavourites,
  setProductDetails,
} from "@/app/lib/Slices/CartSlices";
import { FlashSalesData } from "@/app/Data/FlashSalesData";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SwiperComponents = ({ swiperRef }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.cart.favourites);
  const cartItems = useSelector((state) => state.cart.items);
  const router = useRouter();

  const handleFavourites = (item, e) => {
    e.stopPropagation(); // Prevents event bubbling
    dispatch(addtofavourites(item));
  };

  const handleAddtoCart = (item, e) => {
    e.stopPropagation(); // Prevents event bubbling
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
      <Swiper
        navigation={{
          nextEl: ".Next",
          prevEl: ".Prev",
        }}
        ref={swiperRef}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        }}
      >
        {FlashSalesData.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => handleProductClick(item)} className="group">
              <div className="relative cursor-pointer">
                <div className="relative flex h-[260px] flex-col items-center justify-between bg-[#F5F5F5]">
                  <Image
                    width={172}
                    height={152}
                    unoptimized
                    src={item.imageUrl}
                    alt="FlashSale"
                    className="h-full w-full object-contain"
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
                <div className="mt-2 flex items-center gap-3">
                  <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                    ${item.pricenow}
                  </p>
                  <p className="mt-2 text-base font-normal leading-6 text-[#000000] text-opacity-50 line-through">
                    ${item.pricewas}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponents;
