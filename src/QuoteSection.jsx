import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import quoteImage from './assets/quote.webp';

const QuoteSection = () => {
  // Hook untuk mendeteksi saat section masuk ke layar
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Varian animasi untuk gambar
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    // Tambahkan ref ke section untuk deteksi
    <section
      ref={ref}
      className="w-full bg-black flex justify-center items-center px-4 py-24 md:min-h-screen"
    >
      <div className="w-full max-w-4xl">
        {/* Ubah <img> menjadi <motion.img> dan tambahkan properti animasi */}
        <motion.img
          src={quoteImage}
          alt="Quote from Bit Academy"
          className="w-full h-auto object-contain"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </section>
  );
};

export default QuoteSection;
