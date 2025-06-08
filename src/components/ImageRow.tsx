import Image from "next/image";
import React from "react";

interface ImageRowProps {
  images: string[];
  title: string;
}

const ImageRow: React.FC<ImageRowProps> = ({ images }) => {
  return (
    <div className="relative h-[400px]">
      {/* <div className="absolute top-24 left-0 w-full h-[400px]  z-20 bg-gradient-to-b from-[rgb(14,5,5)] to-[rgb(41, 13, 18)] " /> */}
      <div
        className={`absolute inset-0 top-20 z-0 ${
          images && images.length > 2
            ? "bg-gradient-to-b from-[rgb(14,5,5)] to-[rgb(29,8,12)]"
            : "bg-black"
        }`}
      />
      <div className="-mt-20 relative z-40 px-6">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-18 justify-start">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative  md:max-w-[250px]  bg-neutral-800 rounded-xl overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300 shadow-md max-h-[300px]"
            >
              {/* Image */}
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                height={400}
                width={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageRow;
