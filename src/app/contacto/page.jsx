import { FiPhone, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Contacto() {
  return (
    <section className="bg-white py-12 container my-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulario de Contacto */}
          <div className="bg-slate-900 shadow-md rounded-lg p-6">
            <form className='bg-slate-900'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Tu número de teléfono"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <p className="text-slate-900 text-lg">
              Si tienes preguntas o necesitas más información, no dudes en comunicarte con nosotros.
            </p>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-blue-600 text-xl" />
              <span className="text-slate-900">+1 (809) 776-5349</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-blue-600 text-xl" />
              <span className="text-slate-900">contacto@sevaviajar.com</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="text-blue-700 hover:text-blue-600 text-2xl transition duration-300" />
              </a>
              <a href="https://instagram.com/sevaviajar" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="text-red-700 hover:text-blue-600 text-2xl transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
