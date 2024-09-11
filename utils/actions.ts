'use server'



import { currentUser } from '@clerk/nextjs/server'
import db from './db'
// import { clerkClient, currentUser } from '@clerk/nextjs/server'
// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'





export const createProfileAction = async (
  // prevState: any,
  // formData: FormData
) => {
  console.log('createProfileAction')
}


export const fetchProfileImage = async () => {

  const user = await currentUser()
  if (!user) return null

  const perfil = await db.perfil.findFirst({
    where: { clerkId: user.id },
    select: { imagenPerfil: true },
  })

  return perfil?.imagenPerfil

}

