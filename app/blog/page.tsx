

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { blogs } from '@/utils/list';
import Image from 'next/image';
import Link from 'next/link';


// data/blogs.json


export default function BlogLanding() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">


      {/* Hero Section */}
      <section className="bg-cover bg-center relative h-96" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Bienvenido a Nuestro Blog</h2>
          <p className="mt-4 text-lg text-gray-300">Encuentra las últimas noticias y consejos para tu camino migratorio.</p>
          <Link href="/blog" passHref>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Leer Más</Button>
          </Link>
        </div>
      </section>



      {/* Artículos Recientes */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Artículos Recientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition-shadow">

              <Image src="/images/family5.jpg" alt="Artículo" width={400} height={250} layout="responsive" className="rounded-t-lg" />
              <div className="p-4">
                <h4 className="text-base font-semibold">{blog.title}</h4>
                <p className="mt-2 text-gray-600">{blog.excerpt}</p>
                <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                  Leer Más
                </Link>
              </div>
            </Card>
          )
          )}


          {/* Artículo Card */}

          {/* Repite la tarjeta para más artículos */}
        </div>
      </section>

      {/* Suscripción */}
      <section className="bg-blue-100 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-2xl font-bold text-gray-800">Suscríbete a Nuestro Blog</h3>
          <p className="mt-4 text-gray-600">Recibe las últimas noticias y consejos directamente en tu bandeja de entrada.</p>
          <div className="mt-6 flex justify-center p-3">
            <Input placeholder="Tu correo electrónico" className="max-w-sm mx-auto bg-white rounded-r-none" />
            <Button className=" bg-blue-600 rounded-l-none hover:bg-blue-700">Suscribirme</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nombre del Blog. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}



// pages/blog/manteniendo-a-las-familias-unidas.js



// Blog 1 - Manteniendo a las Familias Unidas
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import Image from 'next/image';
// import Link from 'next/link';
// import Head from 'next/head';

// function BlogPost() {
//   return (
//     <>
//       <Head>
//         <title>Manteniendo a las Familias Unidas: Nuevo Proceso de Inmigración</title>
//         <meta name="description" content="Descubre cómo el nuevo programa 'Manteniendo a las Familias Unidas' ayuda a cónyuges e hijastros de ciudadanos estadounidenses a obtener el permiso de permanencia temporal y ajustar su estatus migratorio sin salir de Estados Unidos." />
//         <meta name="keywords" content="inmigración, cónyuges, hijastros, permiso de permanencia temporal, ajuste de estatus, inmigración Estados Unidos, familias unidas, DHS, USCIS, programa migratorio" />
//         <meta name="author" content="Tu Nombre o Agencia" />
//         <meta property="og:title" content="Manteniendo a las Familias Unidas: Nuevo Proceso de Inmigración" />
//         <meta property="og:description" content="El programa 'Manteniendo a las Familias Unidas' permite a cónyuges e hijastros de ciudadanos estadounidenses ajustar su estatus migratorio sin salir del país. ¡Infórmate ahora!" />
//         <meta property="og:image" content="/images/family6.jpg" />
//         <meta property="og:url" content="https://tu-sitio.com/blog/manteniendo-a-las-familias-unidas" />
//         <meta property="og:type" content="article" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Manteniendo a las Familias Unidas: Nuevo Proceso de Inmigración" />
//         <meta name="twitter:description" content="El programa 'Manteniendo a las Familias Unidas' permite a cónyuges e hijastros de ciudadanos estadounidenses ajustar su estatus migratorio sin salir del país. ¡Infórmate ahora!" />
//         <meta name="twitter:image" content="/images/family6.jpg" />
//         <link rel="canonical" href="https://tu-sitio.com/blog/manteniendo-a-las-familias-unidas" />
//       </Head>

//       <div className="pt-32 min-h-screen bg-gray-50 px-4 py-8 md:py-12">
//         <div className="max-w-3xl mx-auto">
//           {/* Botón de Regreso al Inicio */}
//           <div className="mb-4">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>

//           {/* Header del Post */}
//           <header className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Manteniendo a las Familias Unidas: Un Nuevo Camino para Cónyuges e Hijastros de Ciudadanos Estadounidenses
//             </h1>
//             <p className="text-sm text-gray-600">Publicado el 19 de agosto de 2024</p>
//           </header>

//           {/* Imagen Principal */}
//           <div className="mb-8">
//             <Image 
//               src="/images/family6.jpg" // Asegúrate de tener la imagen en esta ruta
//               alt="Manteniendo a las Familias Unidas"
//               width={800} // Set appropriate width
//               height={600} // Set appropriate height
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Contenido del Post */}
//           <article className="prose prose-lg max-w-none text-gray-700">
//             <p>
//               El 19 de agosto de 2024, el Departamento de Seguridad Nacional (DHS) implementó el programa <strong>Manteniendo a las Familias Unidas</strong>. Este proceso ayuda a ciertos cónyuges e hijastros de ciudadanos estadounidenses a solicitar el <strong>permiso de permanencia temporal</strong> en el país.
//             </p>
//             <h2 className="mt-8">¿Qué es el Permiso de Permanencia Temporal?</h2>
//             <p>
//               Es una oportunidad para que quienes han vivido en Estados Unidos sin admisión formal puedan permanecer en el país temporalmente por razones humanitarias o de beneficio público.
//             </p>
//             <h2 className="mt-8">¿Quiénes Pueden Aplicar?</h2>
//             <ul className="list-disc list-inside">
//               <li>
//                 <strong>Cónyuges no ciudadanos de ciudadanos estadounidenses</strong>: 500,000 personas podrían calificar.
//               </li>
//               <li>
//                 <strong>Hijastros no ciudadanos de ciudadanos estadounidenses</strong>: Aproximadamente 50,000 personas podrían ser elegibles.
//               </li>
//             </ul>
//             <h2 className="mt-8">Beneficios del Programa</h2>
//             <p>
//               Los beneficiarios pueden ajustar su estatus a residentes permanentes sin salir del país. Esto evita el proceso consular y agiliza su situación migratoria.
//             </p>
//             <h2 className="mt-8">Proceso Seguro y Confiable</h2>
//             <p>
//               USCIS asegura la integridad del programa con procedimientos rigurosos para detectar posibles fraudes, especialmente en la validez de matrimonios.
//             </p>
//             <h2 className="mt-8">¡Actúa Ahora!</h2>
//             <p>
//               Esta es una gran oportunidad para ti y tu familia. Infórmate y consulta con un profesional para aprovechar este proceso y asegurar un futuro estable en Estados Unidos.
//             </p>
//           </article>

//           {/* CTA */}
//           <div className="mt-12">
//             <Card className="bg-blue-100 p-6">
//               <h3 className="text-xl font-bold text-gray-800">
//                 ¡Infórmate y da el primer paso!
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Miles de familias pueden beneficiarse de este programa. ¡No pierdas esta oportunidad de mantener a tu familia unida y avanzar hacia un futuro seguro en Estados Unidos!
//               </p>
//               <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
//                 Ver si califico
//               </Button>
//             </Card>
//           </div>

//           {/* Botón de Regreso al Final */}
//           <div className="mt-8 text-center">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogPost;



// Blog 2- Manteniendo a las Familias Unidas: Suspensión Administrativa
// Blog 2- Manteniendo a las Familias Unidas: Suspensión Administrativa Temporal

// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import Image from 'next/image';
// import Link from 'next/link';
// import Head from 'next/head';

// function BlogPost() {
//   return (
//     <>
//       <Head>
//         <title>Suspensión Administrativa Temporal de Manteniendo a las Familias Unidas</title>
//         <meta name="description" content="El Tribunal de los Estados Unidos ha suspendido temporalmente el programa 'Manteniendo a las Familias Unidas' hasta el 23 de septiembre de 2024. Infórmate sobre las acciones que USCIS está tomando en respuesta." />
//         <meta name="keywords" content="suspensión administrativa, DHS, USCIS, Tribunal de Texas, permiso de permanencia temporal, inmigración, familias unidas, Formulario I-131F" />
//         <meta name="author" content="Tu Nombre o Agencia" />
//         <meta property="og:title" content="Suspensión Administrativa Temporal de Manteniendo a las Familias Unidas" />
//         <meta property="og:description" content="El Tribunal de los Estados Unidos ha suspendido temporalmente el programa 'Manteniendo a las Familias Unidas' hasta el 23 de septiembre de 2024. Infórmate sobre las acciones que USCIS está tomando en respuesta." />
//         <meta property="og:image" content="/images/family2.jpg" />
//         <meta property="og:url" content="https://tu-sitio.com/blog/suspension-administrativa-temporal-manteniendo-familias-unidas" />
//         <meta property="og:type" content="article" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Suspensión Administrativa Temporal de Manteniendo a las Familias Unidas" />
//         <meta name="twitter:description" content="El Tribunal de los Estados Unidos ha suspendido temporalmente el programa 'Manteniendo a las Familias Unidas' hasta el 23 de septiembre de 2024. Infórmate sobre las acciones que USCIS está tomando en respuesta." />
//         <meta name="twitter:image" content="/images/family2.jpg" />
//         <link rel="canonical" href="https://tu-sitio.com/blog/suspension-administrativa-temporal-manteniendo-familias-unidas" />
//       </Head>

//       <div className="pt-32 min-h-screen bg-gray-50 px-4 py-8 md:py-12">
//         <div className="max-w-3xl mx-auto">
//           {/* Botón de Regreso al Inicio */}
//           <div className="mb-4">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>

//           {/* Header del Post */}
//           <header className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Manteniendo a las Familias Unidas: Suspensión Administrativa Temporal
//             </h1>
//             <p className="text-sm text-gray-600">Publicado el 26 de agosto de 2024</p>
//           </header>

//           {/* Imagen Principal */}
//           <div className="mb-8">
//             <Image 
//               src="/images/family2.jpg" // Asegúrate de tener la imagen en esta ruta
//               alt="Familia unida"
//               width={800} // Set appropriate width
//               height={600} // Set appropriate height
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Contenido del Post */}
//           <article className="prose prose-lg max-w-none text-gray-700">
//             <p>
//               El 26 de agosto de 2024, el Tribunal de los Estados Unidos para el Distrito del Este de Texas, en el caso <strong>Texas v. Department of Homeland Security</strong>, número de caso 24-cv-306, ordenó una <strong>suspensión administrativa temporal</strong> del programa <strong>Manteniendo a las Familias Unidas</strong>. Esta suspensión estará vigente hasta el 23 de septiembre de 2024.
//             </p>
//             <h2 className="mt-8">¿Qué Significa Esta Suspensión Temporal?</h2>
//             <p>
//               Durante este periodo, USCIS no podrá otorgar nuevas peticiones de permiso de permanencia temporal bajo este programa. Sin embargo, continuarán aceptando solicitudes y programando citas biométricas para aquellos que deseen aplicar.
//             </p>
//             <h2 className="mt-8">Acciones que Está Tomando USCIS</h2>
//             <ul className="list-disc list-inside">
//               <li>No otorgará ninguna petición de permiso de permanencia temporal pendiente bajo Manteniendo a las Familias Unidas.</li>
//               <li>Continuará aceptando el Formulario I-131F, Solicitud de Permiso de Permanencia Temporal en el País para Ciertos No Ciudadanos Cónyuges e Hijastros de Ciudadanos Estadounidenses.</li>
//               <li>Continuará programando citas de datos biométricos y tomará los datos biométricos en los Centros de Asistencia en Solicitudes (ASC).</li>
//             </ul>
//             <h2 className="mt-8">Impacto en las Solicitudes Aprobadas</h2>
//             <p>
//               Es importante destacar que esta suspensión administrativa temporal no afecta a las peticiones aprobadas antes de la emisión de la suspensión administrativa a las 6:46 p.m., hora del este, del 26 de agosto de 2024.
//             </p>
//             <h2 className="mt-8">¡Mantente Informado!</h2>
//             <p>
//               Si has aplicado o piensas aplicar al programa Manteniendo a las Familias Unidas, te recomendamos estar al tanto de cualquier actualización. Consulta con un profesional legal para asegurarte de que tu situación esté bien manejada durante este periodo de suspensión temporal.
//             </p>
//           </article>

//           {/* CTA */}
//           <div className="mt-12">
//             <Card className="bg-blue-100 p-6">
//               <h3 className="text-xl font-bold text-gray-800">
//                 ¿Tienes Preguntas?
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 La situación está cambiando rápidamente. Si tienes alguna pregunta sobre cómo esta suspensión temporal te afecta a ti o a tu familia, consulta con un abogado especializado en inmigración.
//               </p>
//               <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
//                 Contactar a un Experto
//               </Button>
//             </Card>
//           </div>

//           {/* Botón de Regreso al Final */}
//           <div className="mt-8 text-center">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogPost;



// Blog 3 - Manteniendo a las Familias Unidas: Reanudación del Programa

// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import Image from 'next/image';
// import Link from 'next/link';
// import Head from 'next/head';

// function BlogPost() {
//   return (
//     <>
//       <Head>
//         <title>Reanudación del Programa Manteniendo a las Familias Unidas</title>
//         <meta name="description" content="El programa 'Manteniendo a las Familias Unidas' está programado para ser reanudado el 23 de septiembre de 2024. Se espera un gran número de aprobaciones para aquellos que califiquen. ¡Infórmate y prepárate para aplicar!" />
//         <meta name="keywords" content="reanudar programa, Manteniendo a las Familias Unidas, DHS, USCIS, aprobación, inmigración, familias unidas, Formulario I-131F" />
//         <meta name="author" content="Tu Nombre o Agencia" />
//         <meta property="og:title" content="Reanudación del Programa Manteniendo a las Familias Unidas" />
//         <meta property="og:description" content="El programa 'Manteniendo a las Familias Unidas' está programado para ser reanudado el 23 de septiembre de 2024. Se espera un gran número de aprobaciones para aquellos que califiquen. ¡Infórmate y prepárate para aplicar!" />
//         <meta property="og:image" content="/images/family3.jpg" />
//         <meta property="og:url" content="https://tu-sitio.com/blog/reanudacion-manteniendo-familias-unidas" />
//         <meta property="og:type" content="article" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Reanudación del Programa Manteniendo a las Familias Unidas" />
//         <meta name="twitter:description" content="El programa 'Manteniendo a las Familias Unidas' está programado para ser reanudado el 23 de septiembre de 2024. Se espera un gran número de aprobaciones para aquellos que califiquen. ¡Infórmate y prepárate para aplicar!" />
//         <meta name="twitter:image" content="/images/family3.jpg" />
//         <link rel="canonical" href="https://tu-sitio.com/blog/reanudacion-manteniendo-familias-unidas" />
//       </Head>

//       <div className="pt-32 min-h-screen bg-gray-50 px-4 py-8 md:py-12">
//         <div className="max-w-3xl mx-auto">
//           {/* Botón de Regreso al Inicio */}
//           <div className="mb-4">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>

//           {/* Header del Post */}
//           <header className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Reanudación del Programa Manteniendo a las Familias Unidas
//             </h1>
//             <p className="text-sm text-gray-600">Publicado el 20 de septiembre de 2024</p>
//           </header>

//           {/* Imagen Principal */}
//           <div className="mb-8">
//             <Image 
//               src="/images/family3.jpg" // Asegúrate de tener la imagen en esta ruta
//               alt="Familia celebrando reunificación"
//               width={800} // Set appropriate width
//               height={600} // Set appropriate height
//               className="rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Contenido del Post */}
//           <article className="prose prose-lg max-w-none text-gray-700">
//             <p>
//               ¡Buenas noticias para todas las familias que han estado esperando! El programa <strong>Manteniendo a las Familias Unidas</strong> está programado para ser reanudado el <strong>23 de septiembre de 2024</strong>. Esto significa que, a partir de esa fecha, se espera que el Departamento de Seguridad Nacional (DHS) y USCIS retomen la emisión de permisos de permanencia temporal bajo este programa.
//             </p>
//             <h2 className="mt-8">¿Qué Podemos Esperar?</h2>
//             <p>
//               Se prevé que muchas solicitudes sean aprobadas una vez que el programa se reanude. Esto es una gran oportunidad para quienes han estado esperando pacientemente durante el periodo de suspensión temporal. Si ya has enviado tu solicitud o estás pensando en aplicar, ¡prepárate para el 23 de septiembre!
//             </p>
//             <h2 className="mt-8">Acciones para Prepararse</h2>
//             <ul className="list-disc list-inside">
//               <li>Revisa tu solicitud y asegúrate de que toda la documentación esté completa y actualizada.</li>
//               <li>Consulta con un abogado especializado en inmigración para asegurarte de que cumples con todos los requisitos.</li>
//               <li>Estén atentos a cualquier actualización de USCIS y del Departamento de Seguridad Nacional.</li>
//             </ul>
//             <h2 className="mt-8">¿Qué Sucederá a Partir del 23 de Septiembre?</h2>
//             <p>
//               Una vez que se reanude el programa, USCIS comenzará a procesar las solicitudes pendientes y a emitir nuevas aprobaciones. Si has estado esperando, este es el momento para prepararte y asegurarte de que todo esté en orden. Se espera un gran número de aprobaciones para quienes cumplan con los requisitos del programa.
//             </p>
//             <h2 className="mt-8">¡No Pierdas la Esperanza!</h2>
//             <p>
//               Sabemos que el periodo de suspensión ha sido difícil para muchos, pero este anuncio de reanudación trae esperanza para miles de familias. ¡Prepárate y mantente positivo! Esta es una gran oportunidad para asegurar el futuro de tu familia en Estados Unidos.
//             </p>
//           </article>

//           {/* CTA */}
//           <div className="mt-12">
//             <Card className="bg-blue-100 p-6">
//               <h3 className="text-xl font-bold text-gray-800">
//                 ¡Prepárate para Aplicar!
//               </h3>
//               <p className="mt-4 text-gray-700">
//                 Si necesitas ayuda para revisar tu solicitud o tienes preguntas sobre cómo aplicar correctamente, no dudes en contactar a un experto en inmigración. Estamos aquí para ayudarte a mantener a tu familia unida.
//               </p>
//               <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
//                 Ver si califico
//               </Button>
//             </Card>
//           </div>

//           {/* Botón de Regreso al Final */}
//           <div className="mt-8 text-center">
//             <Link href="/blog" passHref>
//               <Button variant="outline" className="bg-white hover:bg-gray-100 border border-gray-300">
//                 ← Regresar a Blogs
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogPost;
