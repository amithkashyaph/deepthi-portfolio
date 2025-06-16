// components/ProjectHero.tsx
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "./Navigation";
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

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay, images, nextSlide]);

  const pauseOnHover = () => setAutoPlay(false);
  const resumeOnLeave = () => setAutoPlay(true);

  return (
    <div className="relative">
      <div className="absolute z-10 w-full bg-transparent">
        <Navigation />
      </div>
      <div
        className="relative h-[80vh] md:h-screen w-full overflow-hidden"
        onMouseEnter={pauseOnHover}
        onMouseLeave={resumeOnLeave}
      >
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

        {/* Gradient and Description */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{name}</h1>
          <p className="text-white mt-4 max-w-2xl text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
      </div>
    </div>
  );
};

export default ProjectHero;
