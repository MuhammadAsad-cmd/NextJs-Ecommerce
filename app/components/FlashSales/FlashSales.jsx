"use client";
import Image from "next/image";
import React, { useRef } from "react";
import SwiperComponents from "./SwiperSlide";
import { useDispatch } from "react-redux";

const FlashSales = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <div className="Popppins container mx-auto  mt-[140px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            Today’s
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-20">
            <h2
              className="Inter text-[27px] font-semibold leading-snug
           text-[#000000] md:text-4xl"
            >
              Flash Sales
            </h2>
            <div className="hidden items-center gap-4 md:flex">
              <div>
                <p className="text-xs font-medium leading-5 text-[#000000]">
                  Days
                </p>
                <p className="Inter mt-1 text-[32px] font-bold leading-8">03</p>
              </div>
              <div className="mt-3 space-y-2">
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
              </div>
              <div>
                <p className="text-xs font-medium leading-5 text-[#000000]">
                  Hours
                </p>
                <p className="Inter mt-1 text-[32px] font-bold leading-8">23</p>
              </div>
              <div className="mt-3 space-y-2">
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
              </div>
              <div>
                <p className="text-xs font-medium leading-5 text-[#000000]">
                  Minutes
                </p>
                <p className="Inter mt-1 text-[32px] font-bold leading-8">19</p>
              </div>
              <div className="mt-3 space-y-2">
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
                <p className="h-1 w-1 rounded-full bg-[#E07575]"></p>
              </div>
              <div>
                <p className="text-xs font-medium leading-5 text-[#000000]">
                  Seconds
                </p>
                <p className="Inter mt-1 text-[32px] font-bold leading-8">56</p>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center gap-2 md:flex">
            <button
              onClick={goPrev}
              className="Prev flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5]"
            >
              <Image
                width={16}
                height={14}
                unoptimized
                alt="leftSlide"
                className="h-4 w-4"
                src="/images/rightSlide.svg"
              />
            </button>
            <button
              onClick={goNext}
              className="Next flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5]"
            >
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
      </div>
      <div className="container mx-auto px-5 lg:px-10 2xl:pl-[170px]">
        <div className="mt-10 flex items-center justify-center gap-4 xl:gap-[30px] ">
          <SwiperComponents swiperRef={swiperRef} />
        </div>
      </div>
    </>
  );
};

export default FlashSales;
