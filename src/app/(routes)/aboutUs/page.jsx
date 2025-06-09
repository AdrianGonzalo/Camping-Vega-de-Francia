import Header from "@/app/components/header";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Header title="SOBRE NOSOTROS" img="/headers/about.webp" />

      <section className="flex flex-col items-center justify-center px-4 py-16 bg-white text-black">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 bg-[var(--backgroundDark)] shadow-lg p-6 sm:p-12">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto">
            <img
              src="/jose0134.jpg"
              alt="Camping Vega de Francia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-lg">
            <h2 className="text-2xl font-bold text-[var(--titleBody)]">
              Nuestra historia
            </h2>

            <p>
              En <strong>Camping Vega de Francia</strong> llevamos más de 20
              años ofreciendo experiencias inolvidables a nuestros visitantes.
              Situado junto al Puente Romano en Sotoserrano, Salamanca, nuestro
              camping nace del amor por la naturaleza y el deseo de compartir un
              entorno privilegiado con personas de todas partes.
            </p>

            <p>
              Somos un negocio familiar que cree en la cercanía, el trato humano
              y la calidad en cada detalle. Nos esforzamos por combinar
              tranquilidad, cultura y aventura para que disfrutes del descanso
              en un entorno natural único.
            </p>

            <p>
              Ya sea que vengas en familia, con amigos o en pareja, en Vega de
              Francia encontrarás el espacio perfecto para desconectar y
              reconectar con lo esencial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
