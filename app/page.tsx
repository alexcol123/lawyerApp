
import ChatBtn from "@/components/myComponents/landing/ChatBtn"
import CitasCarousel from "@/components/myComponents/landing/CitasCarousel"
import Collapse from "@/components/myComponents/landing/Collapse"
import Hero from "@/components/myComponents/landing/Hero"
import Hero2 from "@/components/myComponents/landing/Hero2"
import Section2 from "@/components/myComponents/landing/Section2"


const HomePage = () => {
  return (
    <div>


      <Hero />

      <div className="mt-20">
        <ChatBtn />
      </div>

      <Section2 />

      <Hero2 />

      <CitasCarousel/>

      <div className="p-4">
        <h3 className="text-2xl font-semibold text-center my-2">Preguntas Frequentes</h3>
        <div className="border rounded-xl p-4 ">
          <Collapse />
        </div>
      </div>


      

    </div>
  )
}
export default HomePage
