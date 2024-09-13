import { SubmitButton } from "@/components/myComponents/form/Buttons"
import FormCheckBox from "@/components/myComponents/form/FormCheckBox"
import FormContainer from "@/components/myComponents/form/FormContainer"
import FormInput from "@/components/myComponents/form/FormInput"
import FormSelect from "@/components/myComponents/form/FormSelect"
import FormTextAreaInput from "@/components/myComponents/form/FormTextAreaInput"
import { Separator } from "@/components/ui/separator"

import { crearAplicacion } from "@/utils/actions"





const AplicacionPage = () => {
  return (
    <div>
      <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
        <div className="flex flex-col gap-y-3 text-center">
          <h1 className="text-center text-2xl">Bienvenido</h1>

          <h3 className="text-lg font-semibold">
            ¡Recuerda que estamos aquí para ayudarte si lo necesitas, solo entra la información básica y nosotros hacemos el resto. Si vemos errores los corregimos y te enviamos una versión perfecta en menos de 24 horas!
          </h3>

          <h3 className="text-lg font-semibold text-primary">
            ¡Empieza tu aplicación!
          </h3>
        </div>
      </div>

      <div className="border rounded-xl mt-14 p-4">

        <FormContainer action={crearAplicacion}>

          <h1 className="text-primary font-semibold my-3">Informacion del applicante</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4 items-center justify-center">

            <FormInput
              name="applicantLegalName"
              type="text"
              label="Nombres Apellidos"
              placeholder="Ex: Maria Del Carmen Reyes Moralez"
            />

            <FormInput
              name="applicantLegalNameotherNames"
              type="text"
              label="Otros Nombres que ayas tenido, o cambios de nombre, o que uses para trabajar"
              placeholder="Ex: Maria Moralez"
            />


            <FormInput
              name="applicantDOB"
              type="date"
              label="Fecha de Nacimiento"
              placeholder="Ex: Julio 15 2018"
            />

            <FormInput
              name="addressFisical"
              type="text"
              label="Dirección Física"
              placeholder="Ex: 4527 1/2 W 159th St, Lawndale, CA 90260"
            />

            <FormInput
              name="addressMailing"
              type="text"
              label="Dirección de Correo (Solo si es diferente a tu dirección física)"
              placeholder="Ex: 4527 1/2 W 159th St, Lawndale, CA 90260"
            />

            <FormInput
              name="phone"
              type="text"
              label="Teléfono"
              placeholder="Ex: 310-644-0000"
            />

            <FormInput name="email" type="email" label="Correo Electrónico" placeholder="Ex: Jenny@yahoo.com" />

            <FormSelect
              name={'sexo'} label={'Sexo'}
              list={[
                { name: 'Masculino' },
                { name: 'Femenino' },
                { name: 'Prefiero no decir' },
              ]}
            />

            <FormSelect
              name={'etnicity'} label={'Grupo Étnico'}
              list={[
                { name: 'Hispanic or Latino' },
                { name: 'No soy hispano o latino' },
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
              type="text"
              label="¿Cuánto mides?"
              placeholder="Ex: 1.80 metros"
            />

            <FormInput
              name="weight"
              type="text"
              label="¿Cuánto pesas?"
              placeholder="Ex: 149 libras"
            />

            <FormInput
              name="eyeColor"
              type="text"
              label="Color de Ojos"
              placeholder="Café"
            />

            <FormInput
              name="hairColor"
              type="text"
              label="Color de Cabello"
              placeholder="Negro"
            />

            <FormInput
              name="dateOfMarriage"
              type="date"
              label="Fecha que se casó con el ciudadano americano"
              placeholder="Ex: Julio 15 2018"
            />
            <div>

            </div>

            <FormCheckBox name={'esSpouse'} texto={"¿Eres cónyuge de un ciudadano americano?"} />

            <FormCheckBox name={'esStepchild'} texto={"¿Eres hijastro de un ciudadano americano?"} />

          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="aNumber"
              type="text"
              label="¿Alguna vez has tenido un número de caso con USCIS? Si lo tienes, ingrésalo, si no lo tienes, deja este espacio en blanco"
              placeholder="A-000-000-000"
            />

            <FormInput
              name="ssnNumber"
              type="text"
              label="¿Alguna vez has tenido un número de Seguro Social? Si lo tienes, ingrésalo, si no lo tienes, deja este espacio en blanco"
              placeholder="081-81-8181"
            />

            <FormInput
              name="applicantSSN"
              type="text"
              label="Seguro Social de la persona que está aplicando. Si nunca has tenido uno, déjalo en blanco."
              placeholder="Ex: 081-81-8182"
            />

            <FormInput
              name="applicantWhenArrivedToUS"
              type="date"
              label="Fecha en que llegaste a los Estados Unidos (El Aplicante)"
              placeholder="Ex: 01-15-2005"
            />

            <FormCheckBox name={'haveI94'} texto={"Haz click si tienes un I-94, esto es un sello de entrada a los Estados Unidos. No es necesario."} />
          </div>

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Información Legal del Aplicante</h1>

          <FormCheckBox name={'applicantHasBeenDeported'} texto={"Haz click si has sido deportado de los Estados Unidos."} />

          <FormCheckBox name={'applicantHasBeenDeportationOrder'} texto={"Haz click si has tenido una orden de deportación de los Estados Unidos. (si no sabes, déjalo en blanco)"} />

          <FormCheckBox name={'applicantHasArrests'} texto={"Haz click solo si has tenido arrestos dentro de los Estados Unidos"} />

          <FormCheckBox name={'applicantHasArrestsInOtherCountries'} texto={"Haz click solo si has tenido arrestos en otros países"} />

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Información del Ciudadano Americano</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="spouseThatIsCitizenFullName"
              type="text"
              label="Nombres Apellidos de tu Cónyuge Ciudadano Americano"
              placeholder="Ex: Michael James Smith"
            />

            <FormInput
              name="spouseThatIsCitizenDOB"
              type="date"
              label="Fecha de Nacimiento de tu Cónyuge Ciudadano Americano"
              placeholder="Ex: Michael James Smith"
            />

            <FormInput
              name="spouseThatIsCitizenSSN"
              type="text"
              label="Seguro Social de tu Cónyuge Ciudadano Americano"
              placeholder="Ex: 081-81-8181"
            />
          </div>

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Carta de Explicación</h1>

          <FormTextAreaInput
            name={'applicantCartaDeApprovacion'}
            labelText={'Carta de Explicación'}
            placeholder={'Debes explicar cómo calificas para este programa. Solo incluye lo necesario, como que cuidas a tus niños o que trabajas y aportas a este país. No te preocupes, nuestros expertos la arreglarán y la traducirán por ti.'}
          />

          <SubmitButton text="Crear Aplicación" className="mt-12" />
        </FormContainer>
      </div>
    </div>
  );
}




export default AplicacionPage