import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import WhyJoinBitAcademy from "./Why";
import ModulesCourse from "./Modules";
import CommunitySection from "./Komunitas";
import FAQ from "./FAQ";
import Video from "./Video";
import MembershipSection from "./MembershipSection";
import Footer from "./Footer";
import QuoteSection from "./QuoteSection";
import HeadlineSection from "./HeadlineSection";
import RupiahDeclineSection from "./RupiahDeclineSectionn";
import Coinpick from "./Coinpick";
import Testimoni from "./Testimoni";

// DATA FAQS DIPINDAHKAN KE LUAR KOMPONEN UNTUK PERFORMA LEBIH BAIK
const faqs = [
  {
    question: "Bagaimana sistem pembelajarannya?",
    answer:
      "Kamu akan diberikan akses ke member area. Pada member area, Kamu bisa akses 20+ video pembelajaran. Jadi tidak diberikan lewat Email per hari, atau lewat grup Discord. Kamu bisa pause dan ulang pembelajarannya kapanpun dimanapun.",
  },
  {
    question: "Apakah bisa diakses lewat HP ?",
    answer: "Ya, semua materi bisa diakses lewat HP, laptop, atau tablet.",
  },
  {
    question: "Saya gaptek & pemula",
    answer:
      "Tenang, materi disusun step-by-step agar mudah diikuti oleh pemula.",
  },
  {
    question: "Kalau bingung, gimana tanyanya?",
    answer:
      "Kamu bisa tanya lewat grup Discord atau forum diskusi yang disediakan.",
  },
  {
    question: "Live rutinnya lewat mana ?",
    answer:
      "Live session diadakan lewat Zoom atau Google Meet dan direkam untuk diputar ulang.",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const coinpickRef = useRef(null);
  const isCoinpickInView = useInView(coinpickRef, { once: false, amount: 0.1 });

  // Fungsi handleScroll tidak lagi diperlukan jika sudah menggunakan CSS scroll-behavior: smooth

  return (
    <div className="min-h-screen w-full bg-[#130b02] text-white flex flex-col relative">
      <nav
        className="w-full py-4 fixed top-0 z-50"
        style={{ backgroundColor: "#130b02" }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/logo.webp"
              alt="Bit Academy Logo"
              className="h-10 w-auto pr-3"
            />
          </div>
          <a
            href="#daftar"
            className="inline-block px-4 py-2 text-white text-center font-bold text-xs rounded-md transition-all duration-300"
            style={{
              backgroundColor: "#FFA500",
              borderRadius: "6px",
              boxShadow: "0 0 20px #FFC107",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 30px #FFC107")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 20px #FFC107")
            }
          >
            Gabung Sekarang!
          </a>
        </div>
      </nav>

      <HeadlineSection />
      <WhyJoinBitAcademy />
      <RupiahDeclineSection />
      <ModulesCourse />
      <CommunitySection />
      <Coinpick />
      <Testimoni />
      <Video />
      <MembershipSection />
      <FAQ />
      <QuoteSection />
      <Footer />
    </div>
  );
}

export default App;
