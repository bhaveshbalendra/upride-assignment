import {
  bikePose,
  carDrive,
  carPose,
  licenceCheck,
} from "@/assets/about/pngs/pngExport";
import React from "react";
import ImageFrame from "./image-frame";

const PhotoGallary = () => {
  const photoArray = [
    { alt: "car drive", src: carDrive, width: 26.057, height: 28.128 },
    { alt: "car pose", src: carPose, width: 26.057, height: 18.711 },
    { alt: "bike pose", src: bikePose, width: 26.057, height: 28.128 },
    { alt: "licence check", src: licenceCheck, width: 26.057, height: 18.711 },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to top, #F2EAEA 30%, #F3ECE3 70%)",
      }}
      className="pt-4 md:pt-[4.879rem] w-full mx-auto "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-items-center lg:justify-items-start lg:grid-cols-4 gap-4 max-w-[108.19rem] mx-auto px-4 md:px-8">
        {photoArray.map((photo, i) => (
          <div
            key={i}
            className="w-full"
            style={{
              maxWidth: `${photo.width}rem`,
              marginBlock: "auto",
            }}
          >
            <ImageFrame
              alt={photo.alt}
              src={photo.src}
              borderRadius={2.063}
              objectCover="cover"
              layout="fixed"
              height={photo.height}
              width={photo.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallary;
