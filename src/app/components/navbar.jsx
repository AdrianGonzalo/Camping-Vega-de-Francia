"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-around transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navbar)] p-2 h-16 shadow-md"
          : "bg-[var(--navbar)] p-4 h-24"
      }`}
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

      {/* Links */}
      <div className="flex gap-6 text-lg ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors duration-200 ${
              pathname === link.href
                ? "text-[var(--titleBody)] font-semibold underline"
                : "text-black"
            } hover:text-green-300`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Redes */}
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
