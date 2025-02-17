"use client";
import {
  hamburger,
  logo,
  logoName,
  profile,
  search,
} from "@/assets/about/svgs/svgExport";
import { Anybody } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});

const navArray = [
  { name: "Services", href: "services" },
  { name: "About Us", href: "about-us" },
  { name: "Resources", href: "resources" },
  { name: "FAQs", href: "faqs" },
  { name: "Contact Us", href: "contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="p-3 lg:p-0 lg:mt-0 w-full z-50 fixed bg-white">
      <nav className="max-w-[106.19rem] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" />
          <Image src={logoName} alt="logo name" />
        </Link>

        <ul
          className={`${anybody.variable} hidden lg:flex text-[0.953rem] my-[1.422rem] gap-[3.563rem] font-anybody items-center text-colorDarkHeading`}
        >
          {navArray.map((e, i) => (
            <li key={i} className="leading-[1.625rem] relative">
              <Link href={e.href}>{e.name}</Link>
              {pathname === `/${e.href}` && (
                <div className="absolute border-b-2 border-[#FF5757] top-11 w-full"></div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-[1.724rem] items-center">
          <Image src={search} alt="search" />
          <Image src={profile} alt="profile" />
          <Image
            className="flex lg:hidden cursor-pointer"
            src={hamburger}
            height={25}
            alt="hamburger"
            onClick={toggleDropdown}
          />
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-md mt-2 absolute w-full left-0 z-40">
          <ul className="flex flex-col p-4 space-y-2">
            {navArray.map((e, i) => (
              <li key={i}>
                <Link
                  href={e.href}
                  className="block py-2 px-4 text-colorDarkHeading hover:bg-gray-100 rounded"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
