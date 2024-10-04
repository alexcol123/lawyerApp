const Precios = () => {
  return (
    <div className="bg-white border py-8 md:py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Compara Nuestros Precios</h2>
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-bold">Formularioz</span>, somos una agencia 100% virtual que ofrece servicios <span className="text-green-600 font-bold">hasta un 75% más baratos</span> al eliminar los costos de oficinas físicas. Nuestro equipo de <span className="font-bold">abogados y expertos legales</span> con más de 20 años de experiencia te ofrece atención personalizada y especializada en cada paso.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Disfruta de la misma calidad y experiencia, pero a un precio mucho más accesible. A continuación, te mostramos cómo nuestros precios se comparan con los de otras agencias:
        </p>
        <table className="min-w-full bg-white shadow-lg rounded-lg text-xs md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left font-medium text-gray-800">Servicio</th>
              <th className="px-4 py-3 text-center font-medium text-gray-800">Otras Agencias</th>
              <th className="px-4 py-3 text-center font-medium text-gray-800">Nuestra Agencia</th>
            </tr>
          </thead>
          <tbody>
            {[
              { servicio: "Programa Manteniendo a las Familias Unidas", otras: "$4,000", nuestra: "$499" },
              { servicio: "Residencia Permanente", otras: "$7,000", nuestra: "$2,500" },
              { servicio: "Permiso de Trabajo", otras: "$4,000", nuestra: "$1,500" },
              { servicio: "Naturalización", otras: "$3,800", nuestra: "$1,200" },
              { servicio: "Traducción de Documentos", otras: "$195 por página", nuestra: "$18" },
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-gray-700">{item.servicio}</td>
                <td className="px-4 py-3 text-center text-red-600 font-semibold">{item.otras}</td>
                <td className="px-4 py-3 text-center text-green-600 font-semibold">{item.nuestra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Precios;