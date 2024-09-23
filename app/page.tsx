
import CitasCarousel from "@/components/myComponents/landing/CitasCarousel"
import Collapse from "@/components/myComponents/landing/Collapse"


import Info from "@/components/myComponents/landing/Info"

import LandingMain from "@/components/myComponents/landing/Section2"
import Footer from "./landing/Footer"


const HomePage = () => {
  return (
    <div className="flex flex-col ">

      {/* <ChatBtn /> */}

      <LandingMain />

      <div className="p-2 bg-black  text-white rounded-xl ">
        <Info />
        <CitasCarousel />
      </div>

      <div className="p-4 border rounded-xl">
        <h3 className="text-xl font-semibold text-center ">Preguntas Frequentes</h3>
        <h3 className="text-xl font-semibold text-center ">Sobre el I-131f (Familias Unidas)</h3>
        <div className="border rounded-xl p-4 ">
          <Collapse />
        </div>
      </div>


      <Footer />

    </div>
  )
}
export default HomePage
