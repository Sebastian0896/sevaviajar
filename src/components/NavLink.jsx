import React from 'react'
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';


export default function NavLink ({links, isOpen, setIsOpen}) {

    const toggleMenu = () => setIsOpen(!isOpen);
    const pathName = usePathname();
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-6">

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
          className={`fixed inset-0 md:bg-white bg-slate-900 md:text-[#024383] text-white transition-transform transform ${
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
            {links.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                  >
                   <span className={clsx("md:text-[#024383] text-white  font-medium text-md cursor-pointer hover:border-b-2 hover:border-solid hover:border-[#EB3238] pb-1", {
                    "text-[#024383] border-b-2 border-solid border-[#EB3238]" : pathName === link.href
                   })}
                  onClick={() => setIsOpen(false)}>
                    {link.name}
                   </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}
