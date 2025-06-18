import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer)] w-full border-t-4 border-[var(--footerBorder)] text-white text-sm">
      <div className="flex flex-col justify-between min-h-[250px] px-4 md:px-12 py-6 md:py-10 max-w-[1300px] mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-lg flex flex-col gap-3 md:gap-5">
            <p className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
              <FaMapMarkerAlt /> Junto al Puente Romano, Calle Camping, 1, 37657
              Sotoserrano, Salamanca
            </p>
            <p className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
              <FaEnvelope /> josega1669@gmail.com
            </p>
            <p className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
              <FaPhoneAlt /> Fijo: 923 16 11 04
            </p>
            <p className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
              <FaPhoneAlt /> Movil: 653 06 81 00
            </p>
          </div>
        </div>

        {/* Parte inferior fija: políticas */}
        <div className="text-center bg-[var(--footerPolicies)] py-3 text-xs md:text-sm mt-6 md:mt-10">
          <p>© 2025 Vega de Francia, Todos los derechos reservados.</p>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-4">
            <li>
              <Link href="/footerPrivacity" className="hover:underline">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/footerCookies" className="hover:underline">
                Política de cookies
              </Link>
            </li>
            <li>
              <Link href="/footerLegal" className="hover:underline">
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
