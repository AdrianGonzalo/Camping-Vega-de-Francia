"use client";

import Image from "next/image";
import { useState } from "react";

const CardService = ({ img, title, description, deepDescription }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto mt-7">
      {/* Imagen más ancha */}
      <div className="relative w-full h-96">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
      </div>

      {/* Contenido más estrecho */}
      <div className="relative z-10 -mt-10 mx-auto w-[90%] md:w-[75%] bg-white shadow-md text-center p-4">
        <h1 className="text-lg font-bold mb-3">{title}</h1>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        {/* more description */}
        {showMore && (
          <div className="mt-4 text-sm text-gray-600 transition-all duration-300 ease-in-out">
            {deepDescription || "Sin detalles adicionales disponibles."}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <button
            className="w-full bg-[var(--buttonInformation)] text-white py-2 rounded"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ocultar detalles" : "Ver más detalles"}
          </button>
          <button className="w-full bg-[var(--buttonReserve)] text-white py-2">
            Reservar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardService;
