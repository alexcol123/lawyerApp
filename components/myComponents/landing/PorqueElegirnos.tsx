const PorqueElegirnos = () => {
  return (
    <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
      <div className=" flex flex-col gap-y-3 ">
        <h1 className="text-center  text-2xl text-primary">Bienvenido</h1>

        <h3 className="text-lg">Sabemos lo complicado y estresante que puede ser el proceso de inmigración, especialmente cuando tienes que llenar formularios y traducir documentos importantes por tu cuenta. Nuestro objetivo es hacer tu vida más fácil. Nos especializamos en llenar, traducir y redactar documentos legales y cartas explicativas para inmigración, asegurándonos de que todo esté correctamente preparado para tu caso.</h3>

        <h3 className="text-lg">Deja el trabajo difícil en nuestras manos. Ahórrate tiempo, preocupaciones y posibles errores que podrían retrasar o incluso causar la negación de tu aplicación. Estamos aquí para apoyarte en cada paso del camino</h3>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl text-primary">Servicios</h2>
          <p className="text-lg">Ofrecemos una variedad de servicios de inmigración para ayudarte en cada paso del camino. Desde llenar formularios hasta traducir documentos, estamos aquí para ayudarte.</p>
          <ul className="list-disc list-inside">
            <li>Preparación de formularios de inmigración</li>
            <li>Traducción de documentos</li>
            <li>Redacción de cartas explicativas</li>
            <li>Revisión de documentos</li>
            <li>Asesoramiento legal</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h2 className="text-2xl text-primary">¿Por qué elegirnos?</h2>
          <p className="text-lg">Nuestro equipo de profesionales altamente capacitados tiene años de experiencia en el campo de la inmigración. Estamos comprometidos a brindarte un servicio excepcional y a garantizar que tu aplicación sea un éxito.</p>
          <ul className="list-disc list-inside">
            <li>Profesionales altamente capacitados</li>
            <li>Experiencia en el campo de la inmigración</li>
            <li>Servicio excepcional</li>
            <li>Garantía de éxito</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
export default PorqueElegirnos