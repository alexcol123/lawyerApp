import {
  FaPhone,
  FaBalanceScale,
  FaUserShield,
  FaPassport,
  FaCheckCircle,

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
            ¿Estás casado con un ciudadano Americano?
          </h1>
          <p className="text-xl md:text-2xl">
            Obtén tu residencia permanente en EE. UU., incluso si entraste sin documentos.
          </p>
          <p className="text-lg md:text-xl">
            Solo te tomará{" "}
            <span className="font-bold text-pink-500">2 minutos</span> saber si calificas.
          </p>

          <VerSiCalificoBtn />

          <div className="flex items-center mt-4">
            <FaPhone className="mr-2" />
            <a
              href={`tel:${process.env.PHONE_LINK}`}
              className="text-white text-lg md:text-xl font-bold"
              aria-label={`Llámanos al ${process.env.PHONE_NUMBER}`}
            >
              Llámanos al {process.env.PHONE_NUMBER}
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
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
              <FaBalanceScale className="text-blue-600 w-12 h-12 mb-2" />
              <h3 className="text-lg font-semibold mb-1">
                Asesoría Legal Especializada
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Abogados expertos te guían en cada paso.
              </p>
            </div>
            {/* Servicio 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
              <FaUserShield className="text-blue-600 w-12 h-12 mb-2" />
              <h3 className="text-lg font-semibold mb-1">
                Representación Legal
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Te representamos ante las autoridades.
              </p>
            </div>
            {/* Servicio 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
              <FaPassport className="text-blue-600 w-12 h-12 mb-2" />
              <h3 className="text-lg font-semibold mb-1">
                Tramitación de Documentos
              </h3>
              <p className="hidden md:block text-sm text-gray-700">
                Gestión y traducción de documentos.
              </p>
            </div>
            {/* Servicio 4 */}
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
              <FaHandsHelping className="text-blue-600 w-12 h-12 mb-2" />
              <h3 className="text-lg font-semibold mb-1">
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
      <div className="bg-gray-100 py-8 text-center">
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
          <p className="text-lg text-gray-700 mb-6">
            Regulariza tu situación migratoria y asegura un futuro estable para tu familia.
          </p>
          <p className="text-lg text-gray-700">
            Si eres <span className="font-bold">cónyuge</span> o <span className="font-bold">hijastro</span> de un ciudadano estadounidense, ¡esta es tu oportunidad para cambiar tu vida!
          </p>
        </div>
      </div>



      {/* Sección de Llamada a la Acción */}
      <div className="bg-primary/80 text-white py-12 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            La pre-calificación dura menos de <span className="font-bold">2 minutos</span> y es completamente <span className="font-bold">GRATUITA</span>.
          </p>
          <VerSiCalificoBtn/>
          <p className="text-base md:text-lg mt-4">
            ¡No pierdas esta oportunidad de cambiar tu vida!
          </p>
        </div>
      </div>


      {/* Sección de Testimonios */}
      <Testimonios />

      {/* Sección de Comparación de Precios */}

      <div className="bg-white py-8 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Compara Nuestros Precios</h2>
          <p className="text-lg text-gray-700 mb-6">
            Al ser 100% virtuales, ofrecemos servicios <span className="text-green-600 font-bold">hasta un 75% más baratos</span> sin sacrificar calidad.
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
                     {
                      servicio: "Programa Manteniendo a las Familias Unidas",
                      otras: "$4,000",
                      nuestra: "$499",
                    },
                    {
                      servicio: "Residencia Permanente",
                      otras: "$7,000",
                      nuestra: "$2,500",
                    },
                    {
                      servicio: "Permiso de Trabajo",
                      otras: "$4,000",
                      nuestra: "$1,500",
                    },
                    {
                      servicio: "Naturalización",
                      otras: "$3,800",
                      nuestra: "$1,200",
                    },
                    {
                      servicio: "Traducción de Documentos",
                      otras: "$195 por página",
                      nuestra: "$18",
                    },
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


      {/* Sección de Blogs */}
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Noticias de Inmigración y Actualizaciones
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Mantente informado sobre las últimas noticias de inmigración y cómo el programa
            <span className="font-bold"> Manteniendo a las Familias Unidas</span> está ayudando a miles de familias a obtener su residencia en Estados Unidos.
          </p>
          <a
            href="/blog"
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Visitar Blog
          </a>
        </div>
      </div>



    </div>
  );
};

export default LandingMain;

