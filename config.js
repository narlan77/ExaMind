// CONFIGURASI UTAMA API

const CONFIG = {
  // Spreadsheet ID Utama
  SPREADSHEET_ID: "1DmQrnY_gUj9OFVg_RI8PVMvb63N0KWCXGMRQg1LnO38",
  
  // URL Web App Deployment Apps Script
  API_URL: "https://script.google.com/macros/s/AKfycbwBhgD98Pk-FBCR8xP3FaCIg5gzVnPzOVVdsd_ErwZ7dD202j3LXz1x0YElsEVW_6jIlw/exec",
  
  // Daftar Sheet Resmi
  SHEET_NAME: {
    PENGGUNA: "Pengguna",
    PENGATURAN: "Pengaturan",
    BANK_SOAL: "BankSoal",
    HASIL_UJIAN: "HasilUjian"
  }
};

// Buat konstanta global API_URL agar kompatibel dengan script halaman lain
const API_URL = CONFIG.API_URL;
