import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-[var(--navbar)] p-4 border-2 h-20">
      {/* Izquierda - Logo */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-black" />
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
      <div className="flex items-center gap-4 text-3xl">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-blue-500 transition" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a
          href="https://www.tiktok.com"
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
