import { drive, testDrive } from "@/assets/about/svgs/svgExport";
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

const ContentBox = ({
  h4,
  h5,
  p,
  css,
}: {
  h4: string;
  h5: string;
  p: string;
  css: { w: string; pr?: string };
}) => {
  return (
    <div style={{ maxWidth: css.w, paddingRight: css.pr }}>
      <h4
        className={`${anybody.variable} font-anybody text-[#E42525] text-[1.563rem] font-bold leading-[109.6%]`}
      >
        {h4}
      </h4>
      <h5
        className={`${arimo.variable} font-armio text-colorDarkHeading text-[1.563rem] font-bold leading-[140%]`}
      >
        {h5}
      </h5>
      <p
        className={`${arimo.variable} font-armio text-colorDarkHeading text-[1.375rem] font-normal leading-[157%]`}
      >
        {p}
      </p>
    </div>
  );
};

const MissionVisionSection = () => {
  return (
    <div className="bg-[#F4F4F4] w-full pt-[5.327rem] pb-[5.65rem]">
      <div className="mx-auto max-w-[106.19rem]">
        <div className="flex gap-[6.718rem] mb-[4.063rem] items-center">
          <Image src={testDrive} alt=" test drive" className="" />
          <ContentBox
            h4={"Mission"}
            h5={"Empowering Confident and Responsible Drivers"}
            p={
              "Empower learners through innovative training techniques, expertguidance, and a commitment to road safety, ensuring every journey begins with confidence."
            }
            css={{ w: "38.056rem" }}
          />
        </div>
        <div className="flex gap-[9.668rem] items-center">
          <ContentBox
            h4={"Vision"}
            h5={"Driving Education, Reinvented for India"}
            p={
              "ur dream is big: Revolutionizing driver education across India by blending technology, expertise, and a customer-first approach. Starting in Bangalore, we’re creating a movement where every learner becomes a responsible, skilled, and confident driver."
            }
            css={{ w: "46.801rem" }}
          />
          <Image src={drive} alt="drive" />
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
