# Javascript
Bahasa pemograman tingkat tinggi yang sebelumnya hanya berjalan di browser

Standar JS
- ECMAScript (ES) = std bhs yang dikeola oleh Ecma International (Org std Eropa)
- JS (Milik Netscape/Mozilla) dan JScript (milik Microsoft) adalah implementasi dari standar ECMAScript

Pengeksekusian JS di Browser
berkaitan dengan html / css
1. Browser buka halaman web
2. Cari kode JS
3. Jalankan kode
4. Proses di engine V8 chromium
5. Ada perintah khusus?
6. Animasi, input user: Kerjakan sekarang
7. Fetch data, timer -> Simpan dulu -> Kerjakan nanti -> Browser siap -- Ya --> Jalankan kode; --Tidak--> Kerjakan nanti

Pengeksekusian JS di NodeJS
berkaitan dengan sistem operasi / file / folder
1. File.js
2. Node.js runtime
3. V8 Engine
4. LibUV
5. Operasi I/O --Ya--> Thread Pool --> Callback Queue --> Event Loop -- > Call Stack Kosong --Ya--> Eksekusi Callback
6. Operasi I/O --Tidak--> Eksekusi Langsung --> Call Stack

## Variabel
-> Wadah untuk menyimpan data secara sementara selama proses berlangsung.
-> Data disimpan di RAM
Jenis variable
1. Block-scope variable (ES6/ES2015)
const = untuk menyimpan nilai permanen
let = untuk menyimpan nilai yan bisa diganti (reassignable)
2. Function-scope variable
var = bisa diganti (reassignable)

## Tipe Data
1. Primitif (untuk mendeklarasikan single data)
- Number
- Boolean
- String
- Undefined (sudah dideklarasikan tetapi belum diberikan nilai)
- Null (mendaklarasikan variabel yang belum tau isinya apa)
2. Non-Primitif (untuk mendeklarasikan sekumpulan data)
- Object (terdiri dari key dan value)
- Array

## Kondisi / Percabangan
- Nilai kondisi berisi boolean true atau false yang biasa didapatkan dari perbandingan dua nilai
- Percabangan dapat beruntun

```
if (kondisi){
    //aksi 1
}else{
    //aksi 2
}
```

*Operator Perbadingan*
- == (Sama dengan - nilai saja)
- === (Sama identik - nilai dan tipe)
- != (Tidak sama - nilai saja)
- !== (Tidak identik - nilai dan tipe)
- \> (Lebih besar)
- < (Lebih kecil)
- \>= (Lebih besar atau sama)
- <= (Lebih kecil atau sama)

*Operator Logika*
- && (AND)
- || (OR)
- ! (NOT)

Nilai Truthy dan Falsey
1. Truthy
- Number: >0 dan <0
- String: apapun selain kosong
- object: baik kosong ataupun berisi
- array: baik kosong ataupun berisi

2. Falsey
- 0
- kosong (string ga ada isi)
- null
- undefined
- NaN

Selain if-else ada:
**Switch-case**
- Digunakan ketika memiliki kondisi eksak
- Cocok untuk keadaan yang dapat diprediksi

```
const binatang = ""
switch(binatang){
    case "ayam":
        console.log("kukuruyuk")
        break;
    case "bebek":
    console.log("wekwek")
    break;
    default:
    console.log("binatang tidak dimiliki")
}
```

## Perulangan / Iterasi / Loop
-  1.  for loop;
    2. while loop;
    3. do while loop
- Kunci perbedaan hanya pada letak pengeksekusian kondisi
- Tujuannya sama: untuk mengeksekusi sebuah proses secara berulang

## for loop:
```
for (let i=0; i<5; i++){
    //proses yang akan berulang
}

for(let inisiasi=0; inisiasi < 5; inisiasi++){
    console.log("Hallo!")
}

for(let inisiasi=0; inisiasi < 5; inisiasi=inisiasi+1){
    console.log("Hallo!")
}

for(let inisiasi=5; inisiasi > 0; inisiasi--){
    console.log("Hallo!")
}
```
## while loop
```
let x = 0
while(x < 5){
    console.log("Hello")
    x++;
}

let x = 0
let y = 2
while (x < 5){
    y = y * y
    console.log(y)
    x++
}


// let x = 0
// let y = 2
// while (x < 5){
//     y = y * y
//     console.log(y)
//     x++;
// }

// let x = 0
// while (x < 5){
//     let y = 0
//     while (y < 5){
//         console.log("Hallo")
//         y++;
//     }
//     console.log("end of loop "+(x+1))
//     x++;
// }

``` 

## do while loop
```
let x = 0
do{
    console.log("hello")
    x++;
} while(x < 5)

```
## Pengecekan Tipe dan Instance
- Dalam js, kita dapat memastikan tipe data dari sebuah variabel
- Data primitif dapat dicek dengan menggunakan typeof
- Data non-primitif dapat

ex:
const age = "30"
if(typeof age === "number"){
    //aksi jika number
}else{
    //aksi jika bukan number
}

const tanggal = new Date()
if(tanggal instanceof Date){
    // aksi jika tanggal adalah Date
}else{
    //aksi jika tanggal bukan Date
}

const hobbies = ["Gaming", "Hiking']
if(Array.isArray(hobbies)){
    //aksi jika hobbies adalah Array
}else{
    //aksi jika hobbies bukan Array
}

## Array
```
const arr = ["a","b","c"]

console.log(arr.length)

for(let x=0; x < arr.length; x++){
    console.log(arr[x])
}
