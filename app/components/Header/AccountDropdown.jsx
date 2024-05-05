"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className={`relative ml-4 `}>
        <div
          onClick={toggleDropdown}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${isOpen ? "bg-[#DB4444]" : ""}`}
        >
          <Image
            width={30}
            height={30}
            unoptimized
            className={`h-6 w-6 ${isOpen ? "Invert" : ""}`}
            src="/images/user.svg"
            alt="user"
          />
        </div>
        {isOpen && (
          <div className="Popppins absolute right-0 z-10 mt-2 h-[208px] w-[224px] rounded-lg bg-black/30 shadow-md backdrop-blur-lg">
            <div className="space-y-3 pt-[18px] text-[#FAFAFA]">
              <div className="flex cursor-pointer items-center gap-4 pl-5">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  className="h-6 w-7"
                  src="/images/star3.svg"
                  alt="user"
                />

                <p className="text-sm font-normal leading-5">
                  Manage My Account
                </p>
              </div>

              <div className="flex cursor-pointer items-center gap-4 pl-5">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  className="h-6 w-7"
                  src="/images/icon-mallbag.svg"
                  alt="user"
                />

                <p className="text-sm font-normal leading-5">My Order</p>
              </div>
              <div className="flex cursor-pointer items-center gap-4 pl-5">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  className="h-6 w-7"
                  src="/images/icon-cancel.svg"
                  alt="user"
                />

                <p className="text-sm font-normal leading-5">
                  My Cancellations
                </p>
              </div>
              <div className="flex cursor-pointer items-center gap-4 pl-5">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  className="h-6 w-7"
                  src="/images/Icon-Reviews.svg"
                  alt="user"
                />

                <p className="text-sm font-normal leading-5">
                  My Cancellations
                </p>
              </div>
              <div className="flex cursor-pointer items-center gap-4 pl-5">
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  className="h-6 w-7"
                  src="/images/Icon-logout.svg"
                  alt="user"
                />

                <p className="text-sm font-normal leading-5">Logout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountDropdown;
