import Image from "next/image";
import React from "react";

const MyAccount = () => {
  return (
    <>
      <div className="Popppins container mx-auto my-20 max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
            Home <span className="mx-3 text-[#00000080]">/ </span>{" "}
            <span className="text-[#000000]">My Account</span>
          </p>
          <p className="text-sm font-normal leading-5">
            Welcome! <span className="text-[#DB4444]"> Md Rimel</span>
          </p>
        </div>

        <div className="mt-20 flex flex-col justify-around gap-10 md:flex-row lg:gap-[100px]">
          <div>
            <h2 className="text-base font-medium leading-6">
              Manage My Account
            </h2>
            <ul className="mb-6 mt-4 space-y-2 pl-9">
              <li className="text-base font-normal leading-6 text-[#DB4444]">
                My Profile
              </li>
              <li className="text-base font-normal leading-6 text-[#000000] text-opacity-50">
                Address Book
              </li>
              <li className="min-w-[165px] text-base font-normal leading-6 text-[#000000] text-opacity-50">
                My Payment Options
              </li>
            </ul>
            <h2 className="text-base font-medium leading-6">My Orders</h2>
            <ul className="mb-6 mt-4 space-y-2 pl-9">
              <li className="text-base font-normal leading-6 text-[#000000] text-opacity-50">
                My Returns
              </li>
              <li className="text-base font-normal leading-6 text-[#000000] text-opacity-50">
                My Cancellations
              </li>
            </ul>

            <h2 className="text-base font-medium leading-6">My WishList</h2>
          </div>
          <div className="Shadow border border-[#0000000D] bg-[#FFFFFF] lg:max-w-[870px]">
            <form className="px-5 py-10 xl:px-20">
              <h3 className="mb-4 text-xl font-medium leading-7 text-[#DB4444]">
                Edit Your Profile
              </h3>
              <div className="mb-6 grid gap-7 lg:grid-cols-2 lg:gap-[50px]">
                <div>
                  <label
                    for="first_name"
                    className="mb-2 block text-base font-normal text-[#000000]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none xl:min-w-[330px]"
                    placeholder="Md"
                    required
                  />
                </div>

                <div>
                  <label
                    for="first_name"
                    className="mb-2 block text-base font-normal text-[#000000]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none xl:min-w-[330px]"
                    placeholder="Rimel"
                    required
                  />
                </div>
                <div>
                  <label
                    for="first_name"
                    className="mb-2 block text-base font-normal text-[#000000]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none xl:min-w-[330px]"
                    placeholder="rimel1111@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="first_name"
                    className="mb-2 block text-base font-normal text-[#000000]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none xl:min-w-[330px]"
                    placeholder="Kingston, 5236, United State"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  for="password"
                  className="mb-2 block text-base font-normal text-[#000000]"
                >
                  Password Changes
                </label>
                <input
                  type="password"
                  id="password"
                  className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  placeholder="Current Passwod"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="confirm_password"
                  className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  placeholder="New Passwod"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="confirm_password"
                  className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  placeholder="Confirm New Passwod"
                  required
                />
              </div>
              <div className="mt-6 flex items-center justify-end gap-8">
                <p className="text-base font-normal leading-6">Cancel</p>
                <button
                  type="submit"
                  className="max-w-[215px] rounded bg-[#DB4444] px-12 py-4 text-center text-sm font-medium text-white "
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
