
// Importaciones necesarias
import { getUnaAplicacion } from "@/utils/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  FaCar,
  FaHome,
  FaMoneyBillWave,
  FaPlane,
  FaUserGraduate,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaBalanceScale,
  FaHandsHelping,
  FaExclamationTriangle
} from "react-icons/fa";

const VerResultado = async () => {
  const application = await getUnaAplicacion();

  if (!application)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No hay aplicaciones
      </div>
    );

  const wasMarriedBeforeDate = new Date(application?.dateOfMarriage) < new Date("2024-06-17");
  const arrivedToUSABeforeDate = new Date(application?.applicantWhenArrivedToUS) < new Date("2014-06-17");
  const hasValidMarriage = application.esSpouse || application.dateOfMarriage;

  const califica =
    wasMarriedBeforeDate &&
    arrivedToUSABeforeDate &&
    hasValidMarriage &&
    !application.applicantHasArrests &&
    !application.applicantHasBeenDeported;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6">
      <Card className="shadow-2xl border rounded-3xl max-w-4xl w-full bg-white">
        {/* Encabezado */}
        <CardHeader className="relative text-center p-8 md:p-12 rounded-t-3xl overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl">
            <Image
              src="/images/familia.jpg"
              alt="Familia feliz"
              objectFit="cover"
              fill

              priority
            />
          </div>
          {/* Contenido del encabezado */}
          <div className="relative z-10 space-y-4 md:space-y-6">
            <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {califica ? "¡Excelente noticia!" : "Lo sentimos,"} {application.applicantLegalFirstName}
            </CardTitle>
            <h4 className="font-medium text-xl md:text-2xl text-gray-700">
              {califica
                ? "Estás a un paso de cambiar tu vida."
                : "No calificas para esta aplicación, pero hay alternativas."}
            </h4>
          </div>
        </CardHeader>

        {/* Contenido */}
        <CardContent className="space-y-8 md:space-y-10 p-6 md:p-10">
          <div className="space-y-6 text-gray-800">
            {/* Criterios de elegibilidad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  question: "¿Entraste antes del 17/06/2014?",
                  condition: arrivedToUSABeforeDate
                },
                {
                  question: "¿Te casaste antes del 17/06/2024?",
                  condition: wasMarriedBeforeDate
                },
                {
                  question: "¿Tienes un matrimonio válido con un ciudadano?",
                  condition: hasValidMarriage
                },
                {
                  question: "¿No tienes antecedentes penales?",
                  condition: !application.applicantHasArrests
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 border rounded-xl flex items-center justify-between bg-gray-50"
                >
                  <p className="font-medium text-base md:text-lg">{item.question}</p>
                  <Badge
                    variant="outline"
                    className={
                      item.condition
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }
                  >
                    {item.condition ? "Sí" : "No"}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Mensaje principal */}
            {califica ? (
              <>
                <div className="py-8 md:py-12">
                  <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
                    ¡Sí calificas para el programa{" "}
                    <span className="text-blue-600">Familias Unidas</span>!
                  </h2>
                  <p className="text-lg md:text-xl text-center text-gray-700 mt-4 md:mt-6">
                    Esta es tu oportunidad de construir un futuro brillante para ti y tus seres queridos.
                  </p>
                </div>

                <Separator className="my-8 md:my-12" />

                {/* Beneficios */}
                <div className="mt-8 md:mt-12">
                  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8 text-gray-900">
                    Con tu legalización, podrás:
                  </h3>
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-center">
                      <FaMoneyBillWave className="text-blue-600 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Mejorar tus ingresos y acceder a oportunidades laborales de calidad.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaPlane className="text-blue-600 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Viajar sin restricciones y reunirte con tus seres queridos.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaHome className="text-blue-600 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Adquirir tu hogar y asegurar el futuro de tu familia.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaCar className="text-blue-600 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Obtener una licencia de conducir y movilizarte con libertad.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaUserGraduate className="text-blue-600 mr-3 md:mr-4" size={20} />
                      <span className="text-base md:text-xl">
                        Continuar tus estudios o apoyar los de tus hijos.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Beneficios exclusivos */}
                <div className="py-12 md:py-16">
                  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-primary">
                    Déjanos ayudarte:
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8 text-gray-900">
                    Al elegirnos, obtienes:
                  </h3>
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-center">
                      <FaFileAlt className="text-gray-700 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Traducción gratuita de documentos oficiales.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaEnvelopeOpenText className="text-gray-700 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Cartas explicativas personalizadas para tu caso.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaBalanceScale className="text-gray-700 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Asesoría legal especializada y confiable.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FaHandsHelping className="text-gray-700 mr-3 md:mr-4" size={24} />
                      <span className="text-base md:text-xl">
                        Acompañamiento total durante todo el proceso.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Advertencia */}
                <div className="mt-12 md:mt-16 text-center py-6 md:py-8">
                  <div className="inline-flex flex-col md:flex-row items-center bg-red-100 text-red-800 p-4 rounded-xl shadow-md">
                    <FaExclamationTriangle className="mb-2 md:mb-0 md:mr-3" size={24} />
                    <h5 className="text-base md:text-xl font-bold">
                      No lo hagas por tu cuenta, errores podrían costarte la oportunidad de legalizarte.
                    </h5>
                  </div>
                </div>

                {/* Mensaje motivador con aviso de tarifas */}
                <div className="py-8 md:py-10 text-center">
                  <p className="text-xl md:text-2xl text-gray-800">
                    Otras agencias cobran hasta{" "}
                    <span className="text-red-600 font-semibold">$3,500</span> por este servicio.
                  </p>
                  <p className="mt-4 text-xl md:text-2xl text-gray-800">
                    Nosotros te ofrecemos el mismo servicio completo por solo{" "}
                    <span className="text-blue-600 font-bold text-2xl md:text-3xl">$499</span> hasta el{" "}
                    <span className="text-red-600 font-semibold">15 de octubre</span>.
                  </p>
                  <p className="mt-4 text-lg md:text-xl text-gray-700">
                    Después de esta fecha, el precio subirá a{" "}
                    <span className="text-red-600 font-semibold">$999</span>. ¡Ahorra y aprovecha esta oportunidad ahora!
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div className="mt-12 text-center">
                  <h3 className="text-base md:text-lg font-semibold my-8 md:my-12">
                    De acuerdo a esta información, al parecer no calificas para el programa Familias Unidas.
                    Pero no te des por vencido aún, hay otras alternativas que podemos explorar. Un representante te llamará para discutir otras opciones.
                  </h3>
                  <div className="inline-flex flex-col md:flex-row items-center bg-red-100 text-red-800 p-4 rounded-xl shadow-md">
                    <FaExclamationTriangle className="mb-2 md:mb-0 md:mr-3" size={24} />
                    <h5 className="text-base md:text-xl font-bold">
                      Un representante legal revisará tu caso y se pondrá en contacto contigo dentro de 48 horas para explorar otras soluciones. ¡No pierdas la esperanza!
                    </h5>
                  </div>

                  <div>
                    <p className="mt-6 md:mt-8 text-center text-base md:text-lg text-gray-800">
                      ¿Tienes dudas o preguntas? Llámanos al
                      <br />
                      <Link href={`tel:${process.env.PHONE_LINK as string}`} className="text-blue-600 font-bold">
                        {process.env.PHONE_NUMBER as string}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>

        {/* Pie de la tarjeta */}
        <CardFooter className="flex flex-col items-center my-6 md:my-10">
          {califica ? (
            <>
              <p className="mb-4 md:mb-6 text-center px-4 md:px-8 text-xl md:text-2xl text-gray-800">
                <strong>
                  ¡Comienza ahora con solo <span className="text-blue-600">$99</span> de depósito!
                </strong>
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <Link href={`/checkout?perfilId=${application.perfilId}`}>
                  Iniciar Proceso Solo <span className="animate-pulse ml-2">$99</span>
                </Link>
              </Button>
              <p className="mt-4 text-xs md:mt-6 text-center  md:text-base text-gray-600">
                Paga el resto $400 cuando tu aplicación esté lista. Tarifas de USCIS no incluidas.
              </p>
              <p className="mt-6 md:mt-8 text-center text-base md:text-lg text-gray-800">
                ¿Tienes dudas o preguntas? Llámanos al
                <br />
                <Link href={`tel:${process.env.PHONE_LINK as string}`} className="text-blue-600 font-bold">
                  {process.env.PHONE_NUMBER as string}
                </Link>
              </p>
            </>
          ) : (
            <div className="text-center text-base md:text-lg text-gray-700">
              Un representante te contactará pronto para ofrecerte alternativas.
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerResultado;