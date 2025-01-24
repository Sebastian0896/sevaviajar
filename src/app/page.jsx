import ServiciosPrincipales from '@/components/ServiciosPrincipales';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-slate-900 text-center md:p-20 py-8 px-4">
        <div className="container mx-auto">
          <h2 className="md:text-4xl text-xl font-bold mb-4 text-white">¡Tu proceso comienza aquí!</h2>
          <p className="md:text-2xl mb-8 text-white">
          En <strong className='text-red-600'>Sevaviajar</strong>, te guiamos en cada paso para que tus trámites de visa, pasaporte y asesorías migratorias sean más sencillos y eficientes. Nos enfocamos en brindarte la información y el apoyo que necesitas para avanzar con confianza hacia tus metas. ¡Comencemos juntos este camino!
          </p>
          <a href="#servicios" className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            Descubre más
          </a>
        </div>
      </section>

      {/* Servicios */}
      {/* <section id="servicios" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Solicitud de Visas</h4>
              <p className="text-gray-600">Asesoría personalizada para obtener tu visa.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Pasaportes</h4>
              <p className="text-gray-600">Ayuda en el proceso de solicitud y renovación.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Asesorías Especiales</h4>
              <p className="text-gray-600">Resolvemos tus dudas migratorias.</p>
            </div>
          </div>
        </div>
      </section> */}
      <ServiciosPrincipales />

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
          <p className="text-lg mb-8">Estamos aquí para ayudarte a cumplir tus sueños de viajar.</p>
          <a href="mailto:contacto@sevaviajar.com" className="px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600">
            Escríbenos
          </a>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
