"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=557182580141&text=Gostaria de saber mais sobre os eventos"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <motion.div
        className={styles["button-container"]}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={styles["icon-container"]}>
          <Image
            src="/images/whatsapp-icon.svg"
            alt="WhatsApp Icon"
            width={42}
            height={42}
          />
        </div>
      </motion.div>
    </a>
  );
};

export default WhatsAppButton;
