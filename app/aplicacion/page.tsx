import { SubmitButton } from "@/components/myComponents/form/Buttons"
import FormCheckBox from "@/components/myComponents/form/FormCheckBox"
import FormContainer from "@/components/myComponents/form/FormContainer"
import FormInput from "@/components/myComponents/form/FormInput"
import FormSelect from "@/components/myComponents/form/FormSelect"
import { Separator } from "@/components/ui/separator"

import { crearAplicacion } from "@/utils/actions"



const ApplicacionPage = () => {
  return (
    <div>
      <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
        <div className=" flex flex-col gap-y-3  text-center ">
          <h1 className="text-center  text-2xl ">Bienvenido</h1>

          <h3 className="text-lg font-semibold">
            ¡Recuerda que estamos aqui para ayudarte si lo nececitas, solo entra la infomacion basica y nosotros asemos el resto.
            si vemos errores los corregimos y te enviamos una version perfecta en menos de 24 horas!
          </h3>

          <h3 className="text-lg font-semibold text-primary">
            ¡Empieza tu applicacion !
          </h3>
        </div>




      </div>



      <div className="border rounded-xl mt-14 p-4">
        <FormContainer action={crearAplicacion}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name="applicantLegalName"
              type='text'
              label="Nombres Apellidos"
              placeholder="Ex: Jose Alberto Reyes Moralsez "
            />

            <FormInput
              name="applicantLegalName"
              type='text'
              label="Nombres Apellidos"
              placeholder="Ex: Jose Alberto Reyes Moralsez "
            />

            <FormCheckBox name={'esSpouse'} texto={"Eres Conyuge de Un Ciudadano Americano ?"} />

            <FormCheckBox name={'esStepchild'} texto={"Eres Hijastro de Un Ciudadano Americano ?"} />


            <FormInput
              name="addressFisical"
              type='text'
              label="Direccion Fisica"
              placeholder="Ex: 4527 1/2  W  159th St, Lawndale, CA 90260"
            />

            <FormInput
              name="addressMailing"
              type='text'
              label="Direccion De Correo (Solo si es diferente a tu direccion fisica)"
              placeholder="Ex: 4527 1/2  W  159th St, Lawndale, CA 90260"
            />

            <FormInput
              name="phone"
              type='text'
              label="Telefono"
              placeholder="Ex: 310-644-0000"
            />

            <FormInput name="email" type='email' label="Correo Electronico" placeholder="Ex: Jenny@yahoo.com" />

            <FormSelect
              name={'sexo'} label={'sexo'}
              list={[
                { name: 'masculino' },
                { name: 'femenino' },
                { name: 'prefiero no decir' },
              ]}
            />


            <FormSelect
              name={'etnicity'} label={'Grupo Etnico'}
              list={[
                { name: 'Hispanic or Latino' },
                { name: 'No Soy Hispano o Latino' },
              ]}
            />


            <FormSelect
              name={'race'} label={'Raza'}
              list={[
                { name: 'American Indian or Alaska Native' },
                { name: 'Asian' },
                { name: 'Black or African American' },
                { name: 'Native Hawaiian or Other Pacific Islander' },
                { name: 'White' },
              ]}
            />



            <FormInput
              name="height"
              type='text'
              label="cuanto mides"
              placeholder="Ex: 1.80 metros "
            />

            <FormInput
              name="weight"
              type='text'
              label="cuanto pesas"
              placeholder="Ex: 149 libras "
            />

            <FormInput
              name="eyeColor"
              type='text'
              label="Color de Ojos"
              placeholder="Cafe "
            />

            <FormInput
              name="hairColor"
              type='text'
              label="Color de Ojos"
              placeholder="Negro "
            />

            <FormInput
              name="dateOfMarriage"
              type='text'
              label="Fecha que se caso con el ciudadano Americano"
              placeholder="Ex: Julio 15 2018 "
            />

            <Separator orientation='horizontal' className=' mb-6' />


            {/* <FormCheckBox name={'onSale'} texto={"On sale - En Especial ?"} /> */}


            {/* <FormTextAriaInput
          name="carta"
          labelText="Carta de Calificacion"
          placeholder=" Debe explicar cómo califica para la libertad condicional en el lugar como cónyuge no ciudadano o hijastro de un ciudadano estadounidense en el espacio provisto, incluyendo cualquier factor específico que respalde su solicitud o que pueda ser considerado para superar una presunción refutable de inelegibilidad." /> */}

          </div>

          <Separator orientation='horizontal' className=' my-6' />


          <div className='grid md:grid-cols-2 gap-8 mb-4'>



            <FormInput
              name="aNumber"
              type='text'
              label="Algunavez has tenido un numero de Caso con USCIS, si lo tiene ingreselo, si no lo tiene deje este espacio en blanco"
              placeholder="A-000-000-000 "
            />



            <FormInput
              name="ssnNumber"
              type='text'
              label="Algunavez has tenido un numero de Seguro Social, si lo tiene ingreselo, si no lo tiene deje este espacio en blanco"
              placeholder="081-81-8181"
            />


            <FormCheckBox name={'haveI94'} texto={"Haz click si Tienes un I-94, esto es un cello de entrada a los estados unidos ? No es necesario"} />


          </div>



          <Separator orientation='horizontal' className=' my-6' />

          <h1 className="text-primary font-semibold my-3">Informacion Del Ciudadano Americano</h1>

          <div className='grid md:grid-cols-2 gap-8 mb-4'>



            <FormInput
              name="spouseThatIsCitizenFullName"
              type='text'
              label="Nombres Apellidos de tu Conyuge Ciudadano Americano"
              placeholder="Ex: Michael James Smith "
            />


            <FormInput
              name="spouseThatIsCitizenDOB"
              type='text'
              label="Feca de Nacimiento de tu Conyuge Ciudadano Americano"
              placeholder="Ex: Michael James Smith "
            />


            <FormInput
              name="spouseThatIsCitizenSSN"
              type='text'
              label="Seguro Social de tu Conyuge Ciudadano Americano"
              placeholder="Ex: Michael James Smith "
            />


          </div>

          <SubmitButton text='Crear Applicacion' className='mt-12' />

        </FormContainer>

      </div>

      {/* Form section */}



    </div>






  )
}
export default ApplicacionPage