import { Button } from "@/components/ui/button";
import Link from "next/link";
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
        <div className="flex flex-col justify-center items-center h-full w-full p-6 bg-gradient-to-r from-black/90 to-black/50 text-white text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            ¿Estás casado con un ciudadano americano?
          </h1>
          <p className="text-xl md:text-2xl">
            Obtén tu residencia permanente en EE. UU., incluso si entraste ilegalmente.
          </p>
          <p className="text-lg md:text-xl">
            Solo te tomará <span className="font-bold text-pink-500">4 minutos</span> saber si calificas.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white text-lg md:text-xl py-4 px-8 md:py-5 md:px-12 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <Link href="/precalificacion">Ver si califico</Link>
          </Button>
          <div className="flex items-center mt-4">
            <FaPhone className="mr-2" />
            <a href="tel:1-800-123-4567" className="text-white text-lg md:text-xl font-bold">
              Llámanos al 1-800-123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Servicio 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaBalanceScale className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Asesoría Legal Especializada</h3>
            <p className="hidden md:block text-gray-700">
              Contamos con abogados expertos en leyes migratorias para guiarte en cada paso.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaUserShield className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Representación Legal</h3>
            <p className="hidden md:block text-gray-700">
              Te representamos ante las autoridades migratorias para asegurar el éxito de tu caso.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaPassport className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tramitación de Documentos</h3>
            <p className="hidden md:block text-gray-700">
              Gestionamos y traducimos todos los documentos necesarios para tu aplicación.
            </p>
          </div>
          {/* Servicio 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaHandsHelping className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Asistencia Personalizada</h3>
            <p className="hidden md:block text-gray-700">
              Te acompañamos en todo el proceso para resolver cualquier duda que puedas tener.
            </p>
          </div>
        </div>
      </div>

      {/* Sección sobre el Programa Familias Unidas */}
      <div className="bg-gray-100 py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          ¿Qué es el Programa Familias Unidas?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          El Programa <span className="text-blue-600 font-semibold">Familias Unidas</span> permite que ciertos <span className="font-bold">cónyuges</span> e <span className="font-bold">hijastros</span> de ciudadanos estadounidenses permanezcan en el país y soliciten la residencia permanente sin salir de EE.UU.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex items-center">
            <FaHeart className="text-red-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Mantiene a las familias unidas</span>.
            </p>
          </div>
          <div className="flex items-center">
            <FaChild className="text-yellow-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Beneficia a <span className="font-bold">hijastros</span>.
            </p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Facilita la residencia legal.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Explora esta opción para evitar largas separaciones y regularizar tu situación migratoria.
        </p>
      </div>



      {/* Sección de Por qué elegirnos */}
      <div className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          ¿Por qué Elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Razón 1 */}
          <div className="flex items-center">
            <FaCheckCircle className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Más de 20 años de experiencia ayudando a familias a obtener su residencia.
            </p>
          </div>
          {/* Razón 2 */}
          <div className="flex items-center">
            <FaUserTie className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Equipo profesional y dedicado comprometido con tu éxito.
            </p>
          </div>
          {/* Razón 3 */}
          <div className="flex items-center">
            <FaHeadset className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Soporte al cliente 24/7 para responder todas tus dudas.
            </p>
          </div>
          {/* Razón 4 */}
          <div className="flex items-center">
            <FaBalanceScale className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Asesoría legal confiable y transparente durante todo el proceso.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-gray-100 py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          La pre-calificación dura menos de <span className="font-bold">4 minutos</span> y es completamente <span className="text-green-600 font-bold">GRATUITA</span>.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white text-lg md:text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 mb-4"
        >
          <Link href="/precalificacion">Saber si califico</Link>
        </Button>

        <p className="text-lg text-gray-700">
          ¡No pierdas esta oportunidad de cambiar tu vida!
        </p>
      </div>

      {/* Sección de Comparación de Precios */}
      <div className="bg-white py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Compara Nuestros Precios
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Ahorra dinero con nuestros servicios legales digitales a precios accesibles.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left text-lg font-medium text-gray-800 border-b">Servicio</th>
                <th className="px-4 py-3 text-center text-lg font-medium text-gray-800 border-b">Otras Agencias</th>
                <th className="px-4 py-3 text-center text-lg font-medium text-gray-800 border-b">Nuestra Agencia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Programa Familias Unidas</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$4,000</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$499</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Residencia Permanente</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$7,000</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$2,500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Permiso de Trabajo</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$4,000</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$1,500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Residencia por Empleo</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$8,500</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$2,800</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Asilo</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$12,000</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$4,000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Naturalización</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$3,800</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">$1,200</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-left text-lg text-gray-700 border-b">Traducción de Documentos</td>
                <td className="px-4 py-3 text-center text-lg text-red-600 font-semibold border-b">$495 por página</td>
                <td className="px-4 py-3 text-center text-lg text-green-600 font-semibold border-b">Gratis</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">
            *Los precios mostrados no incluyen tarifas adicionales que puedan cobrar entidades gubernamentales como el USCIS.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="my-4">  Ver Si Calificas para Familias Unidas</h2>
          <Button
            asChild
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white text-lg md:text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <Link href="/precalificacion">Saber si califico</Link>

          </Button>

          <h2 className="my-4">  Respuesta en menos de 4 Minutos</h2>
        </div>
      </div>

      {/* Sección de testimonios */}
      <Testimonios />



    </div>
  );
};

export default LandingMain;