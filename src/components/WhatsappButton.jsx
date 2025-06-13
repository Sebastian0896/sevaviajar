'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18097765349"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 md:hidden bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
