"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CardEvento.module.css";
import Link from "next/link"; // Importando o Link

interface ClientCardProps {
  name: string;
  review: string;
  star: number;
  photoService: string[];
  eventLink: string; // Adicionando a propriedade 'eventLink' para receber o link do evento
}

const CardEvento: React.FC<ClientCardProps> = ({
  photoProfile,
  review,
  star,
  photoService,
  eventLink, // Recebendo o link do evento
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
          <img src={fullscreenPhoto} alt="Fullscreen" />
        </div>
      )}
      <motion.div
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
        onClick={handleClick}
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.1 : 1 }}
      >
        {/* Aqui é o Link que envolve o conteúdo do evento */}
        <Link href={eventLink} className={styles.cardLink}>
          {/* Foto do evento no topo */}
          {photoService.length > 0 && (
            <div className={styles.cardImageContainer}>
              <img
                src={photoService[0]}
                alt="Evento"
                className={styles.cardMainImage}
              />
            </div>
          )}

          {/* Conteúdo do cartão abaixo da imagem */}
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{name}</div>
            <div className={styles.cardReview}>{review}</div>
            <div className={styles.cardStars}>
              {"★".repeat(star)}
              {"☆".repeat(5 - star)}
            </div>
          </div>

          {/* Fotos adicionais abaixo do texto */}
          <div className={styles.cardAdditionalPhotos}>
            {photoService.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Service ${index}`}
                onClick={() => handlePhotoClick(photo)}
              />
            ))}
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default CardEvento;
