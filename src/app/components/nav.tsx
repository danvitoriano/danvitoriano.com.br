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
    { name: "Eventos", href: "/eventos" },
    { name: "Loja", href: "/nilly" },
    { name: "Devs 40+", href: "/devs40mais" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre", href: "/about" },
    { name: "Iniciativas", href: "/iniciativas" },
  ];

  return (
    <nav className="float-start absolute left-0 top-0" ref={ref}>
      <button onClick={() => setNavbarOpen((prev) => !prev)} className="p-7">
        {navbarOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      <ul
        id="ul-menu"
        className={`absolute bg-white opacity-95 text-black w-screen left-0 h-screen text-center p-4 text-sm ${
          navbarOpen ? " show" : "hidden"
        }`}
      >
        {
          // @ts-ignore
          menuItems.map((item) => (
            <li key={item.name} className="p-4 text-lg">
              <Link href={item.href} onClick={() => setNavbarOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
