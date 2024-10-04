'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Fernández',
    image: '/images/testimonios/01.jpg',
    text: 'Gracias a este servicio, obtuve mi cita para biométricos sin problemas.',
    pais: 'Mexico'
  },
  {
    name: 'Carlos Sánchez',
    image: '/images/testimonios/02.jpg',
    text: 'El equipo me ayudó a conseguir mi recidencia permanente.',
    pais: 'Guatemala'
  },
  {
    name: 'Isabel Pérez',
    image: '/images/testimonios/03.jpg',
    text: 'Excelente atención y resultados. Ya tengo mi cita para biométricos.',
    pais: 'Colombia'
  },
  {
    name: 'Jorge & Jane',
    image: '/images/testimonios/04.jpg',
    text: 'Con su ayuda, Jorge logro reunirlos documentos ahora estoy esperando una decicion.',
    pais: 'Argentina'
  }
];

const Testimonios = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la Sección */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Clientes Satisfechos
        </h2>

        {/* Contenedor de Testimonios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              {/* Imagen del Cliente */}
              <div className="w-20 h-20 relative mb-3">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  fill
             
              
                  className="rounded-full object-cover"
                />
              </div>

              {/* Testimonio */}
              <p className="text-sm sm:text-base text-gray-700 italic">&quot;{testimonial.text}&quot;</p>

              {/* Nombre del Cliente */}
              <p className="mt-1 text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</p>

              {/* País del Cliente */}
              <p className="mt-1 text-sm sm:text-base font-semibold text-primary">{testimonial.pais}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;