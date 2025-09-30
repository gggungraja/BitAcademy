import React from "react";
import { motion } from "framer-motion";

const CommunitySection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
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
      boxShadow: "0 0 50px #FFA500",
      backgroundColor: "#FFB700",
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

  const glowingCircleVariants = {
    animate: {
      boxShadow: [
        "0 0 20px #FFA50040",
        "0 0 40px #FFA50070",
        "0 0 20px #FFA50040",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
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

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      className="w-full bg-transparent py-20 overflow-hidden relative"
      id="komunitas"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-500/20 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -1,
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

        {/* Animated light traces */}
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute w-1 h-32 bg-gradient-to-b from-yellow-500/30 to-transparent rounded-full blur-sm top-1/4 left-[10%]"
            animate={{
              height: ["50px", "200px", "50px"],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-1 h-24 bg-gradient-to-b from-yellow-500/30 to-transparent rounded-full blur-sm top-1/2 right-[15%]"
            animate={{
              height: ["40px", "180px", "40px"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Divider + Judul dengan animasi */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-sm opacity-80"
            variants={glowingLineVariants}
            animate="pulse"
          />

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
          />
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
          />

          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
              custom={1}
              variants={textRevealVariants}
            >
              Masuk ke Discord
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-yellow-400 tracking-wide mt-2"
              custom={2}
              variants={textRevealVariants}
            >
              Komunitas Belajar Crypto
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-yellow-500 rounded-full mx-auto mt-4"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Content with image and text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Gambar dengan animasi */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            {/* Glowing circle behind image */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-yellow-500/10 blur-xl -z-10"
              variants={glowingCircleVariants}
              animate="animate"
            />

            {/* Image with floating animation */}
            <motion.div
              className="relative z-10"
              variants={floatingAnimation}
              animate="animate"
            >
              <img
                src="/komunitas.webp"
                alt="Ilustrasi Komunitas"
                className="w-full h-auto object-contain mx-auto drop-shadow-[0_5px_15px_rgba(255,165,0,0.25)]"
              />
            </motion.div>

            {/* Discord icon floating elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#5865F2] rounded-full flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.8,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 71 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Text dengan animasi */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="relative">
              {/* Subtle glow behind heading */}
              <div className="absolute -inset-1 bg-yellow-500/20 blur-lg opacity-70 rounded-lg" />

              <motion.h3
                className="relative text-3xl md:text-4xl font-bold text-white mb-6 leading-snug"
                variants={pulseAnimation}
                animate="animate"
              >
                Akses Komunitas Aktif Tentang
                <br />
                <motion.span
                  className="text-yellow-400 inline-block"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(255,165,0,0.3)",
                      "0 0 15px rgba(255,165,0,0.6)",
                      "0 0 5px rgba(255,165,0,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  INVESTASI CRYPTO
                </motion.span>
              </motion.h3>
            </div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Bergabunglah dengan komunitas belajar crypto yang aktif, berbagi
                insight, tips investasi, dan update market terbaru setiap hari.
                Temukan peluang baru bersama komunitas yang solid!
              </p>

              {/* Feature points with icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: "💬", text: "Diskusi harian market crypto" },
                  { icon: "📊", text: "Sharing analisa & sinyal trading" },
                  { icon: "🧠", text: "Insight dari para expert" },
                  { icon: "🚀", text: "Info early gems & moonshot" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-yellow-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(255,165,0,0.1)",
                      borderColor: "rgba(255,165,0,0.4)",
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tombol CTA dengan animasi */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative inline-block"
            variants={buttonVariants}
          >
            {/* Glowing effect behind button */}
            <motion.div
              className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.a
              href="https://discord.gg/qTjsNNgWzn"
              className="inline-block px-10 py-5 text-white font-bold text-lg rounded-lg"
              style={{
                backgroundColor: "#FFA500",
                borderRadius: "12px",
                boxShadow: "0 0 30px #FFA500",
              }}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="white"
                  />
                </svg>
                Gabung Komunitas Discord!
              </span>
            </motion.a>

            {/* Small floating members indicator */}
            <motion.div
              className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              whileHover={{ scale: 1.1 }}
            >
              5000+ Member
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
