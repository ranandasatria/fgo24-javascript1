const studentData = [
    {
        name: "John",
        score: 80
    },
    {
        name: "Arie",
        score: 99
    },
    {
        name: "Denis",
        score: 60
    },
    {
        name: "Jane",
        score: 85
    },
    {
        name: "Ed",
        score: 90
    }
]

for(let i=0; i < studentData.length; i++){
    console.log(studentData[i].name)
}

//1. Nilai rata-rata

let total = 0;

for(let i=0; i < studentData.length; i++){
    total += studentData[i].score
}
let rataRata = total/studentData.length;
console.log("Rata-rata nilai siswa adalah:", rataRata);


//2. Siswa dengan nilai tertinggi

let nilaiTerbesar = {
    score: 0,
    name: ""
};
for (let i=0; i < studentData.length; i++){
    if (nilaiTerbesar.score < studentData[i].score) {
        nilaiTerbesar = studentData[i];
    }
}
console.log("Siswa dengan nilai terbesar adalah", nilaiTerbesar.name, "dengan nilai:", nilaiTerbesar.score);

//3. Siswa dengan nilai terendah

let nilaiTerendah = {
    score: 100,
    name: ""
};
for (let i=0; i < studentData.length; i++){
    if (nilaiTerendah.score > studentData[i].score) {
        nilaiTerendah = studentData[i];
    }
}
console.log("Siswa dengan nilai terendah adalah", nilaiTerendah.name ,"dengan nilai:", nilaiTerendah.score);

