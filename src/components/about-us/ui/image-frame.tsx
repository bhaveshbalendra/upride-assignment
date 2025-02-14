/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const ImageFrame = ({
  height = 100,
  width = 100,
  borderRadius = "0",
  objectCover = "contain",
  alt,
  src,
  layout = "intrinsic",
}: any) => {
  return (
    <div
      style={{
        height: `${height}rem`,
        width: `${width}rem`,
        borderRadius: `${borderRadius}rem`,
        overflow: "hidden",
      }}
      className="flex justify-center items-center"
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
