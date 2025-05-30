import Navbar from "@/app/components/navbar";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Image
        src="/bridge.jpg"
        alt="image the bridge"
        width="100"
        height="100"
      />
    </div>
  );
};

export default HomePage;
