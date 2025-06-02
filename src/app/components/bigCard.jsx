import Image from "next/image";

const BigCard = ({ title, description, imageSrc, imageAlt, imageLeft }) => {
  const alignment = imageLeft
    ? "text-left items-start"
    : "text-right items-end";

  return (
    <div
      className={`flex max-w-[1150px] h-auto mx-auto mt-5 mb-15 gap-5 ${
        imageLeft ? "flex-row-reverse" : ""
      } flex-col md:flex-row ${
        imageLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`bg-white shadow-2xl text-sm p-10 flex-1 flex flex-col justify-center ${alignment}`}
      >
        <p className="text-4xl text-[var(--titleBody)] font-bold mb-10">
          {title}
        </p>
        <p className="mb-6">{description}</p>
        <button className="text-white bg-green-800 p-2 mt-4">
          Más información
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={700}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};
export default BigCard;
