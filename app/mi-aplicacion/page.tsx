

import { getUnaAplicacion } from "@/utils/actions";
import { formatDate } from "@/utils/format";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MiAplicacion = async () => {

  const application = await getUnaAplicacion();

  console.log(application);

  if (!application) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">No hay aplicaciones</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-background dark:to-muted flex items-center justify-center p-6">
      <Card className="shadow-2xl border border-border rounded-xl max-w-xl w-full bg-card dark:bg-card">
        <CardHeader className="">
          <CardTitle className="text-center text-4xl font-bold text-primary dark:text-primary-foreground">Tu Aplicación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6 border m-3 rounded-xl">
          <div className="space-y-4 text-lg text-foreground dark:text-card-foreground">
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Nombre: </strong>
              <span className="block sm:inline">{application.applicantLegalFirstName} {application.applicantLegalMiddleName} {application.applicantLegalLastName}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Fecha de Nacimiento: </strong>
              <div className="flex items-center">
                <span>{formatDate(application.applicantDOB)}</span>
                <CalendarIcon className="ml-2 text-muted-foreground w-5 h-5" />
              </div>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Dirección: </strong>
              <span className="block sm:inline">{application.addressFisical}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Teléfono: </strong>
              <span className="block sm:inline">{application.phone}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Email: </strong>
              <span className="block sm:inline">{application.email}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>País de Nacimiento: </strong>
              <span className="block sm:inline">{application.paisNacimiento}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Sexo: </strong>
              <span className="block sm:inline">{application.sexo}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Origen étnico: </strong>
              <span className="block sm:inline">{application.etnicity}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Raza: </strong>
              <span className="block sm:inline">{application.race}</span>
            </div>
            {application.dateOfMarriage && (
              <div className="block sm:flex sm:items-center sm:justify-between">
                <strong>Fecha de Matrimonio: </strong>
                <div className="flex items-center">
                  <span>{formatDate(application.dateOfMarriage)}</span>
                  <CalendarIcon className="ml-2 text-muted-foreground w-5 h-5" />
                </div>
              </div>
            )}


            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Esposo Ciudadano: </strong>
              <span className="block sm:inline">{application.spouseThatIsCitizenLegalFirstName} {application.spouseThatIsCitizenLegalMiddleName} {application.spouseThatIsCitizenLegalLastName}</span>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Fecha de Nacimiento del Esposo/a: </strong>
              <div className="flex items-center">
                <span>{formatDate(application.spouseThatIsCitizenDOB)}</span>
                <CalendarIcon className="ml-2 text-muted-foreground w-5 h-5" />
              </div>
            </div>
            {application.applicantWhenArrivedToUS && (
              <div className="block sm:flex sm:items-center sm:justify-between">
                <strong>Fecha de Llegada a EE.UU.: </strong>
                <div className="flex items-center">
                  <span>{formatDate(application.applicantWhenArrivedToUS)}</span>
                  <CalendarIcon className="ml-2 text-muted-foreground w-5 h-5" />
                </div>
              </div>
            )}

            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Casado con Ciudadano: </strong>
              <Badge variant="destructive" className="bg-destructive/20 text-destructive">{application.esSpouse ? 'Sí' : 'No'}</Badge>
            </div>

            {application.esSpouse === false && (
              <div className="block sm:flex sm:items-center sm:justify-between">
                <strong>Hijastro de un  Ciudadano: </strong>
                <Badge variant="destructive" className="bg-destructive/20 text-destructive">{application.esSpouse ? 'Sí' : 'No'}</Badge>
              </div>
            )}


            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Deportado Anteriormente: </strong>
              <Badge variant="destructive" className="bg-destructive/20 text-destructive">{application.applicantHasBeenDeported ? 'Sí' : 'No'}</Badge>
            </div>
            <div className="block sm:flex sm:items-center sm:justify-between">
              <strong>Arrestos: </strong>
              <Badge variant="outline" className="bg-muted text-muted-foreground">{application.applicantHasArrests ? 'Sí' : 'No'}</Badge>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col my-8">

          <div className="flex justify-around items-center mt-4  w-full">
            <Button variant="outline">Editar</Button>
            <Button>
              <Link href="/resultado">Procesar</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MiAplicacion;