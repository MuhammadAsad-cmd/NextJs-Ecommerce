import Image from "next/image";
import React from "react";

const ForYou = () => {
  return (
    <>
      <div className="Popppins container mx-auto mt-20 max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
            <p className="text-xl font-medium leading-6 text-[#000000]">
              Just For You
            </p>
          </div>
          <button className="flex h-14 items-center justify-center rounded border border-[#00000080] px-12 py-4 text-base font-medium leading-6 text-[#000000]">
            See All
          </button>
        </div>

        <div className="mt-[60px] grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-[30px] ">
          <div className="group">
            <div className="relative cursor-pointer">
              <div className="relative flex h-[250px]  items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={158}
                  height={166}
                  unoptimized
                  src="/images/laptop.png"
                  alt="FlashSale"
                  className="h-full w-full object-scale-down"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center gap-2 rounded-b bg-[#000000] text-base font-medium leading-6 text-white">
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
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/Quick View.svg"
                    className="h-6 w-6"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                The north coat
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $260
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <p className="ml-2 text-sm font-semibold leading-5 text-[#000000] text-opacity-50">
                  (65)
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative cursor-pointer">
              <div className="relative flex h-[250px] w-full items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={172}
                  height={152}
                  unoptimized
                  src="/images/lcd.png"
                  alt="lcd"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center gap-2 rounded-b bg-[#000000] text-base font-medium leading-6 text-white">
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
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/Quick View.svg"
                    className="h-6 w-6"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                IPS LCD Gaming Monitor
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $960
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <p className="ml-2 text-sm font-semibold leading-5 text-[#000000] text-opacity-50">
                  (65)
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative cursor-pointer">
              <div className="relative flex h-[250px] w-full items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={172}
                  height={152}
                  unoptimized
                  src="/images/50752d55f8b60f2aa2923183dadbc135.png"
                  alt="FlashSale"
                  className="max-h-[152px] max-w-[172px]"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center gap-2 rounded-b bg-[#000000] text-base font-medium leading-6 text-white">
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
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/Quick View.svg"
                    className="h-6 w-6"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $160
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <p className="ml-2 text-sm font-semibold leading-5 text-[#000000] text-opacity-50">
                  (65)
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative">
              <div className="relative flex h-[250px] w-full items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={191}
                  height={101}
                  unoptimized
                  src="/images/keyboard.png"
                  alt="FlashSale"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center gap-2 rounded-b bg-[#000000] text-base font-medium leading-6 text-white">
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
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/Quick View.svg"
                    className="h-6 w-6"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="cursor-pointer text-base font-medium leading-6 text-[#000000]">
                AK-900 Wired Keyboard
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $360
                </p>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  unoptimized
                  src="/images/star2.svg"
                  className="h-5 w-5"
                  alt="star"
                />
                <p className="ml-2 text-sm font-semibold leading-5 text-[#000000] text-opacity-50">
                  (65)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForYou;
