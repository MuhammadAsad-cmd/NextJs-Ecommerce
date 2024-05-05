import Image from "next/image";
import React from "react";

const RelatedItem = () => {
  return (
    <>
      <div className="Popppins container mx-auto  my-[140px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            Related Item
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-1 items-center justify-center gap-[30px] md:grid-cols-2 lg:grid-cols-4 ">
          <div className="group">
            <div className="relative cursor-pointer">
              <div className="relative flex h-[250px] items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={172}
                  height={152}
                  unoptimized
                  src="/images/jacket.png"
                  alt="FlashSale"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity  duration-500 ease-in-out group-hover:opacity-100">
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="absolute right-3 top-3">
                <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                  <Image
                    width={16}
                    height={16}
                    unoptimized
                    src="/images/heart.svg"
                    className="h-4 w-4"
                    alt="heart"
                  />
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
                The north coat
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $260
                </p>
                <p className="mt-2 text-base font-normal leading-6 text-[#000000] text-opacity-50 line-through">
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
          <div className="group">
            <div className="relative cursor-pointer">
              <div className="relative flex h-[250px] w-full items-center justify-center bg-[#F5F5F5]">
                <Image
                  width={172}
                  height={152}
                  unoptimized
                  src="/images/purse.png"
                  alt="FlashSale"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity  duration-500 ease-in-out group-hover:opacity-100">
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="absolute right-3 top-3">
                <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                  <Image
                    width={16}
                    height={16}
                    unoptimized
                    src="/images/heart.svg"
                    className="h-4 w-4"
                    alt="heart"
                  />
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
                Gucci duffle bag
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $960
                </p>
                <p className="mt-2 text-base font-normal leading-6 text-[#000000] text-opacity-50 line-through">
                  $1160
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
                  src="/images/speak.png"
                  alt="FlashSale"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity  duration-500 ease-in-out group-hover:opacity-100">
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="absolute right-3 top-3">
                <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                  <Image
                    width={16}
                    height={16}
                    unoptimized
                    src="/images/heart.svg"
                    className="h-4 w-4"
                    alt="heart"
                  />
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
                RGB liquid CPU Cooler
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <p className="mt-2 text-base font-normal leading-6 text-[#DB4444]">
                  $160
                </p>
                <p className="mt-2 text-base font-normal leading-6 text-[#000000] text-opacity-50 line-through">
                  $170
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
                  width={172}
                  height={152}
                  unoptimized
                  src="/images/table.png"
                  alt="FlashSale"
                />
                <div className="absolute bottom-0 w-full">
                  <button className="flex h-[41px] w-full items-center justify-center rounded-b bg-[#000000] text-base font-medium leading-6 text-white opacity-0 transition-opacity  duration-500 ease-in-out group-hover:opacity-100">
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="absolute right-3 top-3">
                <div className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#FFFFFF]">
                  <Image
                    width={16}
                    height={16}
                    unoptimized
                    src="/images/heart.svg"
                    className="h-4 w-4"
                    alt="heart"
                  />
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
                Small BookSelf
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

export default RelatedItem;
