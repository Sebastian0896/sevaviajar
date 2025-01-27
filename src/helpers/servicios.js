import { FaPassport, FaCalendarAlt, FaUserTie  } from 'react-icons/fa';
import { MdAutorenew } from 'react-icons/md';
import { GrVisa } from "react-icons/gr";

const servicios = [
    {
      icon: <GrVisa className="text-blue-600 text-4xl" />,
      title: 'Solicitud de Visa B1/B2',
      description: 'Te guiamos en el proceso completo para obtener tu visa de turista/negocios con éxito.',
      slug: 'solicitud-de-visa-b1b2',
    },
    {
      icon: <FaPassport className="text-red-500 text-4xl" />,
      title: 'Solicitud de Pasaporte',
      description: 'Ayuda para tramitar pasaportes por primera vez para adultos y menores de edad.',
      slug: 'solicitud-de-pasaporte',
    },
    {
      icon: <MdAutorenew className="text-green-500 text-4xl" />,
      title: 'Renovación de Visa B1/B2',
      description: 'Facilitamos el proceso de renovación de tu visa de turista o negocios.',
      slug: 'renovacion-de-visa-b1b2',
    },
    {
      icon: <FaPassport className="text-yellow-500 text-4xl" />,
      title: 'Renovación de Pasaporte',
      description: 'Renueva tu pasaporte vencido o en mal estado, ya sea por pérdida, deterioro u otra razón.',
      slug: 'renovacion-de-pasaporte',
    },
    {
      icon: <FaCalendarAlt className="text-blue-400 text-4xl" />,
      title: 'Reprogramación de Citas',
      description: 'Te ayudamos a reprogramar tus citas para visas o pasaportes según tu disponibilidad.',
      slug: 'reprogramacion-de-citas',
    },
    {
      icon: <FaUserTie className="text-purple-500 text-4xl" />,
      title: 'Asesoría Personalizada',
      description: 'Consultas personalizadas para resolver tus dudas sobre trámites migratorios y más.',
      slug: 'asesoria-personalizada',
    },
  ];

  export default servicios;