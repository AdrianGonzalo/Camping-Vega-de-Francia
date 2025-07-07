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
        <div className="text-gray-700 text-sm mb-2">{description}</div>
        <a
          href="https://www.campcation.com/es/campsite/camping-vega-de-francia/?checkin=18-6-2025&checkout=19-6-2025&lat=40.4303805&lng=-6.010641099999999&placeId=ChIJPSAdNeRePg0RnGd9TV7WxFU"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[160px]  bg-green-600 hover:bg-green-700 text-white py-2 rounded inline-block text-center mt-4 mx-auto"
        >
          Reserva ahora
        </a>
      </div>
    </div>
  );
};

export default CardPlots;
