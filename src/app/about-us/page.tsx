import FaqsSection from "@/components/about-us/faqs-section";
import FounderPerpectiveSection from "@/components/about-us/founder-perpective-section";
import HeroSection from "@/components/about-us/hero-section";
import MissionVisionSection from "@/components/about-us/mission-vision-section";
import OurGallary from "@/components/about-us/our-gallary";
import SpecialitySection from "@/components/about-us/speciality-section";
import StorySection from "@/components/about-us/story-section";
import PhotoGallary from "@/components/about-us/ui/photo-gallary";
import UniqueApproachSection from "@/components/about-us/unique-approach-section";
import Footer from "@/components/layout/footer/footer";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <PhotoGallary />
      <StorySection />
      <MissionVisionSection />
      <FounderPerpectiveSection />
      <div className="bg-[#F4F4F4] w-full pt-[4.213rem]">
        <UniqueApproachSection />
        <SpecialitySection />
        <OurGallary />
        <FaqsSection />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
