import Header from "@/app/components/header";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Header title="SOBRE NOSOTROS" img="/headers/about.webp" />

      <section className="flex flex-col items-center justify-center px-4 py-16 bg-white text-black">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 bg-[var(--backgroundDark)] shadow-lg p-6 sm:p-12 rounded-md">
          {/* Imagen */}
          <div className="w-full lg:w-1/2 min-h-[300px] lg:h-auto rounded-md overflow-hidden shadow-md">
            <img
              src="/jose0134.jpg"
              alt="Camping Vega de Francia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--titleBody)]">
              Nuestra historia
            </h2>

            <p>
              Hace un tiempo decidí dejar atrás la rutina y crear un espacio
              donde la calma, la naturaleza y lo auténtico fueran lo esencial.
              Así nació este camping: un rincón sencillo, cuidado con mucho
              cariño y pensado para desconectar del ruido y las prisas de la
              vida diaria.
            </p>

            <p>
              No fue una decisión fácil, pero sí la más sincera y honesta. Con
              esfuerzo y dedicación, fui dando forma poco a poco a este lugar.
              Hoy, cada sendero, cada rincón y cada detalle cuentan una
              historia: la intención de hacerte sentir como en casa, pero
              rodeado de naturaleza viva.
            </p>

            <p>
              Aquí no hay ruido, solo el canto de los pájaros, el verde de los
              árboles y un cielo estrellado que te invita a soñar. Trabajo solo,
              pero nunca me siento solo: la paz que se respira aquí y las
              personas que llegan con ganas de parar me recuerdan cada día por
              qué elegí este camino.
            </p>

            <p>
              No encontrarás lujos, pero sí alma. Aquí se viene a respirar,
              reconectar y, sobre todo, a recordar que lo más valioso suele ser
              lo más sencillo. Si buscas un lugar real, tranquilo y lleno de
              intención, este camping también puede ser tu refugio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
