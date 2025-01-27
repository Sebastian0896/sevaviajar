'use client'
import { useRouter } from "next/navigation"
export default function Volver({volver}) {
    const router = useRouter();
    return(
        <div className="mt-8">
          <button
            onClick={() => router.push(`/${volver.toLocaleLowerCase()}`)}
            className="bg-[#024383] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
           ← Regresar a todos los {volver}
          </button>
        </div>
    )
}