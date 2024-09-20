import Link from "next/link";

<footer className="bg-red-800 text-white py-6">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    {/* Logo o nombre del sitio */}
    <div className="mb-4 md:mb-0 text-center md:text-left">
      <h3 className="text-xl font-semibold">Manteniendo a las Familias Unidas</h3>
      <p className="text-sm text-gray-400">Formulario I-131F</p>
    </div>

    {/* Enlaces de navegación */}
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
      <Link href="/inicio">
        <a className="hover:text-gray-300 transition-colors duration-200">Inicio</a>
      </Link>
      <Link href="/precalificacion">
        <a className="hover:text-gray-300 transition-colors duration-200">Pre-calificación</a>
      </Link>
      <Link href="/blog">
        <a className="hover:text-gray-300 transition-colors duration-200">Blog</a>
      </Link>
      <Link href="/contacto">
        <a className="hover:text-gray-300 transition-colors duration-200">Contacto</a>
      </Link>
    </div>

    {/* Información de contacto */}
    <div className="text-center md:text-right mt-4 md:mt-0">
      <p className="text-sm">Teléfono: <a href="tel:1-800-123-4567" className="hover:text-gray-300">1-800-123-4567</a></p>
      <p className="text-sm">Email: <a href="mailto:info@tusitio.com" className="hover:text-gray-300">info@tusitio.com</a></p>
    </div>
  </div>
  <div className="mt-6 border-t border-gray-700 pt-4">
    <p className="text-center text-xs text-gray-500">
      © 2024 Manteniendo a las Familias Unidas. Todos los derechos reservados. | 
      <Link href="/politica-de-privacidad">
        <a className="hover:text-gray-400 ml-1">Política de Privacidad</a>
      </Link>
    </p>
  </div>
</footer>