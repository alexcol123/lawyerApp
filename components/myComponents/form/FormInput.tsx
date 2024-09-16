import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
}

function FormInput({
  label,
  name,
  type = 'text',
  defaultValue,
  placeholder,
  required = true,
}: FormInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize ml-1'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className='mt-1'
      />
    </div>
  )
}

export default FormInput