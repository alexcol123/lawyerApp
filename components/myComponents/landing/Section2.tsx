


import {
  FaPhone,
  FaBalanceScale,
  FaUserShield,
  FaPassport,
  FaCheckCircle,
  FaUserTie,
  FaHeadset,
  FaHeart,
  FaChild,
  FaHandsHelping,
} from "react-icons/fa";
import Testimonios from "./Testimonios";
import { VerSiCalificoBtn } from './MyButtons';


const LandingMain = () => {



  return (
    <div className="flex flex-col">
      {/* Sección Principal */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/familia.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full p-6 bg-gradient-to-r from-black/80 to-black/50 text-white text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            ¿Estás casado con un ciudadano americano?
          </h1>
          <p className="text-xl md:text-2xl">
            Obtén tu residencia permanente en EE. UU., incluso si entraste ilegalmente.
          </p>
          <p className="text-lg md:text-xl">
            Solo te tomará{" "}
            <span className="font-bold text-pink-500">4 minutos</span> saber si calificas.
          </p>

          <VerSiCalificoBtn  />

          <div className="flex items-center mt-4">
            <FaPhone className="mr-2" />
            <a
              href={`tel:${process.env.PHONE_LINK as string}`}
              className="text-white text-lg md:text-xl font-bold"
              aria-label={`Llámanos al ${process.env.PHONE_NUMBER as string}`}
            >
              Llámanos al {process.env.PHONE_NUMBER as string}
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Servicio 1 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
              <FaBalanceScale className="text-blue-600 w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-1">
                Asesoría Legal Especializada
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Abogados expertos te guían en cada paso.
              </p>
            </div>
            {/* Servicio 2 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
              <FaUserShield className="text-blue-600 w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-1">
                Representación Legal
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Te representamos ante las autoridades.
              </p>
            </div>
            {/* Servicio 3 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
              <FaPassport className="text-blue-600 w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-1">
                Tramitación de Documentos
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Gestión y traducción de documentos.
              </p>
            </div>
            {/* Servicio 4 */}
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-md">
              <FaHandsHelping className="text-blue-600 w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold mb-1">
                Asistencia Personalizada
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Te apoyamos en cada duda que tengas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección sobre el Programa Familias Unidas */}
      <div className="bg-gray-100 py-8 md:py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Qué es Manteniendo a las Familias Unidas?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Un programa aprobado por el presidente Biden el <strong>19 de agosto de 2024</strong>, que permite a <span className="font-bold">cónyuges e hijastros</span> de ciudadanos estadounidenses obtener un permiso para quedarse en EE. UU. y solicitar la residencia sin salir del país.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <div className="flex items-center">
              <FaHeart className="text-red-600 w-8 h-8 md:w-10 md:h-10 mr-3" />
              <p className="text-base md:text-lg text-gray-700">Mantiene a las familias unidas.</p>
            </div>
            <div className="flex items-center">
              <FaChild className="text-yellow-600 w-8 h-8 md:w-10 md:h-10 mr-3" />
              <p className="text-base md:text-lg text-gray-700">Ayuda a cónyuges e hijastros a obtener su residencia.</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-600 w-8 h-8 md:w-10 md:h-10 mr-3" />
              <p className="text-base md:text-lg text-gray-700">Facilita la residencia permanente.</p>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Regulariza tu situación migratoria y asegura un futuro estable para tu familia.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Si eres el <span className="font-bold">cónyuge</span> o <span className="font-bold">hijastro</span> de un ciudadano estadounidense, esta opción ha cambiado la vida de muchas familias desde 2024.
          </p>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white py-12 px-6 md:px-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            La pre-calificación dura menos de <span className="font-bold">4 minutos</span> y es completamente <span className="font-bold">GRATUITA</span>.
          </p>
          <VerSiCalificoBtn  color="bg-red-700 text-white"/>
          <p className="text-sm md:text-base mt-4">
            ¡No pierdas esta oportunidad de cambiar tu vida!
          </p>
        </div>
      </div>

      {/* Sección de Por qué elegirnos */}
      <div className="bg-white py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            ¿Por qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Razón 1 */}
            <div className="flex items-center">
              <FaCheckCircle className="text-green-600 w-10 h-10 md:w-12 md:h-12 mr-4" />
              <p className="text-lg text-gray-700">
                Más de 20 años de experiencia ayudando a familias a obtener su residencia.
              </p>
            </div>
            {/* Razón 2 */}
            <div className="flex items-center">
              <FaUserTie className="text-green-600 w-10 h-10 md:w-12 md:h-12 mr-4" />
              <p className="text-lg text-gray-700">
                Equipo profesional y dedicado comprometido con tu éxito.
              </p>
            </div>
            {/* Razón 3 */}
            <div className="flex items-center">
              <FaHeadset className="text-green-600 w-10 h-10 md:w-12 md:h-12 mr-4" />
              <p className="text-lg text-gray-700">
                Soporte al cliente 24/7 para responder todas tus dudas.
              </p>
            </div>
            {/* Razón 4 */}
            <div className="flex items-center">
              <FaBalanceScale className="text-green-600 w-10 h-10 md:w-12 md:h-12 mr-4" />
              <p className="text-lg text-gray-700">
                Asesoría legal confiable y transparente durante todo el proceso.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Sección de Testimonios */}
      <Testimonios />


      {/* Sección de Comparación de Precios */}
      <div className="bg-white py-8 px-4 md:py-12 md:px-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Compara Nuestros Precios
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
            Al ser 100% virtuales, eliminamos los costos tradicionales de operación. Te ofrecemos servicios legales eficientes y accesibles a precios <span className="text-green-600 font-bold">hasta un 75% más reducidos</span>, sin sacrificar calidad y ahorrándote tiempo.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-xs md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-2 md:px-4 md:py-3 text-left font-medium text-gray-800 border-b">Servicio</th>
                  <th className="px-2 py-2 md:px-4 md:py-3 text-center font-medium text-gray-800 border-b">Otras Agencias</th>
                  <th className="px-2 py-2 md:px-4 md:py-3 text-center font-medium text-gray-800 border-b">Nuestra Agencia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Programa Manteniendo a las Familias Unidas?</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$4,000</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$499</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Residencia Permanente</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$7,000</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$2,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Permiso de Trabajo</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$4,000</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$1,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Residencia por Empleo</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$8,500</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$2,800</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Asilo</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$12,000</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$4,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Naturalización</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$3,800</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">$1,200</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-left text-gray-700 border-b">Traducción de Documentos</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-red-600 font-semibold border-b">$495 por página</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center text-green-600 font-semibold border-b">Gratis</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              *Los precios mostrados no incluyen tarifas adicionales que puedan cobrar entidades gubernamentales como el USCIS.
            </p>
          </div>
          <div className="mt-8 md:mt-12 bg-primary/10 py-10 rounded-lg">
            <h2 className="my-4 text-xl md:text-2xl font-bold text-gray-800">Ver Si Calificas para Manteniendo a las Familias Unidas?</h2>
            <VerSiCalificoBtn />
            <p className="my-4 text-base md:text-lg text-gray-700">
              Respuesta en menos de 4 minutos.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingMain;