'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'contact_service',
        'template_0olrdik',
        form.current,
        'AIpaBA8QgblG5CslQ'
      )
      .then(
        (result) => {
          alert('Mensaje enviado correctamente.');
          form.current.reset();
        },
        (error) => {
          alert('Hubo un error al enviar el mensaje.');
          console.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-slate-900'>
        <div className="mb-4">
        <label htmlFor="title" className="block text-white font-medium mb-2">
            Asunto
        </label>
        <select
            type="text"
            name="title"
            id="name"
            placeholder="Elige"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
            required
        >
            <option value="">Elige una opción</option>
            <option value="Solicitud de visa B1/B2">Solicitud de visa B1/B2</option>
            <option value="Solicitud de pasaporte">Solicitud de pasaporte</option>
            <option value="Renovación de visa B1/B2">Renovación de visa B1/B2</option>
            <option value="Renovación de pasaporte">Renovación de pasaporte</option>
            <option value="Reprogramar citas">Reprogramar citas</option>
            <option value="Asesoría personalizada">Asesoría personalizada</option>
        </select>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block text-white font-medium mb-2">
            Nombre
        </label>
        <input
            type="text"
            name="name"
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
            name="email"
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
            name="phone"
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
            name="message"
            id="message"
            placeholder="Escribe tu mensaje aquí"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 bg-slate-900 text-white"
            rows={4}
        ></textarea>
        </div>
        <button
        type="submit"
        className="w-full bg-[#024383] text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
        Enviar
        </button>
    </form>
  );
}
