import { Button } from "@/components/ui/button"
import { FaPhone } from "react-icons/fa";

const LandingMain = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/familia.jpg')", backgroundSize: "cover", backgroundPosition: "top" }}
      className="h-[65vh] bg-cover rounded-xl bg-center bg-no-repeat flex items-center justify-center shadow-lg "

    >
      <div className="flex flex-col justify-end h-full  w-full p-4  rounded-xl text-center space-y-8  backdrop-saturate-50  bg-white/20 ">

        <div className="text-lg  tracking-tight bg-white/90 p-2  rounded-xl  ">
          <h1 className="mb-2 text-xl text-primary  font-semibold ">Estas Casado con un ciudadano americano? </h1>
          <h2 className=" text-base  mt-2">Obtene tu residencia permanente en USA, incluso si entraste ilegalmente.</h2>

        </div>

        <div >
          <Button asChild variant={'destructive'} className="mt-2 mb-2">
            <div className="flex gap-2 items-center justify-center">
            <a href="tel:+18044326474">Habla con Experto, Gratis</a>
           
              <FaPhone />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default LandingMain