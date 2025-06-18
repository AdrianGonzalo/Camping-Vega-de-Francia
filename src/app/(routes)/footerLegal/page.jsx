const AvisoLegal = () => (
  <div className="max-w-3xl mx-auto p-8 mt-30 bg-white rounded shadow-md border border-green-200">
    <h1 className="text-3xl font-semibold text-green-800 mb-6 border-b-2 border-green-300 pb-2">
      Aviso Legal
    </h1>
    <p className="text-green-700 leading-relaxed mb-4">
      En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la
      Información y Comercio Electrónico, se informa que este sitio web es
      propiedad de:
    </p>
    <p className="text-green-600 mb-6">
      <strong>Vega de Francia</strong>
      <br />
      Dirección: Junto al Puente Romano, Calle Camping, 1, 37657 Sotoserrano,
      Salamanca
      <br />
      Email:{" "}
      <a
        href="mailto:josega1669@gmail.com"
        className="underline hover:text-green-900"
      >
        josega1669@gmail.com
      </a>
      <br />
      Teléfono: 923 16 11 04
    </p>
    <p className="text-green-700 leading-relaxed">
      Este sitio tiene carácter informativo y no realiza actividades comerciales
      ni recoge datos personales.
    </p>
  </div>
);

export default AvisoLegal;
