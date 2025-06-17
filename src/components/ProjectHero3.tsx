import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectHeroProps {
  images: string[];
  name: string;
  description: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  images,
  name,
  description,
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;
    const interval = setInterval(() => nextSlide(), 2000);
    return () => clearInterval(interval);
  }, [autoPlay, images, nextSlide]);

  const pauseOnHover = () => setAutoPlay(false);
  const resumeOnLeave = () => setAutoPlay(true);

  return (
    <div
      className="relative w-full h-[60vh] md:h-[600px] overflow-hidden"
      onMouseEnter={pauseOnHover}
      onMouseLeave={resumeOnLeave}
    >
      {/* Background slideshow */}
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient Overlay from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Description Content */}
      <div className="absolute bottom-8 left-8 z-20 max-w-2xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{name}</h1>
        <p className="mt-4 text-sm md:text-base">{description}</p>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 z-20"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 z-20"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Dark Fade at bottom for section transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black z-10" />
    </div>
  );
};

export default ProjectHero;
