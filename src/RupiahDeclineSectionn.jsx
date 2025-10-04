// src/RupiahDeclineSection.jsx

import { useState, useEffect, useRef } from "react"; // <-- Pastikan useState & useEffect diimpor
import { Line } from "react-chartjs-2";
import { motion, useInView } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

// Pindahkan data & options ke luar agar tidak dibuat ulang setiap render
const initialChartData = {
  labels: ["1980", "1990", "2000", "2010", "2020", "2024"],
  datasets: [
    {
      label: "Nilai Tukar IDR per USD",
      data: [625, 1900, 8400, 9000, 14500, 16400],
      borderColor: "#FFC107",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(255, 193, 7, 0.5)");
        gradient.addColorStop(1, "rgba(255, 193, 7, 0)");
        return gradient;
      },
      pointRadius: 5,
      pointBackgroundColor: "#FFC107",
      pointBorderColor: "#1a1a1a",
      pointBorderWidth: 2,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#FFC107",
      tension: 0.4,
      borderWidth: 3,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  // Menambahkan kembali konfigurasi animasi untuk garis grafik
  animation: {
    duration: 2000,
    easing: "easeInOutQuart",
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      borderColor: "rgba(255, 193, 7, 0.5)",
      borderWidth: 1,
      titleFont: { size: 16, weight: "bold" },
      bodyFont: { size: 14 },
      padding: 12,
      cornerRadius: 6,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: {
      border: { display: false },
      ticks: {
        color: "rgba(255, 255, 255, 0.6)",
        font: { size: 12 },
        callback: function (value) {
          if (value >= 1000) return "Rp " + value / 1000 + "k";
          return "Rp " + value;
        },
      },
      grid: { color: "rgba(255, 193, 7, 0.1)", borderDash: [5, 5] },
    },
    x: {
      border: { display: false },
      ticks: { color: "rgba(255, 255, 255, 0.6)", font: { size: 12 } },
      grid: { display: false },
    },
  },
};

const RupiahDeclineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // State untuk menampung data chart, awalnya kosong
  const [chartData, setChartData] = useState({ datasets: [] });

  // useEffect untuk mengisi data saat komponen terlihat
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setChartData(initialChartData);
      }, 700); // Jeda sedikit lebih lama agar animasi kontainer selesai
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
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

  return (
    <motion.section
      ref={ref}
      className="w-full bg-black py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white leading-tight"
        >
          Taukah kamu nilai Rupiah kita telah
          <br />
          <span className="text-yellow-400">
            menurun 99% dari nilai aslinya?
          </span>
        </motion.h2>

        {/* --- TEKS BARU DITAMBAHKAN DI SINI --- */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-base text-gray-400 max-w-2xl mx-auto"
        >
          Visualisasi data di bawah ini menunjukkan bagaimana nilai Dolar AS
          (USD) terus melambung tinggi terhadap Rupiah (IDR) dari masa ke masa.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col md:flex-row md:items-center"
        >
          <div className="w-full md:w-2/3 h-96 relative p-4 rounded-xl bg-black/30 border border-yellow-500/40 shadow-[0_0_25px_rgba(255,193,7,0.2)]">
            <div
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 0 8px rgba(255, 193, 7, 0.5))" }}
            >
              <Line options={chartOptions} data={chartData} />
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
            <h3 className="text-2xl font-bold text-yellow-400">
              Dan Proyeksinya?
            </h3>
            <p className="text-gray-300 mt-2 text-lg">
              Tanpa aset pelindung nilai, daya beli kita akan terus tergerus
              oleh inflasi dan pelemahan kurs di masa depan.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RupiahDeclineSection;
