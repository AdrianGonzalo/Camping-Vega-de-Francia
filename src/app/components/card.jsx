import Image from "next/image";

const Card = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[350px] mx-auto">
      <div className="relative w-full h-60">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 flex justify-center">
          {title}
        </h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
