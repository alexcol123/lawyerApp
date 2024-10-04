


import { getUnaPreAplicacion } from "@/utils/actions";
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
  FaUserTie,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";

const VerResultado = async () => {
  const application = await getUnaPreAplicacion();

  if (!application)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No hay aplicaciones
      </div>
    );

  const wasMarriedBeforeDate =
    new Date(application?.dateOfMarriage) < new Date("2024-06-17");
  const arrivedToUSABeforeDate =
    new Date(application?.applicantWhenArrivedToUS) < new Date("2014-06-17");
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
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl opacity-50">
            <Image
              src="/images/familia.jpg"
              alt="Familia feliz"
              objectFit="cover"
              fill
              priority
            />
          </div>
          <div className="relative z-10 space-y-4 md:space-y-6 text-white">
            <CardTitle className="text-3xl md:text-5xl font-semibold tracking-tight">
              {califica ? "¡Felicidades!" : "Lo sentimos,"}{" "}
              {application.applicantLegalFirstName}
            </CardTitle>
            <h4 className="font-medium text-xl md:text-2xl text-gray-300">
              {califica
                ? "Estás muy cerca de obtener tu residencia legal."
                : "No calificas para esta aplicación, pero hay otras opciones para ti."}
            </h4>
          </div>
        </CardHeader>

        {/* Contenido */}
        <CardContent className="space-y-8 md:space-y-10 p-6 md:p-10 bg-white">
          {/* Criterios de Elegibilidad */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl font-semibold text-blue-600">
              Criterios de Elegibilidad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  question: "¿Entraste a EE.UU. antes del 06 de junio de 2014?",
                  condition: arrivedToUSABeforeDate,
                },
                {
                  question: "¿Te casaste antes del 17 de junio de 2024?",
                  condition: wasMarriedBeforeDate,
                },
                {
                  question: "¿Tienes un matrimonio válido con un ciudadano?",
                  condition: hasValidMarriage,
                },
                {
                  question: "¿Tu récord criminal está limpio?",
                  condition: !application.applicantHasArrests,
                },
                {
                  question: "¿Sin antecedentes de deportación?",
                  condition: !application.applicantHasBeenDeported,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 border rounded-xl flex items-center justify-between bg-gray-50 shadow-sm"
                >
                  <p className="font-medium text-base md:text-lg">
                    {item.question}
                  </p>
                  <Badge
                    variant="outline"
                    className={`${
                      item.condition
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.condition ? "Sí" : "No"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Si es Elegible */}
          {califica ? (
            <>
              {/* Mensaje de Aprobación */}
              <div className="py-8 md:py-12 bg-green-50 border border-green-300 rounded-xl shadow-lg p-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800">
                  ¡Excelente!{" "}
                  <span className="text-green-600">
                    Calificas para el programa Manteniendo a las Familias Unidas
                  </span>{" "}
                  🎉
                </h2>

                <p className="text-lg md:text-xl text-center text-gray-700 mt-4 md:mt-6">
                  Según la información proporcionada, cumples con los requisitos
                  del programa. ¡Estás a un paso de{" "}
                  <span className="font-semibold">
                    obtener tu residencia legal
                  </span>{" "}
                  y disfrutar de una vida tranquila junto a tu familia!
                </p>

                <p className="text-lg md:text-xl text-center text-gray-700 mt-4 md:mt-6">
                  ¡No dejes pasar esta oportunidad!{" "}
                  <span className="font-semibold">
                    Comienza tu proceso hoy mismo
                  </span>{" "}
                  y transforma tu vida para siempre.
                </p>
              </div>

              <Separator className="my-8 md:my-12" />

              {/* Beneficios Exclusivos */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl font-extrabold text-blue-600 mb-4 text-center">
                  ¿Por qué elegirnos?
                </h3>
                <p className="text-xl text-gray-700 mb-6 text-center">
                  Te ofrecemos más que un servicio, te brindamos un compromiso
                  con tu futuro:
                </p>
                <ul className="space-y-6 w-full max-w-md">
                  {[
                    {
                      icon: (
                        <FaBalanceScale className="text-yellow-500 w-10 h-10" />
                      ),
                      title: "Asesoría Legal Experta",
                      description:
                        "Más de 20 años de experiencia respaldan nuestro compromiso. Te guiamos con confianza en cada etapa.",
                    },
                    {
                      icon: (
                        <FaHandsHelping className="text-red-500 w-10 h-10" />
                      ),
                      title: "Acompañamiento Integral",
                      description:
                        "Nos encargamos de todo por ti, desde el inicio hasta la aprobación. Tú solo disfruta del camino.",
                    },
                    {
                      icon: (
                        <FaEnvelopeOpenText className="text-green-500 w-10 h-10" />
                      ),
                      title: "Cartas Persuasivas",
                      description:
                        "Redactamos cartas en inglés perfecto, aumentando tus posibilidades de éxito.",
                    },
                    {
                      icon: (
                        <FaFileAlt className="text-blue-500 w-10 h-10" />
                      ),
                      title: "Traducción Profesional",
                      description:
                        "Traducimos tus documentos sin costo adicional. Olvídate del inglés, nosotros lo manejamos.",
                    },
                    {
                      icon: (
                        <FaUserTie className="text-purple-500 w-10 h-10" />
                      ),
                      title: "Atención Personalizada",
                      description:
                        "Cada caso es único. Nos adaptamos a tus necesidades para ofrecerte el mejor servicio.",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                      {item.icon}
                      <div className="flex flex-col">
                        <h4 className="font-bold text-lg text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-8 md:my-12" />

              {/* Mensaje de Advertencia */}
     
              <div className="mt-8 md:mt-12 bg-red-100 border border-red-400 rounded-xl p-6 text-center shadow-md">
                <div className="flex flex-col items-center justify-center text-red-800">
                  <FaExclamationTriangle className="mb-4" size={40} />
                  <h5 className="text-base md:text-lg font-semibold">
                    Hacerlo por tu cuenta puede costarte la oportunidad de
                    legalizarte. Errores en los documentos o no dominar el
                    inglés podrían resultar en el rechazo de tu caso.
                  </h5>
                  <p className="text-md md:text-lg mt-4 text-red-600">
                    Confía en nosotros para manejar tu caso de manera
                    profesional y sin riesgos.
                  </p>
                </div>
              </div>
            </>
          ) : (
            // Si no es elegible
            <div className="mt-12 text-center">
              {/* Mensaje de No Aprobación */}
              <div className="py-8 md:py-12 bg-red-50 border border-red-300 rounded-xl shadow-lg p-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-800">
                  Lo sentimos,{" "}
                  <span className="text-red-600">
                    no podemos darte una decisión inmediata
                  </span>{" "}
                  😔
                </h2>
                <p className="text-lg md:text-xl text-center text-gray-700 mt-4 md:mt-6">
                  Si tienes antecedentes de deportaciones o un récord criminal,
                  necesitamos revisar tu caso más a fondo para determinar si
                  calificas para el programa Familias Unidas.
                  <br />
                  <br />
                  Un representante legal analizará tu situación y te{" "}
                  <span className="font-semibold text-red-800">
                    llamará dentro de las próximas 48 horas
                  </span>{" "}
                  para brindarte más información y ver si calificas según tu
                  caso particular. Ten paciencia y{" "}
                  <span className="font-semibold text-red-800">
                    no pierdas la esperanza,
                  </span>{" "}
                  estamos aquí para apoyarte en todo momento.
                </p>
              </div>

              <div>
                <p className="mt-6 md:mt-8 text-center text-base md:text-lg text-gray-800">
                  ¿Tienes preguntas o necesitas más información? Llámanos al
                  <br />
                  <Link
                    href={`tel:${process.env.PHONE_LINK}`}
                    className="text-blue-600 font-bold"
                  >
                    {process.env.PHONE_NUMBER}
                  </Link>
                </p>
              </div>
            </div>
          )}
        </CardContent>

        {/* Pie de la tarjeta */}
        <CardFooter className="flex flex-col items-center my-6 space-y-4">
          {califica ? (
            <div className="text-center px-6 py-8 rounded-lg bg-primary/10 shadow-lg space-y-8">
              {/* Mensaje Promocional */}
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
                ¡Haz realidad tu sueño de vivir legalmente en Estados Unidos,
                hoy mismo!
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Mientras otras agencias te cobran hasta{" "}
                <span className="text-red-500 font-semibold">$3,200</span>,
                nosotros te ofrecemos la misma oportunidad por solo{" "}
                <span className="text-blue-600 font-bold">$499</span>. Comienza
                ahora con un pequeño depósito de{" "}
                <span className="text-blue-600 font-bold">$99</span> y paga el
                resto solo si tu aplicación es aprobada.
              </p>
              <p className="text-lg md:text-xl text-green-600 font-semibold">
                ¡Ahorra más de $3,000 y da el primer paso hacia tu residencia
                legal sin riesgo!
              </p>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-lg">
                <p className="text-lg md:text-xl font-bold flex items-center justify-center">
                  🌟 ¡Garantía de Satisfacción Total! 🌟
                </p>
                <p className="text-md md:text-lg">
                  Si no obtienes tu{" "}
                  <span className="font-bold">aprobación</span>, no pagarás ni
                  un centavo más. Nosotros asumimos el riesgo. Tú enfócate en
                  hacer realidad tu sueño sin preocuparte. ¡Hazlo realidad sin
                  preocupaciones!
                </p>
              </div>


<p className="font-semibold text-lg text-purple-800">
  Nos ocupamos de todo lo difícil, tú solo relájate y disfruta del resultado.
</p>

              <div className="flex items-center justify-center">
                <FaRegArrowAltCircleDown
                  size={30}
                  className="text-black animate-bounce"
                />
              </div>

              {/* Botón de Acción */}
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white text-lg md:text-xl py-5 md:py-8 px-8 md:px-14 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href={`/checkout?perfilId=${application.perfilId}`}>
                    ¡Transforma tu vida por solo{" "}
                    <span className="animate-pulse ml-1">$99!</span>
                  </Link>
                </Button>
              </div>

              {/* Sección de Contacto */}
              <div className="mt-8">
                <p className="text-base md:text-lg text-gray-800">
                  ¿Tienes preguntas? Estamos aquí para ayudarte:
                </p>
                <Link
                  href={`tel:+${process.env.PHONE_LINK}`}
                  className="text-blue-600 font-bold text-lg md:text-xl"
                >
                  {process.env.PHONE_NUMBER}
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