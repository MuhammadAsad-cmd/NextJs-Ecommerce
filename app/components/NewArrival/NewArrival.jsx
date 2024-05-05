import Image from "next/image";
import React from "react";

const NewArrival = () => {
  return (
    <>
      <div className="Popppins container mx-auto  mt-[140px] max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center gap-4">
          <div className="h-10 w-5 rounded bg-[#DB4444]"></div>
          <p className="text-base font-semibold leading-5 text-[#DB4444]">
            Featured
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="Inter mt-5 text-[27px] font-semibold leading-snug text-[#000000] md:text-4xl">
            New Arrival
          </h2>
        </div>

        <div className="mt-[60px] grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded bg-[#000000] lg:max-w-[570px]">
            <div className="relative px-[30px] pt-[89px]">
              <Image
                width={511}
                height={511}
                unoptimized
                src="/images/ps5-slim-goedkope-playstation_large 1.png"
                className="h-full w-full object-fill"
                alt="ps5"
              />
              <div className="absolute bottom-8 left-8">
                <h2 className="Inter text-2xl font-semibold leading-6 text-[#FFFFFF]">
                  PlayStation 5
                </h2>
                <p className="mt-4 max-w-[242px] text-sm font-normal leading-5 text-[#FAFAFA]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <p className="mt-4 max-w-[84px] cursor-pointer border-b border-[#FFFFFF] text-base font-medium leading-6 text-[#FFFFFF]">
                  Shop Now
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative min-h-[284px] rounded bg-[#0D0D0D]">
              <div className="absolute bottom-5 left-6 z-40">
                <h3 className="text-2xl font-semibold leading-6 text-[#FAFAFA]">
                  Women’s Collections
                </h3>
                <p className="mt-4 max-w-[255px] text-sm font-normal leading-5 text-[#FAFAFA]">
                  Featured woman collections that give you another vibe.
                </p>
                <p className="mt-4 max-w-[84px] cursor-pointer border-b border-[#FFFFFF] text-base font-medium leading-6 text-[#FFFFFF]">
                  Shop Now
                </p>
              </div>
              <div className="absolute right-0">
                <Image
                  width={300}
                  height={300}
                  unoptimized
                  src="/images/attractive-woman-wearing-hat-posing-black-background 1.png"
                  alt="lady"
                  className="h-full w-full items-end rounded-r"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[30px]">
              <div className="relative flex min-h-[284px] items-center justify-center rounded bg-[#212121] xl:min-w-[270px]">
                <Image
                  width={190}
                  height={221}
                  unoptimized
                  src="/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                  className="h-full w-full px-10 pt-[30px]"
                  alt="image"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-semibold leading-6 text-[#FAFAFA]">
                    Speakers
                  </h2>
                  <p className="mt-2 text-sm font-normal leading-5 text-[#FAFAFA]">
                    Amazon wireless speakers
                  </p>
                  <p className="mt-2 max-w-[84px] cursor-pointer border-b border-[#FFFFFF] text-base font-medium leading-6 text-[#FFFFFF]">
                    Shop Now
                  </p>
                </div>
              </div>
              <div className="relative flex min-h-[284px] items-center justify-center rounded bg-[#212121] xl:min-w-[270px]">
                <Image
                  width={190}
                  height={221}
                  unoptimized
                  src="/images/652e82cd70aa6522dd785109a455904c.png"
                  className="h-full w-full px-10 pt-[30px]"
                  alt="img"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-semibold leading-6 text-[#FAFAFA]">
                    Perfume
                  </h2>
                  <p className="mt-2 text-sm font-normal leading-5 text-[#FAFAFA]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="mt-2 max-w-[84px] cursor-pointer border-b border-[#FFFFFF] text-base font-medium leading-6 text-[#FFFFFF]">
                    Shop Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
