import { SubmitButton } from "@/components/myComponents/form/Buttons"
import FormContainer from "@/components/myComponents/form/FormContainer"
import FormInput from "@/components/myComponents/form/FormInput"
import ImageInputContainer from "@/components/myComponents/form/ImageInputContainer copy"

import { fetchProfile,
  updateProfileAction,
  updateProfileImageAction

  // fetchProfileImage,  
} from "@/utils/actions"

const PerfilPage = async () => {
  const perfil = await fetchProfile()

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>Perfil Usuario</h1>
      <div className='border p-8 rounded-md'>
        {/* image input container */}



<ImageInputContainer
          isProfile={true}
          multipleImages={false}
          inputName={'imagenPerfil'}
          image={perfil.imagenPerfil}
          name={perfil.nombre}
          action={updateProfileImageAction}
          text='Actualizar imagen'
        />

        <FormContainer action={updateProfileAction}>
          <div className='grid gap-4 md:grid-cols-2 mt-4 '>


            <FormInput type='text' name='nombre' label='nombre' defaultValue={perfil.nombre} />
            <FormInput type='text' name='apellido' label='apellido' defaultValue={perfil.apellido} />
  
      
            <FormInput type='tel' name='telefono' label='telefono (De Estados Unidos)' 
            defaultValue={perfil.telefono} />
{/* 
            <FormInput type='text' name='email' label='email'
                      defaultValue={perfil.email}  /> */}

          </div>
          <SubmitButton text='Actualizar Perfil' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )

}
export default PerfilPage