"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import NavLink from "../Navlink/Navlink";

const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside of the dropdown menu, so close it
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative ml-4 flex h-8 w-8 cursor-pointer items-center justify-center lg:hidden">
        {isOpen ? (
          <button onClick={toggleDropdown}>
            <IoMenu className="text-2xl leading-6" />
          </button>
        ) : (
          <button onClick={toggleDropdown}>
            <IoMenu className="text-2xl leading-6" />
          </button>
        )}
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="Popppins absolute left-0 right-0 top-[90px] z-40 block w-full rounded-lg bg-[#F5F5F5] md:top-[137px] lg:hidden"
        >
          <div className="flex flex-col items-center justify-center space-y-6 py-[18px] text-lg">
            <NavLink href="/" onClick={handleItemClick}>
              <p>Home</p>
            </NavLink>
            <NavLink href="/pages/contact" onClick={handleItemClick}>
              <p>Contact</p>
            </NavLink>
            <NavLink href="/pages/about" onClick={handleItemClick}>
              <p>About</p>
            </NavLink>
            <NavLink href="/pages/signup" onClick={handleItemClick}>
              <p>Signup</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuHeader;
