






import { getUnaAplicacion } from "@/utils/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {

  FaFileAlt,
  FaEnvelopeOpenText,
  FaBalanceScale,
  FaHandsHelping,
  FaExclamationTriangle,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-6">
      <Card className="shadow-lg border border-gray-300 rounded-3xl max-w-4xl w-full bg-white">
        {/* Encabezado */}
        <CardHeader className="relative text-center p-8 md:p-12 rounded-t-3xl overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl opacity-50">
            <Image
              src="/images/familia.jpg"
              alt="Familia feliz"
              objectFit="cover"
              fill
              priority
            />
          </div>
          {/* Header Content */}
          <div className="relative z-10 space-y-4 md:space-y-6 text-white">
            <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
              {califica ? "¡Excelente noticia!" : "Lo sentimos,"} {application.applicantLegalFirstName}
            </CardTitle>
            <h4 className="font-medium text-xl md:text-2xl text-gray-300">
              {califica
                ? "Estás a un paso de cambiar tu vida."
                : "No calificas para esta aplicación, pero hay alternativas."}
            </h4>
          </div>
        </CardHeader>

        {/* Contenido */}
        <CardContent className="space-y-8 md:space-y-10 p-6 md:p-10 bg-white">
          {/* Eligibility Criteria */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl font-semibold text-blue-600">Criterios de Elegibilidad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  question: "¿Entraste a EE.UU. antes del 17/06/2014?",
                  condition: arrivedToUSABeforeDate,
                },
                {
                  question: "¿Te casaste antes del 17/06/2024?",
                  condition: wasMarriedBeforeDate,
                },
                {
                  question: "¿Tienes un matrimonio válido con un ciudadano?",
                  condition: hasValidMarriage,
                },
                {
                  question: "¿No tienes antecedentes penales?",
                  condition: !application.applicantHasArrests,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 border rounded-xl flex items-center justify-between bg-gray-50 shadow-sm"
                >
                  <p className="font-medium text-base md:text-lg">{item.question}</p>
                  <Badge
                    variant="outline"
                    className={`${item.condition ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                  >
                    {item.condition ? "Sí" : "No"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* If Eligible */}
          {califica ? (
            <>
              {/* Approved Message */}
              <div className="py-8 md:py-12 bg-green-50 border border-green-300 rounded-xl shadow-lg p-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800">
                  ¡Felicidades! <span className="text-green-600">Calificas para el programa Familias Unidas</span> 🎉
                </h2>
                <p className="text-lg md:text-xl text-center text-gray-700 mt-4 md:mt-6">
                  Aprovecha esta oportunidad única para construir un futuro estable y seguro para ti y tus seres queridos. ¡Estamos aquí para ayudarte en cada paso del camino!
                </p>
                <div className="flex justify-center mt-6">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
                    <Link href="/siguiente-paso">¡Empezar ahora!</Link>
                  </Button>
                </div>
              </div>

              <Separator className="my-8 md:my-12" />

              {/* Exclusive Benefits */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl font-extrabold text-blue-600 mb-4 text-center">
                  ¿Por qué elegirnos?
                </h3>
                <p className="text-xl text-gray-700 mb-6 text-center">
                  Te acompañamos en cada paso del camino. Con nosotros obtendrás:
                </p>
                <ul className="space-y-6 w-full max-w-md">
                  {[
                    {
                      icon: <FaFileAlt className="text-blue-500 w-10 h-10" />,
                      title: 'Traducción gratuita',
                      description: 'Traducción de documentos oficiales sin costo adicional.',
                    },
                    {
                      icon: <FaEnvelopeOpenText className="text-green-500 w-10 h-10" />,
                      title: 'Cartas personalizadas',
                      description: 'Cartas explicativas adaptadas a tu situación específica.',
                    },
                    {
                      icon: <FaBalanceScale className="text-yellow-500 w-10 h-10" />,
                      title: 'Asesoría legal especializada',
                      description: 'Te guiamos con confianza y transparencia en cada etapa.',
                    },
                    {
                      icon: <FaHandsHelping className="text-red-500 w-10 h-10" />,
                      title: 'Acompañamiento integral',
                      description: 'Te apoyamos desde la primera consulta hasta la resolución final.',
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
                      {item.icon}
                      <div className="flex flex-col">
                        <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-8 md:my-12" />

              {/* Warning Message */}
              <div className="mt-8 md:mt-12 bg-red-100 border border-red-400 rounded-xl p-6 text-center shadow-md">
                <div className="flex flex-col items-center justify-center text-red-800">
                  <FaExclamationTriangle className="mb-4" size={40} />
                  <h5 className="text-base md:text-lg font-semibold">
                    Hacerlo por tu cuenta puede costarte la oportunidad de legalizarte. Errores en los documentos o no dominar el inglés podrían resultar en el rechazo de tu caso.
                  </h5>
                </div>
              </div>
            </>
          ) : (
            // If not eligible
            <div className="mt-12 text-center">
              <h3 className="text-base md:text-lg font-semibold my-8 md:my-12">
                De acuerdo a esta información, al parecer no calificas para el programa Familias Unidas. Pero no te des por vencido aún, hay otras alternativas que podemos explorar. Un representante te llamará para discutir otras opciones.
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
          )}
        </CardContent>



        {/* Pie de la tarjeta */}




        <CardFooter className="flex flex-col items-center my-6  space-y-4">
          {califica ? (
            <div className="text-center px-4 py-6 rounded-lg bg-white shadow-md space-y-6">
              {/* Sección de Mensaje Promocional */}
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                ¡Actúa rápido y ahorra!
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Otras agencias cobran hasta
                <span className="text-red-500 font-semibold">$3,500</span> por el mismo trámite.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Con nosotros, el precio es de solo
                <span className="text-blue-600 font-bold">$499</span>.
              </p>
              <p className="text-lg md:text-xl text-green-600 font-semibold">
                ¡Ahorra más de $3,000 y asegura tu lugar hoy!
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Nosotros nos encargamos de todo el proceso. Tú solo necesitas empezar con un depósito de
                <span className="text-blue-600 font-bold">$99</span>.
              </p>
              <p className="text-md md:text-lg text-gray-500">
                Oferta válida hasta el
                <span className="text-red-500 font-semibold"> 31 de octubre</span>. ¡Últimos días para aprovechar!
              </p>

              {/* Refuerzo de Beneficio */}
              <p className="text-md md:text-lg text-gray-600">
                ¡Deja el papeleo en nuestras manos y concéntrate en tu futuro!
              </p>

              {/* Sección de Botón de Acción */}
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white text-lg md:text-xl py-5 md:py-8 px-8 md:px-14 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <Link href={`/checkout?perfilId=${application.perfilId}`}>
                    ¡Actúa ahora por <span className="animate-pulse ml-1">$99!</span>
                  </Link>
                </Button>
                <p className="text-xs md:text-sm font-semibold text-gray-600 mt-4">
                  Si no obtienes tu cita, te devolvemos tu dinero. ¡Sin compromisos!
                </p>
              </div>

              {/* Sección de Contacto */}
              <div className="mt-8">
                <p className="text-base md:text-lg text-gray-800">
                  ¿Tienes preguntas? Estamos aquí para ayudarte:
                </p>
                <Link href={`tel:+${process.env.PHONE_LINK as string}`} className="text-blue-600 font-bold text-lg md:text-xl">
                  {process.env.PHONE_NUMBER as string}
                </Link>




              </div>
            </div>
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


