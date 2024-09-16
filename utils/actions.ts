'use server'


import db from './db'
import { imageSchema, preAplicacionSchema, profileSchema, validateWithZodSchema } from './schemas'
import { clerkClient, currentUser } from '@clerk/nextjs/server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { uploadImage } from './supabase'



const renderError = (error: unknown): { message: string } => {
  console.log(error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  }
}

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error('You must be logged in to access this route')
  }

  if (!user.privateMetadata.tienePerfil) {
    redirect('/perfil/crear')
  }

  return user
}


export const createProfileAction = async (
  prevState: null,
  formData: FormData
) => {
  try {

    const user = await currentUser()

    if (!user) throw new Error('Please login to create a perfil')

    const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(profileSchema, rawData)
    console.log(validatedFields)


    await db.perfil.create({
      data: {
        clerkId: user.id,
        emailAtSignup: user.emailAddresses[0].emailAddress,
        imagenPerfil: user.imageUrl ?? '',
        ...validatedFields,
      },
    })

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        tienePerfil: true,
      },
    })



  } catch (error) {
    console.log(error)
    return renderError(error)
  }

  redirect('/aplicacion')
}



export const fetchProfile = async () => {
  const user = await getAuthUser()

  const perfil = await db.perfil.findUnique({
    where: {
      clerkId: user.id,
    },
  })
  if (!perfil) return redirect('/perfil/crear')
  return perfil
}


export const updateProfileAction = async (
  prevState: null,
  formData: FormData
): Promise<{ message: string }> => {


  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)

    const validatedFileds = profileSchema.parse(rawData)

    await db.perfil.update({
      where: { clerkId: user.id },
      data: validatedFileds,
    })

    revalidatePath('/perfil')
    return { message: 'Profile actualizado exitasamente' }

  } catch (error) {

    return renderError(error)
  }
}


export const updateProfileImageAction = async (
  prevState: null,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()

  try {
    const imagen1 = formData.get('imagen1') as File
    //  const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(imageSchema, { imagen1 })

    if (!validatedFields.imagen1) {
      throw new Error('No image found')
    }


    const fullPath = await uploadImage(validatedFields.imagen1)

    await db.perfil.update({
      where: {
        clerkId: user.id,
      },
      data: {
        imagenPerfil: fullPath,
      },
    })
    revalidatePath('/perfil')
    return { message: 'Imagen de perfil actualizada' }
  } catch (error) {
    return renderError(error)
  }
}


export const fetchProfileImage = async () => {

  const user = await currentUser()
  if (!user) return null

  const perfil = await db.perfil.findUnique({
    where: { clerkId: user.id },
    select: { imagenPerfil: true },
  })

  if (!perfil) return null

  return perfil?.imagenPerfil

}


export const crearPreAplicacion = async (prevState: null, formData: FormData) => {
  const user = await getAuthUser()


  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(preAplicacionSchema, rawData)

    const alreadyExists = await db.preAplicacion.findFirst({
      where: {
        perfilId: user.id,
      },
    })

    if (alreadyExists) {
      return { message: 'Ya has completado una aplicacion' }
    }

    await db.preAplicacion.create({
      data: {
        ...validatedFields,
        perfilId: user.id,
      },
    })


  } catch (error) {
    return renderError(error)
  }

  redirect('/mi-aplicacion')
}

export const getUnaAplicacion = async () => {
  const user = await getAuthUser()

  const aplicacion = await db.preAplicacion.findFirst({
    where: {
      perfilId: user.id,
    },
  })

  return aplicacion
}
