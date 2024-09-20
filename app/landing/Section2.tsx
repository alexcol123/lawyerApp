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
  FaComments,
} from "react-icons/fa";

const LandingMain = () => {
  return (
    <div className="flex flex-col">
      {/* Sección principal */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/familia.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full p-6 bg-black bg-opacity-50 text-white text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            ¿Estás casado con un ciudadano americano?
          </h1>
          <p className="text-xl md:text-2xl">
            Obtén tu residencia permanente en USA, incluso si entraste ilegalmente.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <Link href="/precalificacion">Ver si califico</Link>
          </Button>
          <div className="flex items-center mt-4">
            <FaPhone className="mr-2" />
            <a href="tel:1-800-123-4567" className="text-white text-lg font-bold">
              Llámanos al 1-800-123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonio 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaComments className="text-blue-600 w-12 h-12 mb-4" />
            <p className="text-lg text-gray-700 mb-4">
              &quot;Gracias a Familias Unidas, ahora tengo mi residencia y puedo estar con mi familia sin preocupaciones.&quot;
            </p>
            <p className="text-gray-800 font-semibold">- María G.</p>
          </div>
          {/* Testimonio 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaComments className="text-blue-600 w-12 h-12 mb-4" />
            <p className="text-lg text-gray-700 mb-4">
              &quot;El proceso fue rápido y sencillo. El equipo me apoyó en todo momento.&quot;
            </p>
            <p className="text-gray-800 font-semibold">- José R.</p>
          </div>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="bg-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaBalanceScale className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Asesoría Legal Especializada</h3>
            <p className="text-gray-700">
              Contamos con abogados expertos en leyes migratorias para guiarte en cada paso.
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaUserShield className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Representación Legal</h3>
            <p className="text-gray-700">
              Te representamos ante las autoridades migratorias para asegurar el éxito de tu caso.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <FaPassport className="text-blue-600 w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tramitación de Documentos</h3>
            <p className="text-gray-700">
              Gestionamos y traducimos todos los documentos necesarios para tu aplicación.
            </p>
          </div>
        </div>
      </div>

      {/* Sección sobre el Programa Familias Unidas */}
      <div className="bg-gray-100 py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          ¿Qué es el Programa Manteniendo a las Familias Unidas?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          El Programa <span className="text-blue-600 font-semibold">Manteniendo a las Familias Unidas</span> es una iniciativa que permite que ciertos <span className="font-bold">cónyuges</span> e <span className="font-bold">hijastros</span> de ciudadanos estadounidenses obtengan un permiso especial para permanecer en el país y solicitar la residencia permanente sin tener que salir de Estados Unidos.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex items-center">
            <FaHeart className="text-red-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              <span className="font-bold">Mantiene a las familias unidas</span> durante el proceso migratorio.
            </p>
          </div>
          <div className="flex items-center">
            <FaChild className="text-yellow-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Beneficia a <span className="font-bold">hijastros</span>, brindándoles estabilidad y seguridad.
            </p>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-600 w-12 h-12 mr-4" />
            <p className="text-lg text-gray-700">
              Facilita la obtención de la residencia legal permanente.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-8">
          Este programa es una oportunidad única para regularizar tu situación migratoria y asegurar un futuro estable para ti y tu familia. Al aprovechar el Programa Familias Unidas, puedes evitar largas separaciones y procesos complicados al permanecer en el país mientras completas tu solicitud.
        </p>
        <p className="text-lg text-gray-700">
          Si eres el <span className="font-bold">cónyuge</span> o <span className="font-bold">hijastro</span> de un ciudadano estadounidense, no dudes en explorar esta opción que ha cambiado la vida de miles de familias.
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
          className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white text-xl py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 mb-4"
        >
          <Link href="/precalificacion">Saber si califico</Link>
        </Button>
        <p className="text-lg text-gray-700">
          ¡No pierdas esta oportunidad de cambiar tu vida!
        </p>
      </div>
    </div>
  );
};

export default LandingMain;