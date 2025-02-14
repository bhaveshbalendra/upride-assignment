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
    <div
      style={{
        background: "linear-gradient(to top, #F2EAEA 30%, #F3ECE3 70%)",
      }}
      className=" pt-[1rem] md:pt-[4.879rem]   w-full mx-auto"
    >
      <div className="flex flex-wrap justify-center mx-auto max-w-[108.19rem] gap-[1.091rem] items-center px-2 md:px-0">
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
