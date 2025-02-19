"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./CardEvento.module.css";

interface ClientCardProps {
  name: string;
  review: string;
  star: number;
  photoService: string[];
  eventLink: string;
}

const CardEvento: React.FC<ClientCardProps> = ({
  name,
  review,
  star,
  photoService,
  eventLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);

  const handleClick = () => setIsExpanded(!isExpanded);
  const handlePhotoClick = (photo: string) => setFullscreenPhoto(photo);
  const handleFullscreenClick = () => setFullscreenPhoto(null);

  return (
    <>
      {isExpanded && (
        <div className={styles.cardOverlay} onClick={handleClick} />
      )}
      {fullscreenPhoto && (
        <div className={styles.fullscreenPhoto} onClick={handleFullscreenClick}>
          <Image
            src={fullscreenPhoto}
            alt="Fullscreen"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}

      <motion.div
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
        onClick={handleClick}
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.05 : 1 }}
      >
        {/* Link precisa envolver um <a> ou um <div> */}
        <Link href={eventLink} passHref>
          <div className={styles.cardLink}>
            {/* Foto do evento */}
            {photoService.length > 0 && (
              <div className={styles.cardImageContainer}>
                <Image
                  src={photoService[0]}
                  alt="Evento"
                  width={300}
                  height={200}
                  className={styles.cardMainImage}
                />
              </div>
            )}

            {/* Conteúdo do cartão */}
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>{name}</div>
              <div className={styles.cardReview}>{review}</div>
              <div className={styles.cardStars}>
                {"★".repeat(star)}
                {"☆".repeat(5 - star)}
              </div>
            </div>

            {/* Fotos adicionais */}
            <div className={styles.cardAdditionalPhotos}>
              {photoService.slice(1).map((photo, index) => (
                <Image
                  key={index}
                  src={photo}
                  alt={`Service ${index}`}
                  width={80}
                  height={80}
                  className={styles.additionalPhoto}
                  onClick={() => handlePhotoClick(photo)}
                />
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default CardEvento;
