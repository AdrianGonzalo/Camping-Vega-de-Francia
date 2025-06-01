import Image from "next/image";

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

      <div className="bg-green-200 w-100 h-10000"></div>
    </div>
  );
};

export default HomePage;
