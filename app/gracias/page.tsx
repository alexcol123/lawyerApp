import { Button } from '@/components/ui/button';
import { fetchProfile } from '@/utils/actions';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';

const GraciasPage = async () => {
  const perfil = await fetchProfile();
  console.log(perfil);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-50 px-4 py-8">
      {/* Sección de Agradecimiento */}
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full text-center mb-10">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">¡Gracias, {perfil.nombre}!</h1>
        <p className="text-xl text-gray-800 mb-4">
          ¡Felicidades, {perfil.nombre}! 🎉 Hemos recibido tu depósito de <strong>$99</strong> y estamos muy emocionados de acompañarte en este gran paso hacia la legalización de tu estatus migratorio.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          En menos de <strong>24 horas</strong>, uno de nuestros agentes te llamará al número <strong>{perfil.telefono}</strong> para responder cualquier pregunta y guiarte en el proceso. Mientras tanto, te recomendamos preparar los siguientes documentos para agilizar tu aplicación.
        </p>

      </div>

      {/* Sección de Documentos Requeridos */}
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full text-center mb-10">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Prepara Estos Documentos</h2>
        <p className="text-lg text-gray-700 mb-4">
          Tener estos documentos listos nos permitirá avanzar más rápido con tu caso:
        </p>
        <ul className="list-none space-y-4 text-left">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Prueba de matrimonio (acta de matrimonio).</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Una identificación tuya (pasaporte o licencia de conducir).</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Identificación de tu cónyuge.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Prueba de ciudadanía de tu cónyuge (certificado de naturalización o pasaporte).</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Seguro social de tu cónyuge ciudadano americano.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span className="text-lg text-gray-800">Comprobante de que has estado viviendo en EE. UU. desde 2014 (facturas de servicios, contratos de arrendamiento, etc.).</span>
          </li>
        </ul>
        <p className="text-lg text-gray-600 text-center mt-6">
          Si tienes alguna duda sobre estos documentos, estaremos encantados de ayudarte durante la llamada. ¡Estamos aquí para apoyarte en cada paso del camino!
        </p>
      </div>

      {/* Sección de Botón de Llamada */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">¿Necesitas Ayuda Urgente?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Llámanos directamente al número de contacto y estaremos encantados de asistirte:
        </p>
  <div className="flex flex-col items-center justify-center">
  <Link href={`tel:${process.env.PHONE_LINK}`}>
          <Button
            variant="outline"
            className="flex items-center justify-center border-green-500 text-green-600 hover:bg-green-100 px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-md"
          >
            <FaPhone className="mr-2" />
            {process.env.PHONE_NUMBER}
          </Button>
        </Link>
  </div>
      </div>
    </div>
  );
};

export default GraciasPage;