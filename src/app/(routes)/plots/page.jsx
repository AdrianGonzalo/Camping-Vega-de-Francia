import Header from "@/app/components/header";
import CardPlots from "@/app/components/cardPlots";

const Plots = () => {
  return (
    <div>
      <Header img="/headers/plots.JPG" title="PARCELAS" />
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-center gap-6 px-4 pb-10">
        <CardPlots
          img="/plots/parcelaTienda.JPG"
          title="Parcela para tienda"
          description={
            <>
              <h3 className="font-semibold mb-2">Horario</h3>
              <ul className="mb-4 text-sm">
                <li>
                  <strong>Apertura:</strong> 01/12 - 31/12
                </li>
                <li>
                  <strong>Check-in:</strong> 09:00 - 23:00
                </li>
                <li>
                  <strong>Salida:</strong> 12:00
                </li>
              </ul>

              <p className="font-semibold text-lg">EUR 17</p>
            </>
          }
        />

        <CardPlots
          img="/plots/parcelaCamper.JPG"
          title="Parcela para vehículos tipo campervan (electricidad opcional)"
          description={
            <>
              <h3 className="font-semibold mb-2">Horario</h3>
              <ul className="mb-4 text-sm">
                <li>
                  <strong>Apertura:</strong> 01/12 - 31/12
                </li>
                <li>
                  <strong>Check-in:</strong> 09:00 - 23:00
                </li>
                <li>
                  <strong>Salida:</strong> 12:00
                </li>
              </ul>

              <p className="font-semibold text-lg">EUR 23</p>
            </>
          }
        />

        <CardPlots
          img="/plots/parcelaElectricidad.JPG"
          title="Parcela (electricidad opcional)"
          description={
            <>
              <h3 className="font-semibold mb-2">Horario</h3>
              <ul className="mb-4 text-sm">
                <li>
                  <strong>Apertura:</strong> 01/12 - 31/12
                </li>
                <li>
                  <strong>Check-in:</strong> 09:00 - 23:00
                </li>
                <li>
                  <strong>Salida:</strong> 12:00
                </li>
              </ul>

              <p className="font-semibold text-lg">EUR 28</p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Plots;
