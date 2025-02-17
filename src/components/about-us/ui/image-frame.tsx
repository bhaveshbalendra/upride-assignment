import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageFrame = ({
  height,
  width,
  borderRadius = 0,
  objectCover = "contain",
  alt,
  src,
  layout = "intrinsic",
}: {
  height: number;
  width: number;
  borderRadius: number;
  objectCover: string;
  alt: string;
  src: StaticImageData;
  layout: string;
}) => {
  return (
    <div
      className="relative"
      style={{
        aspectRatio: `${width}/${height}`,
        borderRadius: `${borderRadius}rem`,
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectCover}
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageFrame;
