import { useState, useEffect } from "react";
import MembershipForm from "./MembershipForm";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MembershipSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  // Controls for animations
  const controls = useAnimation();
  const titleControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Define the packages and their prices
  const packages = {
    "1 Bulan": 149000,
    "3 Bulan": 349000,
    "6 Bulan": 599000,
    "1 Tahun": 999000,
  };

  // Animate elements when they come into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      titleControls.start("visible");
    }
  }, [controls, inView, titleControls]);

  // Handle click on "Gabung Member" button
  const handleGabungClick = (paket) => {
    setSelectedPaket(paket);
    setShowForm(true);
  };

  // Close the form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Glowing line animation
  const glowVariants = {
    initial: { width: "0%", opacity: 0 },
    animate: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section
        className="w-full bg-transparent py-16 overflow-hidden"
        id="daftar"
        ref={ref}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Divider Elegan */}
          <motion.div
            className="relative w-full max-w-6xl mx-auto mb-16"
            initial="hidden"
            animate={titleControls}
            variants={titleVariants}
          >
            {/* Garis glowing dengan animasi */}
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm opacity-80"
              initial="initial"
              animate="animate"
              variants={glowVariants}
            ></motion.div>

            {/* Judul Section */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Daftar Menjadi
              </motion.h2>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-yellow-500 tracking-wide mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Member Sekarang!
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-gray-300 text-lg">
              Jadi member kita sekarang untuk menjadi 7% yang berhasil trading
              crypto.
            </p>

            {/* Avatar Group with staggered animation */}
            <motion.div
              className="flex justify-center items-center mt-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {["/nft1.webp", "/nft2.webp", "/nft3.webp", "/nft4.webp"].map(
                  (src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-gray-900"
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                    />
                  )
                )}
              </div>
              <motion.span
                className="ml-3 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Join 1000+ Traders lain
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Pricing Cards Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* 1 Bulan Card */}
            <motion.div
              className={`bg-black bg-opacity-60 border border-[#4b412a] rounded-xl overflow-hidden transition-all duration-300 ${
                hoverCard === "1 Bulan"
                  ? "shadow-lg shadow-yellow-900/30 border-yellow-900/30"
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoverCard("1 Bulan")}
              onHoverEnd={() => setHoverCard(null)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center text-white">
                  1 Bulan
                </h3>
                <div className="mt-4 text-center">
                  <p className="text-red-500 line-through text-lg">Rp250.000</p>
                  <motion.p
                    className="text-3xl font-bold text-white mt-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    Rp149.000
                  </motion.p>
                  <motion.div
                    className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mt-2"
                    initial={{ rotate: -5 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.1,
                      transition: { duration: 0.2, yoyo: Infinity },
                    }}
                  >
                    40% DISC
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.button
                    onClick={() => handleGabungClick("1 Bulan")}
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition-all duration-300"
                    style={{
                      boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gabung Member
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* 3 Bulan Card */}
            <motion.div
              className={`bg-black bg-opacity-60 border border-[#4b412a] rounded-xl overflow-hidden transition-all duration-300 ${
                hoverCard === "3 Bulan"
                  ? "shadow-lg shadow-yellow-900/30 border-yellow-900/30"
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoverCard("3 Bulan")}
              onHoverEnd={() => setHoverCard(null)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center text-white">
                  3 Bulan
                </h3>
                <div className="mt-4 text-center">
                  <p className="text-red-500 line-through text-lg">Rp777.000</p>
                  <motion.p
                    className="text-3xl font-bold text-white mt-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    Rp349.000
                  </motion.p>
                  <motion.div
                    className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mt-2"
                    initial={{ rotate: -5 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.1,
                      transition: { duration: 0.2, yoyo: Infinity },
                    }}
                  >
                    55% DISC
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.button
                    onClick={() => handleGabungClick("3 Bulan")}
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition-all duration-300"
                    style={{
                      boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gabung Member
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* 6 Bulan Card */}
            <motion.div
              className={`bg-black bg-opacity-60 border border-[#4b412a] rounded-xl overflow-hidden transition-all duration-300 ${
                hoverCard === "6 Bulan"
                  ? "shadow-lg shadow-yellow-900/30 border-yellow-900/30"
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoverCard("6 Bulan")}
              onHoverEnd={() => setHoverCard(null)}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center text-white">
                  6 Bulan
                </h3>
                <div className="mt-4 text-center">
                  <p className="text-red-500 line-through text-lg">
                    Rp1.554.000
                  </p>
                  <motion.p
                    className="text-3xl font-bold text-white mt-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    Rp599.000
                  </motion.p>
                  <motion.div
                    className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mt-2"
                    initial={{ rotate: -5 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.1,
                      transition: { duration: 0.2, yoyo: Infinity },
                    }}
                  >
                    60% DISC
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.button
                    onClick={() => handleGabungClick("6 Bulan")}
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition-all duration-300"
                    style={{
                      boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gabung Member
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* 1 Tahun Card - Best Value */}
            <motion.div
              className={`bg-gradient-to-b from-yellow-600 to-yellow-500 border border-yellow-400 rounded-xl overflow-hidden transition-all duration-300 relative ${
                hoverCard === "1 Tahun"
                  ? "shadow-lg shadow-yellow-500/50 border-yellow-300"
                  : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoverCard("1 Tahun")}
              onHoverEnd={() => setHoverCard(null)}
            >
              <motion.div
                className="absolute -right-12 top-5 rotate-45 bg-red-600 text-white text-xs font-bold py-1 px-12"
                animate={{
                  backgroundColor: ["#dc2626", "#ef4444", "#dc2626"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                BEST VALUE
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center text-white">
                  1 Tahun
                </h3>
                <div className="mt-4 text-center">
                  <p className="text-gray-300 line-through text-lg">
                    Rp3.108.000
                  </p>
                  <motion.p
                    className="text-3xl font-bold text-white mt-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    Rp999.000
                  </motion.p>
                  <motion.div
                    className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mt-2"
                    initial={{ rotate: -5 }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.1,
                      transition: { duration: 0.2, yoyo: Infinity },
                    }}
                  >
                    70% DISC
                  </motion.div>
                </div>
                <div className="mt-6">
                  <motion.button
                    onClick={() => handleGabungClick("1 Tahun")}
                    className="w-full py-3 bg-white hover:bg-gray-200 text-yellow-600 rounded-lg font-bold transition-all duration-300"
                    style={{
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gabung Member
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="mt-16 bg-black bg-opacity-60 border border-[#4b412a] rounded-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="space-y-6">
              {[
                "Akses 20+ modul video lengkap dari basic hingga pro untuk membangun skill trading dan investasi.",
                "Dibimbing langsung oleh mentor berpengalaman lebih dari 5 tahun di market.",
                "Dapatkan market update, outlook, dan informasi riset mendalam setiap hari.",
                "Gratis akses ke webinar dan seminar eksklusif dari Bit Academy.",
                "Ketahui coin andalan para mentor lengkap dengan riset fundamental, on-chain, dan technical.",
                "Mentor lebih terbuka untuk menjawab pertanyaan, berbagi ilmu, strategi, dan pengalaman.",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="bg-yellow-500 rounded-full p-1 mt-1"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-gray-300 text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Form Modal with Animation */}
      <AnimatePresence>
        {showForm && selectedPaket && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              <MembershipForm
                paket={selectedPaket}
                harga={packages[selectedPaket]}
                onClose={handleCloseForm}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MembershipSection;
