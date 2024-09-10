
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
  {
    nombre: "Juan Calos Perez",
    imagen: "citas00001.png",
    id: 1
  },
  {
    nombre: "Maria Fernamda Gonzales",
    imagen: "citas00002.png",
    id: 2
  },
  {
    nombre: "Carlos Rodriguez",
    imagen: "citas00003.png",
    id: 3
  },
  {
    nombre: "Ana Lopez",
    imagen: "citas00004.png",
    id: 4
  },


  {
    nombre: "Laura Elena Ramirez  ",
    imagen: "citas00005.png",
    id: 5
  },
  {
    nombre: "Luiz Munoz",
    imagen: "citas00006.png",
    id: 6
  },
  {
    nombre: "Carmen Garcia",
    imagen: "citas00007.png",
    id: 7

  },
  {
    nombre: "Pedro Hernandez",
    imagen: "citas00008.png",
    id: 8
  },
  {
    nombre: "Sofia Torres",
    imagen: "citas00009.png",
    id: 9
  },
  {
    nombre: "Jose Luiz Martinez Torres",
    imagen: "citas00010.png",
    id: 10
  },


]


function CitasCarousel() {


  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction:false ,  })
  )


  return (
    <div className="m-3 flex items-center justify-center rounded-xl">
      <Carousel
      opts={{
        loop: true,
      }}
        plugins={[plugin.current]}
        className="w-full max-w-lg "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>

          {personasConCitas.map((persona) => (
            <CarouselItem key={persona.id}>
              <div className="p-1">
                <Card style={{
                  background: `url(/images/citasbiometrics2/${persona.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "0.5rem",
            
                }}>
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <span className=" font-semibold bg-primary text-primary-foreground p-2 rounded-xl mt-24 text-center ">
                      Felicitamos a {persona.nombre}  que ya tiene su cita con inmigracion
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CitasCarousel