import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="Popppins container mx-auto mt-20 max-w-[1170px] pl-5 lg:pl-10">
        <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
          Home <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000]">About</span>
        </p>
      </div>
      <div className="container mx-auto mt-10 flex max-w-[1170px]  flex-col items-center justify-end gap-10 px-5 lg:flex-row lg:px-0 lg:pl-10 xl:gap-32">
        <div>
          <h2 className="Inter text-4xl font-semibold leading-loose tracking-wider md:text-[54px]">
            Our Story
          </h2>
          <p className="mt-5 max-w-[525px] text-justify text-base font-normal leading-6 lg:mt-10">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="mt-6 max-w-[525px] text-justify text-base font-normal leading-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <Image
            width={700}
            height={600}
            unoptimized
            src="/images/about.jpeg"
            alt="about"
            className="h-full w-full object-cover lg:h-[609px] lg:w-[750px]"
          />
        </div>
      </div>

      <div className="Popppins container mx-auto mt-20 max-w-[1170px] px-5 lg:mt-[140px] lg:px-10 xl:px-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-[30px]">
          <div className="group flex h-[230px] flex-col items-center justify-center rounded border border-[#0000004D] hover:border-none hover:bg-[#DB4444] hover:text-white">
            <div className="group-hover: flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30 group-hover:bg-[#FFFFFF] group-hover:bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000] group-hover:bg-[#FFFFFF]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/icon_shop.svg"
                  alt="delivey"
                  className="group-hover:invert"
                />
              </div>
            </div>
            <h2 className="Inter mt-6 text-[32px] font-bold tracking-wide">
              10.5k{" "}
            </h2>
            <p className="mt-3 text-sm font-normal leading-6">
              Sallers active our site
            </p>
          </div>
          <div className="group flex h-[230px] flex-col items-center justify-center rounded border border-[#0000004D] hover:border-none hover:bg-[#DB4444] hover:text-white">
            <div className="group-hover: flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30 group-hover:bg-[#FFFFFF] group-hover:bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000] group-hover:bg-[#FFFFFF]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/Icon-Sale.svg"
                  alt="delivey"
                  className="invert filter group-hover:filter-none"
                />
              </div>
            </div>
            <h2 className="Inter mt-6 text-[32px] font-bold tracking-wide">
              33k
            </h2>
            <p className="mt-3 text-sm font-normal leading-6">
              Mopnthly Produduct Sale
            </p>
          </div>
          <div className="group flex h-[230px] flex-col items-center justify-center rounded border border-[#0000004D] hover:border-none hover:bg-[#DB4444] hover:text-white">
            <div className="group-hover: flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30 group-hover:bg-[#FFFFFF] group-hover:bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000] group-hover:bg-[#FFFFFF]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/icon_shop.svg"
                  alt="delivey"
                  className="group-hover:invert"
                />
              </div>
            </div>
            <h2 className="Inter mt-6 text-[32px] font-bold tracking-wide">
              45.5k
            </h2>
            <p className="mt-3 text-sm font-normal leading-6">
              Customer active in our site
            </p>
          </div>
          <div className="group flex h-[230px] flex-col items-center justify-center rounded border border-[#0000004D] hover:border-none hover:bg-[#DB4444] hover:text-white">
            <div className="group-hover: flex h-20 w-20 items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30 group-hover:bg-[#FFFFFF] group-hover:bg-opacity-30">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#000000] group-hover:bg-[#FFFFFF]">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/icon_shop.svg"
                  alt="delivey"
                  className="group-hover:invert"
                />
              </div>
            </div>
            <h2 className="Inter mt-6 text-[32px] font-bold tracking-wide">
              25k
            </h2>
            <p className="mt-3 text-sm font-normal leading-6">
              Anual gross sale in our site
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
