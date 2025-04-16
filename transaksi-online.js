
// Buat data dalam array of object transaksi belanja online (item, harga, tanggal pembelian)
// Minimal 10 data pembelian
// 1. Buat program untuk mencari nominal transaksi dengan nilai paling tinggi
// 2. --- mencari nominal transaksi paling rendah 
// 3. --- memunculkan rata-rata harga barang

const transaksiBelanja = [
    {
        item: "Sepatu",
        harga: 500000,
        tanggal: "01/01/2025"
    },
    {
        item: "Sandal",
        harga: 200000,
        tanggal: "02/01/2025"
    },
    {
        item: "Baju",
        harga: 150000,
        tanggal: "03/01/2025"
    },
    {
        item: "Celana",
        harga: 300000,
        tanggal: "04/01/2025"
    },
    {
        item: "Topi",
        harga: 100000,
        tanggal: "05/01/2025"
    },
    {
        item: "Jaket",
        harga: 400000,
        tanggal: "06/01/2025"
    },
    {
        item: "Cincin",
        harga: 400000,
        tanggal: "07/01/2025"
    },
    {
        item: "Tumbler",
        harga: 150000,
        tanggal: "08/01/2025"
    },
    {
        item: "Sarung",
        harga: 250000,
        tanggal: "09/01/2025"
    },
    {
        item: "Selimut",
        harga: 350000,
        tanggal: "10/01/2025"
    }
]

// Jumlah semua transaksi
console.log("Jumlah semua transaksi adalah:", transaksiBelanja.length)

// Harga tertinggi
let hargaTertinggi = {
    harga: 0
}

for(let i=0; i < transaksiBelanja.length; i++){
    if(hargaTertinggi.harga < transaksiBelanja[i].harga){
        hargaTertinggi = transaksiBelanja[i];
    }
}
console.log("Barang dengan harga tertinggi adalah", hargaTertinggi.item, "dengan nominal: Rp", hargaTertinggi.harga, "pada tanggal:", hargaTertinggi.tanggal);

// Harga terendah

let hargaTerendah = {
    harga: 1000000
}

for(let i=0; i < transaksiBelanja.length; i++){
    if(hargaTerendah.harga > transaksiBelanja[i].harga){
        hargaTerendah = transaksiBelanja[i];
    }
}
console.log("Barang dengan harga terendah adalah", hargaTerendah.item, "dengan nominal: Rp", hargaTerendah.harga, "pada tanggal:", hargaTerendah.tanggal);

// Harga rata-rata
let total = 0;
for(let i=0; i < transaksiBelanja.length; i++){
    total += transaksiBelanja[i].harga
}
let rataRata = total / transaksiBelanja.length;
console.log("Rata-rata harga barang adalah: Rp", rataRata,);
