import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="Popppins container mx-auto mt-20 max-w-[943px] px-5 lg:mt-[140px] lg:px-10 xl:px-0">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row xl:gap-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/icon-delivery.svg"
                  alt="delivey"
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-7">
              FREE AND FAST DELIVERY
            </h3>
            <p className="mt-2 text-sm font-normal leading-5">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/Icon-Customer service.svg"
                  alt="delivey"
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-7">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="mt-2 text-sm font-normal leading-5">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/Icon-secure.svg"
                  alt="delivey"
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-7">
              MONEY BACK GUARANTEE
            </h3>
            <p className="mt-2 text-sm font-normal leading-5">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
