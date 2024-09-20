// import { ArrowDownIcon } from "@radix-ui/react-icons"

// const Info = () => {
//   return (
//     <div className="flex flex-col justify-between w-full p-6   rounded-xl text-center ">

// <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//           Nuestros Logros Recientes
//         </h2>
//         <p className="text-xl text-gray-200 mb-8">
//           Desde agosto, hemos completado más de{" "}
//           <span className="text-blue-600 font-bold">327</span> aplicaciones y
//           obtenido más de{" "}
//           <span className="text-blue-600 font-bold">107</span> aprobaciones para
//           citas biométricas en el USCIS.
//         </p>
//         <p className="text-lg text-gray-200 mb-8">
//           Estos son nuestros resultados, y estamos orgullosos de ellos.
//         </p>




//       <h3 className=" text-xl mt-4 text-primary font-bold ">
//         Mira sus resultados
//       </h3>

//       <div className="flex items-center justify-center text-primary rounded-full">
//       <div className="bg-white/30 rounded-full p-1 animate-pulse">
//       <ArrowDownIcon  />
//       </div>
//       </div>
//     </div>
//   )
// }
// export default Info


import { ArrowDownIcon } from "@radix-ui/react-icons"

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 md:p-8 bg-black rounded-lg shadow-lg text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Nuestros Logros Recientes
      </h2>
      <p className="text-sm md:text-lg text-gray-300 mb-4">
        Desde agosto, hemos completado más de{" "}
        <span className="text-blue-400 font-bold">327</span> aplicaciones y
        obtenido más de{" "}
        <span className="text-blue-400 font-bold">107</span> aprobaciones para
        citas biométricas en el USCIS.
      </p>
      <p className="text-sm md:text-lg text-gray-400 mb-6">
        Estos son nuestros resultados, y estamos orgullosos de ellos.
      </p>

      <h3 className="text-base md:text-xl font-semibold text-white mb-4">
        Mira sus resultados
      </h3>

      <div className="flex items-center justify-center">
        <div className="bg-white/20 text-white rounded-full p-3 animate-bounce">
          <ArrowDownIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

export default Info