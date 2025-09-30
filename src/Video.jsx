import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const WhyJoinBitAcademy = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Video ID can be changed as needed
  const youtubeVideoId = "PoFGST3pCQ0"; // Changed from "RQz8z2RaKg4"

  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("daftar");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle visibility detection for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  // Handle video play/pause functionality
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      } else {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
        delayChildren: 0.1,
      },
    },
  };

  // Features data
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 01-4.763-1.44 7.178 7.178 0 004.69 5.5 7.17 7.17 0 004.763-5.5 48.45 48.45 0 01-4.69 1.44z" />
          <path d="M13.06 15.473a48.45 48.45 0 004.763-1.44 7.178 7.178 0 01-4.69 5.5 7.17 7.17 0 01-4.763-5.5 48.45 48.45 0 004.69 1.44z" />
        </svg>
      ),
      title: "Pembelajaran Praktis",
      description:
        "Dapatkan ilmu dan keahlian trading crypto secara langsung dari para ahli di bidangnya.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
      title: "Komunitas Eksklusif",
      description:
        "Bergabung dengan komunitas trader dan investor crypto yang saling mendukung dan berbagi informasi.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Analisis Pasar",
      description:
        "Akses analisis pasar crypto terkini dan strategi trading yang telah teruji.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-16 relative overflow-hidden"
      id="video"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c211a] to-[#0a0806] z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-yellow-500/20"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0.1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Golden light effect */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Divider + Judul */}
        <div className="relative w-full max-w-6xl mx-auto mb-16">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-sm opacity-80"
            variants={{
              hidden: { width: "0%", opacity: 0, x: "50%" },
              visible: {
                width: "100%",
                opacity: 0.8,
                x: "0%",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          />
          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-white tracking-wide"
              variants={fadeInUp}
            >
              Kenapa Harus
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 tracking-wide mt-2"
              variants={fadeInUp}
            >
              Join Bit Academy
            </motion.h2>
          </div>
        </div>

        {/* Video Section */}
        <motion.div className="max-w-4xl mx-auto mb-16" variants={fadeInUp}>
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: hovered
                ? "0 25px 50px -12px rgba(255, 202, 40, 0.3), 0 0 0 2px rgba(255, 202, 40, 0.4)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 202, 40, 0.2)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Video frame with animated border */}
            <div className="absolute inset-0 p-0.5 rounded-xl z-10 overflow-hidden">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              </div>
              <div className="absolute inset-0 bg-black rounded-xl m-0.5" />
            </div>

            {/* YouTube iframe with API enabled */}
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full z-20"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&origin=${window.location.origin}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title="Kenapa Harus Join Bit Academy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Custom Play Button Overlay */}
            <motion.div
              className={`absolute inset-0 flex items-center justify-center z-30 backdrop-blur-sm transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{
                background:
                  "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
              }}
              onClick={togglePlay}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <motion.button
                className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              <motion.div
                className="absolute -inset-4 rounded-full bg-yellow-400/20 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Video Caption/Description */}
          <motion.div className="mt-6 text-center" variants={fadeInUp}>
            <p className="text-gray-300 text-lg font-light">
              Pelajari lebih lanjut tentang manfaat dan keunggulan menjadi
              bagian dari komunitas Bit Academy.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.4 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#2d231e] to-[#151110] p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 202, 40, 0.15)",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 flex items-center justify-center mb-4 text-yellow-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol CTA dengan animasi - lebih cepat */}
        <div className="mt-20 text-center">
          <motion.a
            href="/coinpick"
            onClick={handleScroll}
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded-lg"
            style={{
              backgroundColor: "#FFC107",
              borderRadius: "12px",
              boxShadow: "0 0 30px #FFA500",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 }, // Jarak lebih pendek
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3, // Lebih cepat (sebelumnya 0.5)
                  type: "spring",
                  stiffness: 400, // Lebih kaku untuk gerakan lebih cepat (sebelumnya 300)
                  damping: 20, // Mengurangi damping untuk efek spring lebih cepat
                },
              },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(255, 193, 7, 0.8)",
              transition: { duration: 0.2 }, // Hover lebih responsif
            }}
            whileTap={{ scale: 0.95 }}
          >
            Gabung Sekarang!
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyJoinBitAcademy;
