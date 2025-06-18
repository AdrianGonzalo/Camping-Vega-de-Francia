import Image from "next/image";

const Header = ({ img, title }) => {
  return (
    <div className="w-full h-50 md:h-[300px] relative mt-25">
      <Image
        src={img}
        alt="title"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20">
        <h1 className="text-4xl md:text-7xl">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
