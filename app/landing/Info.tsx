import { ArrowDownIcon } from "@radix-ui/react-icons"

const Info = () => {
  return (
    <div className="flex flex-col justify-between w-full p-6   rounded-xl text-center ">

<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Nuestros Logros Recientes
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Desde agosto, hemos completado más de{" "}
          <span className="text-blue-600 font-bold">327</span> aplicaciones y
          obtenido más de{" "}
          <span className="text-blue-600 font-bold">107</span> aprobaciones para
          citas biométricas en el USCIS.
        </p>
        <p className="text-lg text-gray-200 mb-8">
          Estos son nuestros resultados, y estamos orgullosos de ellos.
        </p>




      <h3 className=" text-xl mt-4 text-primary font-bold ">
        Mira sus resultados
      </h3>

      <div className="flex items-center justify-center text-primary rounded-full">
      <div className="bg-white/30 rounded-full p-1 animate-pulse">
      <ArrowDownIcon  />
      </div>
      </div>
    </div>
  )
}
export default Info
