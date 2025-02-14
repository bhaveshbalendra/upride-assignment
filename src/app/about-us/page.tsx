import HeroSection from "@/components/about-us/hero-section";
import StorySection from "@/components/about-us/story-section";
import PhotoGallary from "@/components/about-us/ui/photo-gallary";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <PhotoGallary />
      <StorySection />
    </div>
  );
};

export default AboutUs;
