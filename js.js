const submit = document.getElementById("submit");
submit.addEventListener("click", hitungTotal);

function hitungTotal() {
  const kode_barang = document.getElementById("kode_barang").value;
  const banyakBarang = parseInt(document.getElementById("banyak_barang").value);

  let harga = 0;
  switch (kode_barang) {
    case "001":
      harga = 10000;
      break;
    case "002":
      harga = 20000;
      break;
    case "003":
      harga = 30000;
      break;
    default:
      window.alert("Kode barang tidak valid!");
      return;
  }

  const totalHarga = harga * banyakBarang;
  window.alert("Total pembayaran adalah: " + totalHarga);

  const uangDibayarkan = parseFloat(window.prompt("masukkan uang user:"));
  const kembalian = uangDibayarkan - totalHarga;

  if (kembalian >= 0) {
    window.alert("kembalian anda adalah: " + kembalian);
  } else if (uangDibayarkan < totalHarga) {
    window.alert("Uang yang dibayarkan kurang!");
  } else {
    window.alert("user Membatalkan Pesanan!");
  }
}
