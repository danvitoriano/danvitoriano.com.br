"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // close menu when clicking outside
  const ref: any = useRef();
  useEffect(() => {
    const handleClick = (event: any) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navbarOpen]);

  // menu items
  const menuItems = [
    { name: "Iniciativas", href: "/iniciativas" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Sorteios", href: "/sorteios" },
    { name: "Loja", href: "/nilly" },
    { name: "Contato", href: "/contact" },
    { name: "Sobre", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Eventos", href: "/eventos" },
    { name: "Tech Tv", href: "/techtv" },
    { name: "Tech Television", href: "/techtelevision" },
    { name: "Devs40mais", href: "/devs40mais" },
  ];

  return (
    <nav className="float-start absolute left-0 top-0 z-50" ref={ref}>
      <button 
        onClick={() => setNavbarOpen((prev) => !prev)} 
        className="p-7 transition-all duration-300 hover:scale-110 hover:bg-gray-100 rounded-full"
      >
        {navbarOpen ? (
          <RiCloseLine className="transition-transform duration-300 rotate-90" />
        ) : (
          <RiMenuLine className="transition-transform duration-300" />
        )}
      </button>
      <ul
        id="ul-menu"
        className={`absolute bg-white text-black w-screen left-0 h-screen text-center p-4 text-sm transition-all duration-500 ${
          navbarOpen ? "opacity-95 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <li 
            key={item.name} 
            className={`p-4 text-lg transition-all duration-500 hover:scale-110 hover:text-indigo-600 ${
              navbarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: navbarOpen ? `${index * 50}ms` : '0ms' }}
          >
            <Link 
              href={item.href} 
              onClick={() => setNavbarOpen(false)}
              className="block transition-all duration-300 hover:font-semibold"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

