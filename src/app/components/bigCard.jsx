"use client";

import { useState } from "react";

import Image from "next/image";

const BigCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft,
  textMore,
}) => {
  const [showMore, setShowMore] = useState(false);

  const alignment = imageLeft
    ? "text-left items-start"
    : "text-right items-end";

  return (
    <div>
      <div
        className={`flex max-w-[1150px] h-auto mx-auto mt-5 mb-15 gap-5 ${
          imageLeft ? "flex-row-reverse" : ""
        } flex-col md:flex-row ${
          imageLeft ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div
          className={`bg-white shadow-2xl text-sm p-10 flex-1 flex flex-col justify-center ${alignment}`}
        >
          <p className="text-4xl text-[var(--titleBody)] font-bold mb-10">
            {title}
          </p>
          <p className="mb-6">{description}</p>
          <button
            className="text-white bg-green-800 p-2 mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ver menos" : "Más información"}
          </button>
        </div>
        <div className="w-[500px] h-[300px] relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" max-w-[1150px] h-auto mx-auto -mt-10 mb-15 gap-5">
        {showMore && textMore && (
          <div className="mt-6 p-4 bg-white shadow-md border border-gray-300 overflow-auto">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="text-gray-700 w-4xl">{textMore}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BigCard;
