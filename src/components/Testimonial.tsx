"use client";

import { useState } from "react";

const testimonialData = [
  {
    name: "Amith Kashyap H",
    profession: "Software Engineer",
    testimonial:
      "I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy. I am a very good guy.",
    imagePath: "amith.png",
  },
  {
    name: "Deepthi B",
    profession: "Architect",
    testimonial: "I am a bad girl.",
    imagePath: "deepthi.jpg",
  },
  {
    name: "Deepthi Balasubramanya",
    profession: "Architect",
    testimonial: "I am a bad girl.",
    imagePath: "deepthi.jpg",
  },
];

const Testimonial = () => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  const nextTestimonial = () => {
    selectedIndex++;
    if (selectedIndex > testimonialData.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex);
    }
  };

  const previousTestimonial = () => {
    selectedIndex--;
    if (selectedIndex < 0) {
      setSelectedIndex(testimonialData.length - 1);
    } else {
      setSelectedIndex(selectedIndex);
    }
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center">
      <h2 className="text-4xl text-center text-white mt-48">Testimonials</h2>
      <div className="w-[800px] bg-transparent flex rounded-2xl gap-8 items-center px-8 py-4 relative shadow-white">
        <img
          src={testimonialData[selectedIndex].imagePath}
          className="h-56 scale-130 pl-10 rounded-2xl rounded-bl-2xl"
        />
        <blockquote className="pl-10">
          <p className="text-[20px] font-semibold text-white tracking-tight leading-[1.5]">
            {testimonialData[selectedIndex].testimonial}
          </p>
          <p className="text-amber-50 text-[20px] mt-4">
            {testimonialData[selectedIndex].name}
          </p>
          <p className="text-amber-100 text-[16px]">
            {testimonialData[selectedIndex].profession}
          </p>
        </blockquote>
        <button
          className="bg-white p-2 rounded-full flex items-center justify-center absolute left-0 translate-x-[-50%] shadow-gray-600"
          onClick={previousTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 stroke-amber-900 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="bg-white p-2 rounded-full flex items-center justify-center absolute right-0 translate-x-[50%] shadow-gray-600"
          onClick={nextTestimonial}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 stroke-amber-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-4">
        {testimonialData.map((data, i) => (
          <button
            className={`h-4 w-4 border-amber-900 border-2 rounded-full ${
              i === selectedIndex ? "bg-amber-900" : "bg-white"
            }`}
            key={i}
          >
            {" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
