
'use client'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ListType = {
  name: string,
}


const FormSelect = ({ name, label, list, defaultValue }: { name: string, label?: string, list: ListType[], defaultValue?: string }) => {



  return (
    <div className='mb-2'>
      <Label className='capitalize'>
        {label || name}
      </Label>
      <Select
        defaultValue={defaultValue}
        name={name}
        required

      >
        <SelectTrigger id={name} className="mt-1 ">
          <SelectValue placeholder={`Selecciona una ${name}`} />
        </SelectTrigger>
        <SelectContent >


          {list.map((item: ListType) => {

   
            return (
              <SelectItem key={item.name} value={item.name}>
                <span className=' flex items-center justify-around gap-12 '>
                  {item.name}

                </span>
              </SelectItem>
            )
          })}
        </SelectContent>

      </Select>
    </div>
  )
}
export default FormSelect