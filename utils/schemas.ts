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


// model Aplicacion {
//   id String @id @default(uuid())

//   // Bellow email is the once used to signup with clerk
//   // esSpouse    Boolean @default(true)
//   // esStepchild Boolean @default(false)

//   applicantLegalName String

//   applicantLegalNameotherNames String?
//   applicantDOB                 DateTime?

//   addressFisical String
//   addressMailing String?

//   phone String
//   email String?

//   paisNacimiento   String?
//   paisDeCiudadania String?

//   sexo     String
//   etnicity String // 1. Hispanic or Latino 2. Not Hispanic or Latino

//   race String // 1.American Indian or Alaska Native 2. Asian 3. Black or African American 4. Native Hawaiian or Other Pacific Islander 5. White

//   height    String?
//   weight    String?
//   eyeColor  String?
//   hairColor String?

//   dateOfMarriage DateTime?

//   aNumber   String?
//   ssnNumber String?
//   haveI94   Boolean?

//   spouseThatIsCitizenFullName String?
//   spouseThatIsCitizenDOB      String?
//   spouseThatIsCitizenSSN      String?

//   applicantSSN String?

//   applicantWhenArrivedToUS DateTime?

//   applicantHasBeenDeported            Boolean @default(false)
//   applicantHasBeenDeportationOrder    Boolean @default(false)
//   applicantHasArrests                 Boolean @default(false)
//   applicantHasArrestsInOtherCountries Boolean @default(false)
//   applicantIsInvolvedInCrimes         Boolean @default(false)

//   // voy aqui

//   applicantHsFiledI601a       Boolean   @default(false)
//   applicantHsFiledI601aNumber DateTime?

//   applicantCartaDeApprovacion String? // Carta de aprovacion de I-130 750 characteres or more

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   Perfil   Perfil @relation(fields: [perfilId], references: [clerkId])
//   perfilId String
// }




export const preAplicacionSchema = z.object({

  applicantLegalFirstName:
    z.string()
      .min(2, { message: 'El Nombre es requrido y debe tener al menos 2 caracteres.' })
      .max(70, { message: 'El Nombre es requrido y debe tener al maximo de 70 caracteres' }),

  applicantLegalMiddleName:
    z.string().optional(),


  applicantLegalLastName:
    z.string()
      .min(2, { message: 'El Apellido es requrido y debe tener al menos 2 caracteres.' })
      .max(70, { message: 'El Apellido es requrido y debe tener al maximo de 70 caracteres' }),

  applicantDOB:
    z.coerce.date({ message: 'Fecha de Nacimiento es requerida' }),


  addressFisical:
    z.string({ message: 'La dirección es requerida' }),

  phone:
    z.string()
      .transform((val) => val.replace(/\D/g, '')) // Removes all non-numeric characters
      .refine((val) => /^[0-9]{10}$/.test(val), { // Ensures exactly 10 digits
        message: 'telefono debe tener 10 dígitos exactamente. Ejemplo: 718-888-8888',
      }),

  email:
    z.string()
      .email({ message: ' El email debe ser en este formato Ejemplo: maria@gmail.com ' }),

  paisNacimiento:
    z.string({ message: 'El país de nacimiento es requerido' }),

  sexo:
    z.string({ message: 'El sexo debe ser Masculino, Femenino o Prefiero no decir' }),

  etnicity:
    z.string({ message: 'El grupo étnico debe ser Hispanic or Latino o No soy hispano o latino' }),

  race:
    z.string({ message: 'La raza es requerida' }),


  dateOfMarriage: z.coerce.date({ message: 'Fecha de Matrimonio es requerida' }),

  esSpouse: z.coerce.boolean().optional(),
  esStepchild: z.coerce.boolean().optional(),


  spouseThatIsCitizenLegalFirstName: z.string(),
  spouseThatIsCitizenLegalMiddleName: z.string().optional(),
  spouseThatIsCitizenLegalLastName: z.string(),

  spouseThatIsCitizenDOB: z.coerce.date({ message: 'Fecha de Nacimiento del Esposo/a es requerido' }),

  applicantWhenArrivedToUS:
    z.coerce.date({ message: 'Fecha de Llegada a los Estados Unidos, es requerida' }),

  applicantHasBeenDeported: z.coerce.boolean().optional(),

  applicantHasArrests: z.coerce.boolean().optional(),
  applicantHasArrestsInOtherCountries: z.coerce.boolean().optional(),

  applicantOtherInfo: z.string().optional(),

})








// export const aplicacionSchema = z.object({

//   applicantLegalName:
//     z.string()
//       .min(2, { message: 'El nombre y apellido debe tener al menos 2 caracteres.' })
//       .max(70, { message: 'El nombre y apellido debe tener al maximo de 70 caracteres' }),

//   applicantLegalNameotherNames:
//     z.string()
//       .min(2, { message: 'El nombre y apellido debe tener al menos 2 caracteres.' })
//       .max(70, { message: 'El nombre y apellido debe tener al maximo de 70 caracteres' }).optional(),

//   applicantDOB:
//     z.string().date().refine((val) => {
//       const date = new Date(val)
//       return date < new Date()
//     }, 'Fecha de Nacimiento es requerida, y no puede ser en el futuro'),

//   addressFisical:
//     z.string()
//       .min(2, { message: 'La dirección debe tener al menos 2 caracteres.' })
//       .max(50, { message: 'La dirección debe tener menos de 50 caracteres.' }),

//   addressMailing:
//     z.string()
//       .min(2, { message: 'La dirección debe tener al menos 2 caracteres.' })
//       .max(50, { message: 'La dirección debe tener menos de 50 caracteres.' }),

//   phone:
//     z
//       .string()
//       .transform((val) => val.replace(/\D/g, '')) // Removes all non-numeric characters
//       .refine((val) => /^[0-9]{10}$/.test(val), { // Ensures exactly 10 digits
//         message: 'telefono debe tener 10 dígitos exactamente. Ejemplo: 123-456-7890',
//       }),

//   email:
//     z.string()
//       .email({ message: ' El email debe ser en este formato Ejemplo: maria@gmail.com ' }),

//   paisNacimiento:
//     z.string()
//       .min(2, { message: 'El país de nacimiento debe tener al menos 2 caracteres.' })
//       .max(50, { message: 'El país de nacimiento debe tener menos de 50 caracteres.' })
//       .optional(),  // 1. Hispanic or Latino 2. Not Hispanic or Latino

//   paisDeCiudadania:
//     z.string()
//       .min(2, { message: 'El país de ciudadanía debe tener al menos 2 caracteres.' })
//       .max(50, { message: 'El país de ciudadanía debe tener menos de 50 caracteres.' })
//       .optional(),  // 1. Hispanic or Latino 2. Not Hispanic or Latino

//   sexo:
//     z.string({ message: 'El sexo debe ser Masculino, Femenino o Prefiero no decir' }),

//   etnicity:
//     z.string({ message: 'El grupo étnico debe ser Hispanic or Latino o No soy hispano o latino' }),

//   race:
//     z.string({ message: 'La raza es requerida' }),

//   height: z.string().optional(),
//   weight: z.string().optional(),
//   eyeColor: z.string().optional(),
//   hairColor: z.string().optional(),

//   dateOfMarriage: z.string().date().refine((val) => {
//     const date = new Date(val)
//     return date < new Date()
//   }, 'Fecha en que se caso es requerida, y no puede ser en el futuro'),


//   aNumber: z.string().optional(),
//   ssnNumber: z.string().optional(),
//   haveI94: z.coerce.boolean().optional(),  

//   spouseThatIsCitizenFullName: z.string().optional(),
//   spouseThatIsCitizenDOB: z.string().date().refine((val) => {
//     const date = new Date(val)
//     return date < new Date()
//   }, 'Fecha de Nacimiento del Esposo/a es requerido'),

//   spouseThatIsCitizenSSN: z.string().optional(),

//   applicantSSN: z.string().optional(),
//   applicnatWhenArrivedToUS:
//     z.string().date().refine((val) => {
//       const date = new Date(val)
//       return date < new Date()
//     }, 'Fecha de llegada a Estados Unidos es requerida, y no puede ser en el futuro'),

//   applicantHasBeenDeported: z.coerce.boolean().optional(),  
//   applicantHasBeenDeportationOrder: z.coerce.boolean().optional(),  
//   applicantHasArrests: z.coerce.boolean().optional(),  
//   applicantHasArrestsInOtherCountries: z.coerce.boolean().optional(),  
//   applicantIsInvolvedInCrimes: z.coerce.boolean().optional(),  

//   applicantHsFiledI601a: z.coerce.boolean().optional(),  
//   applicantHsFiledI601aNumber: z.string().date().optional(),

//   applicantCartaDeApprovacion: z.string().optional(),



// })

