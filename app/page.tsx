
import CallToAction from "@/components/myComponents/landing/CallToAction"
import ChatBtn from "@/components/myComponents/landing/ChatBtn"
import CitasCarousel from "@/components/myComponents/landing/CitasCarousel"
import Collapse from "@/components/myComponents/landing/Collapse"
import Footer from "@/components/myComponents/landing/Footer"


import Info from "@/components/myComponents/landing/Info"
import Info2 from "@/components/myComponents/landing/Info2"
import PorqueElegirnos from "@/components/myComponents/landing/PorqueElegirnos"
import LandingMain from "@/components/myComponents/landing/Section2"


const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-12">

      <ChatBtn />

      <LandingMain />

      <CallToAction />

      <div className="p-2 bg-black  text-white rounded-xl ">
        <Info />
        <CitasCarousel />
      </div>

      <div className="p-4 border rounded-xl">
        <h3 className="text-xl font-semibold text-center ">Preguntas Frequentes</h3>
        <h3 className="text-xl font-semibold text-center ">Sobre el I-131f</h3>
        <div className="border rounded-xl p-4 ">
          <Collapse />
        </div>
      </div>

<Info2 />


<PorqueElegirnos />

<Footer />

    </div>
  )
}
export default HomePage
