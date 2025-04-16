//Task 1

console.log("---for---")

for (let a = 1; a <= 5; a++){
    if(a === 4){
        console.log("fazztrack")
    }
else {
    console.log(a);
}
}

console.log("---while---")

let b = 1;
while(b <= 5){
    if (b === 4) {
        console.log("fazztrack");
    } else {
        console.log(b);
    }
    b++
}

console.log("---do while---")

let c = 1
do{
    if (c === 4) {
        console.log("fazztrack");
    } else {
        console.log(c);
    }
    c++
} while (c <=5);

//TASK 2

console.log("--for--")

for (let f = 5; f > 0; f--) {
    let kebalik = "";
    for (let g = 0; g < f; g++) {
        kebalik += "*";
    }
    console.log(kebalik);
}


console.log("---while---")

let f = 5;
while (f > 0) {
    let g = 0;
    let kebalik = "";
    while (g < f) {
        kebalik += "*";
        g++;
    }
    console.log(kebalik);
    f--;
}

console.log("--do while--")

let r = 5;
do {
    let s = 0;
    let kebalik = "";
    do {
        if (s >= r) break;
        kebalik += "*";
        s++;
    } while (true);
    console.log(kebalik);
    r--;
} while (r > 0);


//TASK 3

console.log("--for--")

for (let d = 0; d < 5; d++) {
    let bintang = "";
    for (let e = 0; e <= d; e++) {
        bintang += "*";
    }
    console.log(bintang);
}

console.log("--while--")

let d = 0;
while (d < 5) {
    let e = 0;
    let bintang = "";
    while (e <= d) {
        bintang += "*";
        e++;
    }
    console.log(bintang);
    d++;
}

console.log("--do while--")

let t = 0;
do {
    let u = 0;
    let bintang = "";
    do {
        if (u > t) break;
        bintang += "*";
        u++;
    } while (true);
    console.log(bintang);
    t++;
} while (t < 5);



//    *
//   * *
//  * * *
// * * * *
//* * * * *