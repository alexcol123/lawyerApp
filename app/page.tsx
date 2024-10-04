
import Footer from "./landing/Footer"
import Main from "@/components/myComponents/landing/Main"
import NuestrosServicios from "@/components/myComponents/landing/NuestrosServicios"
import QueEsFamiliasUnidas from "@/components/myComponents/landing/QueEsFamiliasUnidas"
import CallToAction from "@/components/myComponents/landing/CallToAction"
import Testimonios from "@/components/myComponents/landing/Testimonios"
import BlogLink from "@/components/myComponents/landing/BlogLink"
import Precios from "@/components/myComponents/landing/Precios"


const HomePage = () => {
  return (
    <div className="flex flex-col ">

      {/* <ChatBtn /> */}

      {/* Sección Principal */}
      <Main />

      {/* Sección de Servicios */}
      <NuestrosServicios />

      {/* Sección sobre el Programa Familias Unidas */}
      <QueEsFamiliasUnidas />

      {/* Sección de Llamada a la Acción */}
      <CallToAction />


      {/* Sección de Testimonios */}
      <Testimonios />

      {/* Sección de Blogs */}
      < BlogLink />

      {/* Sección de Comparación de Precios */}
      <Precios />

      {/* Sección de Llamada a la Acción */}
      <CallToAction />

      <Footer />

    </div>
  )
}
export default HomePage
