import React from "react";
import { motion } from "framer-motion";

import smcImage from './assets/modul-smc.webp';
import ctiImage from './assets/modul-cti.webp';
import cdmImage from './assets/modul-cdm.webp';
import isImage from './assets/modul-is.webp';
import irmImage from './assets/modul-irm.webp';
import frImage from './assets/modul-fr.webp';
import trImage from './assets/modul-tr.webp';
import nrImage from './assets/modul-nr.webp';

const ModulesCourse = () => {
  // Data modul pembelajaran
  const courseModules = [
    {
      number: "1",
      title: "SMART MONEY CONCEPT",
      videoCount: "Video Pembelajaran Komplit tentang Smart Money Concept",
      description:
        "Modul ini membahas konsep dasar Smart Money, termasuk bagaimana institusi besar menggerakkan pasar dan bagaimana retail trader bisa mengikuti jejak mereka.",
      secondDescription:
        "Kamu akan mempelajari cara membaca struktur pasar, identifikasi likuiditas, dan memahami pergerakan harga dengan presisi tinggi menggunakan pendekatan Smart Money.",
      image: smcImage,
    },
    {
      number: "2",
      title: "CRYPTO TRADING INDICATORS",
      videoCount: "Video Materi Lengkap mengenai Indicator Trading pada Crypto",
      description:
        "Modul ini mengajarkan berbagai indikator teknikal penting dalam trading crypto, seperti RSI, MACD, Moving Averages, Bollinger Bands, dan lainnya.",
      secondDescription:
        "Kamu akan belajar kapan dan bagaimana menggunakan indikator tersebut untuk menemukan entry dan exit point yang lebih akurat dalam strategi tradingmu.",
      image: ctiImage,
    },
    {
      number: "3",
      title: "CRYPTO DERREVATIVE MARKET",
      videoCount: "Video Pembelajaran tentang Derrevative Market di Crypto",
      description:
        "Modul ini membahas pasar derivatif crypto seperti futures dan options. Kamu akan mempelajari cara kerja leverage dan margin serta risiko yang terlibat.",
      secondDescription:
        "Kamu juga akan diajarkan strategi trading di pasar derivatif, serta cara menggunakan platform seperti Binance Futures dan Bybit dengan aman dan efektif.",
      image: cdmImage,
    },
    {
      number: "4",
      title: "INVESTING STRATEGY",
      videoCount: "Video Materi Komplit tentang Strategi Investasi",
      description:
        "Pelajari berbagai strategi investasi jangka panjang dan pendek di dunia crypto, termasuk dollar cost averaging, value investing, dan momentum investing.",
      secondDescription:
        "Kamu akan memahami bagaimana memilih aset crypto yang potensial berdasarkan analisa fundamental dan teknikal untuk membangun portofolio yang tahan banting.",
      image: isImage,
    },
    {
      number: "5",
      title: "INVESTING RISK MANAGEMENT",
      videoCount: "Video Pembelajaran Lengkap tentang Risk Management",
      description:
        "Modul ini mengajarkan pentingnya manajemen risiko dalam investasi crypto. Kamu akan mempelajari cara mengelola portofolio dan menetapkan stop loss.",
      secondDescription:
        "Termasuk di dalamnya adalah teknik position sizing, diversifikasi, dan pengelolaan emosi agar Kamu bisa bertahan di pasar yang sangat volatil.",
      image: irmImage,
    },
    {
      number: "6",
      title: "FUNDAMENTAL RESEARCH",
      videoCount: "Video Materi tentang Fundamental Research pada Token Crypto",
      description:
        "Pelajari bagaimana melakukan riset fundamental terhadap proyek crypto: mulai dari whitepaper, tokenomics, tim pengembang, hingga roadmap proyek.",
      secondDescription:
        "Modul ini juga mengajarkan penggunaan tools seperti CoinMarketCap, Token Terminal, dan on-chain analytics untuk evaluasi mendalam.",
      image: frImage,
    },
    {
      number: "7",
      title: "TECHNICAL RESEARCH",
      videoCount: "Video Pembelajaran Komplit tentang Technical Research",
      description:
        "Modul ini mengajarkan cara membaca grafik harga, candlestick pattern, support & resistance, serta penggunaan charting tools seperti TradingView.",
      secondDescription:
        "Kamu juga akan belajar teknik analisa lanjutan seperti Fibonacci retracement, breakout strategy, dan trendline analysis.",
      image: trImage,
    },
    {
      number: "8",
      title: "NARRATIVE RESEARCH",
      videoCount: "Video Materi Lengkap mengenai Narrative Research",
      description:
        "Di modul ini, kamu akan belajar mengidentifikasi narasi besar yang sedang atau akan mendorong adopsi crypto, seperti DeFi, NFT, AI, dan Layer 2.",
      secondDescription:
        "Kamu akan mempelajari cara membaca tren makro, social sentiment, serta bagaimana menggunakan narasi untuk memilih aset dengan potensi pertumbuhan tinggi.",
      image: nrImage,
    },
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("daftar");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Variasi animasi untuk Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const glowingLineVariants = {
    pulse: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255,193,7,0.6)",
      borderColor: "#FFC107",
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const iconFloatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px #FFC107",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      className="w-full bg-transparent py-16 overflow-hidden relative"
      id="modul"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-500/10 blur-xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Divider dan Judul */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm opacity-80"
            variants={glowingLineVariants}
            animate="pulse"
          ></motion.div>

          {/* Dekoratif elements */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-yellow-500 blur-md opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-yellow-500 blur-md opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Modul Pembelajaran
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Grid Modul Timeline */}
        <motion.div
          className="grid gap-16 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {courseModules.map((module, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row gap-8 relative"
              variants={fadeInUp}
            >
              {/* Circle Nomor Modul */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600"
                style={{
                  boxShadow: "0 0 15px #FFC107",
                }}
                variants={circleVariants}
              >
                <motion.span
                  className="text-white text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {module.number}
                </motion.span>
              </motion.div>

              {/* Icon floating */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 -translate-y-14 z-10 text-3xl opacity-70"
                variants={iconFloatVariants}
                animate="animate"
              >
                {module.icon}
              </motion.div>

              {/* Garis Timeline */}
              {idx < courseModules.length - 1 && (
                <motion.div
                  // --- PERUBAHAN UTAMA ADA DI BARIS INI ---
                  className="absolute left-12 md:left-1/2 md:-translate-x-1/2 top-8 w-0.5 bg-gradient-to-b from-yellow-500 to-transparent"
                  style={{ height: "calc(100% + 4rem)" }}
                  variants={lineVariants}
                ></motion.div>
              )}

              {/* Gambar dengan hover effect */}
              <div className="md:w-1/2 w-full pl-20 md:pl-0 md:pr-16">
                <motion.div
                  className="relative w-full overflow-hidden rounded-lg border border-[#4b412a] shadow-lg bg-[#1a140d]"
                  style={{ paddingTop: "56.25%" }}
                  variants={imageVariants}
                  whileHover="hover"
                >
                  {/* Overlay Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent z-10 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <motion.img
                    src={module.image}
                    alt={`${module.title} preview`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1, transition: { duration: 0.6 } }}
                  />
                </motion.div>
              </div>

              {/* Deskripsi Content */}
              <motion.div
                className="md:w-1/2 w-full pl-24 md:pl-20"
                variants={contentVariants}
              >
                <motion.h3
                  className="text-3xl font-bold text-yellow-500 mb-3"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {module.title}
                </motion.h3>

                <motion.div
                  className="flex items-center mb-4 bg-yellow-500/10 p-2 rounded-lg inline-flex"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 193, 7, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="bg-yellow-500 bg-opacity-20 rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-yellow-400">
                    {module.videoCount}
                  </span>
                </motion.div>

                <motion.div
                  className="bg-[#1a150f]/80 border border-[#4b412a] rounded-lg p-4 hover:border-yellow-500/40 transition-colors duration-300"
                  whileHover={{
                    backgroundColor: "rgba(28, 25, 23, 0.9)",
                    borderColor: "rgba(255, 193, 7, 0.4)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.p
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
                  >
                    {module.description}
                  </motion.p>
                  <motion.p
                    className="text-gray-400"
                    initial={{ opacity: 0.7 }}
                    whileHover={{
                      opacity: 1,
                      color: "#FFC107",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {module.secondDescription}
                  </motion.p>
                </motion.div>

                {/* Tombol "Lihat Detail" dihapus dari sini */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="#daftar"
            onClick={handleScroll}
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded-lg"
            style={{
              backgroundColor: "#FFC107",
              borderRadius: "12px",
              boxShadow: "0 0 30px #FFA500",
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Mulai Belajar Sekarang!
          </motion.a>
        </motion.div>

        {/* Radial blur effect behind CTA */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ModulesCourse;
