import Image from "next/image";
import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="Popppins hidden h-12 w-full bg-[#000000] py-[15px] md:block">
        <div className="container mx-auto max-w-[1170px] px-5 lg:px-[135px]">
          <div className="flex items-center md:justify-between">
            <div className="hidden lg:block"></div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-normal leading-5 text-[#FAFAFA]">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <button className="text-sm font-semibold leading-6 text-[#FAFAFA] underline">
                ShopNow
              </button>
            </div>
            <div className="hidden cursor-pointer items-center gap-[11px] md:flex">
              <button className="text-sm font-normal leading-5 text-[#FAFAFA]">
                English
              </button>
              <Image
                width={7}
                height={12}
                unoptimized
                alt="DropDownUImg"
                src="/images/Vector.svg"
                className="h-3 w-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
