function buatTeh(jenisGula) {
  return new Promise((resolve, reject) => {
    console.log(`Memproses pesanan dengan: ${jenisGula}... (Mohon tunggu 2 detik)`);
    
    setTimeout(() => {
      if (jenisGula === "Gula Batu") {
        resolve("Teh Gula Batu Siap dinikmati!");
      } else {
        reject("Maaf, stok gula habis.");
      }
    }, 2000);
  });
}

const daftarPesanan = ["Gula Batu", "Gula Pasir"];


daftarPesanan.forEach((input) => {
  buatTeh(input)
    .then((hasil) => {
      console.log(`${input} -> ${hasil}`);
    })
    .catch((error) => {
      console.log(`${input} -> ${error}`);
    });
});