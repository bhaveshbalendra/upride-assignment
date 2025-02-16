import { footerLogo, footerUpride } from "@/assets/about/pngs/pngExport";
import { Anybody, Arimo } from "next/font/google";
import Image from "next/image";
import React from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});
const arimo = Arimo({
  variable: "--fontFamily-arimo",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <footer className="max-w-[107.5rem] min-h-[18.5rem]  mx-auto mt-[1.688rem] pb-[2.063rem]">
      <div className="w-full flex justify-between">
        <span></span>
        <div className="min-w-[61.644rem] min-h-[30px] rounded-t-[2.254rem] bg-white"></div>
      </div>
      <div className="bg-white min-w-[61.644rem] min-h-[17.25rem] rounded-t-none  rounded-l-[2.254rem]  rounded-b-[2.254rem] pt-[3.125rem]">
        <div className="flex justify-center">
          <div className="flex max-h-[7.721rem]">
            <div className="flex flex-col max-w-[19.286rem] gap-[1rem] mr-[4.813rem]">
              <div className="flex">
                <Image src={footerLogo} alt="footerLogo" />
                <Image src={footerUpride} alt="footer upride" />
              </div>
              <p
                className={`${arimo.variable} font-arimo text-[#5F5F5F] leading-[1.313rem] text-[1rem]`}
              >
                Learn Driving and get driving license. Find top rated driving
                schools near you.
              </p>
            </div>
            <ul className="flex max-w-[42.5rem] gap-[3.5rem]">
              <li>
                <h3
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#1E1E1E] `}
                >
                  Service
                </h3>
              </li>
              <li className="flex flex-col gap-[0.875rem]">
                <h3
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#1E1E1E] `}
                >
                  About Us
                </h3>
                <h4
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#5F5F5F] font-medium`}
                >
                  Our Story
                </h4>
                <h4
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#5F5F5F] font-medium`}
                >
                  Our Team
                </h4>
              </li>
              <li className="flex flex-col gap-[0.875rem]">
                <h3
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#1E1E1E] `}
                >
                  Resources
                </h3>
                <h4
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#5F5F5F] font-medium`}
                >
                  Articles
                </h4>
                <h4
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#5F5F5F] font-medium`}
                >
                  Blogs
                </h4>
              </li>
              <li>
                <h3
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#1E1E1E] `}
                >
                  FAQS
                </h3>
              </li>
              <li>
                <h3
                  className={`${anybody.variable} font-anybody  text-[1.25rem] leading-[1.625rem] text-[#1E1E1E] `}
                >
                  Contact Us
                </h3>
              </li>
            </ul>
          </div>
          <div className="max-w-[24.324rem] ml-[8.083rem]">
            <h3
              className={`${anybody.variable} font-anybody font-semibold  text-[1.375rem] leading-[1.423rem] mb-[0.538rem] text-black `}
            >
              Join the Upride Community Today!
            </h3>
            <p
              className={`${arimo.variable} font-arimo text-[#101424] font-normal leading-[1.313rem] text-[1rem] pr-[10px] mb-[1.149rem]`}
            >
              Subscribe now and never miss an update on all things driving.
            </p>
            <div className="flex items-center border border-gray-300 rounded-full p-1 shadow-sm bg-gray-100">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow p-2 rounded-l-full text-gray-700 focus:outline-none bg-transparent"
              />
              <button className="bg-[#E42525] text-white px-4 py-2 rounded-full hover:bg-red-600">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mt-[1.875rem] border-[#F1F1F1] border-t-2 p-[11px] text-[#B6B6B6]">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
