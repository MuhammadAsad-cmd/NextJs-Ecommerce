"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <div className="Popppins container mx-auto  max-w-[1170px] ">
        <div className="flex h-full ">
          <div className="min-w-[217px] border-r border-[#000000] border-opacity-30 pr-4 ">
            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-between">
                <p className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                  Woman’s Fashion
                </p>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center">
                  <Image
                    width={7}
                    height={12}
                    unoptimized
                    src="/images/right.svg"
                    alt="right arrow"
                    className="h-3 w-2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                  Men’s Fashion
                </p>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center">
                  <Image
                    width={7}
                    height={12}
                    unoptimized
                    src="/images/right.svg"
                    alt="right arrow"
                    className="h-3 w-2"
                  />
                </div>
              </div>
              <div>
                <p>Electronics</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Home & Lifestyle</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Medicine</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Sports & Outdoor</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Baby’s & Toys</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Groceries & Pets</p>
              </div>
              <div className="cursor-pointer text-base font-normal leading-6 text-[#000000]">
                <p>Health & Beauty</p>
              </div>
            </div>
          </div>
          <div className="ml-11 mt-10 max-w-[892px] bg-[#000000]">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="ml-16 mt-14 flex justify-center">
                  <div>
                    <div className="flex items-center gap-x-6 ">
                      <Image
                        width={40}
                        height={50}
                        unoptimized
                        src="/images/appleLogo.svg"
                        alt="AppleLogo"
                        className="h-12 w-10"
                      />
                      <p className="text-base font-normal leading-6 text-[#FAFAFA]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h3 className="pt-5  text-[48px] font-semibold text-[#FAFAFA]">
                      Up to 10% <br /> off Voucher
                    </h3>
                    <div className="mt-[22px] flex items-center gap-x-3">
                      <button className="border-b border-[#FAFAFA] text-base font-medium leading-6 text-[#FAFAFA]">
                        Shop Now
                      </button>
                      <Image
                        width={16}
                        height={14}
                        unoptimized
                        src="/images/arrowKLeft.svg"
                        className="h-4 w-[16px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={352}
                      unoptimized
                      src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
                      alt="Image"
                      className="h-[352px] w-[496px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ml-16 mt-14 flex justify-center">
                  <div>
                    <div className="flex items-center gap-x-6 ">
                      <Image
                        width={40}
                        height={50}
                        unoptimized
                        src="/images/appleLogo.svg"
                        alt="AppleLogo"
                        className="h-12 w-10"
                      />
                      <p className="text-base font-normal leading-6 text-[#FAFAFA]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h3 className="pt-5  text-[48px] font-semibold text-[#FAFAFA]">
                      Up to 10% <br /> off Voucher
                    </h3>
                    <div className="mt-[22px] flex items-center gap-x-3">
                      <button className="border-b border-[#FAFAFA] text-base font-medium leading-6 text-[#FAFAFA]">
                        Shop Now
                      </button>
                      <Image
                        width={16}
                        height={14}
                        unoptimized
                        src="/images/arrowKLeft.svg"
                        className="h-4 w-[16px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={352}
                      unoptimized
                      src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
                      alt="Image"
                      className="h-[352px] w-[496px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ml-16 mt-14 flex justify-center">
                  <div>
                    <div className="flex items-center gap-x-6 ">
                      <Image
                        width={40}
                        height={50}
                        unoptimized
                        src="/images/appleLogo.svg"
                        alt="AppleLogo"
                        className="h-12 w-10"
                      />
                      <p className="text-base font-normal leading-6 text-[#FAFAFA]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h3 className="pt-5  text-[48px] font-semibold text-[#FAFAFA]">
                      Up to 10% <br /> off Voucher
                    </h3>
                    <div className="mt-[22px] flex items-center gap-x-3">
                      <button className="border-b border-[#FAFAFA] text-base font-medium leading-6 text-[#FAFAFA]">
                        Shop Now
                      </button>
                      <Image
                        width={16}
                        height={14}
                        unoptimized
                        src="/images/arrowKLeft.svg"
                        className="h-4 w-[16px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={352}
                      unoptimized
                      src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
                      alt="Image"
                      className="h-[352px] w-[496px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ml-16 mt-14 flex justify-center">
                  <div>
                    <div className="flex items-center gap-x-6 ">
                      <Image
                        width={40}
                        height={50}
                        unoptimized
                        src="/images/appleLogo.svg"
                        alt="AppleLogo"
                        className="h-12 w-10"
                      />
                      <p className="text-base font-normal leading-6 text-[#FAFAFA]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h3 className="pt-5  text-[48px] font-semibold text-[#FAFAFA]">
                      Up to 10% <br /> off Voucher
                    </h3>
                    <div className="mt-[22px] flex items-center gap-x-3">
                      <button className="border-b border-[#FAFAFA] text-base font-medium leading-6 text-[#FAFAFA]">
                        Shop Now
                      </button>
                      <Image
                        width={16}
                        height={14}
                        unoptimized
                        src="/images/arrowKLeft.svg"
                        className="h-4 w-[16px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={352}
                      unoptimized
                      src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
                      alt="Image"
                      className="h-[352px] w-[496px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ml-16 mt-14 flex justify-center">
                  <div>
                    <div className="flex items-center gap-x-6 ">
                      <Image
                        width={40}
                        height={50}
                        unoptimized
                        src="/images/appleLogo.svg"
                        alt="AppleLogo"
                        className="h-12 w-10"
                      />
                      <p className="text-base font-normal leading-6 text-[#FAFAFA]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h3 className="pt-5  text-[48px] font-semibold text-[#FAFAFA]">
                      Up to 10% <br /> off Voucher
                    </h3>
                    <div className="mt-[22px] flex items-center gap-x-3">
                      <button className="border-b border-[#FAFAFA] text-base font-medium leading-6 text-[#FAFAFA]">
                        Shop Now
                      </button>
                      <Image
                        width={16}
                        height={14}
                        unoptimized
                        src="/images/arrowKLeft.svg"
                        className="h-4 w-[16px] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <Image
                      width={500}
                      height={352}
                      unoptimized
                      src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"
                      alt="Image"
                      className="h-[352px] w-[496px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
