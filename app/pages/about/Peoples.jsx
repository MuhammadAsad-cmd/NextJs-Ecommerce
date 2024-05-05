"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Peoples = () => {
  return (
    <>
      <div className="Popppins container mx-auto mt-[140px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="min-h-[564px]">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 874.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Tom Cruise
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Founder & Chairman
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 875.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Emma Watson
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Managing Director
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 876.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Will Smith
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Product Designer
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 874.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Tom Cruise
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Founder & Chairman
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 875.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Emma Watson
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Managing Director
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <Image
                width={370}
                height={430}
                unoptimized
                src="/images/Frame 876.png"
                className="h-full w-full"
              />
              <h3 className="Inter mt-8 text-[32px] font-medium leading-8">
                Will Smith
              </h3>
              <p className="mt-2 text-sm font-normal leading-6">
                {" "}
                Product Designer
              </p>
              <div className="mt-4 flex items-center justify-start gap-4">
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/icon-instagram.png"
                  className="Convert h-6 w-6"
                />
                <Image
                  width={24}
                  height={24}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  className="Convert h-6 w-6"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Peoples;
