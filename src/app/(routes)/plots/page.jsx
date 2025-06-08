import Header from "@/app/components/header";

import CardPlots from "@/app/components/cardPlots";

const Plots = () => {
  return (
    <div>
      <Header img="/headers/plots.JPG" title="Parcelas" />
      <div className="max-w-[1300px] mx-auto flex justify-center gap-x-6">
        <CardPlots
          img="/headers/plots.JPG"
          title="Parcela (electricidad opcional)"
          description={
            <>
              <p className="font-semibold mb-2">Horario</p>
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

              <p className="font-semibold mb-2">Permitido en este lugar:</p>
              <ul className="mb-4 text-sm list-disc list-inside">
                <li>Caravana</li>
                <li>Autocaravana</li>
              </ul>

              <p className="font-semibold text-lg">EUR 28</p>
            </>
          }
        />

        <CardPlots
          img="/headers/plots.JPG"
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

              <h3 className="font-semibold mb-2">Permitido en este lugar:</h3>
              <ul className="mb-4 text-sm list-disc list-inside">
                <li>Caravana</li>
                <li>Autocaravana</li>
              </ul>

              <p className="font-semibold text-lg">EUR 28</p>
            </>
          }
        />

        <CardPlots
          img="/headers/plots.JPG"
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

              <h3 className="font-semibold mb-2">Permitido en este lugar:</h3>
              <ul className="mb-4 text-sm list-disc list-inside">
                <li>Caravana</li>
                <li>Autocaravana</li>
              </ul>

              <p className="font-semibold text-lg">EUR 28</p>
            </>
          }
        />
      </div>
      <button className="w-full max-w-[1170px] mx-auto block mb-10 mt-2 bg-[var(--buttonReserve)] p-1 shadow-md">
        Reservar ahora
      </button>
    </div>
  );
};

export default Plots;
