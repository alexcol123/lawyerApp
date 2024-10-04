import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { blogs } from "@/utils/list";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { VerSiCalificoBtn } from "@/components/myComponents/landing/MyButtons";

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    return <div>Blog no encontrado</div>;
  }

  const createMarkup = () => {
    return { __html: blog.content };
  };

  return (
    <>
      {/* Metadata para SEO */}
      <Head>
        <title>{blog.title} - Manteniendo a las Familias Unidas</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image || '/images/familia.jpg'} />
        <meta property="og:url" content={`https://tusitio.com/blog/${blog.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.image || '/images/familia.jpg'} />
      </Head>

      <div className="pt-2">
        <div className="min-h-screen bg-gray-50 px-4 py-2">
          <div className="max-w-3xl mx-auto">
            {/* Botón para regresar a la lista de blogs */}
            <div className="mb-4">
              <Link href="/blog" passHref>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700"
                >
                  ← Regresar a Blogs
                </Button>
              </Link>
            </div>

            {/* Contenedor del blog */}
            <Card className="p-6 bg-white shadow-md rounded-lg">
              <header className="mb-6">
                {/* Mostrar la imagen si está disponible */}
                <div className="mb-6">
                  <Image
                    src={blog.image ? blog.image : '/images/blog/blog.webp'}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                {/* Título del blog con tamaño de letra responsivo */}
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {blog.title}
                </h1>
                <p className="mt-2 text-xs md:text-sm text-gray-500">{blog.date}</p>
              </header>

              {/* Contenido del blog con tamaño de letra responsivo */}
              <article
                className="prose prose-sm md:prose md:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={createMarkup()}
              ></article>

              {/* Sección adicional de contacto y botón de calificación */}
              <CardFooter className="mt-8 p-8 bg-primary/20 rounded-lg shadow-md flex flex-col items-center text-center space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  ¿Quieres Saber si Calificas al Programa Manteniendo Familias Unidas?
                </h2>
                <p className="text-base text-gray-600 max-w-lg leading-relaxed">
                  Responde unas breves preguntas para conocer si calificas para el programa.
                  El proceso toma menos de 5 minutos. ¡No esperes más!
                </p>

                {/* Botón para ver si califican al programa */}
                <div>
              
                  <VerSiCalificoBtn />
        
                </div>

                {/* Texto adicional para llamada */}
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    ¿Prefieres hablar con nosotros directamente al  ?
                  </h3>
                  <Link href={`tel:${process.env.PHONE_LINK as string}`}>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors"
                    >
                      {process.env.PHONE_NUMBER as string}
                    </Button>
                  </Link>
                </div>
              </CardFooter>


            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;