"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className, end, onClick }) => {
  const pathname = usePathname();

  const isActive =
    (pathname.includes(href) && href.length > 1 && !end) || pathname === href;

  const classes = `${className || ""} ${isActive ? "border-[#000000] border-b-2 border-opacity-50" : "text-[#000000]"}`;

  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function passed as a prop
    }
  };

  return (
    <Link href={href} passHref>
      <div
        onClick={handleClick}
        className={`${classes} text-base font-normal leading-6 hover:border-b-2 hover:border-[#000000] hover:border-opacity-50 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
