"use client";

import { useState } from "react";
import Image from "next/image";

import Routes from "./routes";

const BigCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft,
  textMore,
  showRoutes,
  showMoreButton = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const alignment = imageLeft
    ? "text-left items-start"
    : "text-right items-end";

  return (
    <>
      {/* Card principal */}
      <div className="max-w-[1150px] mx-auto my-10">
        <div
          className={`flex gap-5 flex-col md:flex-row ${
            imageLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`bg-white shadow-2xl p-10 flex-1 flex flex-col justify-center ${alignment}`}
          >
            <h2 className="text-4xl text-[var(--titleBody)] font-bold mb-6">
              {title}
            </h2>
            <p className="mb-10">{description}</p>

            {/* Mostrar botón solo si showMoreButton es true */}
            {showMoreButton && (
              <button
                className="text-white bg-green-800 px-4 py-2 rounded hover:bg-green-700 transition"
                onClick={() => setIsOpen(true)}
              >
                Más información
              </button>
            )}
          </div>

          <div className="w-full md:w-[500px] h-[300px] relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Modal / Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-xl w-[90vw] max-h-[80vh] overflow-auto">
            {/* Imagen arriba */}
            <div className="relative w-full h-60">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4 text-center">{title}</h3>
              {/* Si es senderismo y showRoutes=true mostramos el componente */}
              {showRoutes && title === "Senderismo" ? (
                <Routes showRoutes={true} />
              ) : (
                <div className="text-gray-700">{textMore}</div>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BigCard;
