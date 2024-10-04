import { FaCheckCircle, FaChild, FaHeart } from "react-icons/fa"

const QueEsFamiliasUnidas = () => {
  return (
    <div className="py-8 md:py-12  text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        ¿Qué es Manteniendo a las Familias Unidas?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Un programa aprobado el <strong>19 de agosto de 2024</strong> que permite a <span className="font-bold">cónyuges e hijastros</span> de ciudadanos estadounidenses quedarse en EE. UU. y solicitar la residencia sin salir del país.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 mb-6">
        <div className="flex items-center">
          <FaHeart className="text-red-600 w-8 h-8 mr-3" />
          <p className="text-lg text-gray-700">Mantiene a las familias unidas.</p>
        </div>
        <div className="flex items-center">
          <FaChild className="text-yellow-600 w-8 h-8 mr-3" />
          <p className="text-lg text-gray-700">Facilita la residencia.</p>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-600 w-8 h-8 mr-3" />
          <p className="text-lg text-gray-700">Garantiza la residencia permanente.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default QueEsFamiliasUnidas