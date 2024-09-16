import { SubmitButton } from "@/components/myComponents/form/Buttons";
import FormCheckBox from "@/components/myComponents/form/FormCheckBox";
import FormContainer from "@/components/myComponents/form/FormContainer";
import FormInput from "@/components/myComponents/form/FormInput";
import FormSelect from "@/components/myComponents/form/FormSelect";
import FormTextAreaInput from "@/components/myComponents/form/FormTextAreaInput";
import { Separator } from "@/components/ui/separator";

import { crearPreAplicacion } from "@/utils/actions";

const AplicacionPage = () => {
  return (
    <div>
      <div className="bg-secondary text-secondary-foreground p-4 rounded-xl">
        <div className="flex flex-col gap-y-3 ">
          <h1 className="text-center text-2xl">Bienvenido</h1>

          <h3 className=" font-medium ">
            Esta es una pre-aplicación diseñada para determinar si calificas para la I-131F (Manteniendo Familias Unidas). Por favor, completa el formulario a continuación con tu información básica. Una vez que envíes el formulario, nuestros expertos legales lo revisarán de forma gratuita y con cuidado, y te informarán si cumples con los requisitos del programa.
          </h3>


        </div>
      </div>

      <div className="border rounded-xl mt-14 p-4">

        <h3 className="text-lg font-semibold text-primary text-center">
          ¡Aplicación!
        </h3>

        <FormContainer action={crearPreAplicacion}>
          <h1 className="text-primary font-semibold my-3">Información del Aplicante</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4 items-center justify-center">
            <FormInput
              name="applicantLegalFirstName"
              type="text"
              label="Nombre"
              placeholder="Ej: María"
            />

            <FormInput
              name="applicantLegalMiddleName"
              type="text"
              label="Segundo Nombre (Si tienes)"
              placeholder="Ej: Isabel"
            />

            <FormInput
              name="applicantLegalLastName"
              type="text"
              label="Apellido"
              placeholder="Ej: Morales"
            />

            <FormInput
              name="applicantDOB"
              type="date"
              label="Fecha de Nacimiento"
              placeholder="Ej: 15-10-2005"
            />

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
            />

            <FormInput
              name="email"
              type="email"
              label="Correo Electrónico"
              placeholder="Ej: jenny@yahoo.com"
            />

            <FormInput
              name="paisNacimiento"
              type="text"
              label="País de Nacimiento"
              placeholder="México"
            />

            <FormSelect
              name="sexo"
              label="Sexo"
              list={[
                { name: 'Masculino' },
                { name: 'Femenino' },
                { name: 'Prefiero no decir' }
              ]}
            />

            <FormSelect
              name="etnicity"
              label="Grupo Étnico"
              list={[
                { name: 'Hispano o Latino' },
                { name: 'No soy hispano o latino' },
              ]}
            />

            <FormSelect
              name="race"
              label="Raza"
              list={[
                { name: 'Indígena Americano o Nativo de Alaska' },
                { name: 'Asiático' },
                { name: 'Negro o Afroamericano' },
                { name: 'Nativo de Hawái u Otro Isleño del Pacífico' },
                { name: 'Blanco' },
              ]}
            />

            <FormInput
              name="dateOfMarriage"
              type="date"
              label="Fecha en que te casaste con el ciudadano americano"
              placeholder="Ej: 15-10-2018"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="applicantWhenArrivedToUS"
              type="date"
              label="Fecha en que llegaste a los Estados Unidos (Si no sabes, da una estimación)"
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
          <FormCheckBox name="applicantHasArrestsInOtherCountries" texto="Marca si has tenido arrestos en otros países" />

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Información del Ciudadano Americano</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="spouseThatIsCitizenFullName"
              type="text"
              label="Nombre Completo de tu Cónyuge Ciudadano Americano"
              placeholder="Ej: Michael James Smith"
            />

            <FormInput
              name="spouseThatIsCitizenDOB"
              type="date"
              label="Fecha de Nacimiento de tu Cónyuge Ciudadano Americano"
              placeholder="Ej: 15 de julio de 1980"
            />
          </div>

          <Separator orientation="horizontal" className="my-6" />

          <h1 className="text-primary font-semibold my-3">Carta de Explicación</h1>

          <FormTextAreaInput
            name="applicantOtherInfo"
            labelText="Carta de Explicación (No es requerida)"
            placeholder="Si tienes alguna información adicional que creas importante para tu aplicación, escríbela aquí. Por ejemplo, si tienes arrestos, enfermedades, si tu cónyuge ha fallecido, si tienes hijos menores, etc. Si no crees que haya nada, déjalo en blanco."
          />

          <div className="flex items-center justify-center w-full">
            <SubmitButton text="Submitir Aplicación" className="mt-12" />
          </div>
        </FormContainer>
      </div>
    </div>
  );
}

export default AplicacionPage;