
'use client'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const FormSelect = ({ name, label, list, isColor = false, defaultValue }: { name: string, label?: string, list: any, defaultValue?: any, isColor?: boolean }) => {



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


          {list.map((item: any) => {
            return (
              <SelectItem key={item.name} value={item.name}>
                <span className=' flex items-center justify-around gap-12 '>
                  {item.name}
                  {isColor && <div className="h-6 w-6 rounded-full border " style={{ backgroundColor: `${item.value}` }}>
                  </div>}
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