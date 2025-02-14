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
import React from "react";
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

  return (
    <div className="mx-3 lg:mx-0 mt-2 lg:mt-0 w-full  fixed bg-white">
      <nav className="max-w-[106.19rem] mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Image src={logo} alt="logo" />
          <Image src={logoName} alt="logo name" />
        </div>
        <ul
          className={`${anybody.variable} hidden lg:flex text-[0.953rem] my-[1.422rem] gap-[3.563rem] font-anybody items-center text-colorDarkHeading`}
        >
          {navArray.map((e, i) => (
            <li key={i} className="leading-[1.625rem] relative">
              <Link href={e.href}> {e.name}</Link>
              {pathname === `/${e.href}` && (
                <div className="absolute border-b-2 border-[#FF5757] top-11 w-full"></div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-[1.724rem] items-center ">
          <Image src={search} alt="search" />
          <Image src={profile} alt="profile" />
          <Image
            className="flex lg:hidden"
            src={hamburger}
            height={25}
            alt="hamburger"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
