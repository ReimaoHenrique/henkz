"use client";
import Link from "next/link";
import { Calendar, Users, Music, Globe } from "lucide-react";
import styles from "./Menu.module.css";

const menuItems = [
  { icon: Calendar, label: "Agenda", href: "/agenda" },
  { icon: Users, label: "Contatos", href: "/contatos" },
  { icon: Music, label: "Shows", href: "/shows" },
  { icon: Globe, label: "Redes Sociais", href: "/redes-sociais" },
];

export default function Menu(): JSX.Element {
  return (
    <div className={styles.menu}>
      {menuItems.map(({ icon: Icon, label, href }) => (
        <Link key={label} href={href} passHref>
          <button
            className={styles.button}
            onClick={(e) => {
              if (!e.currentTarget.dataset.clicked) {
                e.preventDefault(); // Impede o redirecionamento no primeiro clique
                e.currentTarget.dataset.clicked = "true";
              }
            }}
          >
            <Icon size={24} />
            <span>{label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}
