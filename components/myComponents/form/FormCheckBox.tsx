"use client"


import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"


const FormCheckBox = ({ name, texto }: { name: string, texto: string }) => {


  const [valor, setvalor] = useState(false)

  return (
    <div className="flex items-center mb-3">
      <Checkbox id={name}
        name={name}
        onCheckedChange={() => setvalor(!valor)}
        checked={valor}
        value={valor.toString()}



      />
      <label
        htmlFor={name}
        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {texto}
      </label>
    </div>

  )
}
export default FormCheckBox