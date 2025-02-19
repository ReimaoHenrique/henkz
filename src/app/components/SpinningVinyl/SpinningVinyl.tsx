"use client";
import React from "react";
import Image from "next/image";
import styles from "./VinylDisc.module.css";

const SpinningVinyl: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundSquare}></div>
      <div className={styles.vinylContainer}>
        <Image
          src="/images/vinyl-disc.png"
          alt="Vinyl Disc"
          width={50}
          height={50}
          className={styles.vinylDisc}
        />
      </div>
    </div>
  );
};

export default SpinningVinyl;
