import { Button } from "@/components/ui/button"

const Section2 = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/familia.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      className="h-[60vh] bg-cover rounded-xl bg-center bg-no-repeat flex items-center justify-center"

    >
      <div className="flex flex-col justify-between h-full  w-full p-4  rounded-xl text-center space-y-8  backdrop-saturate-50  bg-white/20 ">

        <div className="text-lg   md:text-3xl font-semibold tracking-tight bg-white/80 p-2  rounded-xl text-primary ">
          <h1 className="mb-2">Casado con un ciudadano americano? </h1>

          <h1>Puedes obtener tu residencia permanente en USA, incluso si entraste ilegalmente.</h1>
        </div>

        <div >
          <Button variant={'destructive'} className="mt-8">
            <a href="tel:+8044326474">Habla con Esperto Legal</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Section2