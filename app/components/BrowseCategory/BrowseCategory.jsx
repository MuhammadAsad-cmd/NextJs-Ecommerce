import Image from "next/image";
import React from "react";

const BrowseCategory = () => {
  return (
    <>
      <div className="Popppins container mx-auto mt-12 max-w-[1170px]  px-5 md:mt-[140px] lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            Categories
          </p>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h2
            className="Inter mt-5 text-[27px] font-semibold leading-snug
           text-[#000000] md:text-4xl"
          >
            Browse By Category
          </h2>
          <div className="hidden items-center justify-center  md:flex">
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

        <div className="mt-[60px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-CellPhone.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />

            <p className="mt-4 text-base font-normal leading-6">Phones</p>
          </div>
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-Computer.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />
            <p className="mt-4 text-base font-normal leading-6">Computers</p>
          </div>
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-SmartWatch.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />
            <p className="mt-4 text-base font-normal leading-6">SmartWatch</p>
          </div>
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-Camera.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />
            <p className="mt-4 text-base font-normal leading-6 ">Camera</p>
          </div>
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-Headphone.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />
            <p className="mt-4 text-base font-normal leading-6">HeadPhones</p>
          </div>
          <div className="group flex h-[145px]  cursor-pointer flex-col items-center justify-center rounded border border-[#0000004D] text-black hover:bg-[#DB4444] hover:text-[#FAFAFA]">
            <Image
              width={56}
              height={56}
              src="/images/Category-Gamepad.svg"
              className="h-14 w-14 group-hover:invert"
              alt="cellPhone"
            />
            <p className="mt-4 text-base font-normal leading-6">Gaming</p>
          </div>
        </div>
        <div className="mt-[70px] h-[2px] bg-[#000000] bg-opacity-30"></div>
      </div>
    </>
  );
};

export default BrowseCategory;
