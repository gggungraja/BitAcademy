// src/MembershipForm.jsx

import { useState } from "react";

const MembershipForm = ({ paket, harga, onClose }) => {
  // --- STATE BARU ---
  const [step, setStep] = useState(1); // 1: Isi Form, 2: Konfirmasi & Upload, 3: Selesai
  const [formData, setFormData] = useState({
    nama: "",
    discordUsername: "",
    whatsapp: "",
  });
  const [buktiTransfer, setBuktiTransfer] = useState(null); // State untuk file gambar
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // --- FUNGSI BARU UNTUK HANDLE UPLOAD FILE ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Simpan gambar sebagai Base64
        setBuktiTransfer(reader.result);
      };
      reader.readAsDataURL(file);
      setError(null); // Hapus error jika file valid
    } else {
      setBuktiTransfer(null);
      setError("Harap pilih file gambar yang valid (PNG, JPG, dll).");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- FUNGSI DIUBAH ---
  // Langkah 1: Validasi form dan lanjut ke langkah 2
  const handleNextStep = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!formData.nama || !formData.discordUsername || !formData.whatsapp) {
      setError("Harap isi semua kolom yang wajib diisi.");
      return;
    }
    setError(null);
    setStep(2); // Pindah ke halaman konfirmasi
  };

  // Langkah 2: Kirim semua data (termasuk gambar) ke Google Sheet
  const handleSubmit = async () => {
    if (!buktiTransfer) {
      setError("Harap upload bukti transfer sebelum melanjutkan.");
      return;
    }
    setIsSubmitting(true);
    setError(null);

    const completeData = {
      ...formData,
      Paket: paket,
      Harga: harga,
      metodePembayaran: "bank_transfer",
      waktuDaftar: new Date().toISOString(),
      buktiTransfer: buktiTransfer, // Kirim gambar Base64
    };

    try {
      await submitToGoogleSheets(completeData);
      setStep(3); // Pindah ke halaman sukses
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Komponen UI untuk setiap langkah
  const renderStep = () => {
    switch (step) {
      // --- TAMPILAN LANGKAH 1: ISI FORM ---
      case 1:
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-yellow-500">
                Daftar Member
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Paket:</span>
                <span className="text-white font-bold">{paket}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-300">Harga:</span>
                <span className="text-white font-bold">
                  Rp {harga.toLocaleString()}
                </span>
              </div>
            </div>
            <form onSubmit={handleNextStep}>
              <div className="space-y-4">
                {/* Input Nama, Discord, WhatsApp */}
                <div>
                  <label className="block text-gray-300 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">
                    Username Discord
                  </label>
                  <input
                    type="text"
                    name="discordUsername"
                    value={formData.discordUsername}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="contoh: username#1234"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
              </div>
              {error && (
                <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 mt-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition-all duration-300"
                style={{ boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)" }}
              >
                Lanjutkan ke Pembayaran
              </button>
            </form>
          </div>
        );

      // --- TAMPILAN LANGKAH 2: KONFIRMASI & UPLOAD BUKTI ---
      case 2:
        return (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
              Konfirmasi Pembayaran
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Silakan lakukan pembayaran dan upload bukti transfer di bawah ini:
            </p>
            <div className="p-4 bg-gray-800 rounded-lg mt-4">
              <h4 className="font-bold text-yellow-500 mb-2">Transfer Bank</h4>
              <p className="text-gray-300">Bank BRI: 212201007724500</p>
              <p className="text-gray-300">Atas Nama: A.A Ngurah Agung, SE</p>
              <p className="text-gray-300 mt-2">
                Nominal: Rp {harga.toLocaleString()}
              </p>
            </div>

            {/* Input untuk Upload File */}
            <div className="mt-6">
              <label className="block text-gray-300 mb-2 font-medium">
                Upload Bukti Transfer
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-500/20 file:text-yellow-300 hover:file:bg-yellow-500/30"
              />
              {buktiTransfer && (
                <img
                  src={buktiTransfer}
                  alt="Preview Bukti Transfer"
                  className="mt-4 rounded-lg max-h-48 mx-auto"
                />
              )}
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                {error}
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={!buktiTransfer || isSubmitting}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Mengirim..." : "Saya Sudah Bayar"}
              </button>
              <button
                onClick={() => setStep(1)}
                className="w-full py-3 bg-transparent hover:bg-gray-800 text-gray-400 rounded-lg font-medium mt-3"
              >
                Kembali
              </button>
            </div>
          </div>
        );

      // --- TAMPILAN LANGKAH 3: SELESAI ---
      case 3:
        return (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Terima Kasih!
            </h3>
            <p className="text-gray-300 mb-6">
              Formulir pendaftaranmu telah terkirim. Mohon tunggu, pembayaran
              akan segera dikonfirmasi oleh admin BitAcademy dalam waktu kurang
              dari 24 jam.
            </p>
            <button
              onClick={onClose}
              className="py-2 px-6 bg-yellow-500 text-black rounded-lg font-bold"
            >
              Tutup
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl border border-yellow-900/30 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {renderStep()}
      </div>
    </div>
  );
};

// Fungsi submitToGoogleSheets tidak perlu diubah
async function submitToGoogleSheets(data) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz5GRPQDFsAI3a-kIbE2dXzeupV7INLFDhKhILqC0zYA10aj7mdEfzxo1H_HvEpCCug/exec";
  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { result: "success" };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    throw error;
  }
}

export default MembershipForm;
