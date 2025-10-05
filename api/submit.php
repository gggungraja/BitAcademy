<?php
// Izinkan permintaan dari luar (untuk jaga-jaga)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Jawab preflight request jika ada
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit();
}

// URL Google Apps Script kamu
$scriptURL = "https://script.google.com/macros/s/AKfycbz5GRPQDFsAI3a-kIbE2dXzeupV7INLFDhKhILqC0zYA10aj7mdEfzxo1H_HvEpCCug/exec";

// Ambil data JSON mentah dari body request
$jsonData = file_get_contents('php://input');

// Cek jika data ada
if ($jsonData) {
    // Inisialisasi cURL untuk meneruskan request ke Google
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $scriptURL);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    // Opsi tambahan untuk mengikuti redirect dari Google
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    // Eksekusi dan dapatkan hasilnya
    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Teruskan respons dari Google kembali ke React
    http_response_code($httpcode);
    echo $response;
} else {
    // Jika tidak ada data yang dikirim
    http_response_code(400);
    echo json_encode(['result' => 'error', 'message' => 'No data received.']);
}

?>