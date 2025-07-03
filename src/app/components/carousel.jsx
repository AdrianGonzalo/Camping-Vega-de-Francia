"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/carousel/img1.jpg",
    text: ["Bienvenidos al Camping", "Vega de Francia"],
  },
  {
    img: "/carousel/img2.jpg",
    text: ["Nosotros aquí", "Somos Diferentes"],
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.text.join(" ")}
            fill
            className="object-cover object-top"
            priority={index === 0}
          />
          <h1 className="absolute text-black top-[14%] sm:top-[20%] left-1/2 transform -translate-x-1/2 text-center px-4 drop-shadow-lg">
            <div className="text-2xl sm:text-4xl font-semibold mb-2">
              {slide.text[0]}
            </div>
            <div className="text-5xl sm:text-7xl font-bold">
              {slide.text[1]}
            </div>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
