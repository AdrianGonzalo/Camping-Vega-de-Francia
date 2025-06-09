import Image from "next/image";

const CardPlots = ({ img, title, description }) => {
  return (
    <div className="w-full max-w-sm mx-auto mt-7">
      {/* Imagen más ancha */}
      <div className="relative w-full h-70">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
      </div>

      {/* Contenido más estrecho */}
      <div className="relative z-10 -mt-10 mx-auto w-[75%] bg-white shadow-md text-center p-4">
        <h1 className="text-lg font-bold mb-3">{title}</h1>
        <div className="text-gray-700 text-sm mb-4">{description}</div>{" "}
        {/* Aquí está el cambio */}
      </div>
    </div>
  );
};

export default CardPlots;
