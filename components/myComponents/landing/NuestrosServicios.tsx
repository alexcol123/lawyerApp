import { FaBalanceScale, FaHandsHelping, FaPassport, FaUserShield } from "react-icons/fa"

const NuestrosServicios = () => {
  return (
    <div className="bg-white py-8 md:py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          {
            icon: FaBalanceScale,
            title: "Asesoría Legal Especializada",
            description: "Abogados expertos te guían en cada paso.",
          },
          {
            icon: FaUserShield,
            title: "Representación Legal",
            description: "Te representamos ante las autoridades.",
          },
          {
            icon: FaPassport,
            title: "Tramitación de Documentos",
            description: "Gestión y traducción de documentos.",
          },
          {
            icon: FaHandsHelping,
            title: "Asistencia Personalizada",
            description: "Te apoyamos en cada duda que tengas.",
          },
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
            <service.icon className="text-blue-600 w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="hidden md:block text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default NuestrosServicios