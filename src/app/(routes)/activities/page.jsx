import Header from "@/app/components/header";

import BigCard from "@/app/components/bigCard";

const Activities = () => {
  return (
    <div>
      <Header img="/headers/activities.jpg" title="ACTIVIDADES" />
      <div>
        <BigCard
          title="Piscina Natural"
          description={
            <>
              <p className="mb-4">
                Si traes tu propia comida, puedes usar los servicios del Camping
                Vega de Francia para calentarla o prepararla a tu gusto.
              </p>
              <p>
                Disfruta de un almuerzo cómodo y agradable junto al río, en un
                entorno natural perfecto para desconectar y compartir momentos
                especiales.
              </p>
            </>
          }
          imageSrc="/activities/piscinaNatural.JPG"
          imageAlt="piscina natural"
          imageLeft={false}
          showMoreButton={false}
        />

        <BigCard
          title="Barbacoa"
          description="Prepara tu barbacoa y disfruta de una deliciosa comida al aire libre, rodeado de la belleza natural que ofrece el entorno. Es un plan perfecto para relajarte, compartir con amigos y familiares, y saborear cada momento con tranquilidad, mientras te conectas con la naturaleza."
          imageSrc="/activities/barbacoa.JPG"
          imageAlt="barbacoa"
          imageLeft={true}
          showMoreButton={false}
        />

        <BigCard
          title="Senderismo"
          description="Explora los senderos que rodean Vega de Francia y descubre paisajes únicos entre montañas, ríos y bosques."
          imageSrc="/activities/senderismo.JPG"
          imageAlt="senderismo"
          imageLeft={false}
          showRoutes={true}
          textMore={
            <div>
              <h4 className="text-xl font-bold mb-2">RUTAS</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Camino de los Prodígios (circular)</li>
              </ul>

              <h4 className="text-xl font-bold mb-2">Ubicación y ruta</h4>
              <p className="mb-2">
                Puedes seguir esta ruta desde el camping hasta el inicio del
                Camino de los Prodígios:
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia,+Calle+Camping+1,+37657+Sotoserrano,+Salamanca&destination=Camino+de+los+Prodigios,+37660+Miranda+del+Castañar,+Salamanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Ver ruta en Google Maps
              </a>
            </div>
          }
        />

        <BigCard
          title="Pesca"
          description="Disfruta de una jornada de pesca en los tranquilos ríos que rodean Vega de Francia. Este entorno natural es hogar de especies como la trucha común, la carpa, el barbo y el pez colmillejo, un pez exclusivo de la zona. Ya seas principiante o experto, la pesca aquí es una experiencia relajante y perfecta para conectar con la naturaleza."
          imageSrc="/activities/pesca.JPG"
          imageAlt="pesca"
          imageLeft={true}
          showMoreButton={false}
        />

        <BigCard
          title="La Despensa del Soto"
          description="En La Despensa del Soto queremos que vivas la experiencia del camping también a través de lo que nos rodea. Es un espacio donde reunimos lo mejor de nuestra tierra, con una cuidada selección de productos elaborados por manos locales, con tradición, cariño y respeto por el entorno."
          imageSrc="/activities/rincon.JPG"
          imageAlt="el rincon del soto"
          imageLeft={false}
          showMoreButton={false}
        />

        <BigCard
          title="Meandro"
          description="Descubre el espectacular Meandro de Sotoserrano, una joya natural cerca de Vega de Francia, perfecta para senderistas que buscan paisajes únicos."
          imageSrc="/activities/meandro.JPG"
          imageAlt="meandro"
          imageLeft={true}
          textMore={
            <div>
              <h4 className="text-xl font-bold mb-2">Meandro de Sotoserrano</h4>
              <p className="mb-4">
                El Meandro de Sotoserrano es un espectacular recodo natural del
                río Alagón, que forma una curva impresionante en el paisaje.
                Este fenómeno geográfico crea un entorno privilegiado, lleno de
                biodiversidad y belleza escénica, ideal para quienes disfrutan
                de la naturaleza en estado puro.
              </p>
              <p className="mb-4">
                El área alrededor del meandro está cubierta por frondosos
                bosques y una gran variedad de flora y fauna autóctona,
                convirtiéndola en un lugar perfecto para senderistas, fotógrafos
                y amantes del ecoturismo. La tranquilidad del río y las vistas
                panorámicas hacen que la experiencia sea inolvidable.
              </p>
              <h4 className="text-xl font-bold mb-2">Ruta y ubicación</h4>
              <p className="mb-4">
                Desde el Camping Vega de Francia, puedes acceder al Meandro de
                Sotoserrano a través de un sendero señalizado que ofrece un
                paseo agradable y seguro.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=Camping+Vega+De+Francia&destination=Meandro+de+Sotoserrano"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline hover:text-green-900"
              >
                Ver en Google Maps
              </a>
            </div>
          }
        />

        <BigCard
          title="Parque Infantil"
          description="Nuestro parque infantil es un espacio seguro y rodeado de naturaleza donde los niños pueden jugar y divertirse al aire libre. Un lugar ideal para que compartan momentos especiales con otros niños mientras tú disfrutas tranquilo."
          imageSrc="/activities/parque.JPG"
          imageAlt="parque infantil"
          imageLeft={false}
          showMoreButton={false}
        />
      </div>
    </div>
  );
};

export default Activities;
