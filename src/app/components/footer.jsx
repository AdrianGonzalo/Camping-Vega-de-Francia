import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer)] w-full border-t-4 border-[var(--footerBorder)] text-white">
      <div className="flex flex-col justify-between min-h-[200px] ">
        <div className="text-sm flex justify-center space-y-1 ">
          <div className=" w-130 flex flex-col gap-2 mt-2">
            <p className="flex items-center gap-4">
              <FaMapMarkerAlt /> Junto al Puente Romano, Calle Camping, 1, 37657
              Sotoserrano, Salamanca
            </p>
            <p className="flex items-center gap-4">
              <FaEnvelope /> josega1669@gmail.com
            </p>
            <p className="flex items-center gap-4">
              <FaPhoneAlt /> Fijo: 923 16 11 04
            </p>
            <p className="flex items-center gap-4">
              <FaPhoneAlt /> Movil: 653 06 81 00
            </p>
          </div>
        </div>

        {/* Parte inferior fija: políticas */}
        <div className="text-center bg-[var(--footerPolicies)] py-3 text-sm">
          <p>© 2025 Vega de Francia, Todos los derechos reservados.</p>
          <ul className="flex flex-wrap justify-center gap-4 mt-4">
            <li>
              <a href="/privacidad" className="hover:underline">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Política de cookies
              </a>
            </li>
            <li>
              <a href="/aviso-legal" className="hover:underline">
                Aviso legal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
