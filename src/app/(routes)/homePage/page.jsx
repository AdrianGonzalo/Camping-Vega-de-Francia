import Image from "next/image";
import Link from "next/link";

import Card from "@/app/components/card";

const HomePage = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src="/bridge.jpg"
          alt="Imagen del puente"
          fill
          className="object-cover object-top"
          priority
        />
        <h1 className="absolute top-1/5 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-2xl mb-7 font-title">Bienvenido al Camping</div>
          <div className="text-7xl font-title">Vega de Francia</div>
        </h1>
      </div>

      {/* Inicio */}
      <div>
        <div>
          <p className="text-5xl text-[var(--titleBody)] flex justify-center mb-4 mt-8">
            ¡ Estamos abierto todo el año !
          </p>
          <div className="flex flex-col justify-center mb-10 mt-8 text-ls ">
            <p className="flex justify-center">
              ¿Buscas un lugar donde el verde lo inunde todo?
            </p>
            <p className="flex justify-center">
              Disfruta de todas las posibilidades que te ofrecemos
            </p>
          </div>
          {/* Tarjetas de actividades */}

          <div className="flex rounded-2xl max-w-[1200px] w-full mx-auto">
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
            className="underline flex justify-center mt-6 mb-10"
          >
            Ver mas
          </Link>
        </div>

        {/* Apartado para Servicios */}
        <div>
          <p className="text-5xl text-[var(--titleBody)] flex justify-center mb-8">
            Lo mejor de nuestros servicios
          </p>
          <div className="flex flex-col items-center text-sm gap-4 mb-10">
            <p>Nuestras parcelas son grandes, con sombras y un buen acceso.</p>
            <div>
              <p>Las mascotas son bienvenidas.</p>
              <p>Acceso adaptado a minusválidos.</p>
            </div>
            <p>
              Temporada alta: 16/04/2025 – 01/09/2025 - Temporada baja: Resto
              del año
            </p>
          </div>
          <div className="mb-10">
            <div className="flex max-w-[1150px] h-auto mx-auto mt-5 mb-15">
              <Image
                src="/bungalows.JPG"
                alt="bungalows"
                width={700}
                height={200}
              />
              <div className="bg-white shadow-2xl text-sm p-15">
                <p className="text-4xl text-[var(--titleBody)] font-bold mb-10">
                  Bungalows y Tipis
                </p>
                <p className="mb-25">
                  Nuestros bungalows ofrecen un espacio cómodo y totalmente
                  equipado para que disfrutes de una estancia agradable en plena
                  naturaleza. Perfectos para familias o grupos que buscan un
                  alojamiento práctico, con todas las comodidades para relajarse
                  después de un día al aire libre.
                </p>
                <button className="text-white bg-green-800 p-2">
                  Mas información
                </button>
              </div>
            </div>

            <div className="flex max-w-[1150px] h-auto mx-auto mt-5">
              <div className="bg-white shadow-2xl text-sm p-15 text-right">
                <p className="text-4xl text-[var(--titleBody)] font-bold mb-10 ">
                  Parcelas
                </p>
                <p className="mb-25">
                  Nuestros bungalows ofrecen un espacio cómodo y totalmente
                  equipado para que disfrutes de una estancia agradable en plena
                  naturaleza. Perfectos para familias o grupos que buscan un
                  alojamiento práctico, con todas las comodidades para relajarse
                  después de un día al aire libre.
                </p>
                <button className="text-white bg-green-800 p-2">
                  Mas información
                </button>
              </div>
              <Image
                src="/parcelas.JPG"
                alt="parcelas"
                width={700}
                height={200}
              />
            </div>
            <div></div>
          </div>
        </div>

        {/* Apartado para fijos */}
        <div className="flex flex-col  items-center">
          <p className="text-5xl text-[var(--titleBody)] mb-4">
            ¿Quieres formar parte de nuestra familia?
          </p>
          <p className="mb-10 text-sm text-center w-[800px]">
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
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-4xl z-20">
            <p>Ponte en contacto con nosotros</p>
            <br />
            <p>900 00 00 00 - 600 00 00 00</p>
          </div>
        </div>

        {/* Apartado de Opiniones */}
        <div>
          <p className="text-5xl text-[var(--titleBody)] mb-10 flex justify-center">
            Opiniones sobre nosotros
          </p>
          <div className="flex gap-5 justify-center mb-10">
            <Image
              src="/reseña.png"
              alt="reseña"
              width={300}
              height={300}
              className="object-cover object-center"
            />

            <Image
              src="/reseña.png"
              alt="reseña"
              width={300}
              height={300}
              className="object-cover object-center"
            />

            <Image
              src="/reseña.png"
              alt="reseña"
              width={300}
              height={300}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
