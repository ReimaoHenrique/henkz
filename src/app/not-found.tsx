// pages/404.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SpinningVinyl from "./components/SpinningVinyl/SpinningVinyl";

export default function Custom404() {
  return (
    // This is the 404 page
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <SpinningVinyl />
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <p className="text-lg mt-2">Oops! Página não encontrada.</p>

      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/">
          <button className="px-6 py-3 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition">
            Voltar para a Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
