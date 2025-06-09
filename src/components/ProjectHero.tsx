// components/ProjectHero.jsx
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/jagadish-residence/01.jpg",
  "/jagadish-residence/02.jpg",
  "/jagadish-residence/03.jpg",
  "/jagadish-residence/04.jpg",
  "/jagadish-residence/05.jpg",
  // Add more image paths
];

const ProjectHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          fill
        />
      ))}

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
        <h1 className="text-4xl font-bold text-white">
          Modern Hillside Residence
        </h1>
        <p className="text-white mt-4 max-w-2xl">
          This project explores the relationship between built forms and their
          natural surroundings, using local materials and open planning for a
          seamless indoor-outdoor experience.
        </p>
      </div>
    </div>
  );
};

export default ProjectHero;
