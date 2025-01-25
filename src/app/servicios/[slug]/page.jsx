
import Volver from '@/components/VolverServicios';
import servicesData from '@/helpers/servicesData';

export default async function Servicio( {params} ) {
  const slug = (await params).slug;

  // Obtener el servicio correspondiente
  const servicio = servicesData.find((service) => service.slug === slug);

  // Si no existe el servicio, mostrar error o redirigir
  if (!servicio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Servicio no encontrado</h1>
        <Volver />
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Título del Servicio */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6">{servicio.nombre}</h1>

        {/* Detalles del Servicio */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <p>
            <span className="font-semibold text-gray-700">Descripción:</span> {servicio.descripcion}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Requisitos:</span>
          </p>
          <ul className="list-disc ml-5">
            {servicio.requisitos.map((req, index) => (
              <li key={index} className="text-gray-700">
                {req}
              </li>
            ))}
          </ul>
          <p>
            <span className="font-semibold text-gray-700">Vía del Servicio:</span>{' '}
            {servicio.via}
          </p>
          {/* <p>
            <span className="font-semibold text-gray-700">Costo:</span> ${servicio.costo}
          </p> */}
          <hr />
          <p className='p-4 border-blue-600 border-solid border-l-4 text-gray-700 md:text-lg shadow-md rounded-md'>
            <span className="font-semibold text-gray-700">Nota:</span> {servicio.nota}
          </p>
        </div>

        {/* Botón para Volver */}
        <Volver />
      </div>
    </section>
  );
}
