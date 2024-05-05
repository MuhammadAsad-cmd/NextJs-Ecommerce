"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="scrollToTopBtn z-40 duration-300 ease-in-out"
          onClick={scrollToTop}
        >
          <Image
            width={24}
            height={24}
            alt="top"
            src="/images/icons_arrow-up.svg"
            className="Icon h-6 w-6"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
