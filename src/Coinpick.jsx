// src/Coinpick.jsx

import { motion } from "framer-motion";

const Coinpick = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 40px rgba(255, 193, 7, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const glowingLineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  // Data gambar Coinpick
  const coinpickImages = [
    { src: "/coinpick2.webp", alt: "Coinpick Bit Academy Edisi #1" },
    { src: "/coinpick1.webp", alt: "Coinpick Bit Academy Edisi #2" },
    { src: "/coinpick3.webp", alt: "Coinpick Bit Academy Edisi #3" },
    { src: "/coinpick4.webp", alt: "Coinpick Bit Academy Edisi #4" },
  ];

  return (
    <motion.section
      className="w-full bg-transparent py-16"
      id="coinpick"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-6xl mx-auto mb-16"
        >
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm opacity-80"
            variants={glowingLineVariants}
          ></motion.div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
              Contoh Coinpick
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 tracking-wide mt-2">
              Bit Academy
            </h2>
          </div>
        </motion.div>

        {/* Grid Gambar */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {coinpickImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full bg-black/30 rounded-lg border border-yellow-500/30 p-4"
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 0 20px #FFC107",
                transition: { duration: 0.3 },
              }}
            >
              <div className="aspect-auto w-full h-auto">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol CTA */}
        <motion.div variants={buttonVariants} className="mt-20 text-center">
          <motion.a
            href="/coinpick"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded-lg"
            style={{
              backgroundColor: "#FFC107",
              borderRadius: "12px",
              boxShadow: "0 0 30px #FFA500",
            }}
            whileHover="hover"
            whileTap="tap"
          >
            Lihat Semua Coinpick!
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Coinpick;
