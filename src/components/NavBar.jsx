import { useState } from 'react';
import NavLink from './NavLink';


 const links = [
    { name: 'Acerca', href: '/acerca' },
    { name: 'Servicios', href: '/servicios'},
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:w-auto z-50">
      <NavLink links={links} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
  );
}
