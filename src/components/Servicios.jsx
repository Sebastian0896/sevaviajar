'use client'

import { useRouter } from 'next/navigation';
import servicios from '@/helpers/servicios';


export default function ServiciosComponente (){
    const router = useRouter();
    return(
    <section id="servicios" className="py-16 my-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#024383]">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4" key={index}>{servicio.icon}</div>
              <h3 onClick={() => router.push(`/servicios/${servicio.slug}`)} className="text-xl font-bold mb-2 underline underline-offset-2 hover:cursor-pointer">{servicio.title}</h3>
              <p className="text-gray-600">{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}