import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { preguntasFrequentes } from "@/utils/preguntasFrequentes"


const Collapse = () => {
  return (



    <Accordion type="single" collapsible className="w-full">

      {preguntasFrequentes.map((item, index) => (
        <AccordionItem key={index} value={(index+1).toString()} >
          <AccordionTrigger className="font-semibold text-base text-left">{item.pregunta}</AccordionTrigger>
          <AccordionContent className="text-base px-2 ">
            {item.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))
      }


    </Accordion>
  )
}
export default Collapse
