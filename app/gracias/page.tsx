

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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-center mb-8">
        <FaCheckCircle className="text-green-500 mb-4 mx-auto" size={60} />
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          ¡Gracias, {perfil.nombre}!
        </h1>
        <p className="text-xl text-gray-800 mb-4">
          Hemos recibido tu depósito de <strong>$99</strong>. ¡Estamos emocionados de acompañarte en este gran paso hacia la legalización de tu estatus migratorio!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          En menos de <strong>24 horas</strong>, uno de nuestros agentes te llamará al número <strong>{perfil.telefono}</strong> para responder tus preguntas y guiarte en el proceso. Mientras tanto, prepara los siguientes documentos para agilizar tu aplicación.
        </p>
      </div>

      {/* Sección de Documentos Requeridos */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-center mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Documentos Necesarios</h2>
        <p className="text-lg text-gray-700 mb-4">
          Tener estos documentos listos nos permitirá avanzar más rápido:
        </p>
        <ul className="list-none space-y-3 text-left">
          {[
            "Acta de matrimonio.",
            "Tu identificación (pasaporte o licencia).",
            "Identificación de tu cónyuge.",
            "Prueba de ciudadanía de tu cónyuge (certificado de naturalización o pasaporte).",
            "Seguro social de tu cónyuge ciudadano americano.",
            "Comprobante de que has vivido en EE. UU. desde 2014 (facturas, contratos de arrendamiento, etc.).",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" size={24} />
              <span className="text-lg text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-gray-600 mt-6">
          Si tienes dudas sobre estos documentos, estaremos encantados de ayudarte durante la llamada. ¡Estamos aquí para apoyarte en cada paso!
        </p>
      </div>

      {/* Sección de Contacto */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">¿Necesitas Ayuda?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Llámanos y con gusto te asistiremos:
        </p>
        <div className="flex items-center justify-center">
          <Link href={`tel:${process.env.PHONE_LINK}`}>
            <Button
              variant="outline"
              className="flex items-center justify-center border-green-500 text-green-600 hover:bg-green-100 px-6 py-3 rounded-full text-lg font-medium transition-colors shadow-md"
            >
              <FaPhone className="mr-2" size={20} />
              {process.env.PHONE_NUMBER}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraciasPage;