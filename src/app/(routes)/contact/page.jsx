import Header from "@/app/components/header";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Header title="CONTACTO" img="/headers/contact.jpg" />

      <section className="flex flex-col items-center justify-center px-4 py-10 bg-white text-black">
        <div className="w-full max-w-3xl bg-[var(--backgroundDark)] shadow-lg p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-center text-[var(--titleBody)]">
            Información de contacto
          </h2>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-800" />
              Junto al Puente Romano, Calle Camping, 1, 37657 Sotoserrano,
              Salamanca
            </p>

            <p className="flex items-center gap-4">
              <FaEnvelope className="text-green-800" />
              josega1669@gmail.com
            </p>

            <p className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-800" />
              Fijo: 923 16 11 04
            </p>

            <p className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-800" />
              Móvil: 653 06 81 00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
