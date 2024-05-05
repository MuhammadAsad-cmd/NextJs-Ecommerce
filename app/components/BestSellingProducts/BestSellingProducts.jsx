"use client";
import { SellingProductsData } from "@/app/Data/SellingProducts";
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

const BestSellingProducts = () => {
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
      <div className="Popppins container mx-auto mt-[70px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            This Month
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2
            className="Inter mt-5 text-[27px] font-semibold leading-snug
            text-[#000000] md:text-4xl"
          >
            Best Selling Products
          </h2>
          <div className="hidden items-center justify-center gap-2 md:flex">
            <button className="flex h-14 w-[159px] items-center justify-center rounded bg-[#DB4444] px-12 py-4 text-base font-medium leading-6 text-[#FAFAFA]">
              View All
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 md:gap-[30px] lg:grid-cols-4 ">
          {SellingProductsData.map((item) => (
            <div
              onClick={() => handleProductClick(item)}
              key={item.id}
              className="group"
            >
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
          ))}
        </div>

        {/* <div className="mt-[140px] bg-[#000000]">
          <div className="flex items-center gap-10">
            <div className="my-[70px] ml-14">
              <p className="text-base font-semibold leading-5 text-[#00FF66]">
                Categories
              </p>
              <h3 className="Inter mt-8 text-[48px] font-semibold leading-normal text-[#FAFAFA]">
                Enhance Your <br /> Music Experience
              </h3>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex h-[62px] w-[62px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#FFFFFF]">
                  <h4 className="text-base font-semibold leading-5">23</h4>
                  <p className="text-[11px] font-normal leading-5">Hours</p>
                </div>
                <div className="flex h-[62px] w-[62px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#FFFFFF]">
                  <h4 className="text-base font-semibold leading-5">05</h4>
                  <p className="text-[11px] font-normal leading-5">Days</p>
                </div>
                <div className="flex h-[62px] w-[62px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#FFFFFF]">
                  <h4 className="text-base font-semibold leading-5">59</h4>
                  <p className="text-[11px] font-normal leading-5">Minutes</p>
                </div>
                <div className="flex h-[62px] w-[62px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#FFFFFF]">
                  <h4 className="text-base font-semibold leading-5">35</h4>
                  <p className="text-[11px] font-normal leading-5">Seconds</p>
                </div>
              </div>
              <button className="mt-10 flex h-14 w-[171px] items-center justify-center rounded bg-[#00FF66] px-12 py-4 text-base font-medium leading-6 text-[#FAFAFA]">
                Buy Now!
              </button>
            </div>

            <div className="">
              <Image
                width={568}
                height={330}
                unoptimized
                src="/images/Frame 694.png"
                alt="audio"
                className="max-h-420  max-w-[600px]"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BestSellingProducts;
