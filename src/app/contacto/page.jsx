import ContactForm from '@/components/ContactForm';
import { FiPhone, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function Contacto() {
  return (
    <section className="bg-white py-12 container my-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-[#024383] mb-12">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulario de Contacto */}
          <div className="bg-slate-900 shadow-md rounded-lg p-6">
            <ContactForm />
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <p className="text-slate-900 text-lg">
              Si tienes preguntas o necesitas más información, no dudes en comunicarte con nosotros.
            </p>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-[#024383] text-xl" />
              <span className="text-slate-900">+1 (809) 776-5349</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-[#024383] text-xl" />
              <span className="text-slate-900">sevaviajar@gmail.com</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="text-[#024383] hover:text-blue-600 text-2xl transition duration-300" />
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
