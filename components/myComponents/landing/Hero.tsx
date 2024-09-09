import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="  flex flex-col h-full justify-between w-full p-10  bg-primary/20  rounded-xl tex-center text-center space-y-8">


      <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
        Arregla tu Estatus Migratorio de Forma Rápida y Económica
      </h3>
      <p className="text-sm  md:text-lg  font-semibold ">
        Necesitas ayuda con tu proceso de inmigración? Estamos aquí para guiarte. Llena tu solicitud con nuestra plataforma fácil de usar
      </p>
      <div >
        <Button variant={'destructive'} className="mt-8">Empieza ahora</Button>
      </div>

    </div>
  )
}
export default Hero
