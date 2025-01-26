import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

 

  return (
    <nav className="md:w-auto z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        {/* <Link href="/">
          <span className="text-2xl font-bold text-blue-600 cursor-pointer">Sevaviajar</span>
        </Link> */}

        {/* Toggle Button for Mobile */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Fullscreen Menu */}
        <div
          className={`fixed inset-0 md:bg-white bg-slate-900 transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:translate-x-0 md:flex md:items-end`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-0 md:space-x-8 md:flex-row">
            <li>
              <Link href="/acerca">
                <span
                  className="md:text-[#024383] text-white hover:underline font-medium text-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Acerca
                </span>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <span
                  className="md:text-[#024383] text-white hover:underline font-medium text-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <span
                  className="md:text-[#024383] text-white hover:underline font-medium text-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </span>
              </Link>
            </li>
            <li>
              <Link href="/preguntas-frecuentes" className='bg-[#024383] p-2 rounded-md hover:border-[#024383] hover:border-solid hover:border-2 hover:bg-transparent transition-colors'>
                <span
                  className="text-white md:hover:text-[#024383] font-medium text-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Preguntas Frecuentes
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
