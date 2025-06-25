"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/utils/constants";
import TruncatableText from "./TruncateableText";

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
    <div className="relative w-[580px] mx-auto mt-10">
      <h1 className="text-white text-center text-4xl my-10 tracking-widest uppercase">
        Testimonials
      </h1>
      <div className="relative w-full h-[580px]">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full overflow-scroll h-[580px] flex flex-col gap-8 p-10 ${
              currentIndex !== index ? "bg-red-900/60" : "bg-red-900"
            } rounded-2xl shadow-lg p-6 text-center transition-all duration-500 ease-in-out transform ${getPosition(
              index
            )}`}
          >
            <div className="">
              <Image
                src={t.imagePath}
                alt=""
                className=" mx-auto"
                width={250}
                height={350}
              />
            </div>

            <TruncatableText text={t.quote} maxLength={220} />

            <p className="mt-4 text-sm text-amber-50">— {t.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 px-4 gap-10">
        <div className="flex justify-center items-center">
          <button
            onClick={prev}
            className="p-2 bg-white rounded-full shadow  transition cursor-pointer hover:bg-red-900 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div>
          <button
            onClick={next}
            className="p-2 bg-white rounded-full shadow  transition cursor-pointer hover:bg-red-900 hover:text-white z-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
