import Header from "@/app/components/header";
import CardBungalow from "@/app/components/cardBungalow";

const Bungalows = () => {
  return (
    <div>
      <Header img="/headers/bungalows.JPG" title="BUNGALOWS" />

      <div className="flex justify-center gap-20 mt-10 mb-20 max-w-[1000px] mx-auto">
        <CardBungalow
          img="/bungalows/bungalow.png"
          title="Bungalows"
          description="Bungalow de 26 m² con capacidad para 5 personas. Dispone de 2 dormitorios con cama doble, literas e individuales, baño privado con ducha."
          deepDescription={
            <>
              <h3 className="font-semibold mb-2">
                🛖 Bungalow – Características principales
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Capacidad: Hasta 5 personas</li>
                <li>Dormitorios: 2 habitaciones</li>
                <li>1 cama doble</li>
                <li>2 camas individuales</li>
                <li>1 litera</li>
                <li>Baño: 1 baño con ducha</li>
                <li>Superficie: 26 m²</li>
                <li>No fumadores</li>
              </ul>

              <h3 className="font-semibold mb-2">🧰 Servicios incluidos</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Aire acondicionado y calefacción</li>
                <li>Wifi gratuito</li>
                <li>TV</li>
                <li>Escritorio</li>
                <li>Artículos de aseo gratuitos</li>
                <li>Ropa de cama y toallas incluidas</li>
              </ul>

              <h3 className="font-semibold mb-2">🍳 Cocina equipada con:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Nevera</li>
                <li>Cafetera</li>
                <li>Tostadora</li>
                <li>Utensilios de cocina</li>
              </ul>

              <h3 className="font-semibold mb-2">
                🏞️ Instalaciones del camping
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Bar y terraza</li>
                <li>Salón recreativo</li>
                <li>Parque infantil</li>
                <li>Supermercado</li>
                <li>Lavandería</li>
                <li>Piscina natural</li>
                <li>Abierto todo el año</li>
              </ul>

              <h3 className="font-semibold mb-2">💶 Tarifas</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Desde 66,50 €/noche</li>
                <li>Opciones: Flexible o No reembolsable</li>
                <li>Reserva ahora, paga después</li>
              </ul>
            </>
          }
        />

        <CardBungalow
          img="/bungalows/tipis.png"
          title="Tipis"
          description="Bungalow de 26 m² con capacidad para 5 personas. Dispone de 2 dormitorios con cama doble, literas e individuales, baño privado con ducha."
          deepDescription=""
        />
      </div>
    </div>
  );
};

export default Bungalows;
