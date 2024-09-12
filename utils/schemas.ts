import * as z from 'zod'
import { ZodSchema } from 'zod'

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data)

  console.log(result.error)
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message)

    throw new Error(errors.join(', '))

  }
  return result.data
}




export const profileSchema = z.object({

  nombre:
    z.string()
      .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
      .max(50, { message: 'El nombre debe tener menos de 50 caracteres.' }),

  apellido:
    z.string()
      .min(2, { message: 'El apellido debe tener al menos 2 caracteres.' })
      .max(50, { message: 'El apellido debe tener menos de 50 caracteres.' }),

  telefono:
    z
      .string()
      .transform((val) => val.replace(/\D/g, '')) // Removes all non-numeric characters
      .refine((val) => /^[0-9]{10}$/.test(val), { // Ensures exactly 10 digits
        message: 'telefono debe tener 10 dígitos exactamente. Ejemplo: 123-456-7890',
      }),

  email:
    z.string()
      .email({ message: ' El email debe ser en este formato Ejemplo:  Jose@gmail.com ' }),


})




function validateFile() {

  const maxUploadSize = 1024 * 1024 * 6 // 6 MB
  const acceptedFileTypes = ['image/']
  // let filename = ''
  return z
    .instanceof(File)
    .refine((file) => {

      // console.log(file)
      return !file || file.size <= maxUploadSize
    }, ((file) => ({
      message: `Imagen:  "${file.name}" debe ser de menos de  6 MB,  `,
    }

    )))
    .refine((file) => {

      return (

        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      )
    }, 'File must be an image')
}

export const imageSchema = z.object({
  // image: validateFile()
  imagen1: z.optional(validateFile()),
  imagen2: z.optional(validateFile()),
  imagen3: z.optional(validateFile()),
  imagen4: z.optional(validateFile()),
  imagen5: z.optional(validateFile()),
  imagen6: z.optional(validateFile()),
})