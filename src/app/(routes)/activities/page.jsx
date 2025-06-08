import Header from "@/app/components/header";

import BigCard from "@/app/components/bigCard";

const Activities = () => {
  return (
    <div>
      <Header img="/headers/activities.jpg" title="ACTIVIDADES" />
      <div>
        <BigCard
          title="Piscina Natural"
          description="Trae tu comida, haz un picnic junto al río y disfruta de un buen baño en plena naturaleza. Un plan ideal para relajarte y compartir."
          imageSrc="/activities/rio.jpg"
          imageAlt="piscina natural"
          imageLeft={false}
        />

        <BigCard
          title="Barbacoa"
          description="Prepara tu barbacoa y disfruta de una comida al aire libre rodeado de naturaleza. Un momento ideal para compartir y saborear con tranquilidad."
          imageSrc="/activities/barbacoa.jpg"
          imageAlt="barbacoa"
          imageLeft={true}
        />

        <BigCard
          title="Senderismo"
          description="Explora los senderos que rodean Vega de Francia y descubre paisajes únicos entre montañas, ríos y bosques."
          imageSrc="/activities/senderismo.jpg"
          imageAlt="senderismo"
          imageLeft={false}
        />

        <BigCard
          title="Pesca"
          description="Disfruta de la naturaleza con tu caña. Disfruta de la naturaleza con tu caña. Disfruta de la naturaleza con tu caña."
          imageSrc="/activities/pesca.jpg"
          imageAlt="pesca"
          imageLeft={true}
        />

        <BigCard
          title="La Despensa del Soto"
          description="En La Despensa del Soto queremos que vivas la experiencia del camping también a través de lo que nos rodea. Es un espacio donde reunimos lo mejor de nuestra tierra, con una cuidada selección de productos elaborados por manos locales, con tradición, cariño y respeto por el entorno."
          imageSrc="/activities/rincon.JPG"
          imageAlt="el rincon del soto"
          imageLeft={false}
        />

        <BigCard
          title="Meandro"
          description="Descubre el espectacular Meandro de Sotoserrano, una joya natural cerca de Vega de Francia, perfecta para senderistas que buscan paisajes únicos."
          imageSrc="/activities/meandro.JPG"
          imageAlt="meandro"
          imageLeft={true}
        />

        <BigCard
          title="Parque Infantil"
          description="Nuestro parque infantil es el lugar perfecto para que los más pequeños disfruten al aire libre, rodeados de naturaleza y con total seguridad. Un espacio pensado para el juego, la imaginación y la aventura, donde pueden compartir momentos inolvidables con otros niños mientras tú te relajas sabiendo que están en buenas manos."
          imageSrc="/activities/parqueInfantil.jpg"
          imageAlt="parque infantil"
          imageLeft={false}
        />
      </div>
    </div>
  );
};

export default Activities;
