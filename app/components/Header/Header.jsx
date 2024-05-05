import Image from "next/image";
import React from "react";
import AccountDropdown from "./AccountDropdown";
import Link from "next/link";
import NavLink from "../Navlink/Navlink";

const Header = () => {
  return (
    <>
      <div className="border-b border-[#000000] border-opacity-30">
        <div className=" Inter mx-auto mb-4 mt-10 max-w-[1170px] px-5 lg:px-10 xl:px-0">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h2 className="text-2xl font-bold leading-6 text-[#000000]">
                Exclusive
              </h2>
            </Link>
            <div className="hidden items-center justify-center gap-x-12 lg:flex">
              <NavLink href="/">
                <p>Home</p>
              </NavLink>
              <NavLink href="/pages/contact">
                <p>Contact</p>
              </NavLink>
              <NavLink href="/pages/about">
                <p>About</p>
              </NavLink>
              <NavLink href="/pages/signup">
                <p>Sign Up</p>
              </NavLink>
            </div>
            <div className="flex items-center justify-center">
              <form className="mx-auto hidden max-w-md lg:block">
                <label
                  for="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="h-[38px] w-[243px] bg-[#F5F5F5] pl-5 text-sm text-[#000000] opacity-50 outline-none"
                    placeholder="What are you looking for?"
                  />
                  <Image
                    width={16}
                    height={16}
                    unoptimized
                    className="absolute bottom-2.5 end-2.5 h-4 w-4  cursor-pointer"
                    src="/images/search.svg"
                    alt="search"
                  />
                </div>
              </form>
              <Link href="/pages/wishlist">
                <div className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center">
                  <Image
                    width={20}
                    height={20}
                    unoptimized
                    className="h-[17px] w-5"
                    src="/images/heart.svg"
                    alt="wishlist"
                  />
                </div>
              </Link>
              <Link href="/pages/cart">
                <div className="ml-4 flex h-8 w-8 cursor-pointer items-center justify-center">
                  <Image
                    width={30}
                    height={30}
                    unoptimized
                    className="h-6 w-7"
                    src="/images/Cart1 with buy.svg"
                    alt="wishlist"
                  />
                </div>
              </Link>
              <AccountDropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
