import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type FormTextAreaInputProps = {
  name: string
  labelText?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
}


function FormTextAreaInput({ name, labelText, defaultValue, placeholder, required = true }: FormTextAreaInputProps) {

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        placeholder={placeholder}
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
         required={required}
        className='leading-loose mt-1'
      />
    </div>
  )
}


export default FormTextAreaInput

