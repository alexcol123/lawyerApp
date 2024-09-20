

'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type PersonasConCitasType = {
  nombre: string
  imagen: string
  id: number
}

const personasConCitas: PersonasConCitasType[] = [
  { nombre: "Luis Muñoz", imagen: "citas00001.png", id: 1 },
  { nombre: "Carmen García", imagen: "citas00002.png", id: 2 },
  { nombre: "Pedro Hernández", imagen: "citas00003.png", id: 3 },
  { nombre: "Sofía Torres", imagen: "citas00004.png", id: 4 },
  { nombre: "José Luis Martínez Torres", imagen: "citas00005.png", id: 5 },
  { nombre: "Juan Carlos Pérez", imagen: "citas00006.png", id: 6 },
  { nombre: "María Fernanda González", imagen: "citas00007.png", id: 7 },
  { nombre: "Carlos Rodríguez", imagen: "citas00008.png", id: 8 },
  { nombre: "Ana López", imagen: "citas00009.png", id: 9 },
  { nombre: "Laura Elena Ramírez", imagen: "citas00010.png", id: 10 },
]

function CitasCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )

  return (
    <div className="m-6 md:m-12 flex items-center justify-center rounded-lg bg-gray-100 py-8 shadow-lg">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="space-x-4">
          {personasConCitas.map((persona) => (
            <CarouselItem key={persona.id} className="flex items-center justify-center">
              <Card className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div
                  style={{
                    background: `url(/images/citasbiometrics2/${persona.imagen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    width: "300px",
                  }}
                  className="w-full object-cover "
                ></div>
                <CardContent className="flex flex-col items-center justify-center bg-white p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {persona.nombre}
                  </h3>
                  <h4 className="text-lg text-green-600">¡Ya tiene su cita!</h4>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary hover:text-green-600" />
        <CarouselNext className="text-primary hover:text-green-600" />
      </Carousel>
    </div>
  )
}

export default CitasCarousel