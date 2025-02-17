import {
  frontCar,
  profilePicture,
  twoDCar,
} from "@/assets/about/svgs/svgExport";
import { Anybody, Arimo } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});
const arimo = Arimo({
  variable: "--fontFamily-arimo",
  subsets: ["latin"],
});

const cardValuesArray = [
  {
    src: profilePicture,
    heading: "Instructor On Demand",
    content:
      "At Upride, we don’t just teach driving—we redefine it. Here’s how we make your learning journey exceptional",
  },
  {
    src: frontCar,
    heading: "Learn on Your Own Vehicle",
    content:
      "Get personalized training on your car or bike to build confidence with the vehicle you’ll use daily.",
  },
  {
    src: twoDCar,
    heading: "Comprehensive Training",
    content:
      "From beginner-friendly courses to refresher sessions, we cater to all skill levels with two-wheeler training, four-wheeler training, and everything in between.",
  },
];

const Card = ({
  icon,
  heading,
  content,
}: {
  icon: StaticImageData;
  heading: string;
  content: string;
}) => {
  return (
    <div className=" 2xl:min-w-[32.281rem] 2xl:min-h-[25.004rem]  h-auto bg-[#F0E1E1] rounded-[1.438rem]">
      <div className="p-4 md:p-6 2xl:pb-0 2xl:pr-0 2xl:pt-[2.649rem] 2xl:pl-[3.101rem]">
        <Image src={icon} alt={heading} />
        <h5
          className={`${arimo.variable} pt-[1rem] md:pt-[2.636rem] font-bold font-arimo text-[1.563rem] text-colorDarkHeading leading-[2.188rem]`}
        >
          {heading}
        </h5>
        <p
          className={`${arimo.variable}  max-w-[24.911rem] font-arimo text-[1rem] md:text-[1.375rem] text-colorDarkHeading leading-[2.159rem]`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const UniqueApproachSection = () => {
  return (
    <div className="mx-auto max-w-[107.188rem]  min-h-[49.093rem] bg-[#F2EAEA] rounded-[3.188rem] pb-10 md:pb-0 px-4 2xl:p-0">
      <div className="mx-auto text-center pt-[2rem] md:pt-[5.325rem]">
        <h3
          className={`${anybody.variable} font-anybody text-[1.75rem] font-bold leading-[2.375rem]`}
        >
          <span className="bg-bgRedV2 text-transparent bg-clip-text">
            Our Unique Approach
          </span>
        </h3>
        <h2
          className={`${anybody.variable} font-anybody text-[1.5rem] md:text-[2.75rem] text-colorDarkHeading font-bold md:leading-[3.5rem]`}
        >
          Driving Smarter, Learning Better
        </h2>
        <p
          className={`${arimo.variable} max-w-[56.121rem] pt-[0.492rem] mx-auto font-arimo text-[1.375rem] text-colorDarkHeading leading-[2.159rem]`}
        >
          At Upride, we don’t just teach driving—we redefine it. Here’s how we
          make your learning journey exceptional
        </p>
      </div>
      <div className="flex px-2 lg:max-px-[4.132rem]  gap-[1.063rem] pt-[3.617rem] flex-wrap 2xl:flex-nowrap justify-center ">
        {cardValuesArray.map((e, i) => (
          <Card icon={e.src} heading={e.heading} content={e.content} key={i} />
        ))}
      </div>
    </div>
  );
};

export default UniqueApproachSection;
