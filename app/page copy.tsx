import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {

  FaFileAlt,
  FaEnvelopeOpenText,
  FaBalanceScale,
  FaHandsHelping,
  FaCheckCircle,
  FaUserTie,
  FaAward
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Sección de encabezado */}
      <header className="w-full relative">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/family8.jpg" // Reemplace con la ruta de su imagen
            alt="Familia feliz"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        {/* Contenido del encabezado */}
        <div className="relative z-10 flex flex-col items-center py-20 px-6">
          <h1 className="text-5xl font-semibold text-gray-900 text-center">
            Bienvenido a <span className="text-blue-600">Familias Unidas</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 max-w-3xl text-center">
            Sabemos lo complicado y estresante que puede ser el proceso de inmigración, especialmente cuando tienes que llenar formularios y traducir documentos importantes por tu cuenta. Nuestro objetivo es hacer tu vida más fácil.
          </p>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl text-center">
            Nos especializamos en llenar, traducir y redactar documentos legales y cartas explicativas para inmigración, asegurándonos de que todo esté correctamente preparado para tu caso.
          </p>
          <Button asChild className="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-xl py-4 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
            <Link href="#verificar-calificacion">
              Verificar si califico
            </Link>
          </Button>
        </div>
      </header>

      {/* Sección de servicios */}
      <section className="w-full flex flex-col items-center px-6 py-16">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Servicios</h2>
        <p className="text-xl text-gray-700 max-w-2xl text-center mb-8">
          Ofrecemos una variedad de servicios de inmigración para ayudarte en cada paso del camino. Desde llenar formularios hasta traducir documentos, estamos aquí para apoyarte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          {/* Servicio 1 */}
          <div className="flex items-center">
            <FaFileAlt className="text-blue-600 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Preparación de formularios de inmigración</strong>
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="flex items-center">
            <FaFileAlt className="text-blue-600 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Traducción de documentos</strong>
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="flex items-center">
            <FaEnvelopeOpenText className="text-blue-600 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Redacción de cartas explicativas</strong>
            </p>
          </div>
          {/* Servicio 4 */}
          <div className="flex items-center">
            <FaCheckCircle className="text-blue-600 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Revisión de documentos</strong>
            </p>
          </div>
          {/* Servicio 5 */}
          <div className="flex items-center">
            <FaBalanceScale className="text-blue-600 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Asesoramiento legal</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Sección de por qué elegirnos */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">¿Por qué elegirnos?</h2>
        <p className="text-xl text-gray-700 max-w-2xl text-center mb-8">
          Nuestro equipo de profesionales altamente capacitados tiene años de experiencia en el campo de la inmigración. Estamos comprometidos a brindarte un servicio excepcional y a garantizar que tu aplicación sea un éxito.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Razón 1 */}
          <div className="flex items-center">
            <FaUserTie className="text-gray-700 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Profesionales altamente capacitados</strong>
            </p>
          </div>
          {/* Razón 2 */}
          <div className="flex items-center">
            <FaAward className="text-gray-700 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Experiencia en el campo de la inmigración</strong>
            </p>
          </div>
          {/* Razón 3 */}
          <div className="flex items-center">
            <FaHandsHelping className="text-gray-700 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Servicio excepcional</strong>
            </p>
          </div>
          {/* Razón 4 */}
          <div className="flex items-center">
            <FaCheckCircle className="text-gray-700 mr-6" size={48} />
            <p className="text-xl text-gray-700">
              <strong>Garantía de éxito</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Sección de llamado a la acción */}
      <section id="verificar-calificacion" className="w-full flex flex-col items-center py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">¿Estás listo para cambiar tu vida?</h2>
        <p className="text-xl text-gray-700 text-center max-w-2xl mb-12">
          Haz clic en el botón a continuación para verificar si calificas para nuestro programa y da el primer paso hacia un futuro mejor.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-4 px-12 rounded-full shadow-md transition-transform transform hover:scale-105">
          <Link href="/verificar">
            Verificar si califico
          </Link>
        </Button>
        <p className="mt-6 text-center text-sm text-gray-500">
          * Nuestra tarifa especial de <strong>$399</strong> está disponible hasta el <strong>10 de octubre</strong>. ¡Ahorra y comienza ahora!
        </p>
      </section>

      {/* Sección de comparación de precios */}
      <section className="w-full bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">Aprovecha nuestra tarifa especial</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl text-gray-800">
            Otras agencias cobran hasta <span className="text-red-600 font-semibold">$3,000</span> por el mismo servicio.
          </p>
          <p className="mt-4 text-2xl text-gray-800">
            Nosotros te ofrecemos todo por solo <span className="text-blue-600 font-semibold">$399</span> hasta el <span className="text-red-600 font-semibold">10 de octubre</span>.
          </p>
          <p className="mt-4 text-xl text-gray-700">
            Después de esta fecha, el precio subirá a <span className="text-red-600 font-semibold">$999</span>. ¡No dejes pasar esta oportunidad!
          </p>
        </div>
      </section>

      {/* Sección de pie de página */}
      <footer className="w-full py-8 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Familias Unidas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
