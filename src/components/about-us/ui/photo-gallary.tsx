import {
  bikePose,
  carDrive,
  carPose,
  licenceCheck,
} from "@/assets/about/pngs/pngExport";
import React from "react";
import ImageFrame from "./image-frame";

const photoArray = [
  { alt: "car drive", src: carDrive, width: 26.057, height: 28.128 },
  { alt: "car pose", src: carPose, width: 26.057, height: 18.711 },
  { alt: "bike pose", src: bikePose, width: 26.057, height: 28.128 },
  { alt: "licence check", src: licenceCheck, width: 26.057, height: 18.711 },
];

const PhotoGallary = () => {
  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[108.19rem]">
      <div className="flex flex-wrap justify-center w-full gap-[1.091rem] items-center">
        {photoArray.map((e, i) => (
          <ImageFrame
            key={i}
            alt={e.alt}
            src={e.src}
            borderRadius={2.063}
            objectCover={"cover"}
            layout="fixed"
            height={e.height}
            width={e.width}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallary;
