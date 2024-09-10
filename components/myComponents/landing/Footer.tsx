const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <!-- Información del contacto --> */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Oficina de Inmigración</h3>
          <p className="text-sm">Teléfono: +1 (123) 456-7890</p>
          <p className="text-sm">Correo: contacto@lawoffice.com</p>
        </div>

        {/* <!-- Links importantes --> */}
        {/* <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <a href="#" className="text-sm hover:underline">Inicio</a>
          <a href="#" className="text-sm hover:underline">Servicios</a>
          <a href="#" className="text-sm hover:underline">Sobre Nosotros</a>
          <a href="#" className="text-sm hover:underline">Contacto</a>
        </div> */}

        {/* <!-- Redes Sociales --> */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898v-2.89h1.54V9.658c0-1.522.892-2.36 2.254-2.36.654 0 1.34.117 1.34.117v1.54h-.755c-.743 0-.975.463-.975.937v1.127h1.867l-.299 2.89h-1.568v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.02 24h5V7h-5v17zM7.98 24h5V14.8c0-4.8-5-5.2-5 0V24zM15.98 24h5V14.8c0-4.8-5-5.2-5 0V24z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        © 2024 Oficina de Inmigración. Todos los derechos reservados.
      </div>
    </footer>
  )
}
export default Footer