

// import { getUnaAplicacion } from "@/utils/actions";
// import { formatDate } from "@/utils/format";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";


// const VerResultado = async () => {

//   let rating = 0

//   //   applicantWhenArrivedToUS: 2015-02-15T00:00:00.000Z,
//   //   applicantHasBeenDeported: true,
//   //   applicantHasArrests: false,
//   //   applicantHasArrestsInOtherCountries: false,

//   const application = await getUnaAplicacion();

//   console.log(application?.applicantHasArrestsInOtherCountries);
//   if (application?.applicantHasBeenDeported) rating += 1
//   if (application?.applicantHasArrests) rating += 1

//   console.log(rating)

//   // {
//   //   id: 'f64b66ca-5f4c-4beb-ba14-15a7037bff6a',
//   //   applicantLegalFirstName: 'Henry',
//   //   applicantLegalMiddleName: '',
//   //   applicantLegalLastName: 'Munoz',
//   //   applicantDOB: 1982-01-16T00:00:00.000Z,
//   //   addressFisical: '9637 greenmeadow circle',
//   //   phone: '8044326474',
//   //   email: 'Alexcol123456@gmail.com',
//   //   paisNacimiento: 'United States',
//   //   sexo: 'Masculino',
//   //   etnicity: 'Hispano o Latino',
//   //   race: 'Negro o Afroamericano',
//   //   dateOfMarriage: 2016-01-15T00:00:00.000Z,
//   //   esSpouse: true,
//   //   esStepchild: false,
//   //   spouseThatIsCitizenLegalFirstName: 'Henry',
//   //   spouseThatIsCitizenLegalMiddleName: '',
//   //   spouseThatIsCitizenLegalLastName: 'Munoz',
//   //   spouseThatIsCitizenDOB: 2010-02-02T00:00:00.000Z,
//   //   applicantWhenArrivedToUS: 2015-02-15T00:00:00.000Z,
//   //   applicantHasBeenDeported: true,
//   //   applicantHasArrests: false,
//   //   applicantHasArrestsInOtherCountries: false,
//   //   applicantOtherInfo: '',
//   //   createdAt: 2024-09-16T21:23:15.836Z,
//   //   updatedAt: 2024-09-16T21:23:15.836Z,
//   //   perfilId: 'user_2mAOniWaJOkGBbgEIV83RYxyEVN'
//   // }

//   if (!application) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">No hay aplicaciones</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-background dark:to-muted flex items-center justify-center p-6">
//       <Card className="shadow-2xl border border-border rounded-xl max-w-xl w-full bg-card dark:bg-card">
//         <CardHeader className="">
//           <CardTitle className="text-center text-4xl font-bold text-primary dark:text-primary-foreground">Resultado</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3 p-6 border m-3 rounded-xl">

//           <h2> {application.sexo === 'Masculino' ? 'Querido' : "Querida"}  {application.applicantLegalFirstName}</h2>
//           <h2>Basado en esta infomacion </h2>

//           <h2>Tu eres {application.esSpouse ? 'conyuge' : 'hijastro'} de  {application.spouseThatIsCitizenLegalFirstName} {application.spouseThatIsCitizenLegalLastName} quien es un ciudadano Americano. </h2>


//           {application.applicantWhenArrivedToUS && <h2>Tu entraste en este pais en  {formatDate(application.applicantWhenArrivedToUS)}  </h2>}

//           {application.dateOfMarriage && <h2>Tu te casaste con un ciudadano americano  {formatDate(application.dateOfMarriage)}  </h2>}

//           {application.applicantHasBeenDeported && <h2>Tu has sido deportado de este pais </h2>}
//           {application.applicantHasArrests && <h2>Tu has sido arrestado en este pais </h2>}
//           {application.applicantHasArrestsInOtherCountries && <h2>Tu has sido arrestado en otro pais </h2>}


//           <Separator className="my-4 mt-8" />

//           <Badge variant='default'>Respuesta</Badge>

//           <h2>Basado en esta Informacion  </h2>

//           <h2>Entraste a Estados Unidos antes de el 17 de junio de 2014</h2>
//           <h2>Tener un matrimonio válido con un ciudadano</h2>
//           <h2>Te casaste antes de 17 de junio de 2024</h2>
//           <h2>No tener antecedentes penales</h2>

//           {/* <h2>Gracias por tu aplicacion</h2> */}



//         </CardContent>

//         <CardFooter className="flex flex-col my-8">

//           <div className="flex justify-around items-center mt-4  w-full">
//             <Button variant="outline">Editar</Button>
//             <Button>Processar</Button>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default VerResultado;





import { getUnaAplicacion } from "@/utils/actions";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";




const VerResultado = async () => {

  const application = await getUnaAplicacion();

  console.log(application);

  if (!application) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">No hay aplicaciones</div>;


  const wasMarriedBeforDate = () => {
    // was married before 06-17-2024
    const targetDate = new Date('2024-06-17T00:00:00.000Z');
    const date = new Date(application?.dateOfMarriage);
    return date < targetDate;
  }

  const arrivedToUSABeforeDate = () => {
    //arrived to usa  befor 06-17-2014
    const targetDate = new Date('2014-06-17T00:00:00.000Z');
    const date = new Date(application?.applicantWhenArrivedToUS);
    return date < targetDate;
  }

  let total = 0
  if (!arrivedToUSABeforeDate()) total += 1
  if (!wasMarriedBeforDate()) total += 1
  if (application.applicantHasArrests) total += 1
  if (application.applicantHasBeenDeported) total += 1

  let califaca = true

  if (total === 0) {
    califaca = true
  } else { califaca = false }




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-background dark:to-muted flex items-center justify-center p-6">
      <Card className="shadow-2xl border border-border rounded-xl max-w-xl w-full bg-card dark:bg-card">
        <CardHeader className="">
          <CardTitle className="text-center text-4xl font-bold text-primary dark:text-primary-foreground">Resultado</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-6 border m-3 rounded-xl">
          <div className="space-y-4 text-foreground dark:text-card-foreground">

            <div className="flex items-center justify-between gap-4">
              <p className="font-medium ">Entraste antes de el 06/17/2014: </p>
              <Badge variant='outline' className={`${arrivedToUSABeforeDate() ? 'bg-green-300 text-gray-500' : 'bg-destructive/20 text-destructive'}`}>{arrivedToUSABeforeDate() ? 'Sí' : 'No'}</Badge>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="font-medium ">Casarte antes de 06/17/2024: </p>

              <Badge variant='outline' className={`${wasMarriedBeforDate() ? 'bg-green-300 text-gray-500' : 'bg-destructive/20 text-destructive'}`}>{wasMarriedBeforDate() ? 'Sí' : 'No'}</Badge>
            </div>


            <div className="flex items-center justify-between gap-4">
              <p className="font-medium ">Tener un matrimonio válido con un ciudadano </p>
              <Badge variant='outline' className={`${application.esSpouse || application.dateOfMarriage ? 'bg-green-300 text-gray-500' : 'bg-destructive/20 text-destructive'}`}>{!application.esSpouse || application.dateOfMarriage ? 'Sí' : 'No'}</Badge>
            </div>




            <div className="flex items-center justify-between gap-4">
              <p className="font-medium ">No tener antecedentes penales: </p>
              <Badge variant='outline' className={`${wasMarriedBeforDate() ? 'bg-green-300 text-gray-500' : 'bg-destructive/20 text-destructive'}`}>{!application.applicantHasArrests ? 'Sí' : 'No'}</Badge>
            </div>



            <Separator className="my-12 mt-8" />




            <h2 className="text-lg font-semibold">{califaca ? "Felizidades ," : "Lo Sentimos,"} <span> {application.applicantLegalFirstName}</span></h2>






            {!wasMarriedBeforDate() && <h2 className="font-semibold"> <span>No</span>Te casaste antes de 17 de junio de 2024 </h2>}
            {!arrivedToUSABeforeDate() && <h2 className="font-semibold"> <span>No</span> Entraste a Estados Unidos antes de el 17 de junio de 2014</h2>}

            {application.esSpouse || application.dateOfMarriage && <h2 className="font-semibold"> <span>No</span> Tener un matrimonio válido con un ciudadano</h2>}
            {application.applicantHasArrests && <h2 className="font-semibold"> <span>No</span> No tener antecedentes penales</h2>}

            <div className="flex items-center justify-center pt-12">
              <Badge className={califaca ? 'bg-green-300 text-gray-500  text-2xl' : 'bg-destructive text-destructive-foreground text-2xl'}>{califaca ? ' Si Calificas ' : 'No calificas'}  </Badge>

            </div>

            <div>
              <div className="font-semibold text-lg">
                {califaca ? <h4> ¡Felicidades!  <span> {application.applicantLegalFirstName}</span></h4> : <h4> Lo Sentimos!  <span> {application.applicantLegalFirstName}</span></h4>}
              </div>

              <h4 className="font-semibold text-lg">
                {califaca ? 'Tu camino hacia la legalización empieza hoy' : 'no calificas para esta aplicación'}
              </h4>

              <br />
              {califaca ? (
                <div>
                  <p className="mb-8 text-center">
                    ¡Felicidades! Has calificado para el programa de Familias Unidas, y estás a un paso de lograr tu legalización en los Estados Unidos. Nosotros estamos aquí para que ese sueño se haga realidad. Nuestro equipo de expertos legales se encargará de todo por ti: desde la preparación de tu documentación hasta la traducción de tus documentos. <br />
                    Esta es tu oportunidad para cambiar tu vida.
                    <br />
                    <strong>¡Da el primer paso hacia un futuro lleno de oportunidades!</strong>
                  </p>

                  <ul className="list-disc list-inside">
                    <p className="font-bold">Esto haremos por ti:</p>
                    <li>Traducción de documentos</li>
                    <li>Redacción de cartas explicativas</li>
                    <li>Revisión detallada de documentos</li>
                    <li>Asesoramiento legal especializado</li>
                  </ul>

                  <ul className="list-disc list-inside mt-10">
                    <p className="font-bold">Con tu legalización podrás:</p>
                    <li>Aumentar tus ingresos</li>
                    <li>Acceder a mejores oportunidades laborales</li>
                    <li>Visitar a tu familia en tu país</li>
                    <li>Comprar una casa</li>
                    <li>Obtener seguro médico</li>
                    <li>Conseguir una licencia de conducir</li>
                    <li>Continuar tus estudios</li>
                  </ul>

                  <p className="mt-8">
                    <strong>¡No dejes pasar esta oportunidad única!</strong>
                  </p>

                  <p className="mt-8">
                    <strong>Otras agencias están cobrando hasta $3,580</strong>, pero nosotros lo hacemos por solo <strong>$999</strong> esto ya incluye el pago de la aplicación de USCIS.
                  </p>

                  <p className="mt-8 text-center">
                    <strong>¡Comienza hoy y asegúrate un futuro brillante!</strong>

                  </p>
                </div>
              ) : (
                <div>
                  Un representante legal revisará tu aplicación y, si considera que puedes calificar para otro programa, te contactará en las próximas 48 horas. ¡Estás en buenas manos!
                </div>
              )}
            </div>



          </div>
        </CardContent>

        <CardFooter className="flex flex-col my-10">

          {califaca ?
            (<div className="flex flex-col justify-around items-center mt-4  w-full">
              <p className="my-8  text-center px-10">
                <strong>¡Solo Nececitas $99 dollares para comenzar, el resto cuando tu applicacion este lista!</strong>
              </p>
              <Button asChild>
                <Link href="/checkout">
                  Haz tu pago de $99
                </Link>
              </Button>
            </div>)
            :
            <div>
              <div className="flex flex-col justify-center items-center mt-6 w-full p-4  shadow-lg rounded-lg">
                <h2 className="text-lg font-semibold text-primary mb-4 text-center">
                  ¡Tu aplicación está en buenas manos!
                </h2>
                <p className="text-base  text-center mb-4">
                  Un representante legal revisará tu solicitud manualmente y, si encuentra oportunidades, te llamará para explicarte cómo puedes avanzar hacia tu legalización en Estados Unidos. ¡Estamos aquí para ayudarte a cumplir ese sueño!
                </p>
                <h3 className="text-base font-medium text-primary mb-2 text-center">
                  ¿No quieres esperar? Puedes hablar con un representante ahora mismo.
                </h3>
                <Link href="tel:8044326474" className="inline-block">
                  <button className="bg-primary hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors">
                    Llama Ahora: 804-432-6474
                  </button>
                </Link>
              </div>
            </div>
          }

        </CardFooter>
      </Card>
    </div>
  );
};

export default VerResultado;