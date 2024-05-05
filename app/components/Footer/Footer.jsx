import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-[140px] bg-[#000000] ">
        <div className="Popppins container mx-auto max-w-[1170px] px-5 py-20 lg:px-10 xl:px-0">
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10 xl:grid-cols-5">
            <div>
              <h2 className="Inter text-2xl font-bold leading-6 text-[#FAFAFA]">
                Exclusive
              </h2>
              <p className="mt-6 text-xl font-medium leading-7 text-[#FAFAFA]">
                Subscribe
              </p>
              <p className="mt-6 text-base font-normal leading-6 text-[#FAFAFA]">
                Get 10% off your first order
              </p>

              <form className=" mt-4 ">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="max-h-12 w-full rounded-lg border border-[#FAFAFA] bg-[#000000] p-4 text-base text-[#FAFAFA] outline-none md:max-w-[217px]"
                    placeholder="Search your email"
                    required
                  />
                  <div className="absolute bottom-3 right-0 top-3 text-sm font-medium text-white outline-none">
                    {" "}
                    <Image
                      width={24}
                      height={24}
                      unoptimized
                      src="/images/icon-send.svg"
                      alt="send"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h2 className="Inter text-xl font-medium leading-6 text-[#FAFAFA]">
                Support
              </h2>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                exclusive@gmail.com
              </p>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                +88015-88888-9999
              </p>
            </div>
            <div>
              <h2 className="Inter  text-xl font-medium leading-7 text-[#FAFAFA]">
                Account
              </h2>
              <Link href="/pages/my_account">
                <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                  My Account
                </p>
              </Link>
              <Link href="/pages/signup">
                <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                  Login / Register
                </p>
              </Link>
              <Link href="/pages/cart">
                <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                  Cart
                </p>
              </Link>
              <Link href="/pages/wishlist">
                <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                  Wishlist
                </p>
              </Link>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                Shop
              </p>
            </div>
            <div>
              <h2 className="Inter  text-xl font-medium leading-7 text-[#FAFAFA]">
                Quick Link
              </h2>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                Privacy Policy
              </p>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                Terms Of Use
              </p>
              <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                FAQ
              </p>
              <Link href="/pages/contact">
                <p className="mt-4 cursor-pointer text-base font-normal leading-6 text-[#FAFAFA]">
                  Contact
                </p>
              </Link>
            </div>
            <div>
              <h2 className="Inter text-xl font-medium leading-5 text-[#FAFAFA]">
                Download App
              </h2>
              <p className="mt-6 text-xs font-medium leading-5 text-[#FAFAFA] text-opacity-70">
                Save $3 with App New User Only
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Image
                  unoptimized
                  height={76}
                  width={76}
                  src="/images/Qrcode 1.png"
                  alt="qrcode"
                  className="h-[76px] w-[76px] cursor-pointer"
                />
                <div>
                  <Image
                    unoptimized
                    height={76}
                    width={76}
                    src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                    alt="qrcode"
                    className="h-full w-full cursor-pointer"
                  />
                  <Image
                    unoptimized
                    height={76}
                    width={76}
                    src="/images/download-appstore.png"
                    alt="qrcode"
                    className="mt-2 h-full w-full cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/Icon-Facebook.png"
                  alt="Icon-Facebook"
                  className="h-6 w-6 cursor-pointer"
                />
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/Icon-Twitter.png"
                  alt="Icon-twitter"
                  className="h-6 w-6 cursor-pointer"
                />
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/icon-instagram.png"
                  alt="icon-instagram"
                  className="h-6 w-6 cursor-pointer"
                />
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src="/images/Icon-Linkedin.png"
                  alt="Icon-Linkedin"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] border-t border-[#FFFFFF] border-opacity-40">
          <div className="flex items-center justify-center gap-2 px-5 pb-6 pt-4 text-center">
            <Image
              width={20}
              height={20}
              unoptimized
              src="/images/icon-copyright.svg"
              alt="copyright"
              className="opacity-40"
            />
            <p className="text-[#FFFFFF] text-opacity-40">
              Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
