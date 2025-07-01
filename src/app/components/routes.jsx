"use client";

import { useState } from "react";
import Image from "next/image";

const rutas = [
  {
    nombre: "Senda de los tres Ríos",
    descripcion: `La Ruta de los Tres Ríos es un sendero circular accesible que comienza y termina en la Plaza Mayor de Sotoserrano, Sierra de Francia.<br /><br />

    Recorre las confluencias de los ríos Francia y Cuerpo de Hombre, que desembocan en el río Alagón, valle que atraviesa la Sierra antes de unirse al río Tajo.<br /><br />

    Durante el recorrido, disfrutarás de bosques y vegetación ribereña dentro de la Reserva Natural de la Biosfera.<br /><br />

    La fauna incluye garza real, cigüeña negra, martín pescador, nutria y el pez colmillejo, exclusivo del río Alagón.<br /><br />

    En varios miradores podrás contemplar los valles fluviales, la Sierra de Béjar y la villa de Miranda del Castañar.`,
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia&destination=Senda+de+los+tres+Ríos",
    imageSrc: "/routes/senda-tres-rios.jpg",
    imageAlt: "Senda de los tres Ríos",
  },
  {
    nombre: "Camino de los Prodigios",
    descripcion: `El Camino de los Prodigios es una ruta llena de encanto que recorre paisajes naturales y pueblos con historia en la Sierra de Francia. A lo largo del camino, podrás disfrutar de senderos rodeados de bosques, riachuelos y zonas de gran biodiversidad.<br /><br />
  
    Esta ruta invita a la contemplación y al descubrimiento, mostrando la riqueza cultural y natural de la región. Ideal para quienes buscan una experiencia tranquila, conectada con la naturaleza y las tradiciones locales.<br /><br />
  
     Durante el recorrido, descubrirás rincones sorprendentes que reflejan la magia y el legado de esta tierra, con vistas panorámicas que te dejarán sin aliento.`,
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia,+Calle+Camping+1,+37657+Sotoserrano,+Salamanca&destination=Camino+de+los+Prodigios,+37660+Miranda+del+Castañar,+Salamanca",
    imageSrc: "/routes/camino-prodigios.jpg",
    imageAlt: "Camino de los Prodigios",
  },
  {
    nombre: "Camino de Las Raíces",
    descripcion: `El Camino de Las Raíces es un sendero que te invita a caminar entre árboles centenarios y disfrutar de la naturaleza en estado puro.<br /><br />

    Recorre bosques frondosos donde podrás respirar tranquilidad y descubrir la riqueza natural de la zona.<br /><br />

    Es ideal para quienes buscan una experiencia de conexión con el entorno y el silencio del bosque.<br /><br />

    Durante el recorrido, podrás observar la diversidad de flora y fauna que habitan este espacio natural protegido.

`,
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia&destination=Camino+de+Las+Raíces",
    imageSrc: "/routes/camino-raices.jpg",
    imageAlt: "Camino de Las Raíces",
  },
  {
    nombre: "Chorro de las Batuecas",
    descripcion: `Visita el Chorro de las Batuecas, una hermosa cascada rodeada de naturaleza y tranquilidad.<br /><br />
  
  Es un lugar perfecto para relajarte, disfrutar del sonido del agua y conectar con el entorno natural.<br /><br />
  
  El sendero que lleva a la cascada es accesible y ofrece paisajes espectaculares de la Sierra de Francia.`,
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia&destination=Chorro+de+las+Batuecas",
    imageSrc: "/routes/chorro-batuecas.jpeg",
    imageAlt: "Chorro de las Batuecas",
  },
  {
    nombre: "Camino Bosque de los Espejos",
    descripcion: `Recorre el mágico Camino Bosque de los Espejos, un sendero que parece sacado de un cuento de hadas.<br /><br />
  
  Disfruta de bosques densos y un ambiente tranquilo que invita a la reflexión y el contacto con la naturaleza.<br /><br />
  
  Ideal para paseos relajantes en un entorno natural único.`,
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia&destination=Camino+Bosque+de+los+Espejos",
    imageSrc: "/routes/bosque-espejos.jpg",
    imageAlt: "Camino Bosque de los Espejos",
  },
];

const Routes = ({ showRoutes }) => {
  const [rutaActiva, setRutaActiva] = useState(null);

  if (!showRoutes) return null;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">Rutas disponibles</h3>
      <ul className="list-disc list-inside text-gray-800">
        {rutas.map((ruta) => (
          <li
            key={ruta.nombre}
            className="cursor-pointer text-blue-900 hover:underline mb-2"
            onClick={() => setRutaActiva(ruta)}
          >
            {ruta.nombre}
          </li>
        ))}
      </ul>

      {rutaActiva && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setRutaActiva(null)}
        >
          <div
            className="bg-white rounded p-6 max-w-xl w-[90vw] max-h-[80vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen arriba */}
            {rutaActiva.imageSrc && (
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={rutaActiva.imageSrc}
                  alt={rutaActiva.imageAlt || rutaActiva.nombre}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <h4 className="text-xl font-bold mb-6 text-center">
              {rutaActiva.nombre}
            </h4>

            <div
              className="mb-10 text-gray-700"
              dangerouslySetInnerHTML={{ __html: rutaActiva.descripcion }}
            ></div>

            <div className="w-full bg-green-700 text-center rounded mb-3">
              <a
                href={rutaActiva.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white  py-2 rounded hover:bg-green-800 transition w-full"
              >
                Ver ruta en Google Maps
              </a>
            </div>

            <div className="w-full bg-red-700 text-center rounded">
              <button
                onClick={() => setRutaActiva(null)}
                className="inline-block text-white  py-2 rounded hover:bg-red-800 transition w-full"
                aria-label="Cerrar popup"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Routes;
