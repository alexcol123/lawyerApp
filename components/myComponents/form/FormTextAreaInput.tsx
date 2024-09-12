import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type TextAreaInputProps = {
  name: string
  labelText?: string
  placeholder?: string
  defaultValue?: string
}


function TextAreaInput({ name, labelText, defaultValue, placeholder }: TextAreaInputProps) {

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
        required
        className='leading-loose mt-1'
      />
    </div>
  )
}


export default TextAreaInput


