/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "Sobre" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contatos" },
];

function Navbar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed rounded-3xl top-5 left-1/2 transform -translate-x-1/2 bg-[#0F0101CC] z-50">
      <nav className="flex items-center justify-between max-w-screen-lg mx-auto p-4">
        {/* Clique na logo abre e fecha o menu no mobile */}
        <Link
          href="/"
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <img
            className="h-12 w-auto"
            src="/images/navbar.png"
            alt="Logo da empresa"
          />
        </Link>

        {/* Logo no desktop (sem funcionalidade de abrir menu) */}
        <Link href="/" className="hidden md:flex items-center">
          <img
            className="h-10 w-auto"
            src="/images/navbar.png"
            alt="Logo da empresa"
          />
        </Link>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden border-t border-[#0F0101]"
          >
            <div className="flex flex-col items-center bg-[#0F0101CC]">
              {navLinks.map((item) => {
                const isActive = item.path === pathname;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      className={`${
                        isActive ? "text-blue-500" : "text-white"
                      } hover:text-gray-700 cursor-pointer py-2`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
