import { getUnaAplicacion } from "@/utils/actions";
import { formatDate } from "@/utils/format";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MiAplicacion = async () => {

  const application = await getUnaAplicacion();

  if (!application) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">No hay aplicaciones</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-background dark:to-muted flex items-center justify-center p-4 md:p-6">
      <Card className="shadow-2xl border border-border rounded-xl max-w-xl w-full bg-card dark:bg-card">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-center text-3xl sm:text-4xl font-bold text-primary dark:text-primary-foreground">
            Tu Aplicación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-4 sm:p-6 border m-2 sm:m-3 rounded-xl">
          {/* Información Personal */}
          <div className="space-y-4 text-base sm:text-lg text-foreground dark:text-card-foreground">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Información Personal</h2>
            <div className="grid gap-2 sm:gap-4">
              <InfoRow label="Nombre" value={`${application.applicantLegalFirstName} ${application.applicantLegalMiddleName} ${application.applicantLegalLastName}`} />
              <InfoRow label="Fecha de Nacimiento" value={formatDate(application.applicantDOB)} icon={<CalendarIcon className="ml-2 text-muted-foreground w-4 sm:w-5 h-4 sm:h-5" />} />
              <InfoRow label="Dirección" value={application.addressFisical} />
              <InfoRow label="Teléfono" value={application.phone} />
              <InfoRow label="Email" value={application.email} />
              <InfoRow label="País de Nacimiento" value={application.paisNacimiento} />
              <InfoRow label="Sexo" value={application.sexo} />
              <InfoRow label="Origen étnico" value={application.etnicity} />
              <InfoRow label="Raza" value={application.race} />
              {application.dateOfMarriage && (
                <InfoRow label="Fecha de Matrimonio" value={formatDate(application.dateOfMarriage)} icon={<CalendarIcon className="ml-2 text-muted-foreground w-4 sm:w-5 h-4 sm:h-5" />} />
              )}
              <InfoRow label="Esposo Ciudadano" value={`${application.spouseThatIsCitizenLegalFirstName} ${application.spouseThatIsCitizenLegalMiddleName} ${application.spouseThatIsCitizenLegalLastName}`} />
              <InfoRow label="Fecha de Nacimiento del Esposo/a" value={formatDate(application.spouseThatIsCitizenDOB)} icon={<CalendarIcon className="ml-2 text-muted-foreground w-4 sm:w-5 h-4 sm:h-5" />} />
              {application.applicantWhenArrivedToUS && (
                <InfoRow label="Fecha de Llegada a EE.UU." value={formatDate(application.applicantWhenArrivedToUS)} icon={<CalendarIcon className="ml-2 text-muted-foreground w-4 sm:w-5 h-4 sm:h-5" />} />
              )}
              {(application.esSpouse || !application.esStepchild) ? (
                <InfoRow label="Casado con Ciudadano" value={<Badge variant={'outline'}>Sí</Badge>} />
              ) : (
                <InfoRow label="Hijastro de un Ciudadano" value={<Badge variant={'outline'}>Sí</Badge>} />
              )}
            </div>
          </div>

          <hr className="my-4 sm:my-6 border-gray-300 dark:border-gray-700" />

          {/* Historial Criminal */}
          <div className="space-y-4 text-base sm:text-lg text-foreground dark:text-card-foreground">
            <h2 className="text-xl sm:text-2xl font-semibold text-red-600">Historial Criminal</h2>
            <InfoRow label="Deportado Anteriormente" value={<Badge variant={application.applicantHasBeenDeported ? 'destructive' : 'outline'}>{application.applicantHasBeenDeported ? 'Sí' : 'No'}</Badge>} />
            <InfoRow label="Arrestos en Estados Unidos" value={<Badge variant={application.applicantHasArrests ? 'destructive' : 'outline'}>{application.applicantHasArrests ? 'Sí' : 'No'}</Badge>} />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center my-4 sm:my-8 space-y-4 sm:space-y-0 sm:flex-row sm:justify-around">
          <Button variant="outline" className="w-full sm:w-auto">
            <Link href="/preAplicacion/editar">Editar</Link>
          </Button>
          <Button className="w-full sm:w-auto">
            <Link href="/resultado">Procesar</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Componente para filas de información
const InfoRow = ({ label, value, icon = null }: { label: string, value: React.ReactNode, icon?: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-2 sm:pb-3 mb-2 sm:mb-3">
    <strong className="sm:w-1/3 text-gray-700 dark:text-gray-300">{label}:</strong>
    <div className="flex items-center sm:w-2/3">
      <span className="text-gray-800 dark:text-white">{value}</span>
      {icon}
    </div>
  </div>
);

export default MiAplicacion;