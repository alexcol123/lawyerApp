import { ArrowDownIcon } from "@radix-ui/react-icons";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 md:p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Nuestros Logros Recientes
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6">
          Desde agosto, hemos completado más de{" "}
          <span className="text-blue-400 font-bold">327</span> aplicaciones y
          obtenido más de{" "}
          <span className="text-blue-400 font-bold">107</span> aprobaciones para
          citas biométricas en el USCIS.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-blue-400 font-semibold mb-8">
          Estamos orgullosos de nuestros resultados y seguimos ayudando a más familias.
        </p>

        <h3 className="text-base md:text-xl lg:text-2xl font-semibold text-white mb-6">
          Mira sus resultados
        </h3>

        <div className="flex items-center justify-center">
          <div className="bg-blue-500 text-white rounded-full p-3 animate-bounce">
            <ArrowDownIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;