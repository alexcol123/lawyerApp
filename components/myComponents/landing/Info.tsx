import { ArrowDownIcon } from "@radix-ui/react-icons"

const Info = () => {
  return (
    <div className="flex flex-col justify-between w-full p-6   rounded-xl text-center ">

      <p className=" font-semibold ">
        Desde Agosto emos completeado mas de <span className="text-primary text-xl" > 327 </span>  applicacioney  y mas de <span className="text-primary text-xl" > 107 </span> aprovaciones para citas biometricas en el USCIS.
      </p>


      <h3 className=" font-semibold mt-4 ">
        Estos son nuestros resultados, y estamos orgullosos de ellos.
      </h3>

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
