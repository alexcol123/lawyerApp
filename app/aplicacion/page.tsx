import { SubmitButton } from "@/components/myComponents/form/Buttons";
import FormCheckBox from "@/components/myComponents/form/FormCheckBox";
import FormContainer from "@/components/myComponents/form/FormContainer";
import FormInput from "@/components/myComponents/form/FormInput";
// import FormSelect from "@/components/myComponents/form/FormSelect";
import { Separator } from "@/components/ui/separator";

import { crearPreAplicacion, fetchProfile } from "@/utils/actions";
import { redirect } from "next/navigation";


const AplicacionPage = async () => {

  const perfil = await fetchProfile()

  if (!perfil) return redirect('/perfil/crear')

  return (
    <div>


      <div className="border rounded-xl mt-14 p-4">


        {/* <div className="mb-20 bg-muted p-3">

          <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
            ¡Pre-Aplicación Simplificada!
          </h3>

          <h5 className="text-lg font-medium text-gray-700 text-center mb-4">
            Completa el formulario con tu información básica y descubre si calificas para la I-131F (Programa Manteniendo Familias Unidas).
          </h5>

          <h5 className="text-lg font-medium text-gray-700 text-center">
            Obtén una respuesta en menos de <span className="text-blue-600 font-semibold">4 minutos</span>.
          </h5>
        </div> */}


        <div className="mb-20 bg-muted p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
            ¡Pre-Aplicación Simplificada!
          </h3>

          <h5 className="text-lg font-medium text-gray-700 text-center mb-4">
            Estás a un paso de cambiar tu vida. Completa el formulario con tu información básica y descubre si calificas para la I-131F (Programa Manteniendo Familias Unidas).
          </h5>

          <h5 className="text-xl font-semibold text-blue-600  text-center">
            Respuesta inmediata.
          </h5>
        </div>

        <FormContainer action={crearPreAplicacion}>
          <h1 className="text-primary font-semibold my-3">Información del Aplicante</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4 items-center justify-center">
            <FormInput
              name="applicantLegalFirstName"
              type="text"
              label="Nombre"
              placeholder="Ej: María"
              defaultValue={perfil?.nombre || ''}
            />

            {/* <FormInput
              name="applicantLegalMiddleName"
              type="text"
              required={false}
              label="Segundo Nombre (opcional)"
              placeholder="Ej: Isabel"
            /> */}

            <FormInput
              name="applicantLegalLastName"
              type="text"
              label="Apellido"
              placeholder="Ej: Morales"
              defaultValue={perfil?.apellido || ''}
            />

            {/* <FormInput
              name="applicantDOB"
              type="date"
              label="Fecha de Nacimiento"
              placeholder="Ej: 15-10-2005"
            /> */}

            <FormInput
              name="addressFisical"
              type="text"
              label="Dirección Física"
              placeholder="Ej: 7169 Harbor St, Orlando, FL 32835"
            />

            <FormInput
              name="phone"
              type="text"
              label="Teléfono"
              placeholder="Ej: 407-888-8888"
              defaultValue={perfil?.telefono || ''}
            />
            {/* 
            <FormInput
              name="email"
              type="email"
              label="Correo Electrónico"
              placeholder="Ej: jenny@yahoo.com"
            /> */}

            <FormInput
              name="paisNacimiento"
              type="text"
              label="País donde Naciciste"
              placeholder="México"
            />

            {/* <FormSelect
              name="sexo"
              label="Sexo"
              list={[
                { name: 'Masculino' },
                { name: 'Femenino' },
                { name: 'Prefiero no decir' }
              ]}
            /> */}

            {/* <FormSelect
              name="etnicity"
              label="Grupo Étnico"
              list={[
                { name: 'Hispano o Latino' },
                { name: 'No soy hispano o latino' },
              ]}
            /> */}

            {/* <FormSelect
              name="race"
              label="Raza"
              list={[
                { name: 'Indígena Americano o Nativo de Alaska' },
                { name: 'Asiático' },
                { name: 'Negro o Afroamericano' },
                { name: 'Nativo de Hawái u Otro Isleño del Pacífico' },
                { name: 'Blanco' },
              ]}
            /> */}

            <FormInput
              name="dateOfMarriage"
              type="date"
            label="Fecha en que te casaste con un Ciudadano Americano (Si no recuerdas, pon un aproximado)"
              placeholder="Ej: 15-10-2018"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="applicantWhenArrivedToUS"
              type="date"
            label="Fecha en que entraste a Estados Unidos (Si no recuerdas, pon un aproximado)"
              placeholder="Ej: 15-10-2005"
            />
          </div>

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Información Legal del Aplicante</h1>

          <div className="mb-8">
            <FormCheckBox name="esSpouse" texto="Marca si eres cónyuge (esposo/a) de un ciudadano americano" />
            <FormCheckBox name="esStepchild" texto="Marca si eres hijastro/a de un ciudadano americano" />
          </div>
          <FormCheckBox name="applicantHasBeenDeported" texto="Marca si has sido deportado de los Estados Unidos" />
          <FormCheckBox name="applicantHasArrests" texto="Marca si has tenido arrestos dentro de los Estados Unidos" />


          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Información de Tu Cónyuge que es Ciudadano Americano</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="spouseThatIsCitizenLegalFirstName"
              type="text"
              label="Nombre de tu Cónyuge "
              placeholder="Ej: James"
            />

            {/* <FormInput
              name="spouseThatIsCitizenLegalMiddleName"
              type="text"
              required={false}
              label="Segundo Nombre de tu Cónyuge (opcional)  "
              placeholder="Ej: Steven "
            /> */}

            <FormInput
              name="spouseThatIsCitizenLegalLastName"
              type="text"
              label="Apellido de tu Cónyuge (opcional) "
              placeholder="Ej: Smith"
            />

            {/* <FormInput
              name="spouseThatIsCitizenDOB"
              type="date"
              label="Fecha de Nacimiento de tu Cónyuge"
              placeholder="Ej: 15 de julio de 1980"
            /> */}
          </div>




          <div className="flex items-center justify-center w-full">
            <SubmitButton text="Submitir Aplicación" className="mt-12" />
          </div>
        </FormContainer>
      </div>
    </div>
  );
}

export default AplicacionPage;