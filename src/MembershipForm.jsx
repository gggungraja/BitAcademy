import { useState } from "react";

const MembershipForm = ({ paket, harga, onClose }) => {
  const [formData, setFormData] = useState({
    nama: "",
    discordUsername: "",
    whatsapp: "",
    metodePembayaran: "bank_transfer",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Create the complete data object including the package info
    const completeData = {
      ...formData,
      Paket: paket, // Updated to match the keys used in the Google Apps Script
      Harga: harga, // Updated to match the keys used in the Google Apps Script
      waktuDaftar: new Date().toISOString(),
    };

    try {
      // Submit to Google Sheets with the improved function
      await submitToGoogleSheets(completeData);

      // Show the confirmation section
      setShowConfirmation(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
      setIsSubmitting(false);
    }
  };

  // Handle confirmation of payment
  const handleConfirmPayment = () => {
    setSubmitSuccess(true);

    // Create WhatsApp link with template message
    const waLink = `https://wa.me/6282266330863?text=Halo%20admin,%20saya%20${encodeURIComponent(
      formData.nama
    )}%20dengan%20username%20Discord%20${encodeURIComponent(
      formData.discordUsername
    )}%20sudah%20mengisi%20form%20untuk%20paket%20${encodeURIComponent(
      paket
    )}%20dan%20sudah%20melakukan%20pembayaran.%20Mohon%20konfirmasi,%20terima%20kasih.`;

    // Redirect to WhatsApp
    window.location.href = waLink;
  };

  // Payment instructions based on selected method
  const renderPaymentInstructions = () => {
    if (formData.metodePembayaran === "bank_transfer") {
      return (
        <div className="p-4 bg-gray-800 rounded-lg mt-4">
          <h4 className="font-bold text-yellow-500 mb-2">Transfer Bank</h4>
          <p className="text-gray-300">Bank BCA: 1234567890</p>
          <p className="text-gray-300">Atas Nama: PT Bit Academy</p>
          <p className="text-gray-300 mt-2">
            Nominal: Rp {harga.toLocaleString()}
          </p>
        </div>
      );
    } else {
      return (
        <div className="p-4 bg-gray-800 rounded-lg mt-4">
          <h4 className="font-bold text-yellow-500 mb-2">QRIS</h4>
          <div className="flex justify-center my-3">
            <img
              src="/qris-placeholder.png"
              alt="QRIS Code"
              className="w-48 h-48 bg-white p-2 rounded-lg"
            />
          </div>
          <p className="text-gray-300 text-center">
            Scan QRIS di atas untuk pembayaran
          </p>
          <p className="text-gray-300 text-center mt-2">
            Nominal: Rp {harga.toLocaleString()}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl border border-yellow-900/30 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {submitSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              Pembayaran Dikonfirmasi!
            </h3>
            <p className="text-gray-300 mb-4">
              Anda akan dialihkan ke WhatsApp untuk menghubungi admin.
            </p>
          </div>
        ) : showConfirmation ? (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4 text-center">
              Konfirmasi Pembayaran
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Silakan lakukan pembayaran sesuai instruksi berikut:
            </p>

            {renderPaymentInstructions()}

            <div className="mt-8">
              <button
                onClick={handleConfirmPayment}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300"
              >
                Saya Sudah Bayar
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 bg-transparent hover:bg-gray-800 text-gray-400 rounded-lg font-medium transition-all duration-300 mt-3"
              >
                Batalkan
              </button>
            </div>
          </div>
        ) : (
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
                  xmlns="http://www.w3.org/2000/svg"
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

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
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

                <div>
                  <label className="block text-gray-300 mb-1">
                    Metode Pembayaran
                  </label>
                  <select
                    name="metodePembayaran"
                    value={formData.metodePembayaran}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="bank_transfer">Transfer Bank</option>
                    <option value="qris">QRIS</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 mt-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                style={{
                  boxShadow: "0 0 15px rgba(255, 193, 7, 0.5)",
                }}
              >
                {isSubmitting ? "Memproses..." : "Lanjutkan ke Pembayaran"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembershipForm;

async function submitToGoogleSheets(data) {
  // GANTI DENGAN URL WEB APP YANG SUDAH KAMU SALIN TADI
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz5GRPQDFsAI3a-kIbE2dXzeupV7INLFDhKhILqC0zYA10aj7mdEfzxo1H_HvEpCCug/exec";

  try {
    console.log("Mengirim data ke Google Sheets:", data);

    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // Penting untuk menghindari error CORS saat development
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Karena mode 'no-cors', kita tidak bisa membaca response dari server.
    // Kita asumsikan pengiriman berhasil jika tidak ada error network.
    console.log("Data berhasil dikirim (asumsi sukses karena no-cors).");
    return { result: "success" }; // Kembalikan objek sukses palsu
  } catch (error) {
    console.error("Error saat mengirim ke Google Sheets:", error);
    throw error;
  }
}
