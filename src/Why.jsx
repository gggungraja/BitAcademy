import { useEffect } from "react";
import { motion } from "framer-motion";

// CSS untuk animasi
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0) translateX(0) rotate(0); }
    25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
    50% { transform: translateY(-35px) translateX(-10px) rotate(180deg); }
    75% { transform: translateY(-20px) translateX(15px) rotate(270deg); }
    100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
  
  @keyframes widthGrow {
    0% { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }
  
  .animate-widthGrow {
    animation: widthGrow 1.5s ease-in-out infinite alternate;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

// Komponen untuk particle
const Particle = ({ index }) => {
  const randomDuration = Math.random() * 10 + 15;

  const particleVariants = {
    animate: {
      y: [0, -20, -35, -20, 0],
      x: [0, 10, -10, 15, 0],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      key={index}
      className="particle rounded-full bg-yellow-500/30 blur-sm absolute"
      style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5,
      }}
      variants={particleVariants}
      animate="animate"
    />
  );
};

const WhyJoinBitAcademy = () => {
  useEffect(() => {
    // Menambahkan styles untuk animasi
    const styleEl = document.createElement("style");
    styleEl.textContent = animationStyles;
    document.head.appendChild(styleEl);

    // Cleanup saat komponen di-unmount
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const features = [
    {
      title: "20+ Modul Video Pembelajaran yang Terstruktur",
      text: "Materi trading terlengkap yang tidak akan kamu temukan di tempat lain.",
      image: "/modul.webp",
      imageAlt: "Modul Video Pembelajaran",
    },
    {
      title: "Mentor Berpengalaman",
      text: "Berhasil membimbing banyak trader dari pemula hingga sukses menghasilkan profit konsisten.",
      image: "/mentor.webp",
      imageAlt: "Mentor Berpengalaman",
      reverse: true,
    },
    {
      title: "Market Update Rutin",
      text: "Dapatkan update informasi dan riset token crypto berpotensi 2-3x lebih cepat dari pasar.",
      image: "/update.webp",
      imageAlt: "Market Update Rutin",
    },
  ];

  // Animasi variants untuk Framer Motion
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const pingVariants = {
    ping: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const titleLineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="w-full bg-transparent py-12 overflow-hidden relative"
      id="benefit"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Divider dengan Animasi */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto mb-16 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Garis glowing dengan efek pulse */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm opacity-80"
            variants={glowingLineVariants}
            animate="pulse"
          ></motion.div>

          {/* Elemen dekoratif tambahan */}
          <motion.div
            className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-yellow-500 blur-md opacity-60"
            variants={pingVariants}
            animate="ping"
          ></motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full bg-yellow-500 blur-md opacity-60"
            variants={pingVariants}
            animate="ping"
            style={{ animationDelay: "1s" }}
          ></motion.div>

          {/* Judul Section dengan animasi */}
          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kenapa join
            </motion.h2>
            <div className="inline-block relative">
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-yellow-500 tracking-wide mt-2 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Bit Academy Plus?
              </motion.h2>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                variants={titleLineVariants}
                initial="hidden"
                whileInView="visible"
              ></motion.span>
            </div>
          </div>
        </motion.div>

        {/* Grid Modul dengan animasi staggered */}
        <motion.div
          className="grid gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`group flex ${
                item.reverse
                  ? "md:flex-row-reverse flex-col-reverse"
                  : "md:flex-row flex-col"
              } items-center bg-gradient-to-br from-[#2c211a] to-[#1a150f] rounded-xl p-6 border border-[#4b412a] shadow-lg h-full transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,193,7,0.6)] hover:border-[#FFC107] relative overflow-hidden`}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(255,193,7,0.6)",
                borderColor: "#FFC107",
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <div className="md:w-1/2 w-full text-white md:px-6 mb-4 md:mb-0 z-10 relative">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-[#FFC107] leading-snug"
                  whileHover={{ x: 8, transition: { duration: 0.5 } }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mt-4 text-gray-300 text-sm"
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.5 },
                  }}
                >
                  {item.text}
                </motion.p>

                {/* Animated button/CTA */}
                <div className="mt-6">
                  <motion.a
                    href="#modul"
                    className="px-6 py-2 bg-transparent border border-yellow-500/50 text-yellow-500 rounded-full text-sm inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{
                      backgroundColor: "rgba(255,193,7,0.1)",
                      transition: { duration: 0.3 },
                    }}
                    whileInView={{
                      opacity: [0, 1],
                      y: [20, 0],
                      transition: { duration: 0.5, delay: 0.3 },
                    }}
                  >
                    Pelajari Lebih Lanjut
                  </motion.a>
                </div>
              </div>

              <div className="md:w-1/2 w-full flex justify-center items-center z-10 relative">
                <motion.div
                  className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                    transition: { duration: 0.7 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1, transition: { duration: 0.5 } }}
                  ></motion.div>
                  <motion.img
                    src={item.image}
                    alt={item.imageAlt}
                    className="object-cover w-full h-full"
                    whileHover={{
                      filter: "brightness(1.1)",
                      transition: { duration: 0.7 },
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles background effect */}
        <div className="particles-container absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinBitAcademy;
