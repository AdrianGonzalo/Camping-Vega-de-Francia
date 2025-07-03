"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/homePage", label: "Inicio" },
    { href: "/bungalows", label: "Bungalows" },
    { href: "/plots", label: "Parcelas" },
    { href: "/activities", label: "Actividades" },
    { href: "/gallery", label: "Galería" },
    { href: "/aboutUs", label: "Sobre Nosotros" },
    { href: "/contact", label: "Contacto" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR PRINCIPAL */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-300
          ${
            scrolled
              ? "bg-gray-100 opacity-100 h-16 shadow-md"
              : "bg-white opacity-80 h-24"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logoSVG.svg"
            alt="logo del camping"
            width={scrolled ? 50 : 70}
            height={scrolled ? 50 : 70}
            className="transition-all duration-300"
          />
        </div>

        {/* Links - solo visible en escritorio */}
        <div className="hidden md:flex gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? "text-green-600 font-semibold underline"
                  : scrolled
                  ? "text-gray-900 hover:text-green-600"
                  : "text-gray-800 hover:text-green-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="hidden md:flex items-center gap-4 text-2xl text-gray-800">
          <a
            href="https://www.facebook.com/vegadefranciacamping/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/campingvegadefrancia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@campingvegadefrancia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Redes sociales centradas en móvil cuando menú cerrado */}
        {!menuOpen && (
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-2xl flex gap-6 text-gray-800">
            <a
              href="https://www.facebook.com/vegadefranciacamping/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/campingvegadefrancia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@campingvegadefrancia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaTiktok />
            </a>
          </div>
        )}

        {/* Botón hamburguesa - solo visible en móvil */}
        <button
          className="text-gray-900 text-5xl md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      </nav>

      {/* MENÚ LATERAL */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Image src="/logoSVG.svg" alt="logo" width={50} height={50} />
          <button onClick={closeMenu} className="text-gray-900 text-3xl">
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`${
                pathname === link.href
                  ? "text-green-600 font-semibold"
                  : "text-gray-900"
              } hover:text-green-400 transition`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-4 mt-6 text-2xl text-gray-800">
            <a
              href="https://www.facebook.com/vegadefranciacamping/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/campingvegadefrancia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@campingvegadefrancia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </nav>
      </div>

      {/* Fondo oscuro al abrir menú */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
