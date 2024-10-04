import { FaPhone } from "react-icons/fa"
import { VerSiCalificoBtn } from "./MyButtons"

const Main = () => {
  return (
    <div
    className="h-screen bg-cover bg-center flex items-center justify-center"
    style={{
      backgroundImage: "url('/images/familia.jpg')",
    }}
  >
    <div className="flex flex-col justify-center items-center h-full w-full p-6 bg-gradient-to-r from-black/80 to-black/50 text-white text-center space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold">
        ¿Estás casado con un ciudadano Americano?
      </h1>
      <p className="text-xl md:text-2xl">
        Obtén tu residencia permanente en EE. UU., incluso si entraste sin documentos.
      </p>
      <p className="text-lg md:text-xl">
        Solo te tomará{" "}
        <span className="font-bold text-pink-500">2 minutos</span> saber si calificas.
      </p>

      <VerSiCalificoBtn />

      <div className="flex items-center mt-4">
        <FaPhone className="mr-2" />
        <a
          href={`tel:${process.env.PHONE_LINK}`}
          className="text-white text-lg md:text-xl font-bold"
          aria-label={`Llámanos al ${process.env.PHONE_NUMBER}`}
        >
          Llámanos al {process.env.PHONE_NUMBER}
        </a>
      </div>
    </div>
  </div>
  )
}
export default Main