import Image from "next/image";
import Link from "next/link";

import Card from "@/app/components/card";
import GoogleReviews from "@/app/components/GoogleReviews";

import Carousel from "@/app/components/carousel";

const HomePage = () => {
  return (
    <div>
      {/* <div className="relative w-full h-screen">
        <Image
          src="/bridge.jpg"
          alt="Imagen del puente"
          fill
          className="object-cover object-top"
          priority
        />
        <h1 className="absolute top-1/7 sm:top-1/5 left-1/2 transform -translate-x-1/2 text-center px-4">
          
          <div className="text-xl sm:text-2xl mb-4 sm:mb-7">
            Bienvenido al Camping
          </div>
          <div className="text-4xl sm:text-7xl font-bold">Vega de Francia</div>
        </h1>
      </div> */}

      <Carousel />

      {/* Inicio */}
      <div>
        <div>
          <p className="text-2xl sm:text-5xl text-[var(--titleBody)] flex justify-center mb-4 mt-8 px-4 text-center font-bold">
            ¡Estamos abierto todo el año!
          </p>
          <div className="flex flex-col justify-center mb-10 mt-8 text-sm sm:text-base px-4 max-w-xl mx-auto text-center">
            <p>¿Buscas un lugar donde el verde lo inunde todo?</p>
            <p>Disfruta de todas las posibilidades que te ofrecemos</p>
          </div>
          {/* Tarjetas de actividades */}
          <div className="flex flex-col sm:flex-row gap-6 rounded-2xl max-w-[1200px] w-full mx-auto px-4">
            <Card
              img="/cards/rio.jpg"
              title="Piscina Natural"
              description="Sumérgete en el placer del río, ya sea nadando en sus aguas o lanzando la caña."
            />

            <Card
              img="/cards/barbacoa.jpg"
              title="Barbacoa"
              description="Zona preparada con parrillas para disfrutar con familiares ."
            />

            <Card
              img="/cards/parque.jpg"
              title="Parque Infantil"
              description="Un espacio pensado para que los más pequeños se diviertan al máximo."
            />
          </div>

          <Link
            href="/activities"
            className="underline flex justify-center mt-6 mb-10 px-4"
          >
            Ver más
          </Link>
        </div>

        {/* Apartado para Servicios */}
        <div>
          <p className="text-2xl sm:text-5xl text-[var(--titleBody)] flex justify-center mb-8 px-4 text-center font-bold">
            Lo mejor de nuestros servicios
          </p>
          <div className="flex flex-col items-center text-xs sm:text-sm gap-4 mb-10 px-4 max-w-xl mx-auto text-center">
            <p>Nuestras parcelas son grandes, con sombras y un buen acceso.</p>
            <div>
              <p>Las mascotas son bienvenidas.</p>
              <p>Acceso adaptado a minusválidos.</p>
            </div>
            <p className="font-semibold">
              Temporada alta: 16/04/2025 – 01/09/2025 - Temporada baja: Resto
              del año
            </p>
          </div>
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row max-w-[1150px] h-auto mx-auto mt-5 mb-15 px-4 gap-4">
              <div className="flex-shrink-0 relative w-full sm:w-1/2 h-[200px] sm:h-auto">
                <Image
                  src="/bungalows.JPG"
                  alt="bungalows"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-white shadow-2xl text-sm p-6 sm:p-10 flex flex-col justify-center sm:w-1/2">
                <p className="text-2xl sm:text-4xl text-[var(--titleBody)] font-semibold mb-4 sm:mb-10">
                  Bungalows y Tipis
                </p>
                <p className="mb-6 sm:mb-25">
                  Nuestros bungalows ofrecen un espacio cómodo y totalmente
                  equipado para que disfrutes de una estancia agradable en plena
                  naturaleza. Perfectos para familias o grupos que buscan un
                  alojamiento práctico, con todas las comodidades para relajarse
                  después de un día al aire libre.
                </p>
                <Link href="/bungalows">
                  <button className="text-white bg-green-800 p-2 w-max">
                    Más información
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row max-w-[1150px] h-auto mx-auto mt-5 px-4 gap-4">
              <div className="bg-white shadow-2xl text-sm p-6 sm:p-10 flex flex-col justify-center sm:w-1/2 text-right order-2 sm:order-1">
                <p className="text-2xl sm:text-4xl text-[var(--titleBody)] font-semibold mb-4 sm:mb-10 ">
                  Parcelas
                </p>
                <p className="mb-6 sm:mb-25">
                  Nuestros bungalows ofrecen un espacio cómodo y totalmente
                  equipado para que disfrutes de una estancia agradable en plena
                  naturaleza. Perfectos para familias o grupos que buscan un
                  alojamiento práctico, con todas las comodidades para relajarse
                  después de un día al aire libre.
                </p>
                <Link href="/plots">
                  <button className="text-white bg-green-800 p-2 w-max">
                    Más información
                  </button>
                </Link>
              </div>
              <div className="flex-shrink-0 relative w-full sm:w-1/2 h-[200px] sm:h-auto order-1 sm:order-2">
                <Image
                  src="/parcelas.JPG"
                  alt="parcelas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Apartado para fijos */}
        <div className="flex flex-col items-center px-4">
          <p className="text-2xl sm:text-5xl text-[var(--titleBody)] mb-4 text-center font-bold">
            Forma parte de nuestra familia
          </p>
          <p className="mb-10 text-xs sm:text-sm text-center max-w-xl">
            Si estás interesado en unirte a nuestro camping como residente fijo,
            estaremos encantados de darte la bienvenida. Ponte en contacto con
            nosotros para conocer todos los detalles.
          </p>
        </div>

        {/* Apartado con imagen y numero*/}
        <div className="w-full h-[300px] relative mb-10">
          <Image
            src="/meandro.JPG"
            alt="Imagen del meandro con numero de contacto"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay negro semitransparente */}
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          {/* Texto encima */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-2xl sm:text-4xl z-20 px-4 text-center">
            <p>Ponte en contacto con nosotros</p>
            <br />
            <p>923 16 11 04 - 653 06 81 00</p>
          </div>
        </div>

        {/* Apartado de Opiniones */}
        <div>
          <p className="text-2xl sm:text-5xl text-[var(--titleBody)] mb-10 flex justify-center px-4 text-center font-bold">
            Opiniones sobre nosotros
          </p>
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <GoogleReviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
