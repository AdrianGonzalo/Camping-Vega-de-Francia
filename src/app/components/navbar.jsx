import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-around bg-[var(--navbar)] p-4 h-25">
      {/* Izquierda - Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/logoSVG.svg"
          alt="logo del camping"
          width={70}
          height={70}
        />
      </div>

      {/* Centro - Links */}
      <div className="flex gap-8 text-xl">
        <Link href="/homePage">Inicio</Link>
        <Link href="/bungalows">Bungalows</Link>
        <Link href="/plots">Parcelas</Link>
        <Link href="/activities">Actividades</Link>
        <Link href="/contact">Contacto</Link>
      </div>

      {/* Derecha - Iconos */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.facebook.com/vegadefranciacamping/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-blue-500 transition" />
        </a>
        <a
          href="https://www.instagram.com/campingvegadefrancia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a
          href="https://www.tiktok.com/@campingvegadefrancia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="hover:text-red-500 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
