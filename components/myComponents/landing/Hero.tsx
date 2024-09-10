import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className=" h-  flex flex-col h-full justify-between w-full p-10  bg-primary/20  rounded-xl tex-center text-center space-y-8">


      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
        El Programa de Manteniendo Familias Unidas, te permite obtener tu residencia permanente en USA, incluso si entraste ilegalmente.
      </h3>
      <p className="text-sm  md:text-lg  font-semibold ">
        Si estás en EE.UU y casado con un ciudadano, y entraste de manery ilegal, calificas pare este programa,  para que no tengas que salir de  EE.UU,  y puedas aplicar a la recidencia. Infórmate ahora
      </p>
      <div >
        <Button variant={'destructive'} className="mt-8">
          <a href="tel:+8044326474">Habla con operador</a>
        </Button>
      </div>

    </div>
  )
}
export default Hero
