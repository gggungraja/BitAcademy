// src/HeadlineSection.jsx

const HeadlineSection = ({ handleScroll }) => {
  return (
    <section className="w-full bg-transparent pt-24" id="beranda">
      <div className="w-full flex flex-col items-center">
        {/* Text Headline */}
        <div className="text-center w-full z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Gandain Portofolio Crypto
            <br />
            Kamu <span className="text-yellow-400">dalam 3 Bulan</span>
          </h1>
          <p className="mt-4 md:mt-2 text-gray-300 text-lg max-w-2xl mx-auto">
            71% murid kami sudah berhasil melipatgandakan portofolio mereka
            dengan strategi ini!
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full flex justify-center mt-4 mb-4">
          <img
            src="/headline.webp"
            alt="Headline"
            className="w-full max-w-5xl md:max-w-6xl object-contain px-4"
          />
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-4 mb-16 text-center z-10">
          <a
            href="#daftar"
            onClick={handleScroll}
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all duration-300 ease-in-out shadow-[0_0_30px_#FFA500] hover:shadow-[0_0_40px_#FFC107]"
          >
            Gabung Sekarang!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadlineSection;
