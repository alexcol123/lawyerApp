"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

interface FormCheckBoxProps {
  name: string;
  texto: string;
  checked?: boolean;
  onChange?: (newValue: boolean) => void; // Agregamos un callback para manejar el cambio
}

const FormCheckBox = ({ name, texto, checked = false, onChange }: FormCheckBoxProps) => {
  const [valor, setValor] = useState(checked);

  // Sincroniza el estado interno con el valor del prop `checked` inicial
  useEffect(() => {
    setValor(checked);
  }, [checked]);

  console.log(valor)

  const handleCheckedChange = (newChecked: boolean) => {
    setValor(newChecked);
    if (onChange) {
      onChange(newChecked); // Llama al callback con el nuevo valor
    }
  };

  return (
    <div className="flex items-center mb-3">
      <Checkbox
        id={name}
        name={name}
        checked={valor}
        onCheckedChange={handleCheckedChange}
        value={valor.toString()}
      />
      <label
        htmlFor={name}
        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {texto}
      </label>
    </div>
  );
};

export default FormCheckBox