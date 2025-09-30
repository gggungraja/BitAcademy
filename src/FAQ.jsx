import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function FAQ() {
  const faqData = [
    {
      question: "Bagaimana sistem pembelajarannya?",
      answer:
        "Kamu akan diberikan akses ke member area. Pada member area, Kamu bisa akses 300+ video pembelajaran. Jadi tidak diberikan lewat Email per hari, atau lewat grup Discord. Kamu bisa pause dan ulang pembelajarannya kapanpun dimanapun.",
    },
    {
      question: "Apakah bisa diakses lewat HP?",
      answer:
        "Ya, semua pembelajaran dapat diakses melalui perangkat mobile. Platform kami responsif dan memberikan pengalaman belajar yang optimal baik di desktop maupun smartphone.",
    },
    {
      question: "Saya gaptek & pemula",
      answer:
        "Jangan khawatir! Materi pembelajaran kami disusun dari dasar hingga lanjutan. Pemula dan yang gaptek tetap bisa mengikuti karena instruksi yang jelas dan bertahap.",
    },
    {
      question: "Kalau bingung, gimana tanyanya?",
      answer:
        "Kami menyediakan forum diskusi di member area dan support melalui Discord. Tim kami akan membantu menjawab pertanyaan dan menyelesaikan masalah Anda secepatnya.",
    },
    {
      question: "Live rutinnya lewat mana?",
      answer:
        "Live session rutin diadakan melalui Discord. Jadwal live session akan diumumkan di member area dan melalui notifikasi email seminggu sebelum acara berlangsung.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const titleControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          titleControls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, titleControls]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  const plusMinusVariants = {
    plus: { rotate: 0 },
    minus: { rotate: 180, transition: { duration: 0.3 } },
  };

  return (
    <section className="w-full bg-transparent py-16" id="faq" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Title with animation */}
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
              Frequently Asked
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-yellow-500 tracking-wide mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Question
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* FAQ Items Container with Staggered Animation */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-black bg-opacity-60 border ${
                hoveredIndex === index
                  ? "border-yellow-500"
                  : "border-[#4b412a]"
              } rounded-xl overflow-hidden transition-all duration-300 shadow-lg ${
                hoveredIndex === index ? "shadow-yellow-900/40" : "shadow-none"
              }`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-white"
                  animate={{
                    color: hoveredIndex === index ? "#fcd34d" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.question}
                </motion.h3>

                <motion.div
                  className={`${
                    openIndex === index ? "bg-yellow-600" : "bg-yellow-500"
                  } rounded-full w-8 h-8 min-w-8 min-h-8 flex items-center justify-center shrink-0`}
                  whileHover={{
                    scale: 1.15,
                    rotate: openIndex === index ? 0 : 90,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-white text-lg font-bold"
                    variants={plusMinusVariants}
                    animate={openIndex === index ? "minus" : "plus"}
                  >
                    {openIndex === index ? "-" : "+"}
                  </motion.span>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      className="px-6 pb-6 pt-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.div className="bg-[#29251c] p-4 rounded-lg border-l-4 border-yellow-500">
                        <motion.p className="text-gray-200">
                          {item.answer}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-400">Ada pertanyaan lain?</span>
            <motion.a
              // --- PERUBAHAN UTAMA ADA DI BARIS INI ---
              href="https://wa.me/6282266330863"
              target="_blank" // Membuka link di tab baru
              rel="noopener noreferrer" // Praktik keamanan untuk link eksternal
              className="text-yellow-500 font-medium flex items-center gap-1 hover:text-yellow-400 transition-colors"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi kami
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 2,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
