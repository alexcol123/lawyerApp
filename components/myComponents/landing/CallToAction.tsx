import { VerSiCalificoBtn } from "./MyButtons"

const CallToAction = () => {
  return (

      <div className="bg-primary/75 text-white py-8 md:py-12 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            La pre-calificación dura menos de <span className="font-bold">2 minutos</span> y es completamente <span className="font-bold">GRATUITA</span>.
          </p>
          <VerSiCalificoBtn />
          <p className="text-base md:text-lg mt-4">
            ¡No pierdas esta oportunidad de cambiar tu vida!
          </p>
        </div>
      </div>
  )
}
export default CallToAction