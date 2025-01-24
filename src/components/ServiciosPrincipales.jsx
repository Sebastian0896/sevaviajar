import Link from 'next/link';
import { FaPassport, FaPlaneDeparture, FaUserTie } from 'react-icons/fa';

export default function ServiciosPrincipales() {
  return (
    <section id="servicios" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Servicios Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1: Solicitud de visa B1/B2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaPlaneDeparture className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Solicitud de Visa B1/B2
            </h3>
            <p className="text-gray-600">
              Te ayudamos a completar el proceso de solicitud de visa B1/B2, asegurando que todos los requisitos sean cumplidos.
            </p>
          </div>
          {/* Servicio 2: Solicitud de pasaporte */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaPassport className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Solicitud de Pasaporte
            </h3>
            <p className="text-gray-600">
              Asesoramos en la solicitud de pasaporte, ya sea por primera vez o en caso de renovación.
            </p>
          </div>
          {/* Servicio 3: Asesoría personalizada */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaUserTie className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Asesoría Personalizada
            </h3>
            <p className="text-gray-600">
              Brindamos asesoría personalizada para que completes tus trámites de manera eficiente y sin complicaciones.
            </p>
          </div>
        </div>
        {/* Enlace a Ver Todos los Servicios */}
        <div className="text-center mt-10">
          <Link href="/servicios">
            <span className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-blue-700 cursor-pointer">
              Ver Todos los Servicios
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
