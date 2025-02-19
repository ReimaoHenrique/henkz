"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  text: string;
  img: string;
  link: string;
}

const Card: FC<CardProps> = ({ text, img, link }) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const handleTouchStart = () => {
    setShowText(true);
  };

  const handleTouchEnd = () => {
    setShowText(false);
  };

  return (
    <Link href={link}>
      <motion.div
        className="relative w-80 border rounded-lg overflow-hidden shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-80">
          <Image src={img} alt="Card Image" layout="fill" objectFit="cover" />
        </div>
        {showText && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-black">{text}</p>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export default Card;
