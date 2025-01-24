'use client'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './NavBar';
const Header = () => {
    return(
      <>
      
        <header className="text-blue-600 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold"><Link href="/">
            <Image src="/logo.jpg" width={200} height={150} alt="Logo" />
          </Link></h1>
          {/* <nav>
            <ul className="flex space-x-4">
              <li><Link href="/acerca" className="hover:underline">Acerca</Link></li>
              <li><a href="/servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav> */}
        <Navbar />
        </div>
      </header>
      </>
    )
}

export  default Header;