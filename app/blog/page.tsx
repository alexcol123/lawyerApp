import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { blogs } from '@/utils/list';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../landing/Footer';
import Head from 'next/head';

// data/blogs.json

function BlogLanding() {
  return (
    <>
      <Head>
        <title>Manteniendo a las Familias Unidas con el Formulario I-131F | Información y Asesoría</title>
        <meta
          name="description"
          content="Descubre todo sobre el programa Manteniendo a las Familias Unidas con el Formulario I-131F. Somos la única web dedicada a ofrecer información completa y asesoría para mantener a las familias unidas en Estados Unidos."
        />
        <meta
          name="keywords"
          content="Manteniendo a las Familias Unidas, Formulario I-131F, inmigración familiar, reunificación familiar, permiso de permanencia temporal, visa familiar, inmigración a Estados Unidos, asesoría inmigratoria, ayuda inmigración, reunificación familiar Estados Unidos"
        />
        <meta
          property="og:title"
          content="Manteniendo a las Familias Unidas con el Formulario I-131F | Información y Asesoría"
        />
        <meta
          property="og:description"
          content="Somos la única página web dedicada exclusivamente al programa Manteniendo a las Familias Unidas con el Formulario I-131F. Encuentra aquí toda la información y asesoría para mantener a tu familia unida en Estados Unidos."
        />
        <meta property="og:image" content="/images/familia-unida.jpg" />
        <meta property="og:url" content="https://tusitio.com/manteniendo-a-las-familias-unidas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Manteniendo a las Familias Unidas con el Formulario I-131F | Información y Asesoría"
        />
        <meta
          name="twitter:description"
          content="Conoce todo sobre el programa Manteniendo a las Familias Unidas con el Formulario I-131F. Somos la única web dedicada exclusivamente a este programa. Encuentra asesoría y ayuda para mantener a tu familia unida en EE.UU."
        />
        <meta name="twitter:image" content="/images/familia-unida.jpg" />
        <meta name="author" content="Tu Agencia de Inmigración" />
        <link rel="canonical" href="https://tusitio.com/manteniendo-a-las-familias-unidas" />
      </Head>

      <div className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
        <div className="bg-primary/20 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">
              Bienvenido al Blog del Programa Manteniendo a las Familias Unidas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Aquí encontrarás información detallada y actualizada sobre el programa{' '}
              <strong>Manteniendo a las Familias Unidas</strong>, enfocado en ayudarte a entender y aplicar correctamente el{' '}
              <strong>Formulario I-131F</strong>. Nuestro objetivo es mantener a las familias unidas y apoyarte en cada paso del
              proceso.
            </p>
            <div className="mt-6">
              <Link href="/ver-si-calificas" passHref>
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
                >
                  Ver si Califico
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Artículos Recientes */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Artículos Recientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  {/* Usar tamaño fijo para las imágenes */}
                  <Image
                    src={blog.image ? blog.image : '/images/blog/blog.webp'}
                    alt="Artículo"
                    fill
                 
                 
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold">{blog.title}</h4>
                  <p className="mt-2 text-gray-600">{blog.excerpt}</p>
                  <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                    Leer Más
                  </Link>
                </div>
              </Card>
            ))}
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
        <Footer />
      </div>
    </>
  );
}

export default BlogLanding;