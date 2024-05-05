import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-[60px] flex max-w-[1305px] flex-col items-center gap-6  pr-5  lg:flex-row xl:gap-32">
        <div>
          <Image
            width={500}
            height={700}
            unoptimized
            src="/images/Side Image.png"
            alt="sideImage"
            className="lg:h[500px] h-full w-full object-cover lg:w-[600px] xl:h-[781px] xl:w-[805px]"
          />
        </div>
        <div className="max-w-[371px]">
          <h2 className="Inter text-[27px] font-medium leading-8 md:text-4xl">
            Log in to Exclusive
          </h2>
          <p className="mt-6 text-base font-normal leading-6">
            Enter your details below
          </p>
          <form className="mt-12">
            <div className="relative z-0 ">
              <input
                type="email"
                name="email"
                id="floating_standard"
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 focus:text-opacity-40 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:text-opacity-40 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
              >
                Email or Phone Number
              </label>
            </div>
            <div className="relative z-0 mt-10">
              <input
                type="password"
                name="password"
                id="floating_standard"
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 focus:text-opacity-40 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:text-opacity-40 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
              >
                Password
              </label>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <button
                type="submit"
                className="mt-10 h-14 max-w-[143px] rounded bg-[#DB4444] px-12 py-4 text-base font-medium leading-6 text-[#FAFAFA]"
              >
                Log In
              </button>
              <p className="mt-9 flex h-14 cursor-pointer items-center justify-center text-base font-normal leading-6 text-[#DB4444] ">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
