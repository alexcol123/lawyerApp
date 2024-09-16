import { getUnaAplicacion } from "@/utils/actions"
import { formatDate } from "@/utils/format"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { CalendarIcon } from "lucide-react";




const MiAplicacion = async () => {

  const application = await getUnaAplicacion()
  console.log(application)

  if (!application) return <div>No hay aplicaciones</div>

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="shadow-lg max-w-xl w-full">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">Información de tu Aplicación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-lg">
            <div><strong>Nombre: </strong>{application.applicantLegalFirstName} {application.applicantLegalMiddleName} {application.applicantLegalLastName}</div>
            <div className="flex items-center">
              <strong>Fecha de Nacimiento: </strong>
              <span className="ml-2">{formatDate(application.applicantDOB)}</span>
              <CalendarIcon className="ml-1 text-gray-500 w-4 h-4" />
            </div>
            <div><strong>Dirección: </strong>{application.addressFisical}</div>
            <div><strong>Teléfono: </strong>{application.phone}</div>
            <div><strong>Email: </strong>{application.email}</div>
            <div><strong>País de Nacimiento: </strong>{application.paisNacimiento}</div>
            <div><strong>Sexo: </strong>{application.sexo}</div>
            <div><strong>Origen étnico: </strong>{application.etnicity}</div>
            <div><strong>Raza: </strong>{application.race}</div>
            {application.dateOfMarriage && (
              <div className="flex items-center">
                <strong>Fecha de Matrimonio: </strong>
                <span className="ml-2">{formatDate(application.dateOfMarriage)}</span>
                <CalendarIcon className="ml-1 text-gray-500 w-4 h-4" />
              </div>
            )}
            <div><strong>Esposo Ciudadano: </strong>{application.spouseThatIsCitizenLegalFirstName} {application.spouseThatIsCitizenLegalMiddleName} {application.spouseThatIsCitizenLegalLastName}</div>
            <div className="flex items-center">
              <strong>Fecha de Nacimiento del Esposo/a: </strong>
              <span className="ml-2">{formatDate(application.spouseThatIsCitizenDOB)}</span>
              <CalendarIcon className="ml-1 text-gray-500 w-4 h-4" />
            </div>
            {application.applicantWhenArrivedToUS && (
              <div className="flex items-center">
                <strong>Fecha de Llegada a EE.UU.: </strong>
                <span className="ml-2">{formatDate(application.applicantWhenArrivedToUS)}</span>
                <CalendarIcon className="ml-1 text-gray-500 w-4 h-4" />
              </div>
            )}
            <div><strong>Deportado Anteriormente: </strong><Badge>{application.applicantHasBeenDeported ? 'Sí' : 'No'}</Badge></div>
            <div><strong>Arrestos: </strong><Badge>{application.applicantHasArrests ? 'Sí' : 'No'}</Badge></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default MiAplicacion


// const MiAplicacion = async () => {

//   const application = await getUnaAplicacion()
//   console.log(application)

//   if (!application) return <div>No hay aplicaciones</div>


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
//         <h1 className="text-2xl font-bold mb-4">Información de la Aplicación</h1>
//         <div className="space-y-2">
//           <div><strong>Nombre: </strong>{application.applicantLegalFirstName} {application.applicantLegalMiddleName} {application.applicantLegalLastName}</div>
//           <div><strong>Fecha de Nacimiento: </strong>{formatDate(application.applicantDOB)}</div>
//           <div><strong>Dirección: </strong>{application.addressFisical}</div>
//           <div><strong>Teléfono: </strong>{application.phone}</div>
//           <div><strong>Email: </strong>{application.email}</div>
//           <div><strong>País de Nacimiento: </strong>{application.paisNacimiento}</div>
//           <div><strong>Sexo: </strong>{application.sexo}</div>
//           <div><strong>Origen étnico: </strong>{application.etnicity}</div>
//           <div><strong>Raza: </strong>{application.race}</div>
//           {application.dateOfMarriage && <div><strong>Fecha de Matrimonio: </strong>{formatDate(application.dateOfMarriage)}</div>}
//           <div><strong>Esposo Ciudadano: </strong>{application.spouseThatIsCitizenLegalFirstName} {application.spouseThatIsCitizenLegalMiddleName} {application.spouseThatIsCitizenLegalLastName}</div>
//           <div><strong>Fecha de Nacimiento del Esposo/a: </strong>{formatDate(application.spouseThatIsCitizenDOB)}</div>

//           {application.applicantWhenArrivedToUS && <div><strong>Fecha de Llegada a EE.UU.: </strong>{formatDate(application.applicantWhenArrivedToUS)}</div>}


//           {/* <div><strong>Fecha de Llegada a EE.UU.: </strong>{application.applicantWhenArrivedToUS}</div> */}
//           <div><strong>Deportado Anteriormente: </strong>{application.applicantHasBeenDeported ? 'Sí' : 'No'}</div>
//           <div><strong>Arrestos: </strong>{application.applicantHasArrests ? 'Sí' : 'No'}</div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default MiAplicacion

