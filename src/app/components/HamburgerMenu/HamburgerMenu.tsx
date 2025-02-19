"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.container} ref={menuRef}>
      {/* Botão do Menu */}
      <motion.button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </motion.button>

      {/* Menu Deslizante */}
      {isOpen && (
        <motion.div
          className={styles.menu}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href="/agenda"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Agenda
          </Link>
          <Link
            href="/contatos"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Contatos
          </Link>
          <Link
            href="/shows"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Shows
          </Link>
          <Link
            href="/redes"
            className={styles.link}
            onClick={() => setIsOpen(false)}
          >
            Redes Sociais
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
