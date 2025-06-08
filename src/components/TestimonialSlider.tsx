"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "🌟 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, repellendus nobis excepturi fugit libero sed neque! Ad molestias excepturi dolorum delectus repellendus, ratione nulla iure sunt voluptas quas, cupiditate earum?",
    name: "Alice",
    imagePath: "deepthi.jpg",
  },
  {
    quote:
      "💡 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi suscipit pariatur excepturi similique nesciunt soluta ducimus. Doloremque, qui eveniet. Fugit harum veniam voluptas consequatur labore, pariatur, quasi ut, similique rem culpa vel ex quo autem obcaecati doloremque nulla at consequuntur.",
    name: "Bob",
    imagePath: "amith.png",
  },
  {
    quote:
      "🚀 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti reiciendis quasi architecto delectus sapiente enim reprehenderit corrupti inventore. Sed!",
    name: "Charlie",
    imagePath: "amith.png",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const getPosition = (index: number) => {
    if (index === currentIndex)
      return "z-30 opacity-100 translate-x-0 scale-100";
    if (index === (currentIndex + 1) % testimonials.length)
      return "z-20 opacity-50 translate-x-24 scale-95 rotate-y-6";
    if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    )
      return "z-20 opacity-50 -translate-x-24 scale-95 -rotate-y-6";
    return "opacity-0 scale-90";
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-10">
      <div className="relative h-96">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${
              currentIndex !== index ? "bg-red-900/60" : "bg-red-900"
            } rounded-2xl shadow-lg p-6 text-center transition-all duration-500 ease-in-out transform ${getPosition(
              index
            )}`}
          >
            <div className=" w-full">
              <Image src={t.imagePath} alt="" className="h-24 mx-auto" />
            </div>

            <p className="text-lg text-white">{t.quote}</p>
            <p className="mt-4 text-sm text-amber-50">— {t.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={prev}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
