"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "./Navigation";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface ProjectHeroProps {
  images: string[];
  name: string;
  description: string;
  video: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  images,
  name,
  description,
  video,
}) => {
  const [current, setCurrent] = useState(0);
  const [isPortrait, setIsPortrait] = useState<boolean[]>([]);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Detect portrait orientation
  useEffect(() => {
    const checkOrientation = async () => {
      const results = await Promise.all(
        images.map(
          (src) =>
            new Promise<boolean>((resolve) => {
              const img: HTMLImageElement = new window.Image();
              img.src = src;
              img.onload = () => {
                resolve(img.naturalHeight >= img.naturalWidth);
              };
              img.onerror = () => resolve(false); // assume landscape on error
            })
        )
      );
      setIsPortrait(results);
    };
    checkOrientation();
  }, [images]);

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const handleImageClick = () => {
    setSelectedImage(images[current]);
    setImageModalOpen(true);
  };

  return (
    <div className="relative">
      <div className=" z-90 w-full bg-black">
        <Navigation />
      </div>
      <div
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {images.map((img, idx) => {
          const portrait = isPortrait[idx];
          const isActive = idx === current;

          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity cursor-pointer duration-1000 ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Blurred background for portrait images */}
              {portrait && (
                <Image
                  src={img}
                  alt={`Blurred background ${idx}`}
                  className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 z-0"
                  fill
                />
              )}

              {/* Main Image */}
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                className={`relative z-10 w-full h-full min-h-[300px] bg-black ${
                  portrait === undefined
                    ? "object-contain"
                    : portrait
                    ? "object-contain"
                    : "object-cover"
                }`}
                fill
              />
            </div>
          );
        })}

        {/* Top overlay gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"
          onClick={() => handleImageClick()}
        />

        {/* Content */}
        <div
          className={`absolute ${
            images && images.length >= 2
              ? "bottom-35 left-26"
              : "bottom-10 left-26"
          } z-30 max-w-2xl text-white`}
        >
          <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
          <p className="mt-4 text-sm md:text-xl tracking-widest">
            {description}
          </p>
          {video && (
            <button
              className="mt-4 px-8 py-4 text-white bg-yellow-700 rounded-xl"
              onClick={() => setIsOpen(true)}
            >
              Watch video
            </button>
          )}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 z-30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 z-30"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                idx === current ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom fade to black */}
        {images && images.length > 2 && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black z-30" />
        )}
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-90 flex items-center justify-center w-screen h-screen bg-black/70">
          <div className="relative w-[800px] h-[450px] bg-black rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
              aria-label="Close video modal"
            >
              &times;
            </button>

            {/* Video */}
            <video
              src={video}
              autoPlay
              controls
              muted
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setImageModalOpen(false)}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default ProjectHero;
