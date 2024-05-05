"use client";
import { addtocart, removefromfavourites } from "@/app/lib/Slices/CartSlices";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.cart.favourites);
  const favQuantity = favourites ? favourites.length : 0;

  const handleRemovefromFav = (item) => {
    dispatch(removefromfavourites(item));
  };

  const handleAddtoCart = (item) => {
    dispatch(addtocart(item));
  };
  return (
    <>
      <div className="Popppins container mx-auto mt-20 max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center justify-between">
          <p className="text-xl font-normal leading-6 text-[#000000]">
            Wishlist ({favQuantity})
          </p>
          <button className="flex  items-center justify-center border border-[#00000080] px-12 py-4 text-base font-medium leading-6">
            Move All To Bag
          </button>
        </div>
        {favQuantity === 0 ? (
          <p className="flex h-20 items-center justify-center text-center text-xl font-normal leading-6 text-[#000000] opacity-55">
            You have no items in your wishlist
          </p>
        ) : (
          <div className="mt-[60px] grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-[30px] ">
            {favourites.map((item) => {
              const {
                id,
                title,
                imageUrl,
                pricenow,
                pricewas,
                rating,
                reviews,
              } = item;
              return (
                <div key={id} className="group">
                  <div className="relative cursor-pointer">
                    <div className="relative flex h-[250px] w-full  items-center justify-center bg-[#F5F5F5]">
                      <Image
                        width={172}
                        height={152}
                        unoptimized
                        src={imageUrl}
                        alt="FlashSale"
                      />
                      <div className="absolute bottom-0 w-full">
                        <button
                          onClick={() => handleAddtoCart(item)}
                          className="flex h-[41px] w-full items-center justify-center gap-2 rounded-b bg-[#000000] text-base font-medium leading-6 text-white"
                        >
                          <Image
                            width={24}
                            height={24}
                            unoptimized
                            src="/images/Cart1 with buy.svg"
                            alt="cart"
                            className="Invert h-6 w-6"
                          />
                          Add To Cart
                        </button>
                      </div>
                    </div>

                    <div className="absolute right-3 top-3">
                      <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                        <Image
                          onClick={() => handleRemovefromFav(item)}
                          width={24}
                          height={24}
                          unoptimized
                          src="/images/icon-delete.svg"
                          className="h-6 w-6"
                          alt="delete"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                      {title}
                    </h2>
                    <div className="mt-2 flex items-center gap-3">
                      <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                        ${pricenow}
                      </p>
                      <p className="mt-2 text-base font-normal leading-6 text-[#000000] text-opacity-50 line-through">
                        ${pricewas}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: rating }).map((_, index) => (
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
                        ({reviews})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
