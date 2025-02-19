"use client"
import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  text: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="absolute inset-0 w-full h-1/2 overflow-hidden z-0">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={`Carousel image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 text-lg text-white bg-gray-600/60 bg-opacity-50 p-2 rounded text-center"
                >
                  {item.text}
                </motion.p>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M70 20 L30 50 L70 80" stroke="white" strokeWidth="5" fill="none" />
</svg>



      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 20 L70 50 L30 80" stroke="white" strokeWidth="5" fill="none" />
</svg>

      </button>
    </div>
  );
};

export default Carousel;
