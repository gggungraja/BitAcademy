// src/Testimoni.jsx

import testi1 from "./assets/testimoni1.webp";
import testi2 from "./assets/testimoni2.webp";
import testi3 from "./assets/testimoni3.webp";
import testi4 from "./assets/testimoni4.webp";
import testi5 from "./assets/testimoni5.webp";
import testi6 from "./assets/testimoni6.webp";
import testi7 from "./assets/testimoni7.webp";
import testi8 from "./assets/testimoni8.webp";
import testi9 from "./assets/testimoni9.webp";

const Testimoni = () => {
  // Data testimoni
  const testimonialsRow1 = [testi1, testi2, testi3, testi4, testi5];
  const testimonialsRow2 = [testi6, testi7, testi8, testi9];

  // Komponen kecil untuk satu baris marquee
  const MarqueeRow = ({ images, direction }) => (
    <div className="marquee-container w-full overflow-hidden">
      <div
        className={`marquee-content flex w-max ${
          direction === "left" ? "scroll-left" : "scroll-right"
        }`}
      >
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 p-4">
            <img
              src={src}
              alt={`Testimoni ${index + 1}`}
              className="h-64 w-auto rounded-lg shadow-lg border border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    // <motion.section> diubah kembali menjadi <section> biasa
    <section className="w-full bg-black py-20 overflow-hidden" id="testimoni">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Apa Kata Mereka?
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Ribuan trader telah merasakan manfaatnya.
        </p>

        {/* Container untuk dua baris marquee */}
        <div className="flex flex-col gap-6">
          <MarqueeRow images={testimonialsRow1} direction="right" />
          <MarqueeRow images={testimonialsRow2} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
