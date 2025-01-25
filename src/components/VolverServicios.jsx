'use client'
import { useRouter } from "next/navigation"
export default function Volver() {
    const router = useRouter();
    return(
        <div className="mt-8">
          <button
            onClick={() => router.push('/servicios')}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Volver a Servicios
          </button>
        </div>
    )
}