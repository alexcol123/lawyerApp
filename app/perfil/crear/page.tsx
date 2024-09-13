import { SubmitButton } from "@/components/myComponents/form/Buttons"
import FormContainer from "@/components/myComponents/form/FormContainer"




import FormInput from "@/components/myComponents/form/FormInput"
import { createProfileAction } from "@/utils/actions"

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


async function CreateProfile() {

  const user = await currentUser();
  if (user?.privateMetadata?.tienePerfil) redirect('/aplicacion');

  return (
    <section className="w-full">
      <h1 className='text-2xl font-semibold mb-8 capitalize'>nuevo usuario ( Porfavor Completa tu perfil para continuar )</h1>
      <div className='border p-8 rounded-md '>
        <FormContainer action={createProfileAction}>
          <div className='grid gap-4 md:grid-cols-2 mt-4 '>
            <FormInput type='text' name='nombre' label='nombre' />
            <FormInput type='text' name='apellido' label='apellido' />
            <FormInput type='tel' name='telefono' label='telefono (De Estados Unidos)' />
            <FormInput type='text' name='email' label='email' />

          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}
export default CreateProfile