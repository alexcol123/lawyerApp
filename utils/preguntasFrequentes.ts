type PreguntaTypes = {
  pregunta: string
  respuesta: string
}



export const preguntasFrequentes: PreguntaTypes[] = [
  // Preguntas sobre el Programa Familias Unidas
  {
    pregunta: "¿Qué es el Programa Familias Unidas?",
    respuesta: "El Programa Familias Unidas permite que ciertos cónyuges e hijastros de ciudadanos estadounidenses permanezcan en el país y soliciten la residencia permanente sin salir de EE. UU."
  },
  {
    pregunta: "¿Quiénes califican para el Programa Familias Unidas?",
    respuesta: "Califican los cónyuges e hijastros de ciudadanos estadounidenses que cumplan con ciertos requisitos específicos de elegibilidad."
  },
  {
    pregunta: "¿Cuáles son los beneficios del Programa Familias Unidas?",
    respuesta: "El programa permite a los beneficiarios permanecer en EE. UU. mientras completan el proceso de solicitud de residencia permanente, evitando largas separaciones familiares."
  },
  {
    pregunta: "¿Puedo aplicar al Programa Familias Unidas si entré ilegalmente a EE. UU.?",
    respuesta: "Sí, el programa está diseñado para ayudar a personas que entraron al país sin documentos legales a regularizar su situación migratoria."
  },
  {
    pregunta: "¿Necesito salir del país para aplicar al Programa Familias Unidas?",
    respuesta: "No, uno de los principales beneficios del programa es que puedes completar el proceso sin salir de EE. UU."
  },
  {
    pregunta: "¿El Programa Familias Unidas también beneficia a los hijastros?",
    respuesta: "Sí, los hijastros de ciudadanos estadounidenses también pueden calificar para el programa si cumplen con los requisitos establecidos."
  },
  {
    pregunta: "¿Cuánto tiempo tarda el proceso del Programa Familias Unidas?",
    respuesta: "El tiempo puede variar dependiendo de cada caso, pero generalmente el proceso puede tomar varios meses hasta su finalización."
  },
  {
    pregunta: "¿Cuáles son los requisitos para aplicar al Programa Familias Unidas?",
    respuesta: "Debes ser cónyuge o hijastro de un ciudadano estadounidense y cumplir con ciertos requisitos específicos de elegibilidad. Es recomendable consultar con un experto para evaluar tu caso particular."
  },

  // Preguntas sobre la Agencia Legal Digital
  {
    pregunta: "¿Cuánto cuesta el servicio para aplicar al Programa Familias Unidas con su agencia?",
    respuesta: "Nuestro servicio cuesta $499, y puedes empezar con solo $199 como pago inicial."
  },
  {
    pregunta: "¿Por qué su agencia cobra menos que otras agencias tradicionales?",
    respuesta: "Somos una agencia digital, lo que nos permite reducir costos operativos y ofrecerte un servicio de alta calidad a un precio mucho más accesible."
  },
  {
    pregunta: "¿Qué incluye el servicio de $499?",
    respuesta: "Incluye la asistencia completa en la preparación y presentación de tu caso, traducción de documentos, y asesoría personalizada durante todo el proceso."
  },
  {
    pregunta: "¿Puedo pagar en cuotas?",
    respuesta: "Sí, puedes empezar con un pago inicial de $199 y pagar el resto en cómodas cuotas durante el proceso."
  },
  {
    pregunta: "¿Qué diferencia hay entre su agencia digital y una agencia tradicional?",
    respuesta: "Nuestra agencia digital te ofrece la misma calidad de servicio, pero con la conveniencia de hacerlo todo en línea y a un costo significativamente menor."
  },
  {
    pregunta: "¿Cómo puede su agencia digital ofrecer precios tan bajos?",
    respuesta: "Al no tener costos asociados a oficinas físicas y utilizar tecnología avanzada, podemos reducir nuestros costos y trasladar esos ahorros a nuestros clientes."
  },
  {
    pregunta: "¿Qué documentos necesito proporcionar para empezar con su agencia?",
    respuesta: "Necesitarás documentos personales básicos como identificación, acta de matrimonio (si aplica), y cualquier otro documento relevante para tu caso específico. Te guiaremos en cada paso para asegurarnos de que tengas todo lo necesario."
  },
  {
    pregunta: "¿Cómo funciona el proceso con su agencia si todo es digital?",
    respuesta: "El proceso es simple: te registras en nuestra plataforma, completas un formulario inicial, y luego te asignamos un asesor que te guiará a través del proceso de principio a fin, todo de manera digital y segura."
  },
  {
    pregunta: "¿Cómo puedo contactar a su equipo si tengo dudas?",
    respuesta: `Puedes contactarnos a través de chat en vivo en nuestro sitio web, por teléfono al "Llámanos al ${process.env.PHONE_NUMBER as string}".`
  },
  {
    pregunta: "¿El servicio incluye la traducción de documentos necesarios?",
    respuesta: "Sí, la traducción de documentos necesarios está incluida en nuestro servicio sin costo adicional."
  }
];