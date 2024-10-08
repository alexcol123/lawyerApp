import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">

        {/* Sección de Información */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Manteniendo a las Familias Unidas</h3>
          <p className="text-sm mt-1">Formulario I-131F</p>
        </div>



        {/* Información de Contacto */}
        <div className="text-center md:text-right">

          <p className="hover:text-white cursor-pointer">
            ¿Tienes dudas o preguntas? Llámanos al
            <br />
            <Link href={`tel:${process.env.PHONE_LINK as string}`} className="text-blue-500 font-bold">
              {process.env.PHONE_NUMBER as string}
            </Link>
          </p>

        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs">
        <p>
          © 2024 Manteniendo a las Familias Unidas. Todos los derechos reservados.
        </p>
        <Link href="/politica-de-privacidad">
          <div className="hover:text-white cursor-pointer mt-2">Política de Privacidad</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;