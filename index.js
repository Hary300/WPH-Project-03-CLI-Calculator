'use strict';
// 1. install prompt-sync dulu di terminal dengan perintah: npm install prompt-sync

// 2. Untuk aktifin input prompt di Node.js (tanpa ini bisa error di console)
const prompt = require('prompt-sync')();

// 3. Membuat fungsi untuk meminta input angka dari user dan memastikan angkanya valid

function getValidNumberInput(pesan) {
  while (true) {
    // Membuat perintah "Masukan angka...." terus ditanyakan ketika angkanya tidak valid dan akan berhenti sampai angkanya valid

    const input = prompt(pesan); // Pesan yang akan ditampilkan di prompt
    const angka = Number(input); // Mengubah input yang berupa string menjadi angka

    // Mengecek apakah input adalah angka yang valid
    if (!isNaN(angka)) {
      return angka; // Jika input valid, kembalikan angka tersebut
    } else {
      console.log('Hanya angka.');
    }
  }
}

// 4. Membuat fungsi untuk mevalidasi math operasi yang akan digunakan  (penjumlahan, pengurangan, perkalian, dan pembagian)/validasi operasi matematika
function getValidMathOperation() {
  while (true) {
    const operasi = prompt('Masukkan operasi matematika: ');
    if (
      operasi === '+' ||
      operasi === '-' ||
      operasi === '*' ||
      operasi === '/' ||
      operasi === '%' ||
      operasi === '**'
    ) {
      return operasi; // Jika operasi valid, kembalikan operasi tersebut
    } else {
      console.log('Operasi matematika tidak valid.');
    }
  }
}

// 5. Membuat fungsi operasi arithmatika dasar

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return 'Error!! Pembagian 0 tidak diperbolehkan!';
  }
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function power(a, b) {
  return a ** b;
}

// 6. pengaplikasian fungsi
while (true) {
  // Untuk check
  const angka1 = getValidNumberInput('Masukkan angka pertama: ');
  const operasi = getValidMathOperation();
  const angka2 = getValidNumberInput('Masukkan angka kedua: ');

  let hasil;

  switch (operasi) {
    case '+':
      hasil = add(angka1, angka2);
      break;
    case '-':
      hasil = subtract(angka1, angka2);
      break;
    case '*':
      hasil = multiply(angka1, angka2);
      break;
    case '/':
      hasil = divide(angka1, angka2);
      break;
    case '%':
      hasil = modulo(angka1, angka2);
      break;
    case '**':
      hasil = power(angka1, angka2);
      break;
  }

  if (typeof hasil === 'number') {
    console.log(`Hasil: ${angka1} ${operasi} ${angka2} = ${hasil}`);

    if (hasil > 0) {
      console.log('Hasil adalah bilangan positif');
    } else if (hasil < 0) {
      console.log('Hasil adalah bilangan negatif');
    } else {
      console.log('Hasil adalah nol');
    }

    if (Number.isInteger(hasil)) {
      console.log('Bilangan bulat');
    } else {
      console.log('Bilangan desimal');
    }
    // ternary operator
    console.log(hasil % 2 === 0 ? 'Genap' : 'Ganjil');
  } else if (typeof hasil === 'string') {
    console.log('Terjadi kesalahan: ' + hasil);
  }

  let lanjut;

  while (true) {
    lanjut = prompt('Hitung lagi? (y/n): ').toLowerCase();

    if (lanjut === 'y' || lanjut === 'n') {
      break; // keluar dari loop kalau input valid
    }

    console.log("Masukkan hanya 'y' atau 'n'!");
  }

  if (lanjut !== 'y') {
    console.log('Terima kasih!');
    break;
  }
}
