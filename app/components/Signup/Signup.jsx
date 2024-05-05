import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
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
        <div className="max-w-[371px] px-3 md:px-0">
          <h2 className="Inter text-[27px] font-medium leading-8 md:text-4xl">
            Create an account
          </h2>
          <p className="mt-6 text-base font-normal leading-6">
            Enter your details below
          </p>
          <form className="mt-12">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                id="floating_standard"
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="floating_standard"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 focus:text-opacity-40 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:text-opacity-40 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
              >
                Name
              </label>
            </div>
            <div className="relative z-0 mt-10">
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
            <button
              type="submit"
              className="mt-10 h-14 w-full max-w-[370px] rounded bg-[#DB4444] py-4 text-base font-medium leading-6 text-[#FAFAFA]"
            >
              Create Account
            </button>
            <button className="mt-4 flex h-14 w-full max-w-[370px] items-center justify-center gap-4 rounded border border-[#00000066] bg-[#FFFFFF]  py-4 text-base font-medium leading-6 text-[#000000]">
              <Image
                width={24}
                height={24}
                unoptimized
                src="/images/Icon-Google.svg"
                alt="google"
                className="h-6 w-6"
              />
              <p>Sign up with Google</p>
            </button>

            <div className="mt-4 flex items-center justify-center gap-4 text-base font-medium leading-6 text-[#000000] text-opacity-70">
              <p>Already have account?</p>
              <Link href="/pages/login">
                <p className="cursor-pointer text-[#000000] text-opacity-90">
                  Log in
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
