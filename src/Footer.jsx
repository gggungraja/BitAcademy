import { motion } from "framer-motion";
import { useState } from "react";
import Logo from './assets/logo.webp';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialIconVariants = {
    hover: (i) => ({
      scale: 1.2,
      y: -5,
      rotate: [0, 10, -10, 0],
      transition: {
        rotate: {
          repeat: 0,
          duration: 0.5,
        },
      },
    }),
    tap: { scale: 0.9 },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [0.9, 1.05, 0.9],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const waveAnimationVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 0%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-yellow-950 pt-16 pb-8 overflow-hidden">
      {/* Animated gradient line at the top */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent blur-sm"
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 0.8, width: "100%" }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23CC5500' fill-opacity='1' d='M0,224L60,213.3C120,203,240,181,360,160C480,139,600,117,720,112C840,107,960,117,1080,138.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-x",
        }}
        variants={waveAnimationVariants}
        animate="animate"
      />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Column 1 - About */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <img src={Logo} alt="Logo" className="h-10 w-auto mr-3" />
            </div>
            <p className="text-gray-400 mb-6">
              Komunitas premium trading cryptocurrency dengan analisis mendalam
              dan sinyal terpercaya di setiap kondisi pasar.
            </p>
            <div className="flex space-x-4">
              {[
                // --- DAFTAR IKON & LINK SOSIAL MEDIA DIPERBARUI DI SINI ---
                {
                  name: "Discord",
                  href: "https://discord.gg/qTjsNNgWzn",
                  icon: (
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.283a18.566 18.566 0 0 0-5.487 0c-.164-.398-.4-.895-.608-1.283a.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.041.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/bitacademycom/",
                  // --- IKON INSTAGRAM DIKEMBALIKAN KE VERSI STANDAR ---
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
                {
                  name: "Email",
                  href: "mailto:bitacademy77@gmail.com",
                  // --- IKON EMAIL DIKEMBALIKAN KE BENTUK AMPLOP ---
                  icon: (
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/6282266330863",
                  icon: (
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42s2.41 3.63 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.07-.39-2.04-1.26-.75-.68-1.26-1.52-1.41-1.78-.15-.25-.02-.39.11-.5.12-.11.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.55-.42-.15 0-.31-.02-.48-.02s-.43.06-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.68 4.27 3.77 2.54 1.1 2.54.74 2.99.71.45-.03 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
                  ),
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.name} // Baik untuk aksesibilitas
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Menu
            </motion.h3>
            <ul className="space-y-4">
              {[
                { href: "#beranda", label: "Beranda" },
                { href: "#benefit", label: "Benefit" },
                { href: "#modul", label: "Modul" },
                { href: "#komunitas", label: "Komunitas" },
                { href: "#coinpick", label: "Coinpick" },
                { href: "#video", label: "Video" },
                { href: "#daftar", label: "Daftar" },
                { href: "#faq", label: "FAQ" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="inline-block w-0 h-0.5 bg-yellow-500 mr-0 group-hover:w-2 group-hover:mr-2"
                      transition={{ duration: 0.2 }}
                    />
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Us */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hubungi Kami
            </motion.h3>
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  text: "bitacademy77@gmail.com",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  text: "+62 822-6633-0863",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  ),
                  text: "discord.gg/qTjsNNgWzn",
                },
              ].map((contact, i) => (
                <motion.div
                  key={i}
                  className="flex items-start"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-yellow-600/20 rounded-full p-2 mr-3"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(202, 138, 4, 0.3)",
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-yellow-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {contact.icon}
                    </svg>
                  </motion.div>
                  <span className="text-gray-400 mt-1">{contact.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative inline-block"
                variants={glowVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div className="absolute inset-0 bg-yellow-500 rounded-lg blur-md opacity-50" />
                <a
                  href="#daftar"
                  className="relative inline-flex items-center px-5 py-3 bg-gradient-to-br from-yellow-500 to-yellow-700 text-white rounded-lg font-bold transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                  />
                  <motion.svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </motion.svg>
                  <span className="relative z-10">Gabung Member</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="border-t border-gray-800"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer - Copyright */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-500 text-sm mb-4 md:mb-0"
              whileHover={{ color: "#EAB308" }}
              transition={{ duration: 0.2 }}
            >
              &copy; 2025 Bit Academy. All rights reserved.
            </motion.p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map(
                (link, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="text-gray-500 hover:text-yellow-400 text-sm transition-colors"
                    whileHover={{ scale: 1.05, color: "#EAB308" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
